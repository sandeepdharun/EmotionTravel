import { useEffect, useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import { usePlans } from "@/contexts/PlanContext";
import { useToast } from "@/hooks/use-toast";
import {
  getAllDestinations,
  type Destination,
} from "@/data/destinations";
import {
  MapPin,
  Calendar,
  Sparkles,
  Camera,
  Star,
  Map,
} from "lucide-react";

const allDestinations: Destination[] = getAllDestinations();

export const useDestinationDetail = () => {
  const { country = "", name = "" } = useParams();
  const decodedCountry = decodeURIComponent(country);
  const decodedName = decodeURIComponent(name);
  const location = useLocation() as { state?: { destination?: Destination } };
  const { addPlan, selectedPlans, updatePlanStatus, computePlanProgress } = usePlans();
  const { toast } = useToast();

  // Resolve destination from location state or data
  const destination = useMemo(() => {
    return (
      location.state?.destination ||
      allDestinations.find(
        (d) => d.name === decodedName && d.country === decodedCountry,
      )
    );
  }, [location.state, decodedName, decodedCountry]);

  // Current plan status
  const currentPlan = selectedPlans.find(
    (p) => p.name === destination?.name && p.region === destination?.country,
  );

  const isSelected = selectedPlans.some(
    (p) => p.name === destination?.name && p.region === destination?.country,
  );

  // Progress calculation based on actual per-plan steps
  const getStepProgress = () => {
    if (!currentPlan) return 0;
    return computePlanProgress(currentPlan.id);
  };

  // Always start at the first step and advance only when steps are completed
  const getCurrentStepIndex = () => {
    if (!currentPlan) return -1;
    if (currentPlan.status === "completed") return travelSteps.length - 1;
    return 0;
  };

  // Rent text based on price range
  const rentText = useMemo(() => {
    if (!destination) return "Varies";
    switch (destination.priceRange) {
      case "$":
        return "Budget (~₹1,000–₹2,500/night)";
      case "$$":
        return "Mid-range (~₹2,500–₹6,000/night)";
      case "$$$":
        return "Premium (₹6,000+/night)";
      default:
        return "Varies";
    }
  }, [destination]);

  // Travel steps configuration
  const travelSteps = [
    {
      id: "research",
      title: "Research & Planning",
      description:
        "Gather information about the destination, weather, and local customs",
      icon: Map,
      tips: [
        "Check weather forecasts",
        "Learn basic local phrases",
        "Research cultural etiquette",
      ],
    },
    {
      id: "booking",
      title: "Accommodation & Transport",
      description: "Book hotels, flights, and local transportation",
      icon: Calendar,
      tips: [
        "Compare prices across platforms",
        "Book refundable options",
        "Save confirmation emails",
      ],
    },
    {
      id: "preparation",
      title: "Travel Preparation",
      description:
        "Pack essentials, check documents, and prepare for the journey",
      icon: Sparkles,
      tips: [
        "Create packing checklist",
        "Check passport validity",
        "Get travel insurance",
      ],
    },
    {
      id: "arrival",
      title: "Arrival & Check-in",
      description:
        "Reach destination, check into accommodation, and get oriented",
      icon: MapPin,
      tips: [
        "Keep hotel address handy",
        "Exchange currency",
        "Get local SIM/WiFi",
      ],
    },
    {
      id: "exploration",
      title: "Explore & Experience",
      description:
        "Visit attractions, try local cuisine, and immerse in culture",
      icon: Camera,
      tips: [
        "Start early to avoid crowds",
        "Try street food",
        "Interact with locals",
      ],
    },
    {
      id: "completion",
      title: "Journey Complete",
      description: "Reflect on experiences and share memories",
      icon: Star,
      tips: [
        "Write travel journal",
        "Share photos with friends",
        "Leave reviews",
      ],
    },
  ];

  // Handlers
  const handleAddToPlan = () => {
    if (!destination) return;

    if (currentPlan) {
      toast({
        title: "Already added",
        description: `${destination.name} is already in your travel plans.`,
      });
      return;
    }

    addPlan({
      name: destination.name,
      country: destination.country,
      image: destination.image,
      emotionalMatch: destination.emotionalMatch,
      matchPercentage: destination.matchPercentage,
      description: destination.description,
      culturalHighlights: destination.culturalHighlights,
      safetyLevel: destination.safetyLevel,
      bestTime: destination.bestTime,
      priceRange: destination.priceRange,
      region: destination.country as "Tamil Nadu" | "Kerala" | "Bangalore",
    });

    toast({
      title: "Added to plans!",
      description: `${destination.name} has been added to your travel dashboard.`,
    });
  };

  const handleStartJourney = () => {
    if (!currentPlan || !destination) return;

    updatePlanStatus(currentPlan.id, "ongoing");
    toast({
      title: "Journey started!",
      description: `Your journey to ${destination.name} is now ongoing.`,
    });
  };

  const handleCompleteJourney = () => {
    if (!currentPlan || !destination) return;

    updatePlanStatus(currentPlan.id, "completed");
    toast({
      title: "Journey completed!",
      description: `Congratulations on completing your journey to ${destination.name}!`,
    });
  };

  return {
    destination,
    currentPlan,
    isSelected,
    progress: getStepProgress(),
    currentStepIndex: getCurrentStepIndex(),
    rentText,
    travelSteps,
    handlers: {
      addToPlan: handleAddToPlan,
      startJourney: handleStartJourney,
      completeJourney: handleCompleteJourney,
    },
  };
};
