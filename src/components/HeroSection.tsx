import { Button } from "@/components/ui/button";
import { Heart, Compass, MapPin, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const particleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Create orbiting particles (stars/satellites around Earth)
  useEffect(() => {
    if (!particleContainerRef.current) return;
    const particles = particleContainerRef.current.querySelectorAll<HTMLDivElement>(".earth-particle");

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (e.clientX / innerWidth - 0.5) * 40;
      const offsetY = (e.clientY / innerHeight - 0.5) * 40;

      particles.forEach((p, i) => {
        const speed = 3 + (i % 5); // different speed per particle
        p.style.transform = `translate(${offsetX / speed}px, ${offsetY / speed}px) scale(${p.dataset.scale})`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Space Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-black to-slate-950 -z-10" />

      {/* Earth Glow in Center */}
      <div className="absolute left-1/2 top-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-600/40 to-green-400/30 blur-3xl animate-pulse" />

      {/* Orbiting Particles */}
      <div ref={particleContainerRef} className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="earth-particle absolute rounded-full"
            data-scale={(0.4 + Math.random() * 1.5).toFixed(2)}
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: ["#3BAFDA", "#4CAF50", "#FF7043", "#60A5FA"][i % 4], // ocean, forest, sunset, sky
              opacity: 0.6,
              boxShadow: `0 0 ${2 + Math.random() * 8}px rgba(59,130,246,0.6)`,
              borderRadius: "50%",
              transition: "transform 0.25s ease-out",
              animation: `orbit ${10 + Math.random() * 20}s linear infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div
          className="mb-12 inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-blue-400/50 shadow-lg hover:scale-105 transition-transform cursor-pointer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Heart className="w-5 h-5 text-blue-400" />
          <span className="text-white text-sm font-medium tracking-wide">
            Emotional Travel Intelligence • Feel-First Journey
          </span>
          <Compass className="w-4 h-4 text-teal-400 animate-pulse" />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight mb-8">
          Journey <br /> Beyond <br />
          <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 bg-clip-text text-transparent animate-pulse">
            Emotions
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed mb-12">
          <span className="text-blue-400 font-semibold">Discover your emotional compass</span> and let your feelings
          guide you to <span className="text-teal-400 font-semibold">extraordinary destinations</span>. <br />
          Travel that <span className="text-emerald-400 font-semibold">heals, inspires & transforms</span> your soul.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-10 py-6 rounded-full shadow-lg hover:scale-105 transition-transform">
            Start Your Journey
          </Button>
          <Button variant="outline" className="border-2 border-blue-400/60 bg-white/10 text-white px-10 py-6 rounded-full hover:scale-105 transition-transform">
            Discover Emotions
          </Button>
        </div>
      </div>

      {/* Orbit animation keyframes */}
      <style jsx>{`
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(20px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(20px) rotate(-360deg);
          }
        }
      `}</style>
    </section>
  );
};
