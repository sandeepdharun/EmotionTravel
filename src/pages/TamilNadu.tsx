import { DestinationCard } from "@/components/DestinationCard";
import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";
import { RegionHero } from "@/components/RegionHero";
import { Award, Globe, Star, Sparkles, Calendar, Heart } from "lucide-react";
import { tamilNaduDestinations } from "@/data/destinations";
import { motion } from "framer-motion";

const TamilNadu = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-purple-500/30">
      <RegionHero
        title="Tamil Nadu"
        subtitle="Timeless Majesty"
        description="Journey through ancient temples, misty hill stations, and vibrant cultural heritage where every stone tells a story and every landscape heals the soul."
        color="purple"
        stats={[
          { number: "9+", label: "Sacred Destinations", icon: Award },
          { number: "2000+", label: "Years of Heritage", icon: Globe },
          { number: "100%", label: "Cultural Immersion", icon: Star }
        ]}
      />

      <div
        className="relative z-10 backdrop-blur-3xl -mt-[20vh] border-t border-white/10 rounded-t-[3rem] pb-20"
        style={{ background: "linear-gradient(135deg, #1a2847, #2d4a6f)" }}
      >

        {/* Cultural Essence */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                Cultural <span className="text-purple-400 italic">DNA</span>
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Discover the essence that makes Tamil Nadu a spiritual and cultural powerhouse
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "🏛️", title: "Dravidian Architecture", desc: "Marvel at towering gopurams and intricate stone carvings." },
                { icon: "🎭", title: "Classical Arts", desc: "Experience Bharatanatyam and Carnatic music." },
                { icon: "🌿", title: "Diverse Landscapes", desc: "From misty hills to pristine beaches." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-display text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-10 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display text-white mb-12 text-center">
              Never End <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 italic">Journeys</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tamilNaduDestinations.map((destination, index) => (
                <DestinationCard key={index} {...destination} />
              ))}
            </div>
          </div>
        </section>

        {/* Location Map */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display text-white mb-12 text-center">
              Explore <span className="text-purple-400 italic">Tamil Nadu</span>
            </h2>
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[500px] relative">
              <iframe
                src="https://maps.google.com/maps?q=Tamil+Nadu&t=p,r&z=7&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 pointer-events-none border-4 border-purple-500/20 rounded-3xl" />
            </div>
          </div>
        </section>

        {/* Travel Insights */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-12 rounded-3xl border border-purple-500/20 bg-gradient-to-b from-purple-900/10 to-slate-950/40">
              <h2 className="text-3xl font-display text-center mb-12">Travel Mastery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center mb-6 text-purple-400">
                    <Calendar className="w-5 h-5 mr-3" />
                    <h3 className="text-xl font-bold text-white">Best Timing</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex justify-between text-sm border-b border-white/10 pb-2">
                      <span className="text-white/70">Hill Stations</span>
                      <span className="text-purple-300">Apr - Jun</span>
                    </li>
                    <li className="flex justify-between text-sm border-b border-white/10 pb-2">
                      <span className="text-white/70">Coastal</span>
                      <span className="text-purple-300">Nov - Mar</span>
                    </li>
                    <li className="flex justify-between text-sm border-b border-white/10 pb-2">
                      <span className="text-white/70">Temples</span>
                      <span className="text-purple-300">Oct - Feb</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center mb-6 text-pink-400">
                    <Heart className="w-5 h-5 mr-3" />
                    <h3 className="text-xl font-bold text-white">Cultural Tips</h3>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-white/60">• Remove shoes before entering temples.</p>
                    <p className="text-sm text-white/60">• Dress modestly in spiritual towns.</p>
                    <p className="text-sm text-white/60">• Early morning visits vary for rituals.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default TamilNadu;