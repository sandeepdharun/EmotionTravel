import { Button } from "@/components/ui/button";
import { Heart, Compass } from "lucide-react";
import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";

function RotatingEarth() {
  const earthTexture = useTexture("https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg");

  return (
    <mesh rotation={[0, 0, 0]}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={earthTexture} />
    </mesh>
  );
}

export const HeroSection = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-black to-slate-950 -z-10" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Side - Text */}
        <div className="flex-1">
          {/* Tagline */}
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

          {/* Heading */}
          <h1 className="text-6xl md:text-7xl font-black text-white leading-[0.9] tracking-tight mb-8">
            Journey <br /> Beyond <br />
            <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 bg-clip-text text-transparent animate-pulse">
              Emotions
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto md:mx-0 text-lg text-gray-300 leading-relaxed mb-12">
            <span className="text-blue-400 font-semibold">Discover your emotional compass</span> and let your feelings
            guide you to <span className="text-teal-400 font-semibold">extraordinary destinations</span>. <br />
            Travel that <span className="text-emerald-400 font-semibold">heals, inspires & transforms</span> your soul.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start mb-16">
            <Button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-10 py-6 rounded-full shadow-lg hover:scale-105 transition-transform">
              Start Your Journey
            </Button>
            <Button
              variant="outline"
              className="border-2 border-blue-400/60 bg-white/10 text-white px-10 py-6 rounded-full hover:scale-105 transition-transform"
            >
              Discover Emotions
            </Button>
          </div>
        </div>

        {/* Right Side - 3D Earth */}
        <div className="w-full md:w-1/2 h-[400px]">
          <Canvas camera={{ position: [5, 0, 5], fov: 40 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Suspense fallback={null}>
              <RotatingEarth />
            </Suspense>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
            <Stars radius={100} depth={50} count={2000} factor={4} fade />
          </Canvas>
        </div>
      </div>
    </section>
  );
};
