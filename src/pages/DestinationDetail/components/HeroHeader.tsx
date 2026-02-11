import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin } from "lucide-react";
import type { Destination } from "@/data/destinations";

interface HeroHeaderProps {
  destination: Destination;
}

export const HeroHeader = ({ destination }: HeroHeaderProps) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget as HTMLImageElement;
    if (target.src !== "/placeholder.svg") {
      target.src = "/placeholder.svg";
    }
  };

  return (
    <section className="relative -mx-6 mb-8">
      {/* Hero Image Container */}
      <div className="relative h-[50vh] md:h-[65vh] overflow-hidden rounded-3xl">
        <img
          src={destination.image}
          alt={`${destination.name}, ${destination.country} travel destination`}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          loading="lazy"
          decoding="async"
          onError={handleImageError}
        />
        
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Floating Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full p-6 md:p-12">
            {/* Main Title Section */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div className="space-y-4 flex-1">
                  {/* Country Badge */}
                  <div className="flex items-start gap-4">
                    <Badge 
                      className="bg-white/15 backdrop-blur-lg text-white border-white/20 px-4 py-2 text-sm font-medium hover:bg-white/25 transition-all duration-300"
                      data-testid="location-badge"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      {destination.country}
                    </Badge>
                  </div>

                  {/* Destination Name */}
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    {destination.name}
                  </h1>

                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-6 right-6 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl" />
        <div className="absolute bottom-6 left-6 w-20 h-20 bg-gradient-to-tr from-pink-500/20 to-transparent rounded-full blur-lg" />
      </div>
    </section>
  );
};
