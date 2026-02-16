import { DestinationCard } from "@/components/DestinationCard";
import { RegionHero } from "@/components/RegionHero";
import { Award, Globe, Star, Sparkles, Calendar, Heart } from "lucide-react";
import { keralaDestinations } from "@/data/destinations";
import { motion } from "framer-motion";

const Kerala = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white selection:bg-emerald-500/30">
            <RegionHero
                title="Kerala"
                subtitle="Healing Embrace"
                description="Drift through serene backwaters, breathe in misty hills, and discover pristine beaches where every moment whispers peace and every landscape nurtures your soul."
                color="emerald"
                stats={[
                    { number: "11+", label: "Healing Destinations", icon: Award },
                    { number: "100%", label: "Natural Beauty", icon: Globe },
                    { number: "Pure", label: "Eco-Tourism", icon: Star }
                ]}
            />

            <div
                className="relative z-10 backdrop-blur-3xl -mt-[20vh] border-t border-white/10 rounded-t-[3rem] pb-20"
                style={{ background: "linear-gradient(180deg, #0d4a4a, #1a6b5f)" }}
            >

                {/* Cultural Essence */}
                <section className="py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                                Natural <span className="text-emerald-400 italic">Soul</span>
                            </h2>
                            <p className="text-white/60 max-w-2xl mx-auto">
                                Discover the essence that makes Kerala a haven for healing and natural rejuvenation
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { icon: "🌊", title: "Backwaters", desc: "Glide through tranquil waterways where time slows down." },
                                { icon: "🏔️", title: "Misty Hills", desc: "Breathe in the cool mountain air of tea estates." },
                                { icon: "🏖️", title: "Pristine Beaches", desc: "Find peace on golden sands where waves sing." }
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
                            God's Own <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 italic">Country</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {keralaDestinations.map((destination, index) => (
                                <DestinationCard key={index} {...destination} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Location Map */}
                <section className="py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-display text-white mb-12 text-center">
                            Explore <span className="text-emerald-400 italic">Kerala</span>
                        </h2>
                        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[500px] relative">
                            <iframe
                                src="https://maps.google.com/maps?q=Kerala&t=p,r&z=7&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                            <div className="absolute inset-0 pointer-events-none border-4 border-emerald-500/20 rounded-3xl" />
                        </div>
                    </div>
                </section>

                {/* Travel Insights */}
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="p-8 md:p-12 rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-emerald-900/10 to-slate-950/40">
                            <h2 className="text-3xl font-display text-center mb-12">Kerala Travel Mastery</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <div className="flex items-center mb-6 text-emerald-400">
                                        <Calendar className="w-5 h-5 mr-3" />
                                        <h3 className="text-xl font-bold text-white">Best Timing</h3>
                                    </div>
                                    <ul className="space-y-4">
                                        <li className="flex justify-between text-sm border-b border-white/10 pb-2">
                                            <span className="text-white/70">Hill Stations</span>
                                            <span className="text-emerald-300">Sep - May</span>
                                        </li>
                                        <li className="flex justify-between text-sm border-b border-white/10 pb-2">
                                            <span className="text-white/70">Backwaters</span>
                                            <span className="text-emerald-300">Oct - Mar</span>
                                        </li>
                                        <li className="flex justify-between text-sm border-b border-white/10 pb-2">
                                            <span className="text-white/70">Beaches</span>
                                            <span className="text-emerald-300">Nov - Feb</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="flex items-center mb-6 text-teal-400">
                                        <Heart className="w-5 h-5 mr-3" />
                                        <h3 className="text-xl font-bold text-white">Cultural Wisdom</h3>
                                    </div>
                                    <div className="space-y-3">
                                        <p className="text-sm text-white/60">• Book Ayurveda in advance.</p>
                                        <p className="text-sm text-white/60">• Learn 'Namaskaram'.</p>
                                        <p className="text-sm text-white/60">• Respect eco-tourism rules.</p>
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

export default Kerala;
