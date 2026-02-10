import { ParticleBackground } from "@/components/ParticleBackground";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Heart, Compass, Globe, ArrowRight, Users, Calendar, Star, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const emotionalJourneys = [
  {
    emotion: "Stressed & Overwhelmed",
    icon: "😰",
    color: "from-blue-500/20 to-cyan-500/20",
    recommendations: ["Ooty Tea Gardens", "Yercaud Lake", "Kodaikanal"],
    description: "Find peace in nature's embrace",
    gradient: "bg-gradient-to-br from-blue-600/30 to-cyan-600/30"
  },
  {
    emotion: "Adventurous & Excited",
    icon: "🚀",
    color: "from-orange-500/20 to-red-500/20",
    recommendations: ["Mahabalipuram Exploration", "Kolli Hills Trek", "Courtallam Falls"],
    description: "Channel your energy into exploration",
    gradient: "bg-gradient-to-br from-orange-600/30 to-red-600/30"
  },
  {
    emotion: "Reflective & Contemplative",
    icon: "🧘",
    color: "from-purple-500/20 to-indigo-500/20",
    recommendations: ["Thanjavur Temples", "Kanyakumari Sunsets", "Rameswaram"],
    description: "Spaces for deep introspection",
    gradient: "bg-gradient-to-br from-purple-600/30 to-indigo-600/30"
  },
  {
    emotion: "Joyful & Celebratory",
    icon: "🎉",
    color: "from-yellow-500/20 to-pink-500/20",
    recommendations: ["Madurai Festivals", "Chennai Music Season", "Marina Beach"],
    description: "Amplify your happiness",
    gradient: "bg-gradient-to-br from-yellow-600/30 to-pink-600/30"
  }
];

const travelStats = [
  { number: "15K+", label: "Happy Travelers", icon: Users, color: "text-blue-400" },
  { number: "50+", label: "Destinations", icon: MapPin, color: "text-emerald-400" },
  { number: "98%", label: "Satisfaction", icon: Star, color: "text-yellow-400" },
  { number: "365", label: "Days Support", icon: Calendar, color: "text-purple-400" }
];

const Discover = () => {
  // Intersection observers for different sections
  const heroObserver = useIntersectionObserver();
  const emotionalObserver = useIntersectionObserver({ threshold: 0.1 });
  const howItWorksObserver = useIntersectionObserver({ threshold: 0.1 });
  const statsObserver = useIntersectionObserver({ threshold: 0.1 });
  const regionsObserver = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="hero-section bg-black text-white relative pt-16 overflow-hidden content-container">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.2),transparent_50%)]" />

      <ParticleBackground theme="minimal" />

      {/* Floating Elements */}
      <div className="absolute top-32 right-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-xl animate-float" />
      <div className="absolute top-60 left-16 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-40 right-1/4 w-36 h-36 bg-pink-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />

      {/* Hero Section with Glassmorphism */}
      <section ref={heroObserver.ref} className="relative section-padding-sm parallax-container">
        <div className="max-w-7xl mx-auto">
          {/* Glass Hero Panel - Apple Style */}
          <div className={`glass-apple rounded-3xl p-12 md:p-16 text-center animate-on-scroll ${heroObserver.isVisible ? 'is-visible' : ''}`}>
            <div className="mb-8">
              <Badge className="mb-6 px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-md text-white border-white/30 text-lg">
                <Compass className="w-5 h-5 mr-3" />
                Discover Your Journey
              </Badge>
            </div>

            <h1 className="text-6xl md:text-8xl font-cinematic text-white mb-8 leading-none">
              Your Emotions,
              <span className="block text-gradient-premium bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-flow bg-[length:200%_200%]">
                Your Adventure
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed font-luxury">
              Every emotion tells a story, and every story deserves the perfect destination.
              Discover how our AI transforms your feelings into extraordinary travel experiences.
            </p>

            <Link to="/">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-6 text-xl font-semibold rounded-2xl hover:shadow-glow-purple transition-all duration-500 group hover:scale-105">
                Start Your Emotional Journey
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Emotional Journey Mapping */}
      <section ref={emotionalObserver.ref} className="section-padding-sm relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-5xl md:text-6xl font-cinematic text-white mb-8 animate-on-scroll ${emotionalObserver.isVisible ? 'is-visible' : ''}`}>
              How We Match Your
              <span className="text-gradient-cinematic bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent"> Emotions</span>
            </h2>
            <p className={`text-xl text-white/80 max-w-4xl mx-auto font-luxury animate-on-scroll delay-200 ${emotionalObserver.isVisible ? 'is-visible' : ''}`}>
              Our advanced AI analyzes your emotional state and cultural preferences to create personalized travel experiences that heal and inspire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emotionalJourneys.map((journey, index) => (
              <div
                key={index}
                className={`glass-apple rounded-2xl p-8 hover-lift group animate-on-scroll ${emotionalObserver.isVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}
              >
                <div className="text-center">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{journey.icon}</div>
                  <Badge className={`mb-6 px-4 py-2 bg-gradient-to-r ${journey.color} backdrop-blur-md text-white border-white/20`}>
                    {journey.emotion}
                  </Badge>
                  <p className="text-white/80 mb-6 font-luxury text-lg">
                    {journey.description}
                  </p>
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-white">Perfect Destinations:</p>
                    {journey.recommendations.map((rec, idx) => (
                      <div key={idx} className="glass rounded-full px-4 py-2 text-sm text-white/80 hover:text-white transition-colors">
                        {rec}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={howItWorksObserver.ref} className="section-padding-sm relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-5xl md:text-6xl font-cinematic text-white mb-8 animate-on-scroll ${howItWorksObserver.isVisible ? 'is-visible' : ''}`}>
              Your Journey in
              <span className="text-gradient-luxury bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> 3 Cinematic Steps</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Share Your Feelings",
                description: "Tell us how you're feeling and what kind of experience you're seeking through our intuitive emotion selector.",
                icon: Heart,
                gradient: "from-pink-600/30 to-rose-600/30",
                iconColor: "text-pink-400"
              },
              {
                step: "2",
                title: "Get AI Recommendations",
                description: "Our advanced AI analyzes your emotions and suggests destinations that perfectly match your current state of mind.",
                icon: Brain,
                gradient: "from-blue-600/30 to-indigo-600/30",
                iconColor: "text-blue-400"
              },
              {
                step: "3",
                title: "Explore & Transform",
                description: "Embark on your personalized journey with cultural insights, safety information, and emotional support throughout.",
                icon: Globe,
                gradient: "from-emerald-600/30 to-teal-600/30",
                iconColor: "text-emerald-400"
              }
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className={`text-center animate-on-scroll ${howItWorksObserver.isVisible ? 'is-visible' : ''}`}
                  style={{ transitionDelay: `${index * 200 + 200}ms` }}
                >
                  <div className={`card-premium rounded-3xl p-12 bg-gradient-to-br ${step.gradient} group h-full relative border border-white/10`}>
                    {/* Step Number */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-luxury">
                        <span className="text-xl font-bold text-white shadow-black/50 drop-shadow-md">{step.step}</span>
                      </div>
                    </div>

                    <div className={`w-20 h-20 glass-premium rounded-2xl flex items-center justify-center mx-auto mb-8 transition-transform duration-500`}>
                      <Icon className={`w-10 h-10 ${step.iconColor} drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6 drop-shadow-md tracking-wide">{step.title}</h3>
                    <p className="text-gray-100/90 leading-relaxed font-luxury text-[1.05rem] font-medium drop-shadow-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section ref={statsObserver.ref} className="section-padding-sm relative">
        <div className="max-w-7xl mx-auto">
          <div className={`glass-apple rounded-3xl p-16 text-center bg-gradient-to-br from-indigo-600/30 to-purple-600/30 animate-on-scroll ${statsObserver.isVisible ? 'is-visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-cinematic text-white mb-16">Trusted by Thousands of Emotional Travelers</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {travelStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className={`glass-premium rounded-2xl p-8 hover-glow group animate-on-scroll ${statsObserver.isVisible ? 'is-visible' : ''}`}
                    style={{ transitionDelay: `${index * 100 + 400}ms` }}
                  >
                    <Icon className={`w-10 h-10 mx-auto mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                    <div className="text-4xl font-bold text-white mb-3">{stat.number}</div>
                    <div className="text-white/80 font-luxury">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Regional Spotlights */}
      <section ref={regionsObserver.ref} className="section-padding-sm relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-5xl md:text-6xl font-cinematic text-white mb-8 animate-on-scroll ${regionsObserver.isVisible ? 'is-visible' : ''}`}>
              Explore Our
              <span className="text-gradient-luxury bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent"> Featured Regions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                emoji: "🏛️",
                title: "Heritage Tamil Nadu",
                description: "Ancient temples, cultural heritage, and architectural marvels that speak to your soul.",
                link: "/tamil-nadu",
                gradient: "from-purple-600/30 to-indigo-600/30",
                buttonGradient: "from-purple-600 to-indigo-600"
              },
              {
                emoji: "⛰️",
                title: "The Nilgiris",
                description: "Misty mountains, tea gardens, and cool climate for complete emotional rejuvenation.",
                link: "/tamil-nadu",
                gradient: "from-emerald-600/30 to-teal-600/30",
                buttonGradient: "from-emerald-600 to-teal-600"
              },
              {
                emoji: "🌊",
                title: "Coastal Tamil Nadu",
                description: "Serene beaches, spiritual sunrises, and calming ocean waves for inner peace.",
                link: "/tamil-nadu",
                gradient: "from-blue-600/30 to-cyan-600/30",
                buttonGradient: "from-blue-600 to-cyan-600"
              }
            ].map((region, index) => (
              <div
                key={index}
                className={`glass-apple rounded-3xl overflow-hidden hover-lift group animate-on-scroll ${regionsObserver.isVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${index * 200 + 200}ms` }}
              >
                <div className={`p-12 text-center bg-gradient-to-br ${region.gradient} h-full`}>
                  <div className="text-7xl mb-8 group-hover:scale-110 transition-transform duration-500">{region.emoji}</div>
                  <h3 className="text-3xl font-cinematic text-white mb-6">{region.title}</h3>
                  <p className="text-white/80 mb-8 leading-relaxed font-luxury text-lg">
                    {region.description}
                  </p>
                  <Link to={region.link}>
                    <Button className={`bg-gradient-to-r ${region.buttonGradient} text-white px-8 py-4 text-lg font-semibold rounded-xl hover:shadow-luxury transition-all duration-500 group-hover:scale-105`}>
                      Explore {region.title}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Discover;