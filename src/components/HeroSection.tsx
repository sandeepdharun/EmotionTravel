import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";
import { useState } from "react";

export const HeroSection = () => {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; icon: string }[]>([]);

  const travelIcons = ["✈️", "🌍", "⛵", "🏝️"]; // Simple travel-related particles

  const createParticle = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const id = Date.now();
    const icon = travelIcons[Math.floor(Math.random() * travelIcons.length)];

    setParticles((prev) => [...prev, { id, x, y, icon }]);

    // Remove after animation
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== id));
    }, 1500);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Calm travel destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
          <Heart className="w-4 h-4 text-white/80" />
          <span className="text-white/90 text-sm font-medium">
            AI-Powered Emotional Travel
          </span>
        </div>

        {/* Heading */}
        <h1
          onMouseMove={createParticle}
          className="relative text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight cursor-pointer"
        >
          Travel with{" "}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-300">
            Emotions
          </span>
          {/* Particle Container */}
          <div className="absolute inset-0 pointer-events-none">
            {particles.map((p) => (
              <span
                key={p.id}
                className="absolute text-lg animate-float-up"
                style={{ left: p.x, top: p.y }}
              >
                {p.icon}
              </span>
            ))}
          </div>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
          Discover destinations that resonate with your feelings.
          Our AI understands your emotional state and creates journeys
          that inspire, heal, and transform.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onMouseMove={createParticle}
            className="bg-sky-500 hover:bg-sky-600 text-white transition-all duration-300 px-8 py-6 text-lg font-semibold relative overflow-hidden"
          >
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onMouseMove={createParticle}
            className="border border-white/40 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300 px-8 py-6 text-lg font-semibold relative overflow-hidden"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Particle Animation Keyframes */}
      <style>
        {`
          @keyframes float-up {
            0% { transform: translateY(0) scale(1); opacity: 1; }
            100% { transform: translateY(-40px) scale(1.2); opacity: 0; }
          }
          .animate-float-up {
            animation: float-up 1.5s ease forwards;
          }
        `}
      </style>
    </section>
  );
};
