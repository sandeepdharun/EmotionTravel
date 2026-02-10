import { ParticleBackground } from "@/components/ParticleBackground";
import { DestinationCard } from "@/components/DestinationCard";
import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Star, Users, Globe, Award, Sparkles, ArrowRight } from "lucide-react";
import { tamilNaduDestinations } from "@/data/destinations";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const TamilNadu = () => {
  // Intersection observers for different sections
  const heroObserver = useIntersectionObserver();
  const cultureObserver = useIntersectionObserver({ threshold: 0.1 });
  const destinationsObserver = useIntersectionObserver({ threshold: 0.05 });
  const mapObserver = useIntersectionObserver({ threshold: 0.1 });
  const insightsObserver = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="hero-section bg-black text-white relative pt-16 overflow-hidden content-container">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.2),transparent_50%)]" />

      <ParticleBackground theme="forest" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-green-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />

      {/* Hero Section with Glassmorphism */}
      <section ref={heroObserver.ref} className="relative section-padding-sm parallax-container">
        <div className="max-w-7xl mx-auto">
          {/* Glass Hero Panel - Apple Style */}
          <div className={`glass-apple rounded-3xl p-12 md:p-16 text-center animate-on-scroll ${heroObserver.isVisible ? 'is-visible' : ''}`}>
            <div className="mb-8">
              <Badge className="mb-6 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md text-white border-white/30 text-lg">
                <MapPin className="w-5 h-5 mr-3" />
                Tamil Nadu Heritage
              </Badge>
            </div>

            <h1 className="text-6xl md:text-8xl font-cinematic text-white mb-8 leading-none">
              Tamil Nadu's
              <span className="block text-gradient-premium bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-flow bg-[length:200%_200%]">
                Timeless Majesty
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed font-luxury">
              Journey through ancient temples, misty hill stations, and vibrant cultural heritage where
              every stone tells a story and every landscape heals the soul.
            </p>

            {/* Call to Action - Glass Apple Style */}
            <div className={`mt-12 animate-on-scroll ${heroObserver.isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '400ms' }}>
              <Link to="/discover">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-6 text-xl font-semibold rounded-2xl hover:shadow-glow-purple transition-all duration-500 group hover:scale-105">
                  Explore Heritage
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Essence Section */}
      <section ref={cultureObserver.ref} className="section-padding-sm relative">
        <div className="max-w-7xl mx-auto">
          <div className={`glass-apple rounded-3xl p-12 animate-on-scroll ${cultureObserver.isVisible ? 'is-visible' : ''}`}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-cinematic text-white mb-6 flex items-center justify-center gap-4">
                <Sparkles className="w-10 h-10 text-purple-400" />
                Tamil Nadu's Cultural DNA
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto font-luxury">
                Discover the essence that makes Tamil Nadu a spiritual and cultural powerhouse
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🏛️",
                  title: "Dravidian Architecture",
                  description: "Marvel at towering gopurams and intricate stone carvings that have stood for millennia",
                  gradient: "from-purple-500/20 to-blue-500/20"
                },
                {
                  icon: "🎭",
                  title: "Classical Arts Heritage",
                  description: "Experience Bharatanatyam, Carnatic music, and traditional performances in their birthplace",
                  gradient: "from-pink-500/20 to-purple-500/20"
                },
                {
                  icon: "🌿",
                  title: "Diverse Landscapes",
                  description: "From misty hill stations to pristine beaches, nature's therapy for every emotion",
                  gradient: "from-green-500/20 to-blue-500/20"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`card-premium rounded-2xl p-8 text-center border-t border-white/10 animate-on-scroll ${cultureObserver.isVisible ? 'is-visible' : ''}`}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}
                >
                  <div className="text-5xl mb-6 drop-shadow-md transform transition-transform duration-500 hover:scale-110">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4 drop-shadow-md">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed font-luxury text-[0.95rem]">{item.description}</p>
                  <div className={`mt-6 h-1 w-full bg-gradient-to-r ${item.gradient} rounded-full opacity-80`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section - NO GLASS EFFECTS on Cards */}
      <section ref={destinationsObserver.ref} className="section-padding-sm relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-5xl md:text-6xl font-cinematic text-white mb-8 animate-on-scroll ${destinationsObserver.isVisible ? 'is-visible' : ''}`}>
              Sacred
              <span className="text-gradient-luxury bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Emotional Journeys</span>
            </h2>
            <p className={`text-xl text-white/80 max-w-4xl mx-auto font-luxury animate-on-scroll delay-200 ${destinationsObserver.isVisible ? 'is-visible' : ''}`}>
              Each destination in Tamil Nadu offers a unique emotional experience, from peaceful hill retreats to spiritually enriching temple towns that awaken your inner self.
            </p>
          </div>

          {/* Destinations Grid - Pure Cards, No Glass Wrapper */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tamilNaduDestinations.map((destination, index) => (
              <div
                key={index}
                className={`animate-on-scroll ${destinationsObserver.isVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {/* Standard Destination Card without extra wrappers */}
                <DestinationCard {...destination} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section - Glass Apple Applied */}
      <section ref={mapObserver.ref} className="section-padding-sm relative">
        <div className="max-w-7xl mx-auto">
          <div className={`glass-apple rounded-3xl p-12 animate-on-scroll ${mapObserver.isVisible ? 'is-visible' : ''}`}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-cinematic text-white mb-6">
                Explore Tamil Nadu
                <span className="text-gradient-cinematic bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"> on Map</span>
              </h2>
              <p className="text-xl text-white/80 font-luxury">
                Navigate through temples, hill stations, beaches, and cultural sites across the land of ancient wisdom
              </p>
            </div>

            <div className="glass rounded-2xl p-2 shadow-luxury">
              <GoogleMapEmbed
                region="Tamil Nadu"
                embedUrl="https://www.google.com/maps?q=Tamil+Nadu&output=embed"
                searchBounds={{ lat: 11.1271, lng: 78.6569, radius: 50000 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Travel Insights Section - Glass Apple Applied */}
      <section ref={insightsObserver.ref} className="section-padding-xs relative">
        <div className="max-w-6xl mx-auto">
          <div className={`glass-apple rounded-3xl p-12 bg-gradient-to-br from-purple-600/30 to-blue-600/30 animate-on-scroll ${insightsObserver.isVisible ? 'is-visible' : ''}`}>
            <h2 className="text-4xl font-cinematic text-white mb-12 text-center">Tamil Nadu Travel Mastery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-purple-400" />
                  Perfect Timing
                </h3>
                <div className="space-y-4">
                  {[
                    { period: "Hill Stations", time: "April-June", desc: "Cool mountain air, perfect for meditation" },
                    { period: "Coastal Areas", time: "November-March", desc: "Golden beaches, gentle waves" },
                    { period: "Temple Towns", time: "October-February", desc: "Comfortable spiritual exploration" }
                  ].map((item, index) => (
                    <div key={index} className="glass rounded-xl p-4 hover-glow">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-white">{item.period}</span>
                        <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30">{item.time}</Badge>
                      </div>
                      <p className="text-white/70 text-sm font-luxury">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Star className="w-6 h-6 mr-3 text-blue-400" />
                  Cultural Wisdom
                </h3>
                <div className="space-y-4">
                  {[
                    { tip: "Temple Etiquette", desc: "Remove shoes, dress modestly, photography rules vary" },
                    { tip: "Local Connection", desc: "Learn basic Tamil greetings for authentic interactions" },
                    { tip: "Spiritual Timing", desc: "Early morning temple visits offer peaceful experiences" }
                  ].map((item, index) => (
                    <div key={index} className="glass rounded-xl p-4 hover-glow">
                      <div className="font-semibold text-white mb-2">{item.tip}</div>
                      <p className="text-white/70 text-sm font-luxury">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TamilNadu;