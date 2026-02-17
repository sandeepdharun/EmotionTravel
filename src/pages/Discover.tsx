import { ParticleBackground } from "@/components/ParticleBackground";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Heart, Compass, Globe, ArrowRight, Users, Calendar, Star, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const emotionalJourneys = [
  {
    emotion: "Stressed & Overwhelmed",
    icon: "😰",
    color: "from-blue-500/20 to-cyan-500/20",
    recommendations: ["Ooty Tea Gardens", "Yercaud Lake", "Kodaikanal"],
    description: "Find peace in nature's embrace",
    gradient: "bg-gradient-to-br from-blue-600/10 to-cyan-600/10"
  },
  {
    emotion: "Adventurous & Excited",
    icon: "🚀",
    color: "from-orange-500/20 to-red-500/20",
    recommendations: ["Mahabalipuram Exploration", "Kolli Hills Trek", "Courtallam Falls"],
    description: "Channel your energy into exploration",
    gradient: "bg-gradient-to-br from-orange-600/10 to-red-600/10"
  },
  {
    emotion: "Reflective & Contemplative",
    icon: "🧘",
    color: "from-purple-500/20 to-indigo-500/20",
    recommendations: ["Thanjavur Temples", "Kanyakumari Sunsets", "Rameswaram"],
    description: "Spaces for deep introspection",
    gradient: "bg-gradient-to-br from-purple-600/10 to-indigo-600/10"
  },
  {
    emotion: "Joyful & Celebratory",
    icon: "🎉",
    color: "from-yellow-500/20 to-pink-500/20",
    recommendations: ["Madurai Festivals", "Chennai Music Season", "Marina Beach"],
    description: "Amplify your happiness",
    gradient: "bg-gradient-to-br from-yellow-600/10 to-pink-600/10"
  }
];

const travelStats = [
  { number: "15K+", label: "Happy Travelers", icon: Users, color: "text-blue-400" },
  { number: "50+", label: "Destinations", icon: MapPin, color: "text-emerald-400" },
  { number: "98%", label: "Satisfaction", icon: Star, color: "text-yellow-400" },
  { number: "365", label: "Days Support", icon: Calendar, color: "text-purple-400" }
];

const Discover = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-950 text-white relative pt-24 overflow-hidden selection:bg-purple-500/30">

      {/* Cinematic Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 -z-20" />
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10 brightness-100 contrast-150" />
      <ParticleBackground theme="minimal" />

      {/* Floating Orbs */}
      <div className="fixed top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="fixed bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-block"
          >
            <Badge className="px-6 py-2 bg-white/5 backdrop-blur-md text-white border-white/10 text-sm tracking-widest uppercase rounded-full">
              <Compass className="w-4 h-4 mr-2" />
              Discover Your Journey
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display italic text-white mb-8 leading-[0.9]"
          >
            Your Emotions, <br />
            <span className="not-italic font-sans text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 font-bold tracking-tighter">
              Your Adventure
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 font-sans font-light leading-relaxed"
          >
            Every emotion tells a story, and every story deserves the perfect destination.
            Discover how our AI transforms your feelings into extraordinary travel experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/">
              <Button className="bg-white text-black hover:bg-white/90 px-10 py-6 text-lg rounded-full font-medium transition-all hover:scale-105">
                Start Your Emotional Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Emotional Journey Mapping */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
              Match Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 italic">Emotions</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto font-light">
              Our advanced AI analyzes your emotional state to create personalized travel experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emotionalJourneys.map((journey, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{journey.icon}</div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/90 mb-4`}>
                    {journey.emotion}
                  </span>
                  <p className="text-white/70 mb-6 text-sm leading-relaxed">
                    {journey.description}
                  </p>
                  <div className="space-y-2">
                    {journey.recommendations.map((rec, idx) => (
                      <div key={idx} className="bg-black/20 rounded-lg px-3 py-1.5 text-xs text-white/50">
                        {rec}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white/5 border-y border-white/5 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
              Your Journey in <span className="text-purple-400 italic">3 Steps</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Share Feelings",
                description: "Tell us how you're feeling and what kind of experience you're seeking.",
                icon: Heart,
                color: "text-pink-400"
              },
              {
                step: "02",
                title: "AI Analysis",
                description: "Our AI analyzes your emotions and suggests perfect destinations.",
                icon: Brain,
                color: "text-blue-400"
              },
              {
                step: "03",
                title: "Explore",
                description: "Embark on your personalized journey with full cultural insights.",
                icon: Globe,
                color: "text-emerald-400"
              }
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center relative"
                >
                  <div className="text-8xl font-display text-white/5 absolute -top-10 left-1/2 -translate-x-1/2 blur-sm select-none">
                    {step.step}
                  </div>
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 ${step.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-display text-white mb-4">{step.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {travelStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 text-center"
                >
                  <Icon className={`w-8 h-8 mx-auto mb-4 ${stat.color} opacity-80`} />
                  <div className="text-4xl font-display text-white mb-2">{stat.number}</div>
                  <div className="text-xs uppercase tracking-widest text-white/40">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regional Call to Action */}
      <section className="py-20 px-6 pb-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-center text-white mb-16">
            Featured <span className="italic text-orange-400">Regions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: "🏛️",
                title: "Heritage Tamil Nadu",
                description: "Ancient temples & culture.",
                link: "/tamil-nadu",
                color: "text-purple-400"
              },
              {
                emoji: "⛰️",
                title: "The Nilgiris",
                description: "Misty mountains & tea.",
                link: "/tamil-nadu",
                color: "text-emerald-400"
              },
              {
                emoji: "🌊",
                title: "Coastal Bliss",
                description: "Serene beaches & sunrises.",
                link: "/tamil-nadu", // pointing to TN for now as per updated scope
                color: "text-blue-400"
              }
            ].map((region, index) => (
              <Link key={index} to={region.link} className="block group">
                <div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent hover:bg-white/10 transition-all duration-300">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{region.emoji}</div>
                  <h3 className="text-2xl font-display text-white mb-2 group-hover:text-bio-gold transition-colors">{region.title}</h3>
                  <p className="text-white/60 text-sm mb-6">{region.description}</p>
                  <div className={`flex items-center text-sm font-medium ${region.color}`}>
                    Explore <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Discover;