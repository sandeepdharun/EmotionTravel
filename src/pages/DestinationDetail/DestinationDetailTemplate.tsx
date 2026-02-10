import React, { useState, useMemo } from "react";
import { Destination } from "@/data/destinations";
import { StickyActions } from "./components/StickyActions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    MapPin,
    Wind,
    CloudRain,
    Users,
    Clock,
    ArrowRight,
    Sparkles,
    Search
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";

interface DestinationDetailTemplateProps {
    destination: Destination;
    currentPlan?: any;
    isSelected: boolean;
    progress: number;
    rentText: string;
    handlers: {
        addToPlan: () => void;
        startJourney: () => void;
        completeJourney: () => void;
    };
    onBack: () => void;
}

export const DestinationDetailTemplate: React.FC<DestinationDetailTemplateProps> = ({
    destination,
    currentPlan,
    isSelected,
    progress,
    rentText,
    handlers,
    onBack
}) => {
    // Extract unique emotions from tourist places
    const moods = useMemo(() => {
        const allEmotions = destination.touristPlaces?.map(p => p.emotion?.split(" / ")[0] || "Explore") || [];
        return ["All", ...Array.from(new Set(allEmotions))];
    }, [destination]);

    const [activeMood, setActiveMood] = useState("All");

    // Filter places based on active mood
    const filteredPlaces = useMemo(() => {
        if (activeMood === "All") return destination.touristPlaces;
        return destination.touristPlaces?.filter(p => p.emotion?.startsWith(activeMood));
    }, [destination, activeMood]);

    return (
        <div className="min-h-screen bg-[#FDFCF8] text-slate-800 font-sans selection:bg-orange-100">
            {/* 1. Hero Section - Cinematic & Emotional */}
            <div className="relative h-[85vh] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
                </div>

                {/* Floating Back Button */}
                <div className="absolute top-28 left-6 md:left-20 z-20">
                    <button
                        onClick={onBack}
                        className="group flex items-center gap-3 bg-black/20 backdrop-blur-md hover:bg-black/40 text-white px-5 py-2.5 rounded-full border border-white/10 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                        <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium text-sm tracking-wide">Back to Tamil Nadu</span>
                    </button>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-24">
                    <div className="max-w-4xl space-y-6">


                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-7xl md:text-9xl font-serif text-white leading-none drop-shadow-xl"
                        >
                            {destination.name}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-3xl text-white/90 font-light max-w-2xl leading-relaxed font-serif italic drop-shadow-md pl-1"
                        >
                            "{destination.description}"
                        </motion.p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-24">
                <div className="grid lg:grid-cols-12 gap-16">
                    {/* Main Content - Journal Flow */}
                    <div className="lg:col-span-8 space-y-24">

                        {/* 2. Emotion-Driven Exploration */}
                        <section>
                            <div className="mb-16 text-center">
                                <span className="text-orange-900/60 font-semibold tracking-[0.2em] uppercase text-[10px] mb-4 block">Curated Experience</span>
                                <h2 className="text-5xl font-serif text-slate-900 mb-4">How do you want to feel?</h2>
                                <p className="text-slate-500 max-w-lg mx-auto text-lg font-light italic">Select a mood to filter {destination.name}'s hidden gems.</p>
                            </div>

                            <div className="flex flex-wrap justify-center gap-3 mb-16">
                                {moods.map((mood) => (
                                    <button
                                        key={mood}
                                        onClick={() => setActiveMood(mood)}
                                        className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeMood === mood
                                            ? "bg-slate-900 text-white shadow-lg scale-105"
                                            : "bg-[#F4F2EB] text-slate-500 hover:bg-[#EBE9E0] hover:text-slate-700"
                                            }`}
                                    >
                                        {mood}
                                    </button>
                                ))}
                            </div>

                            {/* Places Grid */}
                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                                <AnimatePresence mode="popLayout">
                                    {filteredPlaces?.map((place, index) => (
                                        <motion.div
                                            key={place.name}
                                            layout
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.4 }}
                                            className="group cursor-pointer"
                                        >
                                            <div className="bg-white p-8 rounded-[2rem] border border-slate-100/60 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">

                                                {/* 1. Place Name (Primary) */}
                                                <h3 className="text-2xl font-serif font-medium text-slate-900 mb-3 group-hover:text-orange-900 transition-colors">
                                                    {place.name}
                                                </h3>

                                                {/* 2. Recommendation Text (Reason to care) */}
                                                <p className="text-slate-600 text-base leading-relaxed mb-6 flex-grow font-normal border-l-2 border-orange-100 pl-4">
                                                    {place.description}
                                                </p>

                                                {/* 3. Category & Emotion Tags (Secondary) */}
                                                <div className="mb-6 flex flex-wrap items-center gap-2">
                                                    <span className={`text-[10px] font-bold tracking-widest px-3 py-1 rounded-full bg-slate-50 text-slate-400 uppercase`}>
                                                        {place.category}
                                                    </span>
                                                    {place.emotion && (
                                                        <span className="text-xs font-serif italic text-orange-400">
                                                            {place.emotion}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* 4. Action */}
                                                <div className="flex items-center text-xs font-bold tracking-widest uppercase text-slate-300 group-hover:text-orange-800 transition-colors mt-auto pt-5 border-t border-slate-50">
                                                    Discover <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </section>

                        <Separator className="bg-slate-100" />

                        {/* 3. Cultural Highlights - Journal Style */}
                        <section>
                            <div className="mb-10 flex items-center gap-4">
                                <Sparkles className="w-5 h-5 text-orange-400/80" />
                                <h2 className="text-3xl font-serif text-slate-900">
                                    Cultural Essence
                                </h2>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-8">
                                {destination.culturalHighlights.map((highlight, index) => {
                                    const isString = typeof highlight === 'string';
                                    return (
                                        <div key={index} className="bg-[#F8F7F4] p-8 rounded-2xl border border-transparent hover:border-[#EBE9E0] transition-colors">
                                            <h3 className="font-serif font-bold text-xl mb-3 text-slate-800">
                                                {isString ? highlight : highlight.name}
                                            </h3>
                                            {!isString && (
                                                <p className="text-slate-600 text-sm leading-relaxed font-light">
                                                    {highlight.description}
                                                </p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* 4. Map Section */}
                        <section>
                            <p className="text-center text-slate-400 text-sm font-serif italic mb-8">
                                Get your bearings in {destination.name}
                            </p>
                            <div className="bg-white p-3 rounded-[2.5rem] shadow-sm border border-slate-100">
                                <div className="overflow-hidden rounded-[2rem]">
                                    <GoogleMapEmbed
                                        region={destination.name}
                                        embedUrl={`https://www.google.com/maps?q=${destination.name}+tourist+places&output=embed`}
                                        searchBounds={{ lat: 11.0, lng: 77.0, radius: 20000 }} // Placeholder bounds
                                        showHeader={false}
                                    />
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-10">
                        <StickyActions
                            destination={destination}
                            currentPlan={currentPlan}
                            isSelected={isSelected}
                            progress={progress}
                            rentText={rentText}
                            handlers={handlers}
                        />

                        {/* Quick Facts Journal Card */}
                        <div className="bg-[#FFFFFF]/50 p-8 rounded-[2rem] border border-orange-50/50 shadow-sm relative overflow-hidden backdrop-blur-sm">
                            <div className="absolute top-0 right-0 p-6 opacity-5">
                                <Wind className="w-32 h-32 text-orange-900" />
                            </div>
                            <h3 className="font-serif font-bold text-xl mb-8 relative z-10 text-slate-800 flex items-center gap-3">
                                Traveler's Notes
                                <span className="h-px bg-slate-200 flex-grow ml-2"></span>
                            </h3>
                            <ul className="space-y-6 relative z-10">
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#FFF9F0] flex items-center justify-center text-orange-400 mt-1">
                                        <Clock className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] uppercase tracking-widest text-slate-400 mb-1">Best Time</span>
                                        <span className="font-medium text-slate-700">{destination.bestTime}</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#F0F7FF] flex items-center justify-center text-blue-400 mt-1">
                                        <CloudRain className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] uppercase tracking-widest text-slate-400 mb-1">Climate</span>
                                        <span className="font-medium text-slate-700">{destination.climate || "Pleasant"}</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#F0FFF4] flex items-center justify-center text-green-400 mt-1">
                                        <Users className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] uppercase tracking-widest text-slate-400 mb-1">Crowd</span>
                                        <span className="font-medium text-slate-700">{destination.idealGroupSize || "Moderate"}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
