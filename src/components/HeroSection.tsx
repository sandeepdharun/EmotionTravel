import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Compass, MapPin, Sparkles, Brain, Zap, Globe } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [earthRotation, setEarthRotation] = useState(0);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({ 
          x: e.clientX - rect.left, 
          y: e.clientY - rect.top 
        });
      }
    };

    const animate = () => {
      setEarthRotation(prev => prev + 0.5);
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Create Earth particles (continents, oceans, cities)
  const createEarthParticles = () => {
    const particles = [];
    const centerX = 400;
    const centerY = 300;
    const earthRadius = 120;

    // Create continent particles (green/brown)
    for (let i = 0; i < 80; i++) {
      const angle = (i / 80) * Math.PI * 2;
      const radius = earthRadius + Math.sin(i * 0.5) * 20;
      particles.push({
        id: `continent-${i}`,
        type: 'continent',
        baseX: centerX + Math.cos(angle) * radius,
        baseY: centerY + Math.sin(angle) * radius,
        angle: angle,
        radius: radius,
        size: 2 + Math.random() * 3,
        opacity: 0.7 + Math.random() * 0.3,
        rotationSpeed: 0.5 + Math.random() * 0.5,
      });
    }

    // Create ocean particles (blue)
    for (let i = 0; i < 60; i++) {
      const angle = (i / 60) * Math.PI * 2 + 0.5;
      const radius = earthRadius - 10 + Math.sin(i * 0.3) * 15;
      particles.push({
        id: `ocean-${i}`,
        type: 'ocean',
        baseX: centerX + Math.cos(angle) * radius,
        baseY: centerY + Math.sin(angle) * radius,
        angle: angle,
        radius: radius,
        size: 1.5 + Math.random() * 2,
        opacity: 0.5 + Math.random() * 0.4,
        rotationSpeed: 0.3 + Math.random() * 0.4,
      });
    }

    // Create city lights (golden)
    for (let i = 0; i < 40; i++) {
      const angle = (i / 40) * Math.PI * 2 + 1;
      const radius = earthRadius + 5;
      particles.push({
        id: `city-${i}`,
        type: 'city',
        baseX: centerX + Math.cos(angle) * radius,
        baseY: centerY + Math.sin(angle) * radius,
        angle: angle,
        radius: radius,
        size: 1 + Math.random() * 2,
        opacity: 0.8 + Math.random() * 0.2,
        rotationSpeed: 0.6 + Math.random() * 0.6,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    // Create atmospheric particles
    for (let i = 0; i < 30; i++) {
      const angle = (i / 30) * Math.PI * 2;
      const radius = earthRadius + 40 + Math.random() * 30;
      particles.push({
        id: `atmosphere-${i}`,
        type: 'atmosphere',
        baseX: centerX + Math.cos(angle) * radius,
        baseY: centerY + Math.sin(angle) * radius,
        angle: angle,
        radius: radius,
        size: 1 + Math.random() * 1.5,
        opacity: 0.2 + Math.random() * 0.3,
        rotationSpeed: 0.2 + Math.random() * 0.3,
      });
    }

    return particles;
  };

  const particles = createEarthParticles();

  const getParticleStyle = (particle) => {
    const rotatedAngle = particle.angle + (earthRotation * particle.rotationSpeed * Math.PI / 180);
    const centerX = 400;
    const centerY = 300;
    
    // Mouse influence
    const mouseInfluence = isHovering ? 20 : 0;
    const mouseDistance = Math.sqrt(
      Math.pow(mousePosition.x - centerX, 2) + 
      Math.pow(mousePosition.y - centerY, 2)
    );
    const mouseFactor = Math.max(0, (200 - mouseDistance) / 200) * mouseInfluence;

    const x = centerX + Math.cos(rotatedAngle) * (particle.radius + mouseFactor);
    const y = centerY + Math.sin(rotatedAngle) * (particle.radius * 0.6 + mouseFactor * 0.6);

    // City lights pulse
    let pulseOpacity = particle.opacity;
    if (particle.type === 'city') {
      pulseOpacity *= 0.7 + 0.3 * Math.sin(earthRotation * 0.1 + particle.pulse);
    }

    // Hover scale effect
    const hoverScale = isHovering ? 1.5 + mouseFactor * 0.02 : 1;

    return {
      left: `${x}px`,
      top: `${y}px`,
      width: `${particle.size * hoverScale}px`,
      height: `${particle.size * hoverScale}px`,
      opacity: pulseOpacity * (isHovering ? 1.2 : 0.8),
      transform: `translate(-50%, -50%) scale(${hoverScale})`,
      transition: isHovering ? 'all 0.3s ease-out' : 'all 0.6s ease-out',
    };
  };

  const getParticleColor = (type) => {
    switch (type) {
      case 'continent':
        return 'bg-gradient-to-br from-green-400 to-emerald-600';
      case 'ocean':
        return 'bg-gradient-to-br from-blue-400 to-blue-600';
      case 'city':
        return 'bg-gradient-to-br from-yellow-300 to-orange-400';
      case 'atmosphere':
        return 'bg-gradient-to-br from-sky-200 to-blue-300';
      default:
        return 'bg-blue-400';
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated Star Field Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(120,119,198,0.3),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.2),transparent_50%)]"></div>
        {Array.from({ length: 100 }, (_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Earth Particle System */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Earth Core Glow */}
        <div 
          className="absolute w-64 h-64 bg-gradient-radial from-blue-400/30 via-green-400/20 to-transparent rounded-full blur-xl"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            animation: `pulse 4s ease-in-out infinite`,
          }}
        />
        
        {/* Earth Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute rounded-full ${getParticleColor(particle.type)} shadow-lg`}
            style={getParticleStyle(particle)}
          >
            {particle.type === 'city' && (
              <div className="absolute inset-0 rounded-full bg-yellow-200 opacity-40 animate-ping" />
            )}
          </div>
        ))}

        {/* Orbital Rings */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div 
            className="w-96 h-96 border border-blue-300/20 rounded-full animate-spin"
            style={{ animationDuration: '20s' }}
          />
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-teal-300/15 rounded-full animate-spin"
            style={{ animationDuration: '15s', animationDirection: 'reverse' }}
          />
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] border border-green-300/10 rounded-full animate-spin"
            style={{ animationDuration: '25s' }}
          />
        </div>

        {/* Satellite Particles */}
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={`satellite-${i}`}
            className="absolute w-2 h-2 bg-gradient-to-r from-silver-400 to-gray-300 rounded-full shadow-lg"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) rotate(${earthRotation * 2 + i * 60}deg) translateX(180px)`,
              opacity: 0.8,
            }}
          >
            <div className="absolute inset-0 bg-white/50 rounded-full animate-pulse" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Earth Badge */}
        <div 
          className="mb-12 inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-blue-300/30 shadow-lg shadow-blue-500/20 hover:shadow-blue-400/40 transition-all duration-500 hover:scale-105 cursor-pointer group"
        >
          <div className="relative">
            <Globe className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors animate-spin" style={{ animationDuration: '8s' }} />
            <Sparkles className="w-3 h-3 text-teal-400 absolute -top-1 -right-1 animate-pulse" />
          </div>
          <span className="text-blue-100 text-sm font-medium tracking-wide">
            Earth Journey Intelligence • Planet-First Travel
          </span>
          <Heart className="w-4 h-4 text-teal-400 animate-pulse" />
        </div>

        {/* Main Heading */}
        <div className="mb-8 overflow-hidden">
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-6 leading-[0.9] tracking-tight">
            <div className="inline-block transition-all duration-700 ease-out cursor-default hover:translate-y-[-8px] hover:rotate-1 group">
              <span 
                className="inline-block text-white transition-all duration-500 group-hover:text-blue-300 group-hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]"
              >
                Explore
              </span>
            </div>
            <br />
            <div className="inline-block transition-all duration-700 ease-out cursor-default hover:translate-y-[-12px] hover:rotate-[-2deg] hover:skew-x-2 group">
              <span className="text-white transition-all duration-500 group-hover:text-teal-300 group-hover:drop-shadow-[0_0_30px_rgba(20,184,166,0.7)]">Planet</span>
            </div>
            <br />
            <div className="relative inline-block group cursor-default">
              <span 
                className="inline-block bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent animate-pulse"
              >
                Earth
              </span>
              <div className="absolute bottom-[-6px] left-0 w-0 h-1 bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 transition-all duration-500 ease-out group-hover:w-full group-hover:opacity-100 opacity-0 rounded-full shadow-lg shadow-teal-400/50"></div>
            </div>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mb-12 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed font-light tracking-wide">
            <span className="text-blue-300 font-semibold">Discover our living planet</span> through immersive particle journeys that reveal 
            <span className="text-teal-300 font-semibold"> Earth's hidden wonders</span>. 
            <br className="hidden md:block" />
            Experience travel that <span className="text-green-300 font-semibold hover:text-green-200 transition-colors cursor-default">connects, educates, and inspires</span> environmental consciousness.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button 
            size="lg" 
            className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-teal-500 border-0 text-white hover:from-blue-400 hover:to-teal-400 transition-all duration-500 px-10 py-6 text-lg font-bold rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-400/50 hover:scale-105 group"
          >
            <span className="relative z-10">Start Earth Journey</span>
            <Globe className="ml-3 w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-blue-400/50 bg-white/10 backdrop-blur-xl text-blue-100 hover:bg-blue-500/20 hover:border-blue-300 transition-all duration-500 px-10 py-6 text-lg font-semibold rounded-full hover:scale-105 hover:shadow-lg hover:shadow-blue-400/30"
          >
            Explore Destinations
          </Button>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { value: "7.8B", label: "People Connected", icon: Heart, color: "blue" },
            { value: "195", label: "Countries Mapped", icon: MapPin, color: "teal" },
            { value: "∞", label: "Adventures Awaiting", icon: Sparkles, color: "green" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-blue-300/30 hover:border-blue-200/50 transition-all duration-300 hover:scale-105 hover:bg-white/15 group cursor-default shadow-lg shadow-blue-500/20"
            >
              <div className="mb-3 flex justify-center">
                <stat.icon className={`w-8 h-8 text-${stat.color}-300 group-hover:text-${stat.color}-200 transition-colors`} />
              </div>
              <div className={`text-4xl font-bold text-${stat.color}-300 mb-2 group-hover:scale-110 transition-transform`}>
                {stat.value}
              </div>
              <div className="text-blue-200 font-medium tracking-wide group-hover:text-blue-100 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce cursor-pointer hover:scale-110 transition-transform">
          <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-teal-400 rounded-full animate-pulse" />
          <div className="w-6 h-10 border-2 border-blue-400/60 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1.5 h-4 bg-gradient-to-b from-blue-400 to-teal-400 rounded-full mt-2 animate-pulse" />
          </div>
          <span className="text-xs text-blue-300 font-medium tracking-wider">DISCOVER</span>
        </div>
      </div>

      {/* Enhanced CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
          50% { transform: translateY(-15px) rotate(180deg); opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.6; }
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
};