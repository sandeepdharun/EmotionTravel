import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Plus, Check } from "lucide-react";
import { usePlans } from "@/contexts/PlanContext";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type CulturalHighlight = string | {
  name: string;
  description: string;
  category: "people" | "livelihood" | "culture" | "tradition" | "lifestyle" | "art" | "festival";
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
  idealGroupSize,
  groupDescription,
  hideGetGoingPlans = false,
}: DestinationCardProps) => {
  const { addPlan, selectedPlans, updatePlanStatus } = usePlans();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const isSelected = selectedPlans.some(
    (plan) => plan.name === name && plan.region === country
  );

  const handleAddToPlan = () => {
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

  const handleGetGoingPlans = () => {
    const existing = selectedPlans.find(
      (plan) => plan.name === name && plan.region === country
    );
    if (!existing) {
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
        title: "Added to plans",
        description: `${name} added. Opening ongoing plans...`,
      });
      setTimeout(() => {
        const plan = selectedPlans.find(
          (p) => p.name === name && p.region === country
        );
        if (plan) {
          updatePlanStatus(plan.id, "ongoing");
        }
        navigate("/dashboard?tab=ongoing");
      }, 100);
      return;
    }
    updatePlanStatus(existing.id, "ongoing");
    navigate("/dashboard?tab=ongoing");
  };

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = e.currentTarget;
    if (target.src !== "/placeholder.svg") target.src = "/placeholder.svg";
  };

  return (
    <Card
      className="destination-card-elite h-full overflow-hidden cursor-pointer transform-gpu"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style>{`
        .destination-card-elite {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          width: 100%;
          height: 100%;
          font-family: 'Inter', system-ui, sans-serif;
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1),
                      border-color 0.45s ease;
          position: relative;
          isolation: isolate;
          /* Base: subtle ambient light */
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.03),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        /* ✨ Elite Hover: Floating in Light ✨ */
        .destination-card-elite:hover {
          transform: translateY(-12px);
          border-color: rgba(255, 255, 255, 0.22);
          /* Soft luminous glow — not white, but warm ambient light */
          box-shadow: 
            0 20px 50px -10px rgba(0, 0, 0, 0.08),
            0 0 0 1px rgba(255, 255, 255, 0.70),
            0 0 30px 8px rgba(255, 255, 255, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.12);
        }

        .destination-img-container {
          position: relative;
          height: 240px;
          width: 100%;
          overflow: hidden;
          background: #1e293b;
          flex-shrink: 0;
          z-index: 1;
        }

        .destination-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          transform: scale(1);
          opacity: ${imageLoaded ? 1 : 0};
        }

        .destination-card-elite:hover .destination-img {
          transform: scale(1.05);
          filter: brightness(1.05) saturate(1.05);
        }

        .image-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          animation: shimmer 1.8s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }

        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60%;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.45), transparent);
          z-index: 2;
        }

        .destination-content-wrapper {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          justify-content: space-between;
          position: relative;
          z-index: 3;
        }

        .destination-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 8px 0;
          color: white;
          letter-spacing: -0.02em;
          line-height: 1.2;
          transition: color 0.3s ease;
        }

        .destination-card-elite:hover .destination-title {
          color: #f1f5f9;
        }

        .destination-location {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          font-weight: 500;
          color: #cbd5e1;
          margin-bottom: 16px;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .destination-card-elite:hover .destination-location {
          color: #e2e8f0;
          transform: translateX(3px);
        }

        .destination-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #cbd5e1;
          margin: 0 0 20px 0;
          flex-grow: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.3s ease;
        }

        .destination-card-elite:hover .destination-description {
          color: #e2e8f0;
        }

        .destination-meta-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          margin-bottom: 20px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: #94a3b8;
          transition: color 0.3s ease;
        }

        .destination-card-elite:hover .meta-item {
          color: #cbd5e1;
        }

        .meta-icon {
          opacity: 0.8;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .destination-card-elite:hover .meta-icon {
          opacity: 1;
          transform: scale(1.15);
        }

        .destination-actions {
          display: flex;
          gap: 12px;
          margin-top: auto;
        }

        .action-btn {
          flex: 1;
          border-radius: 16px;
          font-size: 0.9rem;
          font-weight: 600;
          padding: 12px 16px;
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          min-height: 46px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.06);
          color: white;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .action-btn:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.09);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
        }

        .action-btn:active {
          transform: translateY(0);
        }
      `}</style>

      {/* Image Section */}
      <div className="destination-img-container">
        {!imageLoaded && <div className="image-shimmer" />}
        <img
          src={image || "/placeholder.svg"}
          alt={`${name}, ${country}`}
          className="destination-img"
          onError={handleImageError}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="image-overlay" />
      </div>

      {/* Content Section */}
      <div className="destination-content-wrapper">
        <div className="destination-main">
          <h2 className="destination-title">{name}</h2>
          <div className="destination-location">
            <MapPin className="w-4 h-4 meta-icon" />
            <span>{country}</span>
          </div>
          <p className="destination-description">{description}</p>
        </div>

        <div className="destination-footer">
          <div className="destination-meta-grid">
            <div className="meta-item">
              <Clock className="w-4 h-4 meta-icon" />
              <span>{bestTime}</span>
            </div>
            {idealGroupSize && (
              <div className="meta-item">
                <span>{idealGroupSize}</span>
              </div>
            )}
          </div>

          <div className="destination-actions">
            <Button
              className="action-btn"
              onClick={() => {
                navigate(
                  `/destination/${encodeURIComponent(country)}/${encodeURIComponent(name)}`
                );
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 100);
              }}
            >
              Explore
            </Button>

            {!hideGetGoingPlans && (
              <Button
                className="action-btn"
                onClick={handleGetGoingPlans}
              >
                Get Going
              </Button>
            )}

            <Button
              className="action-btn"
              onClick={handleAddToPlan}
              disabled={isSelected}
            >
              {isSelected ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Added
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Plan
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};