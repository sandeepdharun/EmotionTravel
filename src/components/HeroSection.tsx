import { Button } from "@/components/ui/button";
import { Heart, Compass } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import * as THREE from "three";

export const HeroSection = () => {
  const [isHovering, setIsHovering] = useState(false);
  const earthContainerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const earthRef = useRef<THREE.Mesh | null>(null);
  const glowRef = useRef<THREE.Mesh | null>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    if (!earthContainerRef.current) return;

    // Initialize Three.js
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(500, 500);
    renderer.setPixelRatio(window.devicePixelRatio);
    earthContainerRef.current.appendChild(renderer.domElement);

    // Create Earth
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    
    // Create Earth material with gradient colors
    const material = new THREE.MeshPhongMaterial({
      color: 0x1E90FF,
      specular: 0x111111,
      shininess: 25,
    });

    const earth = new THREE.Mesh(geometry, material);
    earthRef.current = earth;
    scene.add(earth);

    // Add land masses
    const landGeometry = new THREE.SphereGeometry(2.01, 32, 32);
    const landMaterial = new THREE.MeshPhongMaterial({
      color: 0x228B22,
      transparent: true,
      opacity: 0.5,
      wireframe: true
    });
    
    const land = new THREE.Mesh(landGeometry, landMaterial);
    scene.add(land);

    // Add Earth glow - will be animated on hover
    const glowGeometry = new THREE.SphereGeometry(2.2, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x0077BE,
      transparent: true,
      opacity: 0.2
    });
    
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glowRef.current = glow;
    scene.add(glow);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x333333);
    scene.add(ambientLight);

    // Add directional light (sun)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Add point lights for enhanced glow effect
    const pointLight1 = new THREE.PointLight(0x4FC3F7, 1, 20);
    pointLight1.position.set(3, 3, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x4FC3F7, 1, 20);
    pointLight2.position.set(-3, -3, -3);
    scene.add(pointLight2);

    // Animation
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      earth.rotation.y += 0.005;
      land.rotation.y += 0.005;
      glow.rotation.y += 0.005;
      
      // Pulse glow effect
      if (glowRef.current) {
        const glowIntensity = 0.2 + Math.sin(Date.now() * 0.002) * 0.05;
        (glowRef.current.material as THREE.MeshBasicMaterial).opacity = glowIntensity;
      }
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      renderer.setSize(500, 500);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationRef.current);
      if (earthContainerRef.current && renderer.domElement) {
        earthContainerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Handle hover effect for Earth
  useEffect(() => {
    if (!glowRef.current || !earthRef.current) return;

    if (isHovering) {
      // Enhanced glow on hover
      (glowRef.current.material as THREE.MeshBasicMaterial).color.set(0x00BFFF);
      (glowRef.current.material as THREE.MeshBasicMaterial).opacity = 0.4;
      
      // Scale up earth slightly
      earthRef.current.scale.set(1.05, 1.05, 1.05);
    } else {
      // Return to normal state
      (glowRef.current.material as THREE.MeshBasicMaterial).color.set(0x0077BE);
      (glowRef.current.material as THREE.MeshBasicMaterial).opacity = 0.2;
      
      // Return to normal scale
      earthRef.current.scale.set(1, 1, 1);
    }
  }, [isHovering]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Space Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-black to-slate-950 -z-10" />

      {/* Earth Glow in Center */}
      <div className="absolute left-1/2 top-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-600/40 to-green-400/30 blur-3xl animate-pulse" />

      {/* 3D Earth Container with Hover Effect */}
      <div 
        ref={earthContainerRef} 
        className="absolute right-10 top-1/2 -translate-y-1/2 w-[500px] h-[500px] z-0 hidden lg:block transition-all duration-500 cursor-pointer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{
          filter: isHovering ? 'drop-shadow(0 0 25px rgba(0, 191, 255, 0.7))' : 'none',
          transform: isHovering ? 'translateY(-50%) scale(1.05)' : 'translateY(-50%) scale(1)'
        }}
      />

      {/* Hover Glow Effect */}
      <div 
        className="absolute right-10 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/30 blur-3xl z-0 hidden lg:block transition-all duration-700 opacity-0"
        style={{
          opacity: isHovering ? 1 : 0,
          transform: isHovering ? 'translateY(-50%) scale(1.1)' : 'translateY(-50%) scale(1)'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Tagline */}
        <div
          className="mb-12 inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-blue-400/50 shadow-lg hover:scale-105 transition-transform cursor-pointer group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{
            boxShadow: isHovering ? '0 0 20px rgba(0, 191, 255, 0.5)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Heart className="w-5 h-5 text-blue-400 transition-colors group-hover:text-cyan-300" />
          <span className="text-white text-sm font-medium tracking-wide transition-colors group-hover:text-cyan-100">
            Emotional Travel Intelligence • Feel-First Journey
          </span>
          <Compass className="w-4 h-4 text-teal-400 animate-pulse transition-colors group-hover:text-cyan-300" />
        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tight mb-8">
          Journey <br /> Beyond <br />
          <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 bg-clip-text text-transparent animate-pulse">
            Emotions
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed mb-12">
          <span className="text-blue-400 font-semibold transition-colors hover:text-cyan-300 cursor-pointer">Discover your emotional compass</span> and let your feelings
          guide you to <span className="text-teal-400 font-semibold transition-colors hover:text-cyan-300 cursor-pointer">extraordinary destinations</span>. <br />
          Travel that <span className="text-emerald-400 font-semibold transition-colors hover:text-cyan-300 cursor-pointer">heals, inspires & transforms</span> your soul.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button 
            className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-10 py-6 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
            style={{
              boxShadow: isHovering ? '0 0 25px rgba(0, 191, 255, 0.6)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}
          >
            Start Your Journey
          </Button>
          <Button
            variant="outline"
            className="border-2 border-blue-400/60 bg-white/10 text-white px-10 py-6 rounded-full hover:scale-105 transition-all duration-300"
            style={{
              boxShadow: isHovering ? '0 0 20px rgba(0, 191, 255, 0.4)' : 'none',
              borderColor: isHovering ? 'rgba(0, 191, 255, 0.8)' : 'rgba(96, 165, 250, 0.6)'
            }}
          >
            Discover Emotions
          </Button>
        </div>
      </div>
    </section>
  ); 
};  