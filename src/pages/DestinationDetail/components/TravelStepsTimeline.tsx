import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface TravelStep {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tips: string[];
}

interface TravelPlan {
  status: 'selected' | 'ongoing' | 'completed';
  id: string;
  name: string;
}

interface TravelStepsTimelineProps {
  travelSteps: TravelStep[];
  currentStepIndex: number;
  currentPlan?: TravelPlan;
  progress: number;
}

export const TravelStepsTimeline = ({ 
  travelSteps, 
  currentStepIndex, 
  currentPlan, 
  progress 
}: TravelStepsTimelineProps) => {
  if (!currentPlan) {
    return null; // Only show if user has added this destination to their plans
  }

  return (
    <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 overflow-hidden border-2 shadow-lg">
      <CardContent className="p-0">
        {/* Header */}
        <div className="p-8 border-b border-primary/20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                Your Journey Timeline
              </h2>
              <p className="text-muted-foreground mt-2 text-lg">
                Track your travel progress step by step
              </p>
            </div>
            <Badge
              className={`px-4 py-2 text-sm font-semibold ${
                currentPlan.status === "selected"
                  ? "bg-blue-500/20 text-blue-600 border-blue-500/30"
                  : currentPlan.status === "ongoing"
                    ? "bg-amber-500/20 text-amber-600 border-amber-500/30"
                    : "bg-green-500/20 text-green-600 border-green-500/30"
              }`}
            >
              {currentPlan.status === "selected"
                ? "Planning Phase"
                : currentPlan.status === "ongoing"
                  ? "Journey in Progress"
                  : "Journey Completed"}
            </Badge>
          </div>

          {/* Progress Bar */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Overall Progress</span>
              <span className="text-sm font-bold text-primary">{progress}%</span>
            </div>
            <Progress value={progress} className="h-4 bg-white/50" />
          </div>
        </div>

        {/* Steps Grid */}
        <div className="p-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {travelSteps.map((step, index) => {
              const isCompleted =
                currentPlan.status === "completed" || index < currentStepIndex;
              const isCurrent = index === currentStepIndex;
              const isUpcoming = index > currentStepIndex;
              const Icon = step.icon;

              return (
                <div
                  key={step.id}
                  className={`group relative p-6 rounded-2xl border-2 transition-all duration-500 ${
                    isCompleted
                      ? "bg-green-50/80 dark:bg-green-950/30 border-green-300 dark:border-green-700 shadow-lg shadow-green-500/10 scale-[1.02]"
                      : isCurrent
                        ? "bg-amber-50/80 dark:bg-amber-950/30 border-amber-300 dark:border-amber-700 shadow-lg shadow-amber-500/10 scale-105 ring-2 ring-amber-200 dark:ring-amber-800"
                        : "bg-gray-50/50 dark:bg-gray-950/30 border-gray-200 dark:border-gray-700 opacity-60 hover:opacity-80"
                  }`}
                  data-testid={`travel-step-${index}`}
                >
                  {/* Step Number Badge */}
                  <div
                    className={`absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg ${
                      isCompleted
                        ? "bg-green-500 text-white animate-none"
                        : isCurrent
                          ? "bg-amber-500 text-white animate-pulse"
                          : "bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    {isCompleted ? "✓" : index + 1}
                  </div>

                  {/* Step Content */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-xl transition-all duration-300 ${
                          isCompleted
                            ? "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400"
                            : isCurrent
                              ? "bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-400"
                              : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg leading-tight">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Tips Section */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Tips
                      </h4>
                      <div className="space-y-2">
                        {step.tips.map((tip, tipIndex) => (
                          <div
                            key={tipIndex}
                            className="flex items-start gap-2 text-xs text-muted-foreground"
                          >
                            <ChevronRight className="w-3 h-3 mt-0.5 text-primary/60 flex-shrink-0" />
                            <span className="leading-relaxed">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Current Step Indicator */}
                  {isCurrent && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/10 to-orange-400/10 pointer-events-none">
                      <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer Message */}
          <div className="mt-8 pt-6 border-t border-primary/20 text-center">
            <p className="text-sm text-muted-foreground">
              {currentPlan.status === "selected" && "Ready to start your adventure? Click 'Start Journey' to begin!"}
              {currentPlan.status === "ongoing" && "You're making great progress! Enjoy every moment of your journey."}
              {currentPlan.status === "completed" && "Congratulations on completing your journey! Share your memories and plan your next adventure."}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};