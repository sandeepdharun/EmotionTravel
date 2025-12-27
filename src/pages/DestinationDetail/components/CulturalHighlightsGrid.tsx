import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import type { Destination } from "@/data/destinations";

interface CulturalHighlightsGridProps {
  destination: Destination;
}

// Normalize tourist place data, with fallback to legacy culturalHighlights
const normalizePlace = (
  place:
    | { name: string; description: string; category?: string }
    | string,
) => {
  if (typeof place === "string") {
    return { name: place, description: String(place) };
  }
  return place;
};

export const CulturalHighlightsGrid = ({ destination }: CulturalHighlightsGridProps) => {
  const places = (destination.touristPlaces && destination.touristPlaces.length > 0
    ? destination.touristPlaces
    : destination.culturalHighlights) as Array<string | { name: string; description: string; category?: string }>;

  return (
    <Card className="overflow-hidden border shadow-sm">
      <CardContent className="p-0">
        {/* Header Section */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
              <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Tourist Places</h2>
              <p className="text-muted-foreground mt-0.5 text-sm">
                Explore top attractions and hidden gems in {destination.name}
              </p>
            </div>
          </div>
        </div>

        {/* Places Grid */}
        <div className="p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {places.map((place, index) => {
              const normalized = normalizePlace(place);
              return (
                <div
                  key={index}
                  className="group relative p-4 rounded-xl border transition-all duration-200 hover:shadow-sm bg-muted/20"
                  data-testid={`tourist-place-${index}`}
                >
                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold leading-tight">
                      {normalized.name}
                    </h3>
                    <p className="text-sm leading-relaxed opacity-90">
                      {normalized.description}
                    </p>
                  </div>

                  {/* Subtle dot decoration */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-foreground/20 group-hover:bg-foreground/40 transition-colors" />
                </div>
              );
            })}
          </div>

          {/* Bottom Note */}
          <div className="mt-4 pt-4 border-t border-border/50">
            <p className="text-center text-xs text-muted-foreground">
              Find more places from locals and seasoned travelers
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
