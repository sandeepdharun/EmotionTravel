import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "@/components/ParticleBackground";

// Import our new components
import { useDestinationDetail } from "./DestinationDetail/useDestinationDetail";
import { DestinationDetailTemplate } from "./DestinationDetail/DestinationDetailTemplate";
import { SEOTags } from "./DestinationDetail/components/SEOTags";

const DestinationDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Use our custom hook for all business logic
  const {
    destination,
    currentPlan,
    isSelected,
    progress,
    rentText,
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

  const handleBack = () => {
    // If there's real history, go back; otherwise fallback to region page
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/tamil-nadu");
    }
  };

  return (
    <div className="bg-[#FDFCF8] min-h-screen">
      <SEOTags destination={destination} />

      {/* Render the Universal Template */}
      <DestinationDetailTemplate
        destination={destination}
        currentPlan={currentPlan}
        isSelected={isSelected}
        progress={progress}
        rentText={rentText}
        handlers={handlers}
        onBack={() => navigate("/tamil-nadu")}
      />
    </div>
  );
};

export default DestinationDetail;
