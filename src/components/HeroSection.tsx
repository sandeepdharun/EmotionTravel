import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Compass, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

function ShinyHoverText({
  text,
  className = ""
}: {
  text: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const letters = Array.from(text);

  const onMove = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const idx = Math.min(
      letters.length - 1,
      Math.max(0, Math.floor((x / rect.width) * letters.length))
    );
    setHoverIndex(idx);
  };

  return (
    <span
      ref={containerRef}
      onMouseMove={onMove}
      onMouseLeave={() => setHoverIndex(null)}
      className={`relative inline-block bg-[linear-gradient(110deg,#22d3ee,45%,#60a5fa,55%,#a78bfa)] bg-clip-text text-transparent [background-size:200%_100%] hover:animate-shine ${className}`}
    >
      {letters.map((ch, i) => {
        const d = hoverIndex === null ? 10 : Math.abs(i - hoverIndex);
        const lift = Math.max(0, 10 - d * 3); // ripple height
        const glow = Math.max(0, 12 - d * 2);

        return (
          <span
            key={i}
            className="inline-block will-change-transform transition-transform duration-150 ease-out"
            style={{
              transform:
                hoverIndex === null
                  ? "translateY(0px)"
                  : `translateY(-${lift}px) scale(${1 + lift * 0.01})`,
              textShadow:
                hoverIndex === null
                  ? "none"
                  : `0 0 ${glow}px rgba(96,165,250,0.7), 0 0 ${glow /
                      2}px rgba(167,139,250,0.6)`
            }}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        );
      })}
    </span>
  );
}

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Peaceful travel destination"
          className="w-full h-full object-cover"
        />
        {/* Vignette + gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/20" />
      </div>

      {/* Floating mood orbs */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute -top-20 -left-16 w-72 h-72 bg-[conic-gradient(from_180deg_at_50%_50%,#22d3ee,transparent_60%)] blur-3xl opacity-50 animate-orb" />
        <div className="absolute bottom-[-60px] right-[-40px] w-80 h-80 bg-[radial-gradient(circle_at_center,#a78bfa,transparent_60%)] blur-3xl opacity-50 animate-orb-delayed" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-[radial-gradient(circle_at_center,#34d399,transparent_60%)] blur-3xl opacity-30 animate-orb-slow" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white/90">
          <Heart className="w-4 h-4" />
          <span className="text-sm font-medium tracking-wide">
            Feel-first travel, powered by AI
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-extrabold text-white leading-tight tracking-tight [text-wrap:balance] text-5xl md:text-7xl lg:text-8xl">
          Travel that{" "}
          <span className="relative">
            understands
            <span className="absolute left-0 right-0 -bottom-2 h-[2px] bg-gradient-to-r from-cyan-400/80 via-sky-400/80 to-fuchsia-400/80 blur-[2px]" />
          </span>
          <br className="hidden md:block" />
          <ShinyHoverText
            text="your Emotions."
            className="block mt-2"
          />
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-white/90 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
          Our models sense how you feel and map destinations that help you calm,
          heal, and thrive. Every trip adapts to your emotional rhythm.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="group relative overflow-hidden border-0 text-white px-8 py-6 text-lg font-semibold rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 hover:shadow-[0_0_24px_rgba(56,189,248,0.6)] transition-all"
          >
            <span className="relative z-10 flex items-center">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(120px_80px_at_var(--x)_var(--y),rgba(255,255,255,0.2),transparent_60%)]" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="relative border-2 border-white/30 bg-white/10 backdrop-blur-md text-white px-8 py-6 text-lg font-semibold rounded-xl hover:bg-white/20 transition-all"
          >
            <span className="flex items-center">
              Try Emotion Scan
              <Compass className="ml-2 w-5 h-5" />
            </span>
          </Button>
        </div>

        {/* Emotion chips */}
        <div className="mt-12 flex flex-wrap gap-3 justify-center">
          <Chip icon={<MapPin className="w-3.5 h-3.5" />} label="Calm retreats" />
          <Chip icon={<MapPin className="w-3.5 h-3.5" />} label="Inspired escapes" />
          <Chip icon={<MapPin className="w-3.5 h-3.5" />} label="Healing journeys" />
          <Chip icon={<MapPin className="w-3.5 h-3.5" />} label="Adventurous moods" />
        </div>

        {/* Stats */}
        <div className="mt-14 flex flex-col sm:flex-row justify-center gap-8 sm:gap-12">
          <Stat value="10K+" label="Happy Travelers" />
          <Stat value="150+" label="Destinations" />
          <Stat value="98%" label="Satisfaction Rate" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Small util styles for animations */}
      <style jsx>{`
        @keyframes orb {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-12px) scale(1.03); }
          100% { transform: translateY(0) scale(1); }
        }
        .animate-orb { animation: orb 8s ease-in-out infinite; }
        .animate-orb-delayed { animation: orb 10s ease-in-out infinite 0.6s; }
        .animate-orb-slow { animation: orb 12s ease-in-out infinite 0.2s; }

        @keyframes shine {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .hover\\:animate-shine:hover {
          animation: shine 1.4s linear infinite;
        }
      `}</style>
    </section>
  );
};

function Chip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm text-white/90 border border-white/20 bg-white/10 backdrop-blur">
      {icon}
      <span>{label}</span>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-white mb-2">{value}</div>
      <div className="text-white/70">{label}</div>
    </div>
  );
}