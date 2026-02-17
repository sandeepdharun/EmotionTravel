import { useRef, useState, useEffect } from "react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, DollarSign, Cloud, Heart, Compass } from "lucide-react";
import { useDestinationDetail } from "./DestinationDetail/useDestinationDetail";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function DestinationDetail() {
  const navigate = useNavigate();
  const { destination, handlers, isSelected } = useDestinationDetail();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLocation, setActiveLocation] = useState<string>("");

  useEffect(() => {
    if (destination) {
      // By default, search for "Tourist places in [Destination]" to show multiple pins
      // instead of just the destination center
      setActiveLocation(`Tourist places in ${destination.name}, ${destination.country}`);
    }
  }, [destination]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);

  if (!destination) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-display mb-4">Lost in the mist...</h1>
          <Button onClick={() => navigate("/")} variant="outline" className="text-black border-white/20 hover:bg-white/10 hover:text-white">Return Home</Button>
        </div>
      </div>
    );
  }

  // Get the display name for the map subtitle
  const mapSubtitle = activeLocation.includes("Tourist places in")
    ? destination.name
    : activeLocation.split(',')[0];

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-white selection:bg-bio-cyan/30">

      {/* Navigation Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white bg-black/20 hover:bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-full transition-all border border-white/5"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="font-sans tracking-wide">Return</span>
        </button>
      </div>

      {/* Immersive Hero */}
      <div className="relative h-[85vh] w-full overflow-hidden">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background z-10" />
          <div className="absolute inset-0 bg-black/20 z-10" />
          <OptimizedImage
            src={destination.image}
            alt={destination.name}
            className="w-full h-full"
            imageClassName="w-full h-full object-cover"
            priority={true}
          />
        </motion.div>

        <motion.div
          style={{ y: textY }}
          className="absolute bottom-0 left-0 w-full p-6 md:p-20 z-20 flex flex-col items-start"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-4"
          >
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display italic text-6xl md:text-8xl lg:text-9xl text-white mb-6 leading-[0.9]"
          >
            {destination.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-xl text-xl md:text-2xl text-white/90 font-display leading-relaxed tracking-wide"
          >
            {destination.description}
          </motion.p>
        </motion.div>
      </div>

      {/* Quick Stats Bar */}
      <div className="border-y border-white/5 bg-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatItem icon={Cloud} label="Climate" value={destination.climate || "Tropical"} />
          <StatItem icon={Calendar} label="Best Time" value={destination.bestTime} />
          <StatItem icon={DollarSign} label="Price Range" value={destination.priceRange} />
          <StatItem icon={Heart} label="Vibe" value={destination.emotionalMatch} />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">

        {/* Sensory Highlights (Cultural Deep Dive) */}
        <section>
          <SectionHeader title="Sensory" subtitle="Highlights" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destination.culturalHighlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-2xl glass-panel relative overflow-hidden"
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-display italic text-white mb-3 group-hover:text-bio-cyan transition-colors">
                    {typeof highlight === 'string' ? highlight : highlight.name}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    {typeof highlight === 'string' ? "A key cultural experience defining the region." : highlight.description}
                  </p>
                </div>
                <div className="absolute -right-4 -bottom-4 text-white/5 group-hover:text-bio-cyan/10 transition-colors">
                  <Compass size={120} strokeWidth={1} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Curated Spaces (Tourist Places) */}
        {destination.touristPlaces && (
          <section>
            <div className="flex items-end justify-between mb-12">
              <SectionHeader title="Curated" subtitle="Spaces" />
              <p className="hidden md:block text-white/40 text-sm mb-12 pb-2">Click any location to view on map ↓</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {destination.touristPlaces.map((place, idx) => {
                const isSelectedLocation = activeLocation.includes(place.name);
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => {
                      setActiveLocation(`${place.name}, ${destination.name}`);
                      document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`flex gap-6 group cursor-pointer p-4 rounded-2xl transition-all duration-300 ${isSelectedLocation ? 'bg-white/10 border border-white/20' : 'hover:bg-white/5 border border-transparent'}`}
                  >
                    <div className="flex-shrink-0 mt-2">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${isSelectedLocation ? 'bg-bio-gold text-black' : 'bg-white/5 border border-white/10 text-bio-gold group-hover:bg-bio-gold group-hover:text-black'}`}>
                        <MapPin size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className={`text-2xl font-display mb-2 transition-colors ${isSelectedLocation ? 'text-bio-gold' : 'text-white'}`}>{place.name}</h4>
                      <p className="text-white/60 text-sm leading-relaxed mb-3">{place.description}</p>
                      <div className="flex gap-3">
                        <span className="text-xs uppercase tracking-wider text-white/40 border border-white/10 px-2 py-1 rounded-md">{place.category}</span>
                        {place.emotion && (
                          <span className="text-xs uppercase tracking-wider text-bio-cyan/80 border border-bio-cyan/20 px-2 py-1 rounded-md">{place.emotion}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        )}

        {/* Dynamic Location Map */}
        <section id="map-section">
          <SectionHeader title="Navigate" subtitle={mapSubtitle} />
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[400px] md:h-[600px] relative">
            <iframe
              key={activeLocation}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(activeLocation)}&t=m&z=13&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

      </div>

      {/* Floating Action Button for Plan */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={handlers.addToPlan}
          disabled={isSelected}
          size="lg"
          className={cn(
            "rounded-full px-8 py-6 text-lg shadow-2xl transition-all duration-300",
            isSelected
              ? "bg-green-500/20 text-green-400 border border-green-500/50 cursor-default"
              : "bg-bio-cyan hover:bg-bio-cyan/90 text-black font-semibold hover:scale-105"
          )}
        >
          {isSelected ? "Saved to Plan" : "Add to Journey"}
        </Button>
      </div>
    </div>
  );
}

const StatItem = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70">
      <Icon size={18} />
    </div>
    <div>
      <p className="text-xs text-white/40 uppercase tracking-wider">{label}</p>
      <p className="text-sm font-medium text-white">{value}</p>
    </div>
  </div>
);

const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="mb-12">
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-display text-white"
    >
      {title} <span className="text-bio-cyan italic">{subtitle}</span>
    </motion.h2>
    <div className="h-1 w-20 bg-gradient-to-r from-bio-cyan to-transparent mt-4 rounded-full" />
  </div>
);
