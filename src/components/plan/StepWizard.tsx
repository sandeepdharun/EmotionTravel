import { useMemo, useState } from "react";
import { STEP_DEFINITIONS, StepId } from "./steps";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { usePlans } from "@/contexts/PlanContext";

interface StepWizardProps {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  planId: string;
}

export const StepWizard = ({ open, onOpenChange, planId }: StepWizardProps) => {
  const { getPlanById, updatePlanStepData, setPlanCurrentStep, computePlanProgress, updatePlanStatus } = usePlans();
  const plan = getPlanById(planId);
  const [activeStep, setActiveStep] = useState<StepId>(plan?.currentStepId || "transport");

  const progress = useMemo(() => computePlanProgress(planId), [computePlanProgress, planId, plan?.stepsData]);

  if (!plan) return null;

  const handleSave = () => {
    const idx = STEP_DEFINITIONS.findIndex((s) => s.id === activeStep);
    const next = Math.min(idx + 1, STEP_DEFINITIONS.length - 1);
    setPlanCurrentStep(planId, STEP_DEFINITIONS[next].id);
  };

  const handleCompleteJourney = () => {
    updatePlanStatus(planId, "completed");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Plan your journey: {plan.name}</DialogTitle>
        </DialogHeader>

        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Badge variant="outline">{plan.region}</Badge>
            <Badge variant="secondary">Status: {plan.status}</Badge>
          </div>
          <div className="w-1/2">
            <Progress value={progress} />
            <div className="text-xs text-muted-foreground mt-1">{Math.round(progress)}% complete</div>
          </div>
        </div>

        <Tabs value={activeStep} onValueChange={(v) => setActiveStep(v as StepId)}>
          <TabsList className="grid grid-cols-3 lg:grid-cols-6 gap-2">
            {STEP_DEFINITIONS.map((s) => (
              <TabsTrigger key={s.id} value={s.id} className="text-xs">
                <s.icon className="w-4 h-4 mr-1" />
                {s.title}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mt-4">
            <TabsContent value="transport">
              <TransportStep planId={planId} />
            </TabsContent>
            <TabsContent value="room">
              <RoomStep planId={planId} />
            </TabsContent>
            <TabsContent value="emotion">
              <EmotionStep planId={planId} />
            </TabsContent>
            <TabsContent value="awareness">
              <AwarenessStep planId={planId} />
            </TabsContent>
            <TabsContent value="culture">
              <CultureStep planId={planId} />
            </TabsContent>
            <TabsContent value="report">
              <ReportStep planId={planId} />
            </TabsContent>
          </div>
        </Tabs>

        <div className="mt-6 flex justify-between">
          <Button variant="outline" onClick={() => onOpenChange(false)}>Close</Button>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={handleSave}>Save & Next</Button>
            <Button onClick={handleCompleteJourney}>Mark as Completed</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const TransportStep = ({ planId }: { planId: string }) => {
  const { getPlanById, updatePlanStepData } = usePlans();
  const plan = getPlanById(planId)!;
  const data = plan.stepsData?.transport || { mode: "flight", from: "", to: plan.name, date: "", notes: "" };

  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label>Mode</Label>
          <Select value={data.mode} onValueChange={(v) => updatePlanStepData(planId, "transport", { ...data, mode: v })}>
            <SelectTrigger><SelectValue placeholder="Select mode" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="flight">Flight</SelectItem>
              <SelectItem value="train">Train</SelectItem>
              <SelectItem value="bus">Bus</SelectItem>
              <SelectItem value="car">Car</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Travel Date</Label>
          <Input type="date" value={data.date} onChange={(e) => updatePlanStepData(planId, "transport", { ...data, date: e.target.value })} />
        </div>
        <div>
          <Label>From</Label>
          <Input value={data.from} onChange={(e) => updatePlanStepData(planId, "transport", { ...data, from: e.target.value })} placeholder="City of departure" />
        </div>
        <div>
          <Label>To</Label>
          <Input value={data.to} onChange={(e) => updatePlanStepData(planId, "transport", { ...data, to: e.target.value })} placeholder="Destination" />
        </div>
      </div>
      <div>
        <Label>Notes</Label>
        <Textarea rows={3} value={data.notes} onChange={(e) => updatePlanStepData(planId, "transport", { ...data, notes: e.target.value })} />
      </div>
    </div>
  );
};

const RoomStep = ({ planId }: { planId: string }) => {
  const { getPlanById, updatePlanStepData } = usePlans();
  const plan = getPlanById(planId)!;
  const data = plan.stepsData?.room || { type: "hotel", budget: "$$", preferences: "" };

  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label>Accommodation Type</Label>
          <Select value={data.type} onValueChange={(v) => updatePlanStepData(planId, "room", { ...data, type: v })}>
            <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="hotel">Hotel</SelectItem>
              <SelectItem value="homestay">Homestay</SelectItem>
              <SelectItem value="hostel">Hostel</SelectItem>
              <SelectItem value="resort">Resort</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Budget</Label>
          <Select value={data.budget} onValueChange={(v) => updatePlanStepData(planId, "room", { ...data, budget: v })}>
            <SelectTrigger><SelectValue placeholder="Select budget" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="$">$</SelectItem>
              <SelectItem value="$$">$$</SelectItem>
              <SelectItem value="$$$">$$$</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label>Preferences</Label>
        <Textarea rows={3} value={data.preferences} onChange={(e) => updatePlanStepData(planId, "room", { ...data, preferences: e.target.value })} placeholder="Near beach, quiet area, etc." />
      </div>
    </div>
  );
};

const EmotionStep = ({ planId }: { planId: string }) => {
  const { getPlanById, updatePlanStepData } = usePlans();
  const plan = getPlanById(planId)!;
  const data = plan.stepsData?.emotion || { goals: [], notes: "" };

  const toggleGoal = (goal: string) => {
    const exists = data.goals.includes(goal);
    const updated = exists ? data.goals.filter((g: string) => g !== goal) : [...data.goals, goal];
    updatePlanStepData(planId, "emotion", { ...data, goals: updated });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {["peace", "adventure", "joy", "reflection", "connection", "wellness"].map((g) => (
          <label key={g} className="flex items-center gap-2 text-sm">
            <Checkbox checked={data.goals.includes(g)} onCheckedChange={() => toggleGoal(g)} />
            <span className="capitalize">{g}</span>
          </label>
        ))}
      </div>
      <div>
        <Label>Notes</Label>
        <Textarea rows={3} value={data.notes} onChange={(e) => updatePlanStepData(planId, "emotion", { ...data, notes: e.target.value })} />
      </div>
    </div>
  );
};

const AwarenessStep = ({ planId }: { planId: string }) => {
  const { getPlanById, updatePlanStepData } = usePlans();
  const plan = getPlanById(planId)!;
  const data = plan.stepsData?.awareness || { safety: false, localLaws: false, weather: false, health: false };

  const toggle = (key: keyof typeof data) => updatePlanStepData(planId, "awareness", { ...data, [key]: !data[key] });

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      <label className="flex items-center gap-2 text-sm"><Checkbox checked={data.safety} onCheckedChange={() => toggle("safety")} />Safety tips</label>
      <label className="flex items-center gap-2 text-sm"><Checkbox checked={data.localLaws} onCheckedChange={() => toggle("localLaws")} />Local laws</label>
      <label className="flex items-center gap-2 text-sm"><Checkbox checked={data.weather} onCheckedChange={() => toggle("weather")} />Weather</label>
      <label className="flex items-center gap-2 text-sm"><Checkbox checked={data.health} onCheckedChange={() => toggle("health")} />Health</label>
    </div>
  );
};

const CultureStep = ({ planId }: { planId: string }) => {
  const { getPlanById, updatePlanStepData } = usePlans();
  const plan = getPlanById(planId)!;
  const data = plan.stepsData?.culture || { interests: [], foods: "", etiquette: "" };

  const toggleInterest = (interest: string) => {
    const exists = data.interests.includes(interest);
    const updated = exists ? data.interests.filter((g: string) => g !== interest) : [...data.interests, interest];
    updatePlanStepData(planId, "culture", { ...data, interests: updated });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {["temples", "music", "dance", "festivals", "museums", "markets"].map((g) => (
          <label key={g} className="flex items-center gap-2 text-sm">
            <Checkbox checked={data.interests.includes(g)} onCheckedChange={() => toggleInterest(g)} />
            <span className="capitalize">{g}</span>
          </label>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label>Must-try foods</Label>
          <Textarea rows={3} value={data.foods} onChange={(e) => updatePlanStepData(planId, "culture", { ...data, foods: e.target.value })} />
        </div>
        <div>
          <Label>Etiquette notes</Label>
          <Textarea rows={3} value={data.etiquette} onChange={(e) => updatePlanStepData(planId, "culture", { ...data, etiquette: e.target.value })} />
        </div>
      </div>
    </div>
  );
};

const ReportStep = ({ planId }: { planId: string }) => {
  const { getPlanById, updatePlanStepData } = usePlans();
  const plan = getPlanById(planId)!;
  const data = plan.stepsData?.report || { summary: "", rating: 5 };

  return (
    <div className="space-y-4">
      <div>
        <Label>Trip summary</Label>
        <Textarea rows={4} value={data.summary} onChange={(e) => updatePlanStepData(planId, "report", { ...data, summary: e.target.value })} />
      </div>
      <div>
        <Label>Rating (1-10)</Label>
        <Input type="number" min={1} max={10} value={data.rating} onChange={(e) => updatePlanStepData(planId, "report", { ...data, rating: Number(e.target.value) })} />
      </div>
    </div>
  );
};
