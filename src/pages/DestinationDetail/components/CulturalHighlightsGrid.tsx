import type { Destination } from "@/data/destinations";

interface CulturalHighlightsGridProps {
  destination: Destination;
}

export const CulturalHighlightsGrid = ({ destination }: CulturalHighlightsGridProps) => {
  // Get unique tourist places for experiences
  const allExperiences = destination.touristPlaces?.map(p =>
    typeof p === 'string' ? { name: p, description: '' } : p
  ) || [];

  // Select 5 experiences for the exact masonry layout
  const experiences = allExperiences.slice(0, 5);

  // Color palette matching reference (teal, navy, browns/oranges)
  const cardColors = [
    'bg-gradient-to-br from-teal-600 to-teal-700',      // Card 1: Teal
    'bg-gradient-to-br from-slate-700 to-slate-800',    // Card 2: Navy
    'bg-gradient-to-br from-slate-600 to-slate-700',    // Card 3: Navy (darker)
    'bg-gradient-to-br from-amber-700 to-amber-800',    // Card 4: Brown/Orange
    'bg-gradient-to-br from-orange-700 to-orange-800',  // Card 5: Orange/Brown
  ];

  if (experiences.length === 0) {
    return null;
  }

  return (
    <section id="experiences" className="max-w-7xl mx-auto px-6 md:px-8">
      {/* Section Heading */}
      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9A9A9A] mb-3">
          CURATED EXPERIENCES
        </p>
        <h2 className="text-2xl md:text-3xl font-serif text-[#121417]">
          Discover the soul of {destination.name}
        </h2>
      </div>

      {/* Masonry Grid - Exact Reference Layout */}
      <div className="space-y-6">

        {/* Row 1: Large Left (2x width) + Two Stacked Right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Large Card - Left (Spans 2 columns) */}
          {experiences[0] && (
            <article className="lg:col-span-2 group cursor-pointer">
              <div className={`relative h-[400px] md:h-[480px] rounded-3xl overflow-hidden ${cardColors[0]}`}>
                {/* Text Overlay - Bottom Left */}
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-serif mb-2 leading-tight">
                    {experiences[0].name}
                  </h3>
                  <p className="text-sm md:text-base text-white/90 line-clamp-2 max-w-md">
                    {experiences[0].description}
                  </p>
                </div>
              </div>
            </article>
          )}

          {/* Two Stacked Small Cards - Right */}
          <div className="space-y-6">
            {experiences[1] && (
              <article className="group cursor-pointer">
                <div className={`relative h-[192px] md:h-[228px] rounded-3xl overflow-hidden ${cardColors[1]}`}>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-xl font-serif mb-1 leading-tight">
                      {experiences[1].name}
                    </h3>
                    <p className="text-xs text-white/90 line-clamp-1">
                      {experiences[1].description}
                    </p>
                  </div>
                </div>
              </article>
            )}

            {experiences[2] && (
              <article className="group cursor-pointer">
                <div className={`relative h-[192px] md:h-[228px] rounded-3xl overflow-hidden ${cardColors[2]}`}>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-xl font-serif mb-1 leading-tight">
                      {experiences[2].name}
                    </h3>
                    <p className="text-xs text-white/90 line-clamp-1">
                      {experiences[2].description}
                    </p>
                  </div>
                </div>
              </article>
            )}
          </div>
        </div>

        {/* Row 2: Two Stacked Left + Large Right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Two Stacked Small Cards - Left */}
          <div className="space-y-6">
            {experiences[3] && (
              <article className="group cursor-pointer">
                <div className={`relative h-[192px] md:h-[228px] rounded-3xl overflow-hidden ${cardColors[3]}`}>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-xl font-serif mb-1 leading-tight">
                      {experiences[3].name}
                    </h3>
                    <p className="text-xs text-white/90 line-clamp-1">
                      {experiences[3].description}
                    </p>
                  </div>
                </div>
              </article>
            )}

            {experiences[4] && (
              <article className="group cursor-pointer">
                <div className={`relative h-[192px] md:h-[228px] rounded-3xl overflow-hidden ${cardColors[4]}`}>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-xl font-serif mb-1 leading-tight">
                      {experiences[4].name}
                    </h3>
                    <p className="text-xs text-white/90 line-clamp-1">
                      {experiences[4].description}
                    </p>
                  </div>
                </div>
              </article>
            )}
          </div>

          {/* Large Card - Right (Spans 2 columns) */}
          {experiences[0] && (
            <article className="lg:col-span-2 group cursor-pointer">
              <div className="relative h-[400px] md:h-[480px] rounded-3xl overflow-hidden bg-gradient-to-br from-amber-600 to-orange-700">
                {/* Text Overlay - Bottom Left */}
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-serif mb-2 leading-tight">
                    Breathtaking Views
                  </h3>
                  <p className="text-sm md:text-base text-white/90 line-clamp-2 max-w-md">
                    Explore the stunning panoramic vistas and natural beauty that make this destination unforgettable.
                  </p>
                </div>
              </div>
            </article>
          )}
        </div>

      </div>
    </section>
  );
};
