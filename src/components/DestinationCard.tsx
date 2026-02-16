import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Check, ArrowRight } from "lucide-react";
import { usePlans } from "@/contexts/PlanContext";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type CulturalHighlight = string | {
  name: string;
  description: string;
  category: "people" | "livelihood" | "culture" | "tradition" | "lifestyle" | "art" | "festival" | "history" | "nature" | "temple";
};

export interface DestinationCardProps {
  name: string;
  country: string;
  image: string;
  emotionalMatch: string;
  matchPercentage: number;
  description: string;
  culturalHighlights: CulturalHighlight[];
  safetyLevel: "high" | "medium" | "low";
  bestTime: string;
  priceRange: "$" | "$$" | "$$$";
  idealGroupSize?: string;
  groupDescription?: string;
  hideGetGoingPlans?: boolean;
}

export const DestinationCard = ({
  name,
  country,
  image,
  emotionalMatch,
  matchPercentage,
  description,
  culturalHighlights,
  safetyLevel,
  bestTime,
  priceRange,
}: DestinationCardProps) => {
  const { addPlan, selectedPlans } = usePlans();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const isSelected = selectedPlans.some(
    (plan) => plan.name === name && plan.region === country
  );

  const primaryEmotion = emotionalMatch.split(" & ")[0] || emotionalMatch;

  const handleAddToPlan = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSelected) {
      toast({
        title: "Already added",
        description: `${name} is already in your travel plans.`,
      });
      return;
    }
    addPlan({
      name,
      country,
      image,
      emotionalMatch,
      matchPercentage,
      description,
      culturalHighlights,
      safetyLevel,
      bestTime,
      priceRange,
      region: country as "Tamil Nadu" | "Kerala" | "Bangalore",
    });
    toast({
      title: "Added to plans!",
      description: `${name} has been added to your travel dashboard.`,
    });
  };

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = e.currentTarget;
    if (target.src !== "/placeholder.svg") target.src = "/placeholder.svg";
  };

  return (
    <Card
      className="group relative h-[500px] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        navigate(
          `/destination/${encodeURIComponent(country)}/${encodeURIComponent(name)}`
        );
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      {/* Immersive Hero Image */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-500 group-hover:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-20" />
        <img
          src={image || "/placeholder.svg"}
          alt={`${name}, ${country}`}
          className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          onError={handleImageError}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-30 flex h-full flex-col justify-end p-8">

        {/* Save Button (Top Right) absolute positioned relative to card, but simpler to just put it in the flow if using flex-col justify-end, 
            but for top right corner it needs absolute positioning. */}
        <div className="absolute top-6 right-6">
          <Button
            size="icon"
            variant="ghost"
            onClick={handleAddToPlan}
            className={`rounded-full border backdrop-blur-md transition-all duration-300 ${isSelected
              ? "bg-green-500/20 text-green-400 border-green-500/30"
              : "bg-black/20 text-white/70 border-white/5 hover:bg-white/20 hover:text-white"
              }`}
          >
            {isSelected ? <Check size={18} /> : <Plus size={18} />}
          </Button>
        </div>

        {/* Text Content */}
        <div className="space-y-4">

          {/* Main Title & Emotion Chip */}
          <div className="flex flex-col items-start gap-3">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-black/60 px-4 py-1.5 text-xs font-medium tracking-wide text-white shadow-sm">
              {primaryEmotion}
            </span>
            <h3 className="font-display text-4xl text-white leading-none tracking-tight">
              {name}
            </h3>
          </div>

          {/* Poetic Hook (Micro-Description) */}
          <p className="line-clamp-2 text-base font-light leading-relaxed text-white/80 max-w-[90%]">
            {description}
          </p>

          {/* Primary Action */}
          <div className="pt-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/destination/${encodeURIComponent(country)}/${encodeURIComponent(name)}`);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group/btn flex items-center gap-2 text-sm font-medium text-white transition-all hover:gap-3"
            >
              <span className="group-hover/btn:text-white transition-colors">
                Explore Journey
              </span>
              <ArrowRight size={16} className="text-white/70 group-hover/btn:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};
