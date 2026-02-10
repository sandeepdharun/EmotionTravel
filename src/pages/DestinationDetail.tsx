import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "@/components/ParticleBackground";

// Import our new components
import { useDestinationDetail } from "./DestinationDetail/useDestinationDetail";
import { SEOTags } from "./DestinationDetail/components/SEOTags";
import { HeroHeader } from "./DestinationDetail/components/HeroHeader";
import { StickyActions } from "./DestinationDetail/components/StickyActions";
import { CulturalHighlightsGrid } from "./DestinationDetail/components/CulturalHighlightsGrid";
import {
  AboutSection,
  MapSection
} from "./DestinationDetail/components/DestinationSections";

const DestinationDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Use our custom hook for all business logic
  const {
    destination,
    currentPlan,
    isSelected,
    progress,
    currentStepIndex,
    rentText,
    travelSteps,
    handlers,
  } = useDestinationDetail();

  // Scroll to top when component mounts or destination changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [destination]);

  // Show error if destination not found
  if (!destination) {
    return (
      <div className="min-h-screen bg-background">
        <ParticleBackground theme="ocean" />
        
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-destructive/10 rounded-full mb-6">
                <AlertTriangle className="w-10 h-10 text-destructive" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Destination Not Found</h1>
              <p className="text-lg text-muted-foreground mb-8">
                The destination you're looking for doesn't exist or has been moved.
              </p>
            </div>
            
            <div className="space-y-4">
              <Button
                onClick={() => navigate(-1)}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                data-testid="button-go-back"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </Button>
              <Button
                onClick={() => navigate("/")}
                size="lg"
                className="w-full sm:w-auto ml-0 sm:ml-4"
                data-testid="button-home"
              >
                Return Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Determine background theme and region path based on destination region
  const getBackgroundTheme = () => {
    const region = destination.country.toLowerCase();
    if (region.includes("kerala")) return "nature";
    if (region.includes("bangalore")) return "ocean";
    return "mountain"; // Tamil Nadu and others
  };

  const getRegionPath = () => {
    const region = destination.country.toLowerCase();
    if (region.includes("tamil")) return "/tamil-nadu";
    if (region.includes("kerala")) return "/kerala";
    if (region.includes("bangalore")) return "/bangalore";
    return "/";
  };

  const handleBack = () => {
    // If there's real history, go back; otherwise fallback to region page
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate(getRegionPath());
    }
  };
  return (
    <div className="min-h-screen bg-background">
      {/* SEO Tags */}
      <SEOTags destination={destination} />
      
      {/* Background */}
      <ParticleBackground theme={getBackgroundTheme()} />
      
      {/* Navigation Bar */}
      <div className="relative z-10 border-b bg-background/80 backdrop-blur-lg sticky top-0">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={handleBack}
              className="flex items-center gap-2 hover:bg-primary/10"
              data-testid="button-back"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </Button>
            
            <div className="text-sm text-muted-foreground hidden md:block">
              {destination.country} • {destination.name}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-8">
          {/* Hero Header */}
          <HeroHeader destination={destination} />

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-8">
              {/* About Section */}
              <AboutSection destination={destination} />

              {/* Cultural Highlights */}
              <CulturalHighlightsGrid destination={destination} />


              {/* Map Section */}
              <MapSection destination={destination} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <StickyActions
                destination={destination}
                currentPlan={currentPlan}
                isSelected={isSelected}
                progress={progress}
                handlers={handlers}
                rentText={rentText}
              />
            </div>
          </div>

          {/* Bottom Spacing */}
          <div className="h-20" />
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
