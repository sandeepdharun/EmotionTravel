import { Button } from "@/components/ui/button";
import { Heart, Compass } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const HeroSection = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white cursor-none"
    >
      {/* Background Space Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-black to-slate-950 -z-10" />
      
      {/* Earth Glow in Center */}
      <div className="absolute left-1/2 top-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-600/40 to-green-400/30 blur-3xl animate-pulse" />
      
      {/* Mouse Glow Effect */}
      <div 
        className="fixed w-96 h-96 pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: `
            radial-gradient(
              circle at center,
              rgba(59, 130, 246, 0.15) 0%,
              rgba(20, 184, 166, 0.12) 25%,
              rgba(16, 185, 129, 0.08) 50%,
              rgba(139, 92, 246, 0.06) 75%,
              transparent 100%
            )
          `,
          filter: 'blur(40px)',
          transform: `scale(${isHovering ? 1.5 : 1})`,
          opacity: isHovering ? 0.8 : 0.4,
        }}
      />
      
      {/* Secondary Glow Ring */}
      <div 
        className="fixed w-64 h-64 pointer-events-none z-40 transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
          background: `
            radial-gradient(
              circle at center,
              rgba(99, 102, 241, 0.2) 0%,
              rgba(59, 130, 246, 0.15) 30%,
              rgba(20, 184, 166, 0.1) 60%,
              transparent 100%
            )
          `,
          filter: 'blur(20px)',
          transform: `scale(${isHovering ? 1.3 : 0.8})`,
          opacity: isHovering ? 1 : 0.3,
        }}
      />

      {/* Inner Glow Core */}
      <div 
        className="fixed w-32 h-32 pointer-events-none z-60 transition-all duration-200 ease-out"
        style={{
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
          background: `
            radial-gradient(
              circle at center,
              rgba(167, 243, 208, 0.4) 0%,
              rgba(34, 197, 94, 0.3) 20%,
              rgba(59, 130, 246, 0.2) 40%,
              rgba(147, 51, 234, 0.15) 60%,
              transparent 100%
            )
          `,
          filter: 'blur(8px)',
          transform: `scale(${isHovering ? 2 : 1.2})`,
          opacity: isHovering ? 1 : 0.6,
        }}
      />

      {/* Sparkle Effects */}
      {isHovering && (
        <>
          <div 
            className="fixed w-2 h-2 bg-gradient-to-r from-blue-300 to-teal-300 rounded-full pointer-events-none z-70 animate-ping"
            style={{
              left: mousePosition.x + 40,
              top: mousePosition.y - 30,
            }}
          />
          <div 
            className="fixed w-1 h-1 bg-gradient-to-r from-emerald-300 to-cyan-300 rounded-full pointer-events-none z-70 animate-ping"
            style={{
              left: mousePosition.x - 35,
              top: mousePosition.y + 25,
              animationDelay: '0.5s'
            }}
          />
          <div 
            className="fixed w-1.5 h-1.5 bg-gradient-to-r from-violet-300 to-purple-300 rounded-full pointer-events-none z-70 animate-ping"
            style={{
              left: mousePosition.x + 20,
              top: mousePosition.y + 40,
              animationDelay: '1s'
            }}
          />
        </>
      )}

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Tagline */}
        <div
          className="mb-12 inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-blue-400/50 shadow-lg hover:scale-105 hover:shadow-blue-400/30 hover:border-blue-300/70 transition-all duration-300 cursor-pointer group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Heart className="w-5 h-5 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300" />
          <span className="text-white text-sm font-medium tracking-wide group-hover:text-blue-100 transition-colors">
            Emotional Travel Intelligence • Feel-First Journey
          </span>
          <Compass className="w-4 h-4 text-teal-400 animate-pulse group-hover:text-teal-300 group-hover:rotate-12 transition-all duration-300" />
        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tight mb-8 cursor-default">
          <span className="hover:text-blue-200 transition-colors duration-300 inline-block hover:scale-105 hover:drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">Journey</span>
          <br /> 
          <span className="hover:text-teal-200 transition-colors duration-300 inline-block hover:scale-105 hover:drop-shadow-[0_0_30px_rgba(20,184,166,0.5)]">Beyond</span>
          <br />
          <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 bg-clip-text text-transparent animate-pulse hover:from-blue-300 hover:via-teal-300 hover:to-green-300 transition-all duration-500 inline-block hover:scale-110 hover:drop-shadow-[0_0_40px_rgba(59,130,246,0.6)]">
            Emotions
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed mb-12 hover:text-gray-200 transition-colors duration-300">
          <span className="text-blue-400 font-semibold hover:text-blue-300 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300">Discover your emotional compass</span> and let your feelings
          guide you to <span className="text-teal-400 font-semibold hover:text-teal-300 hover:drop-shadow-[0_0_15px_rgba(20,184,166,0.4)] transition-all duration-300">extraordinary destinations</span>. <br />
          Travel that <span className="text-emerald-400 font-semibold hover:text-emerald-300 hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300">heals, inspires & transforms</span> your soul.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-teal-600 text-white px-10 py-6 rounded-full shadow-lg hover:scale-105 hover:shadow-blue-400/40 hover:from-blue-500 hover:to-teal-500 transition-all duration-300 group cursor-pointer">
            <span className="relative z-10">Start Your Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-teal-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          
          <Button
            variant="outline"
            className="relative overflow-hidden border-2 border-blue-400/60 bg-white/10 text-white px-10 py-6 rounded-full hover:scale-105 hover:border-blue-300/80 hover:bg-white/20 hover:shadow-blue-400/30 transition-all duration-300 group cursor-pointer backdrop-blur-xl"
          >
            <span className="relative z-10">Discover Emotions</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </div>
      </div>

      {/* Custom CSS for enhanced effects */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .cursor-none {
          cursor: none;
        }
        
        .cursor-pointer {
          cursor: pointer;
        }
        
        .cursor-default {
          cursor: default;
        }
      `}</style>
    </section>
  );
};