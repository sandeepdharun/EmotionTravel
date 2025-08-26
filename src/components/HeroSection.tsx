import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Futuristic travel destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70" />
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-pink-500/40 to-purple-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/40 to-cyan-500/30 rounded-full blur-3xl animate-pulse" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 shadow-lg">
          <Heart className="w-4 h-4 text-pink-400" />
          <span className="text-white text-sm font-semibold tracking-wide">
            AI-Powered Emotional Travel
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 
            hover:tracking-wider transition-all duration-500 hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.7)] cursor-pointer">
            Travel Beyond Emotions
          </span>
          <span className="block text-white/90 mt-3 hover:text-cyan-300 transition-all duration-500 cursor-pointer">
            Discover. Heal. Transform.
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
          Let your feelings guide your journey. Our AI senses your emotions and
          curates personalized travel experiences that inspire and restore your soul.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-400 to-purple-500 border-0 text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all duration-300 px-10 py-6 text-lg font-semibold group"
          >
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/30 bg-white/10 backdrop-blur-lg text-white hover:bg-white/20 transition-all duration-300 px-10 py-6 text-lg font-semibold"
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 flex flex-col sm:flex-row justify-center gap-12">
          <div className="text-center group">
            <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              10K+
            </div>
            <div className="text-white/70">Happy Travelers</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
              150+
            </div>
            <div className="text-white/70">Destinations</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
              98%
            </div>
            <div className="text-white/70">Satisfaction Rate</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-7 h-12 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
