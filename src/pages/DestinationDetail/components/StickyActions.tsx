import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Plus,
  Check,
  Navigation,
  CheckCircle,
  TrendingUp,
  Heart,
  Clock,
  Timer,
  Shield,
  DollarSign
} from "lucide-react";
import type { Destination } from "@/data/destinations";

interface TravelPlan {
  status: 'selected' | 'ongoing' | 'completed';
  id: string;
  name: string;
}

interface StickyActionsProps {
  destination: Destination;
  currentPlan?: TravelPlan;
  isSelected: boolean;
  progress: number;
  rentText: string;
  handlers: {
    addToPlan: () => void;
    startJourney: () => void;
    completeJourney: () => void;
  };
}

export const StickyActions = ({
  destination,
  currentPlan,
  isSelected,
  progress,
  rentText,
  handlers
}: StickyActionsProps) => {
  const getStatusInfo = () => {
    if (!currentPlan) return null;

    switch (currentPlan.status) {
      case "selected":
        return {
          label: "Planning Phase",
          color: "bg-blue-500/20 text-blue-600 border-blue-500/30",
          icon: Clock,
        };
      case "ongoing":
        return {
          label: "Journey in Progress",
          color: "bg-amber-500/20 text-amber-600 border-amber-500/30",
          icon: Timer,
        };
      case "completed":
        return {
          label: "Journey Completed",
          color: "bg-green-500/20 text-green-600 border-green-500/30",
          icon: CheckCircle,
        };
      default:
        return null;
    }
  };

  const statusInfo = getStatusInfo();

  return (
    <div className="space-y-6">
      {/* Main Action Card */}
      <Card className="overflow-hidden border border-slate-200/60 shadow-sm bg-white rounded-[2rem]">
        <CardContent className="p-0">
          {/* Header with Status */}
          <div className="bg-[#FAFAFA] p-6 border-b border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-serif font-bold text-slate-800 flex items-center gap-2">
                <Heart className="w-4 h-4 text-orange-400 fill-orange-400/20" />
                Travel Plans
              </h3>
              {statusInfo && (
                <Badge className={`px-2 py-0.5 text-xs font-medium border ${statusInfo.color} bg-transparent`}>
                  <statusInfo.icon className="w-3 h-3 mr-1.5" />
                  {statusInfo.label}
                </Badge>
              )}
            </div>

            {/* Progress Section */}
            {currentPlan && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest uppercase text-slate-400">
                    Progress
                  </span>
                  <span className="text-xs font-bold text-slate-900">
                    {progress}%
                  </span>
                </div>
                <Progress
                  value={progress}
                  className="h-1.5 bg-slate-100"
                />
                <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium">
                  <TrendingUp className="w-3 h-3" />
                  <span>
                    {currentPlan.status === "selected" && "Ready to start planning"}
                    {currentPlan.status === "ongoing" && "Journey in progress"}
                    {currentPlan.status === "completed" && "Journey completed successfully"}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="p-6 space-y-4 bg-white">
            {!currentPlan ? (
              <Button
                onClick={handlers.addToPlan}
                className="w-full text-base py-6 bg-slate-900 hover:bg-black text-white shadow-md hover:shadow-lg transition-all duration-300 rounded-xl"
                data-testid="button-add-to-plan"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add to Travel Plans
              </Button>
            ) : (
              <>
                {currentPlan.status === "selected" && (
                  <Button
                    onClick={handlers.startJourney}
                    className="w-full text-base py-6 bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-lg transition-all duration-300 rounded-xl"
                    data-testid="button-start-journey"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Start Journey
                  </Button>
                )}
                {currentPlan.status === "ongoing" && (
                  <Button
                    onClick={handlers.completeJourney}
                    className="w-full text-base py-6 bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg transition-all duration-300 rounded-xl"
                    data-testid="button-complete-journey"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Complete Journey
                  </Button>
                )}
                {currentPlan.status === "completed" && (
                  <div className="text-center py-4 bg-green-50/50 rounded-xl border border-green-100">
                    <div className="inline-flex items-center gap-2 text-green-700 font-serif font-bold">
                      <CheckCircle className="w-4 h-4" />
                      Journey Completed
                    </div>
                  </div>
                )}
              </>
            )}

            {isSelected && (
              <div className="flex items-center justify-center gap-2 py-2 text-xs text-slate-400 font-medium">
                <Check className="w-3 h-3 text-green-500" />
                Added to your travel plans
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Trip Insights (moved from main content) */}
      <Card className="border shadow-sm">
        <CardContent className="p-5">
          <h4 className="text-base font-semibold mb-4">Trip Insights</h4>
          <div className="space-y-3">
            {/* Safety */}
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/40">
              <Shield className="w-4 h-4 text-green-600" />
              <div className="flex-1 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Safety</span>
                <span className="text-sm font-medium capitalize">{destination.safetyLevel}</span>
              </div>
            </div>
            {/* Best Time */}
            <div className="flex items-center gap-3 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30">
              <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <div className="flex-1 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Best time</span>
                <span className="text-sm font-medium">{destination.bestTime}</span>
              </div>
            </div>
            {/* Cost */}
            <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-950/30">
              <DollarSign className="w-4 h-4 text-green-600 dark:text-green-400" />
              <div className="flex-1 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Stay cost</span>
                <span className="text-sm font-medium">{rentText}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
};
