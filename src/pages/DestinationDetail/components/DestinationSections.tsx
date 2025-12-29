import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";
import { 
  Info, 
  Heart, 
  Shield, 
  Clock, 
  DollarSign, 
  Map,
  Star,
  AlertTriangle,
  CheckCircle,
  Thermometer,
  Camera,
  Utensils
} from "lucide-react";
import type { Destination } from "@/data/destinations";

interface DestinationSectionsProps {
  destination: Destination;
  rentText: string;
}

export const AboutSection = ({ destination }: { destination: Destination }) => (
  <Card className="border shadow-sm">
    <CardContent className="p-4 md:p-6">
      <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Info className="w-5 h-5 text-primary" />
        </div>
        About {destination.name}
      </h2>
      <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
        {destination.description}
      </p>
    </CardContent>
  </Card>
);

export const SafetyAndTimeSection = ({ destination, rentText }: DestinationSectionsProps) => {
  const safetyConfig = {
    high: { color: "text-green-600", bg: "bg-green-50 dark:bg-green-950/30", icon: CheckCircle },
    medium: { color: "text-yellow-600", bg: "bg-yellow-50 dark:bg-yellow-950/30", icon: AlertTriangle },
    low: { color: "text-red-600", bg: "bg-red-50 dark:bg-red-950/30", icon: Shield },
  };

  const safety = safetyConfig[destination.safetyLevel];
  const SafetyIcon = safety.icon;

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {/* Safety Information */}
      <Card className="border shadow-sm">
        <CardContent className="p-4 md:p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <div className={`p-2 rounded-lg ${safety.bg}`}>
              <Shield className={`w-5 h-5 ${safety.color}`} />
            </div>
            Safety Information
          </h3>
          
          <div className="space-y-4">
            <div className={`${safety.bg} rounded-xl p-4 border border-current/20`}>
              <div className="flex items-center gap-3 mb-2">
                <SafetyIcon className={`w-5 h-5 ${safety.color}`} />
                <div>
                  <h4 className={`text-lg font-semibold ${safety.color} capitalize`}>
                    {destination.safetyLevel} Safety Level
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {destination.safetyLevel === 'high' && "Very safe for travelers with minimal precautions needed"}
                    {destination.safetyLevel === 'medium' && "Generally safe with standard travel precautions recommended"}
                    {destination.safetyLevel === 'low' && "Exercise additional caution and stay informed about local conditions"}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Safety Tips */}
            <div className="space-y-2">
              <h5 className="font-medium text-muted-foreground text-xs uppercase tracking-wider">
                Safety Tips
              </h5>
              <div className="space-y-1.5 text-xs">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Keep copies of important documents</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Stay aware of your surroundings</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Follow local customs and guidelines</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Time & Cost */}
      <Card className="border shadow-sm">
        <CardContent className="p-4 md:p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <div className="p-2 bg-amber-100 dark:bg-amber-900 rounded-lg">
              <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            Travel Planning
          </h3>

          <div className="space-y-4">
            {/* Best Time */}
            <div className="bg-amber-50 dark:bg-amber-950/30 rounded-xl p-4 border border-amber-200 dark:border-amber-800">
              <div className="flex items-center gap-3 mb-2">
                <Thermometer className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <h4 className="text-base font-semibold text-amber-700 dark:text-amber-300">
                  Best Time to Visit
                </h4>
              </div>
              <p className="text-amber-700 dark:text-amber-300 font-medium">
                {destination.bestTime}
              </p>
            </div>

            {/* Cost Information */}
            <div className="bg-green-50 dark:bg-green-950/30 rounded-xl p-4 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="text-base font-semibold text-green-700 dark:text-green-300">
                  Accommodation Cost
                </h4>
              </div>
              <p className="text-green-700 dark:text-green-300 font-medium">
                {rentText}
              </p>
              <p className="text-[11px] text-green-600 dark:text-green-400 mt-1 opacity-75">
                Price Range: {destination.priceRange}
              </p>
            </div>

            {/* Additional Tips */}
            <div className="space-y-2">
              <h5 className="font-medium text-muted-foreground text-xs uppercase tracking-wider">
                Travel Tips
              </h5>
              <div className="space-y-1.5 text-xs">
                <div className="flex items-start gap-2">
                  <Camera className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>Book accommodations in advance during peak season</span>
                </div>
                <div className="flex items-start gap-2">
                  <Utensils className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>Try local cuisine for an authentic experience</span>
                </div>
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span>Research local festivals and events</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export const MapSection = ({ destination }: { destination: Destination }) => {
  // Generate search bounds based on destination
  const getSearchBounds = () => {
    // Default coordinates for different regions
    const regionCoords = {
      "Tamil Nadu": { lat: 11.1271, lng: 78.6569, radius: 50000 },
      "Kerala": { lat: 10.8505, lng: 76.2711, radius: 40000 },
      "Bangalore": { lat: 12.9716, lng: 77.5946, radius: 30000 },
    };
    
    return regionCoords[destination.country as keyof typeof regionCoords] || 
           { lat: 11.0, lng: 77.0, radius: 50000 };
  };

  return (
    <Card className="border shadow-sm">
      <CardContent className="p-4 md:p-6">
        <div className="text-center mb-4">
          <h3 className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Map className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            Explore {destination.name}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              on Map
            </span>
          </h3>
          <p className="text-sm text-muted-foreground">
            Discover attractions, accommodations, and local points of interest
          </p>
        </div>

        <div className="rounded-xl overflow-hidden border border-border">
          <GoogleMapEmbed
            region={destination.country}
            embedUrl={`https://www.google.com/maps?q=${encodeURIComponent(
              destination.name + ", " + destination.country
            )}&output=embed`}
            searchBounds={getSearchBounds()}
          />
        </div>
      </CardContent>
    </Card>
  );
};
