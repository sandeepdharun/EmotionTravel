import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DestinationCard } from '@/components/DestinationCard';
import { MapPin, X } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface CustomDestination {
  id: string;
  name: string;
  country: string;
  lat: number;
  lng: number;
  image: string;
  emotionalMatch: string;
  matchPercentage: number;
  description: string;
  culturalHighlights: string[];
  safetyLevel: 'high' | 'medium' | 'low';
  bestTime: string;
  priceRange: '$' | '$$' | '$$$';
}

// Predefined destinations with coordinates
const predefinedDestinations = [
  {
    id: 'ooty',
    name: 'Ooty',
    country: 'Tamil Nadu',
    lat: 11.4064,
    lng: 76.6932,
    image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9cab193?q=80&w=870&auto=format&fit=crop',
    emotionalMatch: 'Peaceful & Rejuvenating',
    matchPercentage: 94,
    description: 'Queen of Hill Stations with tea gardens, misty mountains, and colonial charm perfect for mental peace.',
    culturalHighlights: ['Tea Garden Tours', 'Toy Train Ride', 'Rose Garden'],
    safetyLevel: 'high' as const,
    bestTime: 'Apr-Jun',
    priceRange: '$$' as const,
  },
  {
    id: 'alleppey',
    name: 'Alleppey',
    country: 'Kerala',
    lat: 9.4981,
    lng: 76.3388,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
    emotionalMatch: 'Peaceful & Meditative',
    matchPercentage: 96,
    description: 'Float through serene backwaters on traditional houseboats, finding inner peace amidst Kerala\'s Venice-like waterways.',
    culturalHighlights: ['Houseboat Experience', 'Backwater Villages', 'Coir Making'],
    safetyLevel: 'high' as const,
    bestTime: 'Nov-Feb',
    priceRange: '$$' as const,
  },
  {
    id: 'lalbagh',
    name: 'Lalbagh Botanical Garden',
    country: 'Bangalore',
    lat: 12.9507,
    lng: 77.5848,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    emotionalMatch: 'Peaceful & Rejuvenating',
    matchPercentage: 92,
    description: 'Find tranquility in this 240-acre botanical paradise with over 1,000 species of flora, perfect for morning meditation walks.',
    culturalHighlights: ['Glass House', 'Flower Shows', 'Rock Garden'],
    safetyLevel: 'high' as const,
    bestTime: 'Oct-Mar',
    priceRange: '$' as const,
  },
  {
    id: 'munnar',
    name: 'Munnar',
    country: 'Kerala',
    lat: 10.0889,
    lng: 77.0595,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    emotionalMatch: 'Refreshing & Energizing',
    matchPercentage: 93,
    description: 'Breathe fresh mountain air amidst rolling tea plantations and misty hills, perfect for rejuvenating your spirit.',
    culturalHighlights: ['Tea Plantations', 'Spice Gardens', 'Wildlife Sanctuary'],
    safetyLevel: 'high' as const,
    bestTime: 'Dec-Mar',
    priceRange: '$$' as const,
  },
  {
    id: 'mahabalipuram',
    name: 'Mahabalipuram',
    country: 'Tamil Nadu',
    lat: 12.6269,
    lng: 80.1927,
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
    emotionalMatch: 'Cultural & Reflective',
    matchPercentage: 89,
    description: 'Discover ancient rock-cut temples and sculptures while enjoying peaceful beach vibes at this UNESCO World Heritage site.',
    culturalHighlights: ['Shore Temple', 'Rock Sculptures', 'Beach Meditation'],
    safetyLevel: 'high' as const,
    bestTime: 'Nov-Mar',
    priceRange: '$' as const,
  },
  {
    id: 'kochi',
    name: 'Kochi',
    country: 'Kerala',
    lat: 9.9312,
    lng: 76.2673,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
    emotionalMatch: 'Cultural & Inspiring',
    matchPercentage: 88,
    description: 'Explore the historic port city where Portuguese, Dutch, and British influences blend with local culture in fascinating harmony.',
    culturalHighlights: ['Chinese Fishing Nets', 'Fort Kochi', 'Kathakali Performances'],
    safetyLevel: 'high' as const,
    bestTime: 'Oct-Mar',
    priceRange: '$$' as const,
  }
];

// Component to handle map clicks
const MapClickHandler = ({ onLocationSelect }: { onLocationSelect: (lat: number, lng: number) => void }) => {
  useMapEvents({
    click: (e) => {
      onLocationSelect(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
};

export const InteractiveMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [customDestination, setCustomDestination] = useState<CustomDestination | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showCustomCard, setShowCustomCard] = useState(false);

  // Generate custom destination based on clicked location
  const generateCustomDestination = async (lat: number, lng: number) => {
    setIsLoading(true);
    
    // Simulate API call to get location details
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate a custom destination based on coordinates
    const customDest: CustomDestination = {
      id: `custom-${Date.now()}`,
      name: getLocationName(lat, lng),
      country: getRegionName(lat, lng),
      lat,
      lng,
      image: getLocationImage(lat, lng),
      emotionalMatch: getEmotionalMatch(lat, lng),
      matchPercentage: 75 + Math.floor(Math.random() * 20),
      description: getLocationDescription(lat, lng),
      culturalHighlights: getCulturalHighlights(lat, lng),
      safetyLevel: 'high',
      bestTime: 'Oct-Mar',
      priceRange: '$$',
    };
    
    setCustomDestination(customDest);
    setShowCustomCard(true);
    setIsLoading(false);
  };

  const handleLocationSelect = (lat: number, lng: number) => {
    setSelectedLocation({ lat, lng });
    generateCustomDestination(lat, lng);
  };

  const handleCloseCustomCard = () => {
    setShowCustomCard(false);
    setCustomDestination(null);
    setSelectedLocation(null);
  };

  // Helper functions to generate destination data based on coordinates
  const getLocationName = (lat: number, lng: number) => {
    if (lat > 11 && lat < 13 && lng > 76 && lng < 78) return 'Nilgiri Hills';
    if (lat > 9 && lat < 11 && lng > 76 && lng < 78) return 'Backwater Paradise';
    if (lat > 12 && lat < 13 && lng > 77 && lng < 78) return 'Garden City Retreat';
    if (lat > 8 && lat < 10 && lng > 76 && lng < 78) return 'Coastal Haven';
    if (lat > 10 && lat < 12 && lng > 78 && lng < 80) return 'Temple Town';
    return 'Hidden Gem';
  };

  const getRegionName = (lat: number, lng: number) => {
    if (lat > 12.5 && lng > 77.5) return 'Karnataka';
    if (lat < 10.5 && lng < 77.5) return 'Kerala';
    if (lat > 10.5 && lng > 77.5) return 'Tamil Nadu';
    return 'South India';
  };

  const getLocationImage = (lat: number, lng: number) => {
    const images = [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
      'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
    ];
    return images[Math.floor(Math.random() * images.length)];
  };

  const getEmotionalMatch = (lat: number, lng: number) => {
    const matches = [
      'Peaceful & Serene',
      'Adventurous & Exciting',
      'Cultural & Inspiring',
      'Refreshing & Energizing',
      'Spiritual & Contemplative'
    ];
    return matches[Math.floor(Math.random() * matches.length)];
  };

  const getLocationDescription = (lat: number, lng: number) => {
    if (lat > 11 && lat < 13 && lng > 76 && lng < 78) {
      return 'Discover misty hills and tea gardens in this serene mountain retreat perfect for peaceful contemplation.';
    }
    if (lat > 9 && lat < 11 && lng > 76 && lng < 78) {
      return 'Experience tranquil backwaters and traditional village life in this hidden coastal paradise.';
    }
    if (lat > 12 && lat < 13 && lng > 77 && lng < 78) {
      return 'Find urban peace in this garden city location with perfect climate and green spaces.';
    }
    return 'Explore this unique destination with its own special charm and cultural significance.';
  };

  const getCulturalHighlights = (lat: number, lng: number) => {
    const highlights = [
      ['Local Temples', 'Traditional Cuisine', 'Folk Arts'],
      ['Backwater Culture', 'Fishing Villages', 'Coconut Groves'],
      ['Urban Gardens', 'Modern Culture', 'Tech Hub'],
      ['Hill Station Culture', 'Tea Heritage', 'Colonial History'],
      ['Coastal Traditions', 'Seafood Culture', 'Beach Activities']
    ];
    return highlights[Math.floor(Math.random() * highlights.length)];
  };

  return (
    <div className="space-y-8">
      {/* Map Section */}
      <Card className="overflow-hidden bg-card/80 backdrop-blur-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Explore Custom Destinations</h3>
              <p className="text-muted-foreground">Click anywhere on the map to discover hidden gems and local favorites</p>
            </div>
            {showCustomCard && (
              <Button variant="outline" size="sm" onClick={handleCloseCustomCard}>
                <X className="w-4 h-4 mr-2" />
                Clear Selection
              </Button>
            )}
          </div>
          
          <div className="relative h-[400px] rounded-lg overflow-hidden border border-border/50">
            <MapContainer
              center={[11.0, 77.0]}
              zoom={7}
              style={{ height: '100%', width: '100%' }}
              className="z-0"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
              {/* Predefined destination markers */}
              {predefinedDestinations.map((dest) => (
                <Marker key={dest.id} position={[dest.lat, dest.lng]}>
                  <Popup>
                    <div className="text-center p-2">
                      <h4 className="font-semibold text-foreground">{dest.name}</h4>
                      <p className="text-sm text-muted-foreground">{dest.country}</p>
                      <Badge className="mt-2 bg-gradient-ocean text-white">
                        {dest.matchPercentage}% Match
                      </Badge>
                    </div>
                  </Popup>
                </Marker>
              ))}
              
              {/* Custom selected location marker */}
              {selectedLocation && (
                <Marker position={[selectedLocation.lat, selectedLocation.lng]}>
                  <Popup>
                    <div className="text-center p-2">
                      <h4 className="font-semibold text-primary">Custom Location</h4>
                      <p className="text-sm text-muted-foreground">
                        {selectedLocation.lat.toFixed(4)}, {selectedLocation.lng.toFixed(4)}
                      </p>
                    </div>
                  </Popup>
                </Marker>
              )}
              
              <MapClickHandler onLocationSelect={handleLocationSelect} />
            </MapContainer>
            
            {/* Loading overlay */}
            {isLoading && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
                <Card className="p-6 bg-white">
                  <div className="flex items-center space-x-3">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary" />
                    <span className="text-foreground font-medium">Discovering your destination...</span>
                  </div>
                </Card>
              </div>
            )}
          </div>
          
          <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full" />
                <span>Predefined Destinations</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-600 rounded-full" />
                <span>Your Custom Selection</span>
              </div>
            </div>
            <span>Click anywhere to explore new destinations</span>
          </div>
        </div>
      </Card>

      {/* Custom Destination Card */}
      {showCustomCard && customDestination && (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-2">
              Your Custom
              <span className="bg-gradient-ocean bg-clip-text text-transparent"> Discovery</span>
            </h3>
            <p className="text-muted-foreground">
              We've analyzed your selected location and created a personalized destination experience
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-md">
              <DestinationCard
                name={customDestination.name}
                country={customDestination.country}
                image={customDestination.image}
                emotionalMatch={customDestination.emotionalMatch}
                matchPercentage={customDestination.matchPercentage}
                description={customDestination.description}
                culturalHighlights={customDestination.culturalHighlights}
                safetyLevel={customDestination.safetyLevel}
                bestTime={customDestination.bestTime}
                priceRange={customDestination.priceRange}
              />
            </div>
          </div>
          
          {/* Additional Info */}
          <Card className="p-6 bg-gradient-ocean text-white">
            <h4 className="text-xl font-bold mb-4">Why This Location Matches You</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl mb-2">🎯</div>
                <h5 className="font-semibold mb-1">AI Analysis</h5>
                <p className="text-sm opacity-90">Location analyzed for emotional compatibility</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🌍</div>
                <h5 className="font-semibold mb-1">Local Insights</h5>
                <p className="text-sm opacity-90">Cultural and geographical context considered</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">✨</div>
                <h5 className="font-semibold mb-1">Personalized</h5>
                <p className="text-sm opacity-90">Tailored to your emotional journey needs</p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};