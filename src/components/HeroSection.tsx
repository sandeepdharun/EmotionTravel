import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Compass, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

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
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce delay-300">
        <div className="p-4 bg-white/20 backdrop-blur-md rounded-full shadow-glow">
          <Heart className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="absolute top-32 right-20 animate-bounce delay-700">
        <div className="p-4 bg-white/20 backdrop-blur-md rounded-full shadow-glow">
          <Compass className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="absolute bottom-32 left-20 animate-bounce delay-1000">
        <div className="p-4 bg-white/20 backdrop-blur-md rounded-full shadow-glow">
          <MapPin className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
          <Heart className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-medium">AI-Powered Emotional Travel</span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Travel With Your
          <span className="block bg-gradient-to-r from-sunset to-sunset-light bg-clip-text text-transparent">
            Emotions
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover destinations that resonate with your feelings. Our AI understands your emotional state 
          and crafts personalized journeys that heal, inspire, and transform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-ocean border-0 text-white hover:shadow-glow transition-all duration-300 px-8 py-6 text-lg font-semibold group"
          >
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300 px-8 py-6 text-lg font-semibold"
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-8 sm:gap-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">10K+</div>
            <div className="text-white/70">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">150+</div>
            <div className="text-white/70">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">98%</div>
            <div className="text-white/70">Satisfaction Rate</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};