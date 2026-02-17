import { useRef } from "react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { motion, useScroll, useTransform } from "framer-motion";
import { PortalHero } from "@/components/PortalHero";
import { DestinationCard } from "@/components/DestinationCard";
import { EmotionCameraSection } from "@/components/EmotionCameraSection";
import { keralaDestinations } from "@/data/destinations";
import { ArrowDown, ScanFace, Compass } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  // Create a quick lookup map for destinations by name
  const destinationMap = Object.fromEntries(
    keralaDestinations.map((d) => [d.name, d])
  );

  // Month index: 0 = January, 11 = December
  const keralaDestinationsByMonth: Record<number, string[]> = {
    0: [ // Jan
      "Thiruvananthapuram",
      "Kollam",
      "Alappuzha",
      "Ernakulam",
      "Kozhikode",
    ],
    1: [ // Feb
      "Kottayam",
      "Idukki",
      "Pathanamthitta",
      "Wayanad",
      "Kannur",
    ],
    2: [ // Mar
      "Thrissur",
      "Palakkad",
      "Malappuram",
      "Kasaragod",
      "Thiruvananthapuram",
    ],
    3: [ // Apr
      "Kollam",
      "Alappuzha",
      "Ernakulam",
      "Wayanad",
      "Kannur",
    ],
    4: [ // May
      "Idukki",
      "Kottayam",
      "Pathanamthitta",
      "Kozhikode",
      "Kasaragod",
    ],
    5: [ // Jun
      "Alappuzha",
      "Kollam",
      "Thrissur",
      "Palakkad",
      "Malappuram",
    ],
    6: [ // Jul
      "Wayanad",
      "Idukki",
      "Kottayam",
      "Kannur",
      "Kasaragod",
    ],
    7: [ // Aug
      "Thiruvananthapuram",
      "Pathanamthitta",
      "Ernakulam",
      "Thrissur",
      "Kozhikode",
    ],
    8: [ // Sep
      "Kollam",
      "Alappuzha",
      "Palakkad",
      "Malappuram",
      "Wayanad",
    ],
    9: [ // Oct
      "Kottayam",
      "Idukki",
      "Kannur",
      "Kasaragod",
      "Ernakulam",
    ],
    10: [ // Nov
      "Thiruvananthapuram",
      "Kollam",
      "Alappuzha",
      "Wayanad",
      "Kozhikode",
    ],
    11: [ // Dec
      "Pathanamthitta",
      "Thrissur",
      "Palakkad",
      "Malappuram",
      "Kannur",
    ],
  };

  const monthIndex = new Date().getMonth();
  const curatedNames = keralaDestinationsByMonth[monthIndex] || keralaDestinationsByMonth[4];

  const featured = curatedNames
    .map((name) => destinationMap[name])
    .filter((check): check is NonNullable<typeof check> => check !== undefined && check !== null);

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
            Let your emotion guide you to the perfect destination.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-6 items-center justify-center w-full"
          >
            {/* Primary CTA: Detect My Emotion */}
            <button
              onClick={() => {
                const element = document.getElementById("emotion-camera-section");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-xl rounded-full border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/15 hover:border-white/30 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.02] w-full sm:w-auto min-w-[200px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] skew-x-12 transition-transform duration-1000 ease-in-out group-hover:translate-x-[200%]" />
              <div className="relative flex items-center justify-center gap-3 text-white">
                <style>{`
                  @keyframes face-scan {
                    0% { transform: translateY(4px); opacity: 0; }
                    15% { opacity: 1; }
                    85% { opacity: 1; }
                    100% { transform: translateY(18px); opacity: 0; }
                  }
                  .face-scan-line {
                    animation: face-scan 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                    transform-origin: center;
                    color: #4ade80;
                  }
                  .group:hover .face-scan-line {
                    animation-duration: 1.6s;
                    filter: drop-shadow(0 0 3px currentColor);
                  }
                  @media (prefers-reduced-motion: reduce) {
                    .face-scan-line { animation: none; opacity: 1; transform: translateY(11px); }
                  }
                `}</style>
                <svg
                  className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M7 4H5C4.44772 4 4 4.44772 4 5V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17 4H19C19.5523 4 20 4.44772 20 5V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 17V19C20 19.5523 19.5523 20 19 20H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 20H5C4.44772 20 4 19.5523 4 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="9" cy="9" r="1.5" fill="currentColor" className="opacity-40" />
                  <circle cx="15" cy="9" r="1.5" fill="currentColor" className="opacity-40" />
                  <path d="M9 14.5C9 14.5 10 15.5 12 15.5C14 15.5 15 14.5 15 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-40" />
                  <rect x="3" y="0" width="18" height="2" rx="1" fill="currentColor" className="face-scan-line opacity-80" />
                </svg>
                <span className="font-medium tracking-wide">Detect My Emotion</span>
              </div>
            </button>

            {/* Secondary CTA: Find My Escape */}
            <Link to="/kerala">
              <button className="group relative px-8 py-4 bg-transparent backdrop-blur-md rounded-full border border-white/20 overflow-hidden transition-all duration-500 hover:bg-white/5 hover:border-white/50 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-[1.02] w-full sm:w-auto min-w-[200px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 active:scale-95">
                <div className="relative flex items-center justify-center gap-3 text-white/80 group-hover:text-white transition-colors">
                  <span className="font-medium tracking-wide">Find My Escape</span>
                  <Compass className="w-5 h-5 transition-transform duration-500 group-hover:rotate-45" />
                </div>
              </button>
            </Link>
          </motion.div>
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
                <Link to={`/destination/${dest.country}/${dest.name}`} className="block w-full h-full relative cursor-pointer">
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
                        <p className="text-bio-cyan text-sm tracking-widest uppercase mb-2">{dest.emotionalMatch}</p>
                        <h3 className="font-display text-3xl md:text-4xl text-white group-hover:text-bio-gold transition-colors">{dest.name}</h3>
                      </div>
                      <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        →
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Live Emotion Camera Section */}
          <div id="emotion-camera-section">
            <EmotionCameraSection />
          </div>
        </div>
      </div>
    </div>
  );
}
