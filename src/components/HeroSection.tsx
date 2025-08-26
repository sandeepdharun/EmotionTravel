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
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Travel with{" "}
          <span className="relative group inline-block">
            <span className="bg-gradient-to-r from-sky-400 to-blue-300 bg-clip-text text-transparent transition-colors duration-300">
              Emotions
            </span>
            {/* Underline on hover */}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-sky-300 transition-all duration-300 group-hover:w-full" />
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
          Discover destinations that resonate with your feelings. 
          Our AI understands your emotional state and creates 
          journeys that inspire, heal, and transform.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-sky-500 hover:bg-sky-600 text-white transition-all duration-300 px-8 py-6 text-lg font-semibold"
          >
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border border-white/40 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300 px-8 py-6 text-lg font-semibold"
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-10">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">10K+</div>
            <div className="text-white/70">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">150+</div>
            <div className="text-white/70">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">98%</div>
            <div className="text-white/70">Satisfaction Rate</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
