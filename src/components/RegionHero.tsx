import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

interface Stat {
    number: string;
    label: string;
    icon: any;
}

interface RegionHeroProps {
    title: string;
    subtitle: string;
    description: string;
    stats: Stat[];
    color: "cyan" | "emerald" | "purple"; // simple theme prop
}

export function RegionHero({ title, subtitle, description, stats, color }: RegionHeroProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const textY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    const colorClasses = {
        cyan: "text-bio-cyan from-bio-cyan/20 to-blue-500/20",
        emerald: "text-emerald-400 from-emerald-500/20 to-teal-500/20",
        purple: "text-purple-400 from-purple-500/20 to-pink-500/20",
    };

    const bgGradient = {
        cyan: "from-slate-900 via-blue-900/20 to-slate-950",
        emerald: "from-slate-900 via-emerald-900/20 to-slate-950",
        purple: "from-slate-900 via-purple-900/20 to-slate-950",
    };

    return (
        <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Dynamic Background */}
            <div className={`absolute inset-0 z-0 bg-gradient-to-br ${bgGradient[color]}`} />
            <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />

            {/* Animated Orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity }}
                className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[128px] bg-${color === 'emerald' ? 'emerald' : 'blue'}-500/10 z-0`}
            />

            <motion.div
                style={{ y: textY, opacity }}
                className="relative z-10 max-w-5xl mx-auto px-6 text-center pb-96 pt-32"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className={`inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm tracking-widest uppercase mb-6 ${colorClasses[color].split(' ')[0]}`}>
                        Explore &bull; Feel &bull; Heal
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display italic text-7xl md:text-9xl text-white mb-8 leading-[0.9]"
                >
                    {title} <br />
                    <span className="opacity-50 not-italic font-sans text-5xl md:text-7xl tracking-tighter font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10">
                        {subtitle}
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-16 font-light leading-relaxed"
                >
                    {description}
                </motion.p>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                            className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm"
                        >
                            <div className={`w-12 h-12 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-4 ${colorClasses[color].split(' ')[0]}`}>
                                <stat.icon size={24} />
                            </div>
                            <div className="text-3xl font-display text-white mb-1">{stat.number}</div>
                            <div className="text-xs uppercase tracking-widest text-white/40">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 z-10">
                <ArrowDown size={32} className="text-white" />
            </div>
        </div>
    );
}
