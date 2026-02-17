import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";
import { ArrowRight } from "lucide-react";
import type { Destination } from "@/data/destinations";
import { Button } from "@/components/ui/button";

export const QuickStatsBar = ({ destination }: { destination: Destination }) => {
  const language = destination.country === "Tamil Nadu" ? "Tamil" :
    destination.country === "Kerala" ? "Malayalam" : "Kannada";

  const duration = destination.duration || "2–3 Days";
  const safety = destination.safetyLevel.charAt(0).toUpperCase() + destination.safetyLevel.slice(1) + " Safety";

  return (
    <div className="w-full">
      <div className="container mx-auto px-4">
        <p className="text-center text-[#666666] text-sm md:text-base font-normal tracking-wide">
          {destination.bestTime} · {language} · {duration} · {safety}
        </p>
      </div>
    </div>
  );
};

export const QuoteSection = () => (
  <div className="w-full">
    <div className="container mx-auto px-4">
      <p className="text-center text-[#6A6F75] text-base md:text-lg italic font-light max-w-2xl mx-auto leading-relaxed">
        "Every journey begins with a single step of curiosity."
      </p>
    </div>
  </div>
);

export const AboutSection = ({ destination }: { destination: Destination }) => (
  <div className="max-w-6xl mx-auto px-6 md:px-8">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
      {/* Left Column - Label + Heading */}
      <div className="md:col-span-4 space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9A9A9A]">
          ABOUT
        </p>
        <h2 className="text-2xl md:text-3xl font-serif text-[#121417] leading-tight">
          About {destination.name}
        </h2>
      </div>

      {/* Right Column - Paragraph */}
      <div className="md:col-span-8">
        <p className="text-base md:text-lg leading-relaxed text-[#333333]">
          {destination.description}
        </p>
      </div>
    </div>
  </div>
);

export const MapSection = ({ destination }: { destination: Destination }) => {
  const mapEmbedUrl = destination.name === "Pondicherry"
    ? "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d72624.2633302847!2d79.82120989246204!3d11.936286365839566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1756863984310!5m2!1sen!2sin"
    : `https://www.google.com/maps?q=${encodeURIComponent(
      destination.name + ", " + destination.country
    )}&output=embed`;

  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination.name + " " + destination.country)}`;

  return (
    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
      {/* Full-width Map */}
      <iframe
        src={mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`${destination.name} location map`}
        className="w-full h-full"
      />

      {/* Floating Info Panel - Bottom Left */}
      <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md rounded-xl p-8 max-w-sm shadow-lg">
        <h3 className="text-xs uppercase tracking-[0.15em] font-semibold text-[#9A9A9A] mb-3">
          LOCATION
        </h3>
        <p className="text-sm text-[#333333] leading-relaxed mb-5">
          Located in the heart of {destination.country}, {destination.name} offers a unique blend of culture and natural beauty through history.
        </p>
        <a
          href={mapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-[#0F4C5C] hover:text-[#0A3A47] transition-colors underline"
        >
          Open in Maps →
        </a>
      </div>
    </div>
  );
};
