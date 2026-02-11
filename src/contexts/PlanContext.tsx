import React, { createContext, useContext, useState, useEffect } from 'react';
import type { StepId } from '@/components/plan/steps';

export interface PlanStepsData {
  transport?: { mode: string; from: string; to: string; date: string; notes: string };
  room?: { type: string; budget: '$' | '$$' | '$$$'; preferences: string };
  emotion?: { goals: string[]; notes: string };
  awareness?: { safety: boolean; localLaws: boolean; weather: boolean; health: boolean };
  culture?: { interests: string[]; foods: string; etiquette: string };
  report?: { summary: string; rating: number };
}

type CulturalHighlight = string | {
  name: string;
  description: string;
  category: "people" | "livelihood" | "culture" | "tradition" | "lifestyle" | "art" | "festival";
};

export interface SelectedPlan {
  id: string;
  name: string;
  country: string;
  image: string;
  emotionalMatch: string;
  matchPercentage: number;
  description: string;
  culturalHighlights: CulturalHighlight[];
  safetyLevel: 'low' | 'medium' | 'high';
  bestTime: string;
  priceRange: '$' | '$$' | '$$$';
  status: 'selected' | 'ongoing' | 'completed';
  dateAdded: string;
  region: 'Tamil Nadu' | 'Kerala' | 'Bangalore';
  currentStepId?: StepId;
  stepsData?: PlanStepsData;
}

interface PlanContextType {
  selectedPlans: SelectedPlan[];
  addPlan: (plan: Omit<SelectedPlan, 'id' | 'dateAdded' | 'status' | 'currentStepId' | 'stepsData'>) => void;
  removePlan: (id: string) => void;
  updatePlanStatus: (id: string, status: SelectedPlan['status']) => void;
  getPlansByStatus: (status: SelectedPlan['status']) => SelectedPlan[];
  getPlansByRegion: (region: string) => SelectedPlan[];
  getPlanById: (id: string) => SelectedPlan | undefined;
  updatePlanStepData: (id: string, step: StepId, data: any) => void;
  setPlanCurrentStep: (id: string, step: StepId) => void;
  computePlanProgress: (id: string) => number;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export const usePlans = () => {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error('usePlans must be used within a PlanProvider');
  }
  return context;
};

export const PlanProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedPlans, setSelectedPlans] = useState<SelectedPlan[]>([]);

  useEffect(() => {
    const savedPlans = localStorage.getItem('selectedPlans');
    if (savedPlans) {
      try {
        const parsed: SelectedPlan[] = JSON.parse(savedPlans);
        setSelectedPlans(parsed.map(p => ({
          ...p,
          currentStepId: p.currentStepId || 'transport',
          stepsData: p.stepsData || {}
        })));
      } catch {
        setSelectedPlans([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedPlans', JSON.stringify(selectedPlans));
  }, [selectedPlans]);

  const addPlan = (plan: Omit<SelectedPlan, 'id' | 'dateAdded' | 'status' | 'currentStepId' | 'stepsData'>) => {
    const newPlan: SelectedPlan = {
      ...plan,
      id: `${plan.name}-${Date.now()}`,
      dateAdded: new Date().toISOString(),
      status: 'selected',
      currentStepId: 'transport',
      stepsData: {}
    };
    const existingPlan = selectedPlans.find(p => p.name === plan.name && p.region === plan.region);
    if (!existingPlan) {
      setSelectedPlans(prev => [...prev, newPlan]);
    }
  };

  const removePlan = (id: string) => {
    setSelectedPlans(prev => prev.filter(plan => plan.id !== id));
  };

  const updatePlanStatus = (id: string, status: SelectedPlan['status']) => {
    setSelectedPlans(prev => prev.map(plan => plan.id === id ? { ...plan, status } : plan));
  };

  const getPlansByStatus = (status: SelectedPlan['status']) => selectedPlans.filter(plan => plan.status === status);

  const getPlansByRegion = (region: string) => selectedPlans.filter(plan => plan.region === region);

  const getPlanById = (id: string) => selectedPlans.find(p => p.id === id);

  const updatePlanStepData = (id: string, step: StepId, data: any) => {
    setSelectedPlans(prev => prev.map(plan => plan.id === id ? {
      ...plan,
      stepsData: { ...(plan.stepsData || {}), [step]: data }
    } : plan));
  };

  const setPlanCurrentStep = (id: string, step: StepId) => {
    setSelectedPlans(prev => prev.map(plan => plan.id === id ? { ...plan, currentStepId: step } : plan));
  };

  const computePlanProgress = (id: string) => {
    const plan = getPlanById(id);
    if (!plan) return 0;
    const keys: StepId[] = ['transport','room','emotion','awareness','culture','report'];
    const done = keys.reduce((acc, k) => acc + (plan.stepsData && (plan.stepsData as any)[k] ? 1 : 0), 0);
    return (done / keys.length) * 100;
  };

  const value = {
    selectedPlans,
    addPlan,
    removePlan,
    updatePlanStatus,
    getPlansByStatus,
    getPlansByRegion,
    getPlanById,
    updatePlanStepData,
    setPlanCurrentStep,
    computePlanProgress,
  };

  return (
    <PlanContext.Provider value={value}>
      {children}
    </PlanContext.Provider>
  );
};
