import { useEffect, useState } from 'react';
import { ParticleBackground } from "@/components/ParticleBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { usePlans, SelectedPlan } from "@/contexts/PlanContext";
import {
  MapPin,
  Calendar,
  Star,
  Settings,
  User,
  Heart,
  TrendingUp,
  Clock,
  CheckCircle,
  X,
  Edit3,
  ArrowRight,
  Target,
  Calendar as CalendarIcon
} from "lucide-react";
import { useSearchParams, useNavigate } from 'react-router-dom';
import { StepWizard } from "@/components/plan/StepWizard";

const Dashboard = () => {
  const { selectedPlans, updatePlanStatus, removePlan, getPlansByStatus } = usePlans();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = (searchParams.get('tab') as "overview" | "selected" | "ongoing" | "completed") || "overview";
  const [activeTab, setActiveTab] = useState(initialTab);
  const navigate = useNavigate();

  const selectedCount = getPlansByStatus('selected').length;
  const ongoingCount = getPlansByStatus('ongoing').length;
  const completedCount = getPlansByStatus('completed').length;

  const totalPlans = selectedPlans.length;
  const progressPercentage = totalPlans > 0 ? (completedCount / totalPlans) * 100 : 0;

  useEffect(() => {
    setSearchParams({ tab: activeTab });
  }, [activeTab, setSearchParams]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'selected': return 'bg-blue-500/20 text-blue-600 border-blue-500/30';
      case 'ongoing': return 'bg-amber-500/20 text-amber-600 border-amber-500/30';
      case 'completed': return 'bg-green-500/20 text-green-600 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-600 border-gray-500/30';
    }
  };

  const handleStatusChange = (planId: string, newStatus: 'selected' | 'ongoing' | 'completed') => {
    updatePlanStatus(planId, newStatus);
  };

  const getTravelSteps = () => [
    { id: 'research', title: 'Research & Planning', description: 'Gather information, check weather, learn about local customs', icon: '📚' },
    { id: 'booking', title: 'Book Accommodation & Transport', description: 'Reserve hotels, book flights/trains, arrange local transport', icon: '🏨' },
    { id: 'preparation', title: 'Travel Preparation', description: 'Pack essentials, check documents, prepare itinerary', icon: '🎒' },
    { id: 'arrival', title: 'Arrival & Check-in', description: 'Reach destination, check into accommodation, get oriented', icon: '✈️' },
    { id: 'exploration', title: 'Explore & Experience', description: 'Visit attractions, try local cuisine, immerse in culture', icon: '🗺️' },
    { id: 'completion', title: 'Journey Complete', description: 'Reflect on experiences, share memories, plan next adventure', icon: '🎉' }
  ];

  const getStepProgress = (status: string) => {
    switch (status) {
      case 'selected': return 0;
      case 'ongoing': return 50;
      case 'completed': return 100;
      default: return 0;
    }
  };

  const PlanCard = ({ plan }: { plan: SelectedPlan }) => {
    const { computePlanProgress } = usePlans();
    const progress = computePlanProgress(plan.id);
    const [open, setOpen] = useState(false);

    return (
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
        <div className="relative">
          <img
            src={plan.image}
            alt={plan.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-black/50 text-white">
              {plan.region}
            </Badge>
          </div>
        </div>
        <CardContent className="p-6 flex flex-col h-full">
          <div className="mb-4 p-4 bg-muted/40 rounded-lg border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold">Plan Progress</span>
              <span className="text-xs text-muted-foreground">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} />
            <div className="mt-2 text-[11px] text-muted-foreground">Transport • Room • Emotion • Awareness • Culture • Report</div>
          </div>

          {plan.status === 'completed' && (
            <div className="mb-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-800">Journey Completed!</span>
              </div>
              <div className="text-xs text-green-700">
                Congratulations on completing your journey to {plan.name}
              </div>
            </div>
          )}

          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
          </div>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {plan.description}
          </p>




          <div className="mt-4 grid grid-cols-2 gap-3 items-stretch">
            <Button
              className="bg-gradient-ocean text-white hover:shadow-glow transition-all duration-300"
              aria-label={`View details about ${plan.name} in ${plan.region}`}
              onClick={() =>
                navigate(`/destination/${encodeURIComponent(plan.region)}/${encodeURIComponent(plan.name)}`,
                  { state: { destination: plan } }
                )
              }
            >
              View Details
            </Button>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setOpen(true)} className="w-full">Plan Steps</Button>
            </div>
          </div>
          <div className="mt-2 flex justify-end">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => removePlan(plan.id)}
              className="text-red-500 hover:text-red-700 hover:bg-red-50"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Wizard */}
          {open && (
            <StepWizard planId={plan.id} open={open} onOpenChange={setOpen} />
          )}
        </CardContent>
      </Card>
    );
  };



  return (
    <div className="min-h-screen bg-background relative pt-16">
      <ParticleBackground theme="minimal" />

      {/* Header */}
      <section className="relative py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                Your Travel Dashboard
              </h1>
              <p className="text-xl text-muted-foreground">
                Manage and track your personalized travel experiences
              </p>
            </div>
            <Button variant="outline" size="lg" className="hidden md:flex">
              <Settings className="w-5 h-5 mr-2" />
              Customize
            </Button>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{selectedCount}</div>
                <div className="text-sm text-muted-foreground">Selected Plans</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">{ongoingCount}</div>
                <div className="text-sm text-muted-foreground">Ongoing Plans</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{completedCount}</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{Math.round(progressPercentage)}%</div>
                <div className="text-sm text-muted-foreground">Progress</div>
                <Progress value={progressPercentage} className="mt-2" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={(val) => setActiveTab(val as "overview" | "selected" | "ongoing" | "completed")} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="selected">Selected</TabsTrigger>
              <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {selectedPlans.length === 0 ? (
                      <div className="text-center py-12">
                        <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">No travel plans yet</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Start exploring Tamil Nadu, Kerala, or Bangalore to add plans!
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {selectedPlans.slice(0, 5).map((plan) => (
                          <div key={plan.id} className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50">
                            <img
                              src={plan.image}
                              alt={plan.name}
                              className="w-16 h-16 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold">{plan.name}</h4>
                              <p className="text-sm text-muted-foreground">{plan.region}</p>
                            </div>
                            <Badge className={getStatusColor(plan.status)}>
                              {plan.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full" variant="outline">
                      <User className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Heart className="w-4 h-4 mr-2" />
                      Update Preferences
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Calendar className="w-4 h-4 mr-2" />
                      Plan New Trip
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Edit3 className="w-4 h-4 mr-2" />
                      Customize Dashboard
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="selected" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getPlansByStatus('selected').map((plan) => (
                  <PlanCard key={plan.id} plan={plan} />
                ))}
                {getPlansByStatus('selected').length === 0 && (
                  <div className="col-span-full text-center py-12">
                    <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No selected plans yet</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="ongoing" className="mt-8">
              <div className="space-y-6">


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getPlansByStatus('ongoing').map((plan) => (
                    <PlanCard key={plan.id} plan={plan} />
                  ))}
                  {getPlansByStatus('ongoing').length === 0 && (
                    <div className="col-span-full text-center py-12">
                      <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">No ongoing plans</p>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="completed" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getPlansByStatus('completed').map((plan) => (
                  <PlanCard key={plan.id} plan={plan} />
                ))}
                {getPlansByStatus('completed').length === 0 && (
                  <div className="col-span-full text-center py-12">
                    <CheckCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No completed plans yet</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
