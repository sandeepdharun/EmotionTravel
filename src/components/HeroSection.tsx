import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Compass, MapPin, Sparkles, Brain, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 0.5,
    duration: 3 + (i % 3),
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      {/* Dynamic Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-2xl animate-bounce"
          style={{ animationDuration: '4s' }}
        />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${element.duration}s ease-in-out infinite`,
              animationDelay: `${element.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Emotion Badge */}
        <div 
          className="mb-12 inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-rose-500/10 to-purple-500/10 backdrop-blur-xl rounded-full border border-rose-400/20 shadow-lg shadow-rose-500/10 hover:shadow-rose-500/30 transition-all duration-500 hover:scale-105 cursor-pointer group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="relative">
            <Heart className="w-5 h-5 text-rose-400 group-hover:text-rose-300 transition-colors" />
            <Sparkles className="w-3 h-3 text-purple-400 absolute -top-1 -right-1 animate-pulse" />
          </div>
          <span className="text-white text-sm font-medium tracking-wide">
            Emotional Travel Intelligence • Feel-First Journey
          </span>
          <Compass className="w-4 h-4 text-purple-400 animate-pulse" />
        </div>

        {/* Main Heading with Advanced Animation */}
        <div className="mb-8 overflow-hidden">
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-200 to-purple-200 mb-6 leading-[0.9] tracking-tight">
            <div className="inline-block transition-all duration-700 ease-out cursor-default hover:translate-y-[-8px] hover:rotate-1 group">
              <span 
                className="inline-block text-white transition-all duration-500 group-hover:text-rose-300 group-hover:drop-shadow-[0_0_25px_rgba(251,113,133,0.6)]"
              >
                Journey
              </span>
            </div>
            <br />
            <div className="inline-block transition-all duration-700 ease-out cursor-default hover:translate-y-[-12px] hover:rotate-[-2deg] hover:skew-x-2 group">
              <span className="text-white transition-all duration-500 group-hover:text-purple-300 group-hover:drop-shadow-[0_0_30px_rgba(196,181,253,0.7)]">Beyond</span>
            </div>
            <br />
            <div className="relative inline-block group cursor-default">
              <span 
                className="inline-block bg-gradient-to-r from-rose-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse"
              >
                Emotions
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-rose-400 via-purple-500 to-pink-500 transition-all duration-500 ease-out group-hover:w-full group-hover:opacity-100 opacity-0 rounded-full shadow-lg shadow-purple-500/50"></div>
            </div>
          </h1>
        </div>

        {/* Subtitle with Typewriter Effect */}
        <div className="mb-12 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed font-light tracking-wide">
            <span className="text-rose-400 font-semibold">Discover your emotional compass</span> and let your feelings guide you to 
            <span className="text-purple-400 font-semibold"> extraordinary destinations</span>. 
            <br className="hidden md:block" />
            Experience travel that <span className="text-pink-400 font-semibold hover:text-pink-300 transition-colors cursor-default">heals, inspires, and transforms</span> your soul.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button 
            size="lg" 
            className="relative overflow-hidden bg-gradient-to-r from-rose-500 to-purple-600 border-0 text-white hover:from-rose-400 hover:to-purple-500 transition-all duration-500 px-10 py-6 text-lg font-bold rounded-full shadow-lg shadow-rose-500/25 hover:shadow-rose-500/50 hover:scale-105 group"
          >
            <span className="relative z-10">Start Your Journey</span>
            <Heart className="ml-3 w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-rose-400/40 bg-slate-900/40 backdrop-blur-xl text-rose-100 hover:bg-rose-500/10 hover:border-rose-400/80 transition-all duration-500 px-10 py-6 text-lg font-semibold rounded-full hover:scale-105 hover:shadow-lg hover:shadow-rose-500/20"
          >
            Discover Emotions
          </Button>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { value: "50K+", label: "Emotional Journeys", icon: Heart, color: "rose" },
            { value: "300+", label: "Soul Destinations", icon: MapPin, color: "purple" },
            { value: "99.2%", label: "Heart Connection", icon: Sparkles, color: "pink" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-slate-900/30 backdrop-blur-md rounded-2xl border border-slate-700/50 hover:border-rose-400/50 transition-all duration-300 hover:scale-105 hover:bg-slate-900/50 group cursor-default"
            >
              <div className="mb-3 flex justify-center">
                <stat.icon className={`w-8 h-8 text-${stat.color}-400 group-hover:text-${stat.color}-300 transition-colors`} />
              </div>
              <div className={`text-4xl font-bold text-${stat.color}-400 mb-2 group-hover:scale-110 transition-transform`}>
                {stat.value}
              </div>
              <div className="text-slate-400 font-medium tracking-wide group-hover:text-slate-300 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce cursor-pointer hover:scale-110 transition-transform">
          <div className="w-1 h-6 bg-gradient-to-b from-rose-400 to-purple-400 rounded-full animate-pulse" />
          <div className="w-6 h-10 border-2 border-rose-400/60 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1.5 h-4 bg-gradient-to-b from-rose-400 to-purple-400 rounded-full mt-2 animate-pulse" />
          </div>
          <span className="text-xs text-slate-400 font-medium tracking-wider">EXPLORE</span>
        </div>
      </div>

      {/* CSS for custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
      `}</style>
    </section>
  );
};