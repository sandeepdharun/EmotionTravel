import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DestinationCard } from "@/components/DestinationCard";
import { RefreshCw, ArrowLeft } from "lucide-react";
import { tamilNaduDestinations } from "@/data/destinations";

interface EmotionData {
  emotions: string[];
  description: string;
  desiredChange: string;
  groupSize: string;
}

interface DestinationRecommendationsProps {
  emotionData: EmotionData;
  onBack: () => void;
}

const getAllDestinations = () => [
  ...tamilNaduDestinations,
];

const getRecommendations = (emotionData: EmotionData) => {
  const allDestinations = getAllDestinations();

  // Create a scoring system based on user input
  const scoredDestinations = allDestinations.map(destination => {
    let score = destination.matchPercentage;

    // Adjust score based on desired change
    if (emotionData.desiredChange === 'peace' &&
      (destination.emotionalMatch.toLowerCase().includes('peace') ||
        destination.emotionalMatch.toLowerCase().includes('tranquil'))) {
      score += 10;
    }

    if (emotionData.desiredChange === 'adventure' &&
      destination.emotionalMatch.toLowerCase().includes('adventurous')) {
      score += 10;
    }

    if (emotionData.desiredChange === 'joy' &&
      destination.emotionalMatch.toLowerCase().includes('joyful')) {
      score += 10;
    }

    // Adjust score based on group size match
    if (destination.idealGroupSize === emotionData.groupSize) {
      score += 5;
    }

    // Adjust score based on emotions
    emotionData.emotions.forEach(emotion => {
      if (emotion === 'stressed' && destination.emotionalMatch.toLowerCase().includes('peace')) {
        score += 8;
      }
      if (emotion === 'excited' && destination.emotionalMatch.toLowerCase().includes('adventurous')) {
        score += 8;
      }
      if (emotion === 'peaceful' && destination.emotionalMatch.toLowerCase().includes('peace')) {
        score += 8;
      }
    });

    return { ...destination, matchPercentage: Math.min(100, score) };
  });

  // Sort by score, then return a random 2–3 suggestions from top matches
  const sorted = scoredDestinations.sort((a, b) => b.matchPercentage - a.matchPercentage);

  // Take a pool of top matches to ensure quality, then randomly sample 2–3
  const pool = sorted.slice(0, Math.min(6, sorted.length));
  const count = Math.min(pool.length, 2 + Math.floor(Math.random() * 2)); // 2 or 3
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export const DestinationRecommendations = ({ emotionData, onBack }: DestinationRecommendationsProps) => {
  const [recommendations, setRecommendations] = useState(() => getRecommendations(emotionData));
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setRecommendations(getRecommendations(emotionData));
    setIsRefreshing(false);
  };

  const getGroupSizeLabel = (value: string) => {
    const options = [
      { value: "solo", label: "Solo Travel" },
      { value: "couple", label: "Couple" },
      { value: "small-group", label: "Small Group" },
      { value: "large-group", label: "Large Group" }
    ];
    return options.find(o => o.value === value)?.label || value;
  };

  const getDesiredChangeLabel = (value: string) => {
    const options = [
      { id: "joy", label: "Joy & Happiness" },
      { id: "peace", label: "Peace & Tranquility" },
      { id: "adventure", label: "Adventure & Excitement" },
      { id: "excitement", label: "Energy & Excitement" }
    ];
    return options.find(o => o.id === value)?.label || value;
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-black p-8 md:p-10 text-white shadow-2xl">
      {/* Cinematic glow layers to mirror Tamil Nadu / Kerala visual style */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0,rgba(148,163,253,0.25),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_100%,rgba(56,189,248,0.18),transparent_55%)]" />

      <div className="relative space-y-8">
        {/* Header */}
        <div className="text-center">
          <Button
            variant="outline"
            onClick={onBack}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Form
          </Button>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Perfect
            <span className="bg-gradient-nature bg-clip-text text-transparent"> Destinations</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Based on your emotional profile, we've found {recommendations.length} destinations that match your needs
          </p>
        </div>

        {/* User Profile Summary */}
        <Card className="p-6 bg-white/5 border-white/10 backdrop-blur-xl">
          <h3 className="text-lg font-semibold mb-4 text-white">Your Travel Profile:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <span className="text-sm text-slate-300 block mb-2">Emotions:</span>
              <div className="flex flex-wrap gap-1">
                {emotionData.emotions.map(emotion => (
                  <Badge key={emotion} variant="secondary" className="text-xs capitalize">
                    {emotion}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <span className="text-sm text-slate-300 block mb-2">Seeking:</span>
              <Badge variant="outline" className="border-white/30 text-slate-100">
                {getDesiredChangeLabel(emotionData.desiredChange)}
              </Badge>
            </div>
            <div>
              <span className="text-sm text-slate-300 block mb-2">Group Size:</span>
              <Badge variant="outline" className="border-white/30 text-slate-100">
                {getGroupSizeLabel(emotionData.groupSize)}
              </Badge>
            </div>
          </div>
        </Card>

        {/* Actions */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="flex items-center gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            {isRefreshing ? 'Finding More...' : 'Get Different Local Suggestions'}
          </Button>
        </div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map((destination, index) => (
            <DestinationCard key={`${destination.name}-${index}`} {...destination} />
          ))}
        </div>
      </div>
    </div>
  );
};
