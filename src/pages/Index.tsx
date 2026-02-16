import { useRef } from "react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { motion, useScroll, useTransform } from "framer-motion";
import { PortalHero } from "@/components/PortalHero";
import { DestinationCard } from "@/components/DestinationCard";
import { tamilNaduDestinations } from "@/data/destinations";
import { ArrowDown } from "lucide-react";

export default function Index() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  // Featured destinations for Bento Grid
  const featured = tamilNaduDestinations.slice(0, 5);

  return (
    <div ref={containerRef} className="relative min-h-[200vh]">
      {/* Immersive Portal Hero */}
      <div className="sticky top-0 h-screen overflow-hidden z-0">
        <PortalHero />

        <motion.div
          style={{ opacity, scale, y }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10"
        >
          <h1 className="font-display italic text-6xl md:text-9xl text-white mb-4">
            Luminous Journey
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 text-xl md:text-2xl font-light text-white/70 max-w-lg"
          >
            Discover the unseen emotions of Tamil Nadu & Kerala.
          </motion.p>
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 z-10"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Scroll to Explore</span>
          <ArrowDown className="animate-bounce" />
        </motion.div>
      </div>

      {/* Discovery Content - Appears 'over' the portal */}
      <div className="relative z-10 bg-background/80 backdrop-blur-3xl border-t border-white/10 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display italic text-5xl md:text-7xl text-white mb-20 text-center"
          >
            Curated <span className="text-bio-gold">Emotions</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[400px]">
            {featured.map((dest, i) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 ${i === 0 || i === 3 ? "md:col-span-8" : "md:col-span-4"
                  }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                <OptimizedImage
                  src={dest.image}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full"
                  imageClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-bio-cyan text-sm tracking-widest uppercase mb-2">{dest.country}</p>
                      <h3 className="font-display text-3xl md:text-4xl text-white group-hover:text-bio-gold transition-colors">{dest.name}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      →
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
