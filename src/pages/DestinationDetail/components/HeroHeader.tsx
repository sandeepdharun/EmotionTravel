import type { Destination } from "@/data/destinations";
import { OptimizedImage } from "@/components/ui/optimized-image";

interface HeroHeaderProps {
  destination: Destination;
}

export const HeroHeader = ({ destination }: HeroHeaderProps) => {
  const scrollToExperiences = () => {
    const experiencesSection = document.getElementById('experiences');
    experiencesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Get first 2 categories from tourist places for tag chips
  const getTagChips = () => {
    const categories = new Set<string>();
    destination.touristPlaces?.slice(0, 4).forEach(place => {
      if (typeof place !== 'string' && place.emotion) {
        categories.add(place.emotion);
      }
    });
    return Array.from(categories).slice(0, 2);
  };

  const tagChips = getTagChips();

  return (
    <section className="relative w-full h-[80vh] min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <OptimizedImage
          src={destination.image}
          alt={`${destination.name} landscape`}
          className="w-full h-full"
          imageClassName="w-full h-full object-cover"
          priority={true}
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      </div>

      {/* Hero Content - Left Aligned */}
      <div className="relative h-full flex items-end pb-16 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="max-w-2xl space-y-6">
            {/* Region Label */}
            <p className="text-white/80 text-xs uppercase tracking-[0.2em] font-medium">
              {destination.country}
            </p>

            {/* Destination Title - Very Large Serif */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.05] font-normal">
              {destination.name}
            </h1>

            {/* Poetic Tagline */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl font-light">
              {destination.description}
            </p>

            {/* Tag Chips */}
            {tagChips.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {tagChips.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-medium rounded-full border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Primary CTA Button */}
            <div className="pt-4">
              <button
                onClick={scrollToExperiences}
                className="bg-white/95 hover:bg-white text-[#121417] px-8 py-3.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Explore What to See
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
