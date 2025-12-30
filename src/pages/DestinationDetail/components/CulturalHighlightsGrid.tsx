import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import type { Destination } from "@/data/destinations";

interface CulturalHighlightsGridProps {
  destination: Destination;
}

// Normalize tourist place data, with fallback to legacy culturalHighlights
const normalizePlace = (place: { name: string; description: string; category?: string; emotion?: string } | string) => {
  if (typeof place === "string") {
    return { name: place, description: String(place) };
  }
  return place;
};

const emotionMeta: Record<
  string,
  {
    label: string;
    emoji: string;
    vibeLine: string;
    cardClass: string;
    chipClass: string;
    bestFor: string[];
  }
> = {
  "Calm / Healing": {
    label: "Calm & Healing",
    emoji: "😌",
    vibeLine: "Slow. Silent. Healing.",
    cardClass:
      "bg-gradient-to-br from-emerald-50 via-sky-50 to-emerald-100/80 dark:from-emerald-950/40 dark:via-sky-950/40 dark:to-emerald-900/40",
    chipClass: "border-emerald-200 text-emerald-900 dark:border-emerald-700 dark:text-emerald-100",
    bestFor: ["Burnout", "Overthinking", "Solo reset"],
  },
  "Mystery / Cinematic": {
    label: "Mysterious Forests",
    emoji: "🌲",
    vibeLine: "Fog. Forest. Drama.",
    cardClass:
      "bg-gradient-to-br from-slate-50 via-emerald-50 to-slate-100 dark:from-slate-900/60 dark:via-emerald-950/60 dark:to-slate-950/60",
    chipClass: "border-emerald-400/60 text-emerald-900 dark:text-emerald-100",
    bestFor: ["Movie-mood", "Night walks", "Deep thinkers"],
  },
  "Awe / Wow": {
    label: "Wow Viewpoints",
    emoji: "😲",
    vibeLine: "Big skies. Deep valleys.",
    cardClass:
      "bg-gradient-to-br from-amber-50 via-sky-50 to-amber-100/80 dark:from-amber-950/40 dark:via-sky-950/40 dark:to-amber-900/40",
    chipClass: "border-amber-200 text-amber-900 dark:border-amber-700 dark:text-amber-100",
    bestFor: ["Photography", "First-timers", "Sunrise lovers"],
  },
  "Romantic / Social": {
    label: "Romantic & Dreamy",
    emoji: "💕",
    vibeLine: "Warm. Cozy. Together.",
    cardClass:
      "bg-gradient-to-br from-rose-50 via-orange-50 to-rose-100/80 dark:from-rose-950/40 dark:via-orange-950/40 dark:to-rose-900/40",
    chipClass: "border-rose-200 text-rose-900 dark:border-rose-700 dark:text-rose-100",
    bestFor: ["Couples", "Friends", "Honeymoon"],
  },
  "Adventure / Active": {
    label: "Adventure Drives",
    emoji: "🔥",
    vibeLine: "Curves. Trails. High energy.",
    cardClass:
      "bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 dark:from-orange-950/40 dark:via-amber-950/40 dark:to-red-950/40",
    chipClass: "border-orange-200 text-orange-900 dark:border-orange-700 dark:text-orange-100",
    bestFor: ["Road trips", "Trekking", "Groups"],
  },
  "Spiritual / Divine": {
    label: "Spiritual Silence",
    emoji: "🛕",
    vibeLine: "Quiet. Sacred. Timeless.",
    cardClass:
      "bg-gradient-to-br from-slate-50 via-amber-50 to-slate-100 dark:from-slate-950/40 dark:via-amber-950/40 dark:to-slate-900/40",
    chipClass: "border-amber-200 text-slate-900 dark:border-amber-700 dark:text-amber-100",
    bestFor: ["Pilgrims", "Families", "Inner work"],
  },
  "Pride / History": {
    label: "Living History",
    emoji: "🏛️",
    vibeLine: "Kings. Stories. Stone.",
    cardClass:
      "bg-gradient-to-br from-slate-50 via-stone-50 to-slate-100 dark:from-slate-950/40 dark:via-stone-950/40 dark:to-slate-900/40",
    chipClass: "border-slate-300 text-slate-900 dark:border-slate-600 dark:text-slate-100",
    bestFor: ["Culture nerds", "Architecture", "Kids"],
  },
  "Lonely / Deep Thinking": {
    label: "Lonely & Reflective",
    emoji: "🌊",
    vibeLine: "Empty shores. Long walks.",
    cardClass:
      "bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-100 dark:from-blue-950/40 dark:via-sky-950/40 dark:to-indigo-950/40",
    chipClass: "border-blue-200 text-blue-900 dark:border-blue-700 dark:text-blue-100",
    bestFor: ["Solo time", "Writing", "Big decisions"],
  },
};

export const CulturalHighlightsGrid = ({ destination }: CulturalHighlightsGridProps) => {
  const rawPlaces = (
    destination.touristPlaces && destination.touristPlaces.length > 0
      ? destination.touristPlaces
      : destination.culturalHighlights
  ) as Array<string | { name: string; description: string; category?: string; emotion?: string }>;

  const normalizedPlaces = useMemo(
    () => rawPlaces.map((p) => normalizePlace(p)) as { name: string; description: string; emotion?: string }[],
    [rawPlaces],
  );

  const groupedByEmotion = useMemo(() => {
    const groups = new Map<string, { name: string; description: string; emotion?: string }[]>();

    for (const place of normalizedPlaces) {
      const key = place.emotion ?? "All Places";
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key)!.push(place);
    }

    return groups;
  }, [normalizedPlaces]);

  const hasEmotionGroups = Array.from(groupedByEmotion.keys()).some((key) => key !== "All Places");

  const orderedEmotionKeys = useMemo(() => {
    const keys = Array.from(groupedByEmotion.keys()).filter((key) => key !== "All Places");

    const priority = [
      "Calm / Healing",
      "Romantic / Social",
      "Mystery / Cinematic",
      "Awe / Wow",
      "Adventure / Active",
      "Spiritual / Divine",
      "Pride / History",
      "Lonely / Deep Thinking",
    ];

    return [...priority.filter((k) => keys.includes(k)), ...keys.filter((k) => !priority.includes(k))];
  }, [groupedByEmotion]);

  const heroKey = orderedEmotionKeys[0];

  const [expandedEmotions, setExpandedEmotions] = useState<Record<string, boolean>>(() =>
    heroKey ? { [heroKey]: true } : {},
  );

  const toggleEmotion = (key: string) => {
    setExpandedEmotions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Fallback: simple grid if no emotion data available
  if (!hasEmotionGroups) {
    return (
      <Card className="overflow-hidden border border-border bg-card shadow-sm animate-enter">
        <CardContent className="p-0">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-4 border-b border-border/50">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">Key Places & Experiences</h2>
                <p className="text-muted-foreground mt-0.5 text-sm">
                  Handpicked spots that define the soul of this destination.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid gap-4 md:grid-cols-2">
              {normalizedPlaces.map((place, index) => (
                <div
                  key={`${place.name}-${index}`}
                  className="group relative p-4 rounded-xl border border-border/60 bg-background/70 backdrop-blur-sm transition-all duration-200 hover:border-primary/60 hover:shadow-md hover-scale animate-fade-in"
                >
                  <h3 className="text-sm font-semibold leading-tight text-foreground mb-1">{place.name}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{place.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-border/60">
              <p className="text-center text-xs text-muted-foreground">
                Start with a couple of places that feel right for today – you can always discover more later.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden border border-border bg-card shadow-sm animate-enter">
      <CardContent className="p-0">
        {/* Header */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-4 border-b border-border/50">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
              <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">How do you want to feel in {destination.name}?</h2>
              <p className="text-muted-foreground mt-0.5 text-sm">
                Pick a mood first. We’ll suggest 2–3 places that match it perfectly.
              </p>
            </div>
          </div>
          <p className="text-[11px] text-muted-foreground">
            Your brain decides with feelings before locations. This section is built for that.
          </p>
        </div>

        {/* Emotion stacks */}
        <div className="p-6 space-y-4">
          {orderedEmotionKeys.map((emotionKey) => {
            const places = groupedByEmotion.get(emotionKey) ?? [];
            if (!places.length) return null;

            const meta = emotionMeta[emotionKey] ?? {
              label: emotionKey,
              emoji: "✨",
              vibeLine: "Signature spots for this mood",
              cardClass: "bg-background/80 dark:bg-background/60 border border-border/70",
              chipClass: "border-border text-foreground/80",
              bestFor: ["Travelers"],
            };

            const isExpanded = !!expandedEmotions[emotionKey];
            const isHero = emotionKey === heroKey;
            const visible = isExpanded ? places : places.slice(0, 3);

            return (
              <button
                key={emotionKey}
                type="button"
                onClick={() => toggleEmotion(emotionKey)}
                className={`w-full text-left rounded-2xl border border-border/70 px-4 py-4 md:px-5 md:py-5 hover-scale transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                  meta.cardClass
                } ${isHero ? "md:scale-[1.02] shadow-lg" : "shadow-sm"}`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-background/40 px-3 py-1 text-xs font-medium shadow-sm border border-border/60 animate-fade-in">
                      <span className="text-base group-hover:animate-[pulse_1.6s_ease-in-out_infinite] group-hover:-translate-y-0.5 transition-transform">
                        {meta.emoji}
                      </span>
                      <span>{meta.label}</span>
                    </div>

                    <p className="mt-2 text-xs md:text-sm text-foreground/90">{meta.vibeLine}</p>

                    <div className="mt-2 flex flex-wrap gap-1">
                      {meta.bestFor.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border/60 bg-background/70 px-2 py-0.5 text-xs md:text-sm uppercase tracking-wide text-muted-foreground"
                        >
                          Best for: {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 animate-fade-in">
                  {visible.map((place, index) => (
                    <div
                      key={`${place.name}-${index}`}
                      className="flex items-start gap-2 text-sm md:text-base text-foreground"
                    >
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                      <div>
                        <div className="font-medium leading-tight story-link">{place.name}</div>
                        <p className="text-sm md:text-base leading-relaxed text-foreground/90">{place.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {places.length > 3 && (
                  <div className="mt-3 flex items-center justify-between text-xs md:text-sm text-foreground/90">
                    <span>
                      {isExpanded
                        ? "You’re seeing the full list for this feeling."
                        : `+ ${places.length - visible.length} more places in this mood.`}
                    </span>
                    <span className="font-semibold story-link">
                      {emotionKey === "Calm / Healing"
                        ? "Let me relax 😌"
                        : emotionKey === "Mystery / Cinematic"
                          ? "Take me to mystery 🌲"
                          : emotionKey === "Awe / Wow"
                            ? "I want wow views 😲"
                            : emotionKey === "Adventure / Active"
                              ? "I need some action 🔥"
                              : emotionKey === "Romantic / Social"
                                ? "Make it romantic 💕"
                                : "Show me more"}
                    </span>
                  </div>
                )}
              </button>
            );
          })}

          <div className="mt-2 pt-4 border-t border-border/60 text-center text-xs md:text-sm text-muted-foreground">
            Your trip doesn’t have to cover every place. Start with one emotion and 2–3 spots – that already makes a
            powerful journey.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
