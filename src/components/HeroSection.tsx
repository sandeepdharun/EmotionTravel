import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

/**
 * Mature hover text effect:
 * - A gradient "spotlight" reveals over the headline following the cursor.
 * - Subtle and editorial, no bouncy letters.
 */
function SpotlightHeading({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [hover, setHover] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--sx", `${x}px`);
    el.style.setProperty("--sy", `${y}px`);
  };

  return (
    <h1
      ref={ref}
      data-hover={hover ? "true" : "false"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={onMove}
      className={`spotlight-heading relative ${className}`}
    >
      <span className="relative z-10 block text-white/90">{children}</span>
      {/* Gradient layer revealed under the cursor */}
      <span
        aria-hidden
        className="highlight pointer-events-none absolute inset-0 block select-none"
      >
        {children}
      </span>
    </h1>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-left">
      <div className="text-2xl font-semibold text-white">{value}</div>
      <div className="text-sm text-white/70">{label}</div>
    </div>
  );
}

function MoodBadge({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-3 py-1.5 text-sm text-white/80">
      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-white/60" />
      {label}
    </div>
  );
}

function MediaCard({
  title,
  meta,
  image,
  className = ""
}: {
  title: string;
  meta: string;
  image: string;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm ${className}`}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="relative z-10 p-4 md:p-5">
        <div className="text-[11px] uppercase tracking-wider text-white/70">
          {meta}
        </div>
        <div className="mt-1 text-white font-medium">{title}</div>
      </div>
    </div>
  );
}

export const HeroSection = () => {
  const handleButtonMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Subtle page backdrop */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_800px_at_-10%_-10%,#0b1220,transparent),radial-gradient(1000px_600px_at_110%_-10%,#111827,transparent),linear-gradient(#0b1220,#0b1220)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: "linear-gradient(0deg,rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left: Copy */}
          <div className="md:col-span-5 lg:col-span-5">
            {/* Top badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-1.5 text-white/80 backdrop-blur-sm">
              <Heart className="h-4 w-4" />
              <span className="text-xs uppercase tracking-[0.18em]">
                Emotion-aware itineraries
              </span>
            </div>

            <SpotlightHeading className="mt-6 text-left font-semibold leading-[1.05] [text-wrap:balance] text-4xl sm:text-5xl md:text-6xl">
              Travel designed around how you feel—calm, curious, or bold.
            </SpotlightHeading>

            <p className="mt-5 max-w-xl text-left text-white/80 text-lg md:text-xl leading-relaxed">
              We translate your mood into routes, stays, and moments that help you
              reset and move forward. Thoughtfully curated. Quietly personal.
            </p>

            {/* Mood badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              <MoodBadge label="Calm" />
              <MoodBadge label="Curious" />
              <MoodBadge label="Energized" />
              <MoodBadge label="Reflective" />
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group relative overflow-hidden rounded-lg border-0 bg-white px-7 py-6 text-base font-semibold text-gray-900 transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-xl"
                onMouseMove={handleButtonMove}
              >
                <span className="relative z-10 flex items-center">
                  Start with Emotion Scan
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </span>
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(180px 120px at var(--mx) var(--my), rgba(0,0,0,0.06), transparent 60%)"
                  }}
                />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-lg border-white/25 bg-white/5 px-7 py-6 text-base font-semibold text-white hover:bg-white/10"
              >
                Browse destinations
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 text-white/80">
              <Stat value="10K+" label="Travelers" />
              <div className="hidden sm:block h-6 w-px bg-white/15" />
              <Stat value="150+" label="Destinations" />
              <div className="hidden sm:block h-6 w-px bg-white/15" />
              <Stat value="98%" label="Satisfaction" />
            </div>
          </div>

          {/* Right: Mosaic */}
          <div className="md:col-span-7 lg:col-span-7">
            <div className="grid grid-cols-6 grid-rows-6 gap-4 min-h-[520px]">
              <MediaCard
                title="Quiet Coastline, TN"
                meta="Calm . Sunrise"
                image={heroImage}
                className="col-span-6 md:col-span-4 row-span-6"
              />
              <MediaCard
                title="Tea Hills, KL"
                meta="Reflect . Trails"
                image={heroImage}
                className="hidden md:block col-span-2 row-span-3"
              />
              <MediaCard
                title="City Corners, BLR"
                meta="Curious . Walks"
                image={heroImage}
                className="hidden md:block col-span-2 row-span-3"
              />
            </div>

            {/* Small strip: quick picks */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {["Weekend reset", "Creative escape", "Nature-first"].map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80"
                >
                  <MapPin className="h-3.5 w-3.5 text-white/70" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Minimal styles for the spotlight effect */}
      <style jsx>{`
        .spotlight-heading { --sx: 50%; --sy: 50%; }
        .spotlight-heading .highlight {
          color: transparent;
          background: linear-gradient(90deg, #22d3ee, #3b82f6 35%, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          /* Reveal the gradient only under the cursor */
          mask-image: radial-gradient(220px 160px at var(--sx) var(--sy), #000 40%, transparent 65%);
          -webkit-mask-image: radial-gradient(220px 160px at var(--sx) var(--sy), #000 40%, transparent 65%);
          opacity: 0;
          transition: opacity 200ms ease;
        }
        .spotlight-heading[data-hover="true"] .highlight { opacity: 1; }
      `}</style>
    </section>
  );
};