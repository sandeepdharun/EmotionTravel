import { Button } from "@/components/ui/button";
import { Plus, Check, ArrowRight } from "lucide-react";
import { usePlans } from "@/contexts/PlanContext";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { OptimizedImage } from "@/components/ui/optimized-image";

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

  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const isSelected = selectedPlans.some(
    (plan) => plan.name === name && plan.region === country
  );

  const primaryEmotion = emotionalMatch.split(" & ")[0] || emotionalMatch;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Normalize mouse position (-1 to 1)
    const mouseX = (e.clientX - centerX) / (rect.width / 2);
    const mouseY = (e.clientY - centerY) / (rect.height / 2);

    // Calculate rotation (max 12 degrees)
    // Using a subtle damper to make it feel weighty
    setRotation({
      x: mouseY * -12,
      y: mouseX * 12
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

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

  return (
    <div
      className="group relative h-[500px] w-full"
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        navigate(
          `/destination/${encodeURIComponent(country)}/${encodeURIComponent(name)}`
        );
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <div
        ref={cardRef}
        className="relative h-full w-full rounded-3xl transition-transform duration-200 ease-out"
        style={{
          transform: isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)`
            : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transformStyle: "preserve-3d",
          boxShadow: isHovered
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Layer 0: Background Image (Deepest) */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden bg-black/80"
          style={{ transform: "translateZ(0px)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
          <OptimizedImage
            src={image || "/placeholder.svg"}
            alt={`${name}, ${country}`}
            className="h-full w-full translate-z-0"
            imageClassName="object-cover h-full w-full"
          />
        </div>

        {/* Layer 1: Content Container (Floating) */}
        <div
          className="relative h-full flex flex-col justify-end p-8"
          style={{ transformStyle: "preserve-3d" }}
        >

          {/* Floating Action Button (Highest element) */}
          <div
            className="absolute top-6 right-6"
            style={{ transform: "translateZ(60px)" }}
          >
            <Button
              size="icon"
              variant="ghost"
              onClick={handleAddToPlan}
              className={`rounded-full border backdrop-blur-md shadow-xl transition-all duration-300 ${isSelected
                ? "bg-green-500/80 text-white border-green-500"
                : "bg-white/10 text-white border-white/20 hover:bg-white hover:text-black"
                }`}
            >
              {isSelected ? <Check size={18} /> : <Plus size={18} />}
            </Button>
          </div>

          {/* Floating Text Stack */}
          <div className="flex flex-col items-start gap-4" style={{ transformStyle: "preserve-3d" }}>

            {/* Emotion Badge (High Float) */}
            <div style={{ transform: "translateZ(50px)" }}>
              <span className="inline-flex items-center rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold tracking-wide text-black shadow-lg backdrop-blur-md">
                {primaryEmotion}
              </span>
            </div>

            {/* Title (Medium Float) */}
            <div style={{ transform: "translateZ(40px)" }}>
              <h3 className="font-display text-5xl text-white leading-none tracking-tight drop-shadow-2xl">
                {name}
              </h3>
            </div>

            {/* Description (Low Float) */}
            <div style={{ transform: "translateZ(30px)" }}>
              <p className="line-clamp-2 text-base font-light leading-relaxed text-white/90 max-w-[95%] drop-shadow-md">
                {description}
              </p>
            </div>

            {/* CTA Button (Base Float) */}
            <div
              className="pt-2 hover:scale-105 transition-transform"
              style={{ transform: "translateZ(35px)" }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/destination/${encodeURIComponent(country)}/${encodeURIComponent(name)}`);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group/btn flex items-center gap-2 rounded-full bg-white/20 px-6 py-2 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white hover:text-black border border-white/10 shadow-lg"
              >
                <span>Explore Journey</span>
                <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
