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
    <div className="sticky top-20 space-y-6">
      {/* Main Action Card */}
      <Card className="overflow-hidden border-2 shadow-lg">
        <CardContent className="p-0">
          {/* Header with Status */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 border-b">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                Travel Plans
              </h3>
              {statusInfo && (
                <Badge className={`px-3 py-1 text-sm font-semibold ${statusInfo.color}`}>
                  <statusInfo.icon className="w-4 h-4 mr-2" />
                  {statusInfo.label}
                </Badge>
              )}
            </div>

            {/* Progress Section */}
            {currentPlan && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">
                    Progress
                  </span>
                  <span className="text-sm font-bold text-primary">
                    {progress}%
                  </span>
                </div>
                <Progress
                  value={progress}
                  className="h-3 bg-muted"
                />
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <TrendingUp className="w-4 h-4" />
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
          <div className="p-6 space-y-4">
            {!currentPlan ? (
              <Button
                onClick={handlers.addToPlan}
                className="w-full text-lg py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300"
                data-testid="button-add-to-plan"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add to Travel Plans
              </Button>
            ) : (
              <>
                {currentPlan.status === "selected" && (
                  <Button
                    onClick={handlers.startJourney}
                    className="w-full text-lg py-6 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-lg hover:shadow-xl transition-all duration-300"
                    data-testid="button-start-journey"
                  >
                    <Navigation className="w-5 h-5 mr-2" />
                    Start Journey
                  </Button>
                )}
                {currentPlan.status === "ongoing" && (
                  <Button
                    onClick={handlers.completeJourney}
                    className="w-full text-lg py-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-xl transition-all duration-300"
                    data-testid="button-complete-journey"
                  >
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Complete Journey
                  </Button>
                )}
                {currentPlan.status === "completed" && (
                  <div className="text-center py-4">
                    <div className="inline-flex items-center gap-2 text-green-600 font-semibold">
                      <CheckCircle className="w-5 h-5" />
                      Journey Completed!
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Share your memories and plan your next adventure
                    </p>
                  </div>
                )}
              </>
            )}

            {isSelected && (
              <div className="flex items-center justify-center gap-2 py-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-green-500" />
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
