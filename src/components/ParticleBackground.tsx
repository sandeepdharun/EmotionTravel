import { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  theme?: "ocean" | "forest" | "sunset" | "minimal";
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  type: 'plane' | 'compass' | 'heart' | 'map' | 'camera' | 'star';
  rotation: number;
  rotationSpeed: number;
  pulsePhase: number;
}

export const ParticleBackground = ({ theme = "minimal" }: ParticleBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  const getThemeColors = () => {
    switch (theme) {
      case "ocean":
        return {
          primary: 'rgba(59, 130, 246, 0.6)',
          secondary: 'rgba(147, 197, 253, 0.4)',
          accent: 'rgba(34, 197, 94, 0.3)'
        };
      case "forest":
        return {
          primary: 'rgba(34, 197, 94, 0.6)',
          secondary: 'rgba(134, 239, 172, 0.4)',
          accent: 'rgba(59, 130, 246, 0.3)'
        };
      case "sunset":
        return {
          primary: 'rgba(251, 146, 60, 0.6)',
          secondary: 'rgba(254, 215, 170, 0.4)',
          accent: 'rgba(239, 68, 68, 0.3)'
        };
      default:
        return {
          primary: 'rgba(99, 102, 241, 0.5)',
          secondary: 'rgba(167, 139, 250, 0.3)',
          accent: 'rgba(236, 72, 153, 0.2)'
        };
    }
  };

  const createParticle = (canvas: HTMLCanvasElement): Particle => {
    const types: Particle['type'][] = ['plane', 'compass', 'heart', 'map', 'camera', 'star'];
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 20 + 10,
      opacity: Math.random() * 0.6 + 0.2,
      type: types[Math.floor(Math.random() * types.length)],
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      pulsePhase: Math.random() * Math.PI * 2
    };
  };

  const drawTravelIcon = (
    ctx: CanvasRenderingContext2D,
    particle: Particle,
    colors: ReturnType<typeof getThemeColors>
  ) => {
    ctx.save();
    ctx.translate(particle.x, particle.y);
    ctx.rotate(particle.rotation);
    ctx.globalAlpha = particle.opacity;

    const size = particle.size;
    const pulseSize = size + Math.sin(particle.pulsePhase) * 3;

    switch (particle.type) {
      case 'plane':
        // Airplane icon
        ctx.fillStyle = colors.primary;
        ctx.beginPath();
        ctx.moveTo(-pulseSize/2, 0);
        ctx.lineTo(pulseSize/2, -pulseSize/4);
        ctx.lineTo(pulseSize/3, 0);
        ctx.lineTo(pulseSize/2, pulseSize/4);
        ctx.closePath();
        ctx.fill();
        // Wings
        ctx.beginPath();
        ctx.moveTo(-pulseSize/4, -pulseSize/6);
        ctx.lineTo(-pulseSize/2, -pulseSize/3);
        ctx.lineTo(0, -pulseSize/6);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(-pulseSize/4, pulseSize/6);
        ctx.lineTo(-pulseSize/2, pulseSize/3);
        ctx.lineTo(0, pulseSize/6);
        ctx.closePath();
        ctx.fill();
        break;

      case 'compass':
        // Compass icon
        ctx.strokeStyle = colors.secondary;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, pulseSize/2, 0, Math.PI * 2);
        ctx.stroke();
        // Needle
        ctx.fillStyle = colors.accent;
        ctx.beginPath();
        ctx.moveTo(0, -pulseSize/2);
        ctx.lineTo(-pulseSize/8, 0);
        ctx.lineTo(0, pulseSize/2);
        ctx.lineTo(pulseSize/8, 0);
        ctx.closePath();
        ctx.fill();
        break;

      case 'heart':
        // Heart icon
        ctx.fillStyle = colors.accent;
        ctx.beginPath();
        ctx.moveTo(0, pulseSize/4);
        ctx.bezierCurveTo(-pulseSize/2, -pulseSize/4, -pulseSize/2, pulseSize/8, 0, pulseSize/2);
        ctx.bezierCurveTo(pulseSize/2, pulseSize/8, pulseSize/2, -pulseSize/4, 0, pulseSize/4);
        ctx.fill();
        break;

      case 'map':
        // Map pin icon
        ctx.fillStyle = colors.primary;
        ctx.beginPath();
        ctx.arc(0, -pulseSize/4, pulseSize/3, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(0, -pulseSize/4 + pulseSize/3);
        ctx.lineTo(-pulseSize/6, pulseSize/2);
        ctx.lineTo(pulseSize/6, pulseSize/2);
        ctx.closePath();
        ctx.fill();
        break;

      case 'camera':
        // Camera icon
        ctx.fillStyle = colors.secondary;
        ctx.fillRect(-pulseSize/2, -pulseSize/3, pulseSize, pulseSize/1.5);
        ctx.fillStyle = colors.primary;
        ctx.beginPath();
        ctx.arc(0, 0, pulseSize/4, 0, Math.PI * 2);
        ctx.fill();
        break;

      case 'star':
        // Star icon
        ctx.fillStyle = colors.accent;
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
          const angle = (i * Math.PI * 2) / 5 - Math.PI / 2;
          const x = Math.cos(angle) * pulseSize/2;
          const y = Math.sin(angle) * pulseSize/2;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
          
          const innerAngle = ((i + 0.5) * Math.PI * 2) / 5 - Math.PI / 2;
          const innerX = Math.cos(innerAngle) * pulseSize/4;
          const innerY = Math.sin(innerAngle) * pulseSize/4;
          ctx.lineTo(innerX, innerY);
        }
        ctx.closePath();
        ctx.fill();
        break;
    }

    ctx.restore();
  };

  const updateParticle = (particle: Particle, canvas: HTMLCanvasElement, mouseX: number, mouseY: number) => {
    // Mouse interaction
    const dx = mouseX - particle.x;
    const dy = mouseY - particle.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < 100) {
      const force = (100 - distance) / 100;
      particle.vx += (dx / distance) * force * 0.01;
      particle.vy += (dy / distance) * force * 0.01;
    }

    // Update position
    particle.x += particle.vx;
    particle.y += particle.vy;
    
    // Update rotation and pulse
    particle.rotation += particle.rotationSpeed;
    particle.pulsePhase += 0.05;
    
    // Boundary wrapping
    if (particle.x < -50) particle.x = canvas.width + 50;
    if (particle.x > canvas.width + 50) particle.x = -50;
    if (particle.y < -50) particle.y = canvas.height + 50;
    if (particle.y > canvas.height + 50) particle.y = -50;
    
    // Damping
    particle.vx *= 0.99;
    particle.vy *= 0.99;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    // Initialize particles
    particlesRef.current = Array.from({ length: 15 }, () => createParticle(canvas));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const colors = getThemeColors();
      const { x: mouseX, y: mouseY } = mouseRef.current;

      particlesRef.current.forEach(particle => {
        updateParticle(particle, canvas, mouseX, mouseY);
        drawTravelIcon(ctx, particle, colors);
      });

      // Draw connections between nearby particles
      ctx.strokeStyle = colors.primary;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.1;
      
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [theme]);

  const getThemeGradient = () => {
    switch (theme) {
      case "ocean":
        return "bg-gradient-to-br from-blue-500/5 to-blue-300/5";
      case "forest":
        return "bg-gradient-to-br from-green-500/5 to-green-300/5";
      case "sunset":
        return "bg-gradient-to-br from-orange-500/5 to-orange-300/5";
      default:
        return "bg-gradient-to-br from-purple-500/3 to-purple-300/3";
    }
  };

  return (
    <div className={`absolute inset-0 -z-10 ${getThemeGradient()}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: 'none' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/10" />
    </div>
  );
};