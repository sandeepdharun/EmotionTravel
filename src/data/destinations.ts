// Centralized destination datasets for Tamil Nadu, Kerala, and Bangalore
// Shared across pages and recommendation engine

export type Destination = {
  name: string;
  country: string; // Region label (e.g., "Tamil Nadu", "Kerala", "Bangalore", "Near Bangalore")
  image: string;
  emotionalMatch: string;
  matchPercentage: number;
  description: string;
  culturalHighlights: string[];
  safetyLevel: "high" | "medium" | "low";
  bestTime: string;
  priceRange: "$" | "$$" | "$$$";
  idealGroupSize?: string;
  groupDescription?: string;
  topSpots?: string[];
};

export const tamilNaduDestinations: Destination[] = [
  {
    name: "Ooty",
    country: "Tamil Nadu",
    image: "https://images.unsplash.com/photo-1589136777351-fdc9c9cab193?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    emotionalMatch: "Peaceful & Rejuvenating",
    matchPercentage: 94,
    description: "Escape to the serene hill station of Ooty with its tea gardens, misty mountains, and colonial charm perfect for mental peace.",
    culturalHighlights: ["Tea Garden Tours", "Toy Train Ride", "Rose Garden"],
    safetyLevel: "high" as const,
    bestTime: "Apr-Jun",
    priceRange: "$$" as const
  },
  {
    name: "Mahabalipuram",
    country: "Tamil Nadu",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
    emotionalMatch: "Cultural & Reflective",
    matchPercentage: 89,
    description: "Discover ancient rock-cut temples and sculptures while enjoying peaceful beach vibes at this UNESCO World Heritage site.",
    culturalHighlights: ["Shore Temple", "Rock Sculptures", "Beach Meditation"],
    safetyLevel: "high" as const,
    bestTime: "Nov-Mar",
    priceRange: "$" as const
  },
  {
    name: "Kodaikanal",
    country: "Tamil Nadu",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    emotionalMatch: "Romantic & Dreamy",
    matchPercentage: 92,
    description: "The 'Princess of Hill Stations' offers misty lakes, pine forests, and cozy weather perfect for romantic getaways.",
    culturalHighlights: ["Kodai Lake", "Coaker's Walk", "Pine Forest"],
    safetyLevel: "high" as const,
    bestTime: "Apr-Jun",
    priceRange: "$$" as const
  },
  {
    name: "Kanyakumari",
    country: "Tamil Nadu",
    image: "https://travelcrafters.com.au/wp-content/uploads/2025/01/glass-bridge.jpg.webp",
    emotionalMatch: "Spiritual & Contemplative",
    matchPercentage: 87,
    description: "Experience the magical sunrise and sunset at India's southernmost tip, where three seas meet in spiritual harmony.",
    culturalHighlights: ["Sunrise Point", "Vivekananda Rock", "Thiruvalluvar Statue"],
    safetyLevel: "high" as const,
    bestTime: "Oct-Mar",
    priceRange: "$" as const
  },
  {
    name: "Yercaud",
    country: "Tamil Nadu",
    image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&q=80",
    emotionalMatch: "Refreshing & Energizing",
    matchPercentage: 85,
    description: "A lesser-known gem in the Shevaroy Hills, perfect for those seeking solitude amidst coffee plantations and serene lakes.",
    culturalHighlights: ["Coffee Plantations", "Emerald Lake", "Servaroyan Temple"],
    safetyLevel: "high" as const,
    bestTime: "Dec-May",
    priceRange: "$" as const
  },
  {
    name: "Thanjavur",
    country: "Tamil Nadu",
    image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&q=80",
    emotionalMatch: "Cultural & Inspiring",
    matchPercentage: 88,
    description: "Immerse yourself in the rich Chola heritage with magnificent temples, classical music, and traditional art forms.",
    culturalHighlights: ["Brihadeeswarar Temple", "Thanjavur Paintings", "Classical Music"],
    safetyLevel: "high" as const,
    bestTime: "Nov-Feb",
    priceRange: "$" as const
  },
  {
    name: "Madurai",
    country: "Tamil Nadu",
    image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&q=80",
    emotionalMatch: "Spiritual & Vibrant",
    matchPercentage: 91,
    description: "Experience the divine energy of Meenakshi Temple and immerse in the vibrant temple city culture and traditions.",
    culturalHighlights: ["Meenakshi Temple", "Temple Festivals", "Local Markets"],
    safetyLevel: "high" as const,
    bestTime: "Oct-Mar",
    priceRange: "$" as const
  },
  {
    name: "Rameswaram",
    country: "Tamil Nadu",
    image: "https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/destination/m_Rameshwaram_tv_destination_img_5_l_833_1248.jpg",
    emotionalMatch: "Peaceful & Sacred",
    matchPercentage: 89,
    description: "Find spiritual solace at this sacred island town with pristine beaches and ancient temples offering deep meditation experiences.",
    culturalHighlights: ["Ramanathaswamy Temple", "Pamban Bridge", "Sacred Baths"],
    safetyLevel: "high" as const,
    bestTime: "Oct-Apr",
    priceRange: "$" as const
  },
  {
    name: "Pondicherry",
    country: "Tamil Nadu",
    image: "https://www.southtourism.in/assets/images/cityinfo/Pondicherry2.png",
    emotionalMatch: "Tranquil & International",
    matchPercentage: 90,
    description: "Experience French colonial charm mixed with spiritual vibes at Auroville and peaceful beaches perfect for inner reflection.",
    culturalHighlights: ["French Quarter", "Auroville", "Promenade Beach"],
    safetyLevel: "high" as const,
    bestTime: "Oct-Mar",
    priceRange: "$$" as const
  }
];

export const keralaDestinations: Destination[] = [
  {
    name: "Alleppey",
    country: "Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    emotionalMatch: "Peaceful & Meditative",
    matchPercentage: 96,
    description: "Float through serene backwaters on traditional houseboats, finding inner peace amidst Kerala's Venice-like waterways.",
    culturalHighlights: ["Houseboat Experience", "Backwater Villages", "Coir Making"],
    safetyLevel: "high" as const,
    bestTime: "Nov-Feb",
    priceRange: "$$" as const
  },
  {
    name: "Munnar",
    country: "Kerala",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    emotionalMatch: "Refreshing & Energizing",
    matchPercentage: 93,
    description: "Breathe fresh mountain air amidst rolling tea plantations and misty hills, perfect for rejuvenating your spirit.",
    culturalHighlights: ["Tea Plantations", "Spice Gardens", "Wildlife Sanctuary"],
    safetyLevel: "high" as const,
    bestTime: "Dec-Mar",
    priceRange: "$$" as const
  },
  {
    name: "Thekkady",
    country: "Kerala",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    emotionalMatch: "Adventurous & Wild",
    matchPercentage: 90,
    description: "Embark on wildlife adventures in Periyar National Park, where nature's raw beauty awakens your adventurous spirit.",
    culturalHighlights: ["Periyar Wildlife", "Spice Plantations", "Bamboo Rafting"],
    safetyLevel: "high" as const,
    bestTime: "Oct-Mar",
    priceRange: "$$" as const
  },
  {
    name: "Kochi",
    country: "Kerala",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    emotionalMatch: "Cultural & Inspiring",
    matchPercentage: 88,
    description: "Explore the historic port city where Portuguese, Dutch, and British influences blend with local culture in fascinating harmony.",
    culturalHighlights: ["Chinese Fishing Nets", "Fort Kochi", "Kathakali Performances"],
    safetyLevel: "high" as const,
    bestTime: "Oct-Mar",
    priceRange: "$$" as const
  },
  {
    name: "Wayanad",
    country: "Kerala",
    image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&q=80",
    emotionalMatch: "Peaceful & Nature-loving",
    matchPercentage: 91,
    description: "Disconnect from the world in Wayanad's pristine forests, waterfalls, and tribal culture for a soul-cleansing experience.",
    culturalHighlights: ["Edakkal Caves", "Tribal Culture", "Waterfalls"],
    safetyLevel: "high" as const,
    bestTime: "Oct-May",
    priceRange: "$" as const,
    topSpots: [
      "Edakkal Caves",
      "Soochipara (Sentinel Rock) Falls",
      "Banasura Sagar Dam",
      "Chembra Peak",
      "Kuruvadweep (Kuruva Island)"
    ]
  },
  {
    name: "Varkala",
    country: "Kerala",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80",
    emotionalMatch: "Spiritual & Relaxing",
    matchPercentage: 94,
    description: "Find spiritual solace on Varkala's dramatic clifftop beaches, where ancient temples meet healing Ayurvedic traditions.",
    culturalHighlights: ["Cliff Beach", "Ayurvedic Spas", "Janardhana Temple"],
    safetyLevel: "high" as const,
    bestTime: "Nov-Mar",
    priceRange: "$$" as const
  },
  {
    name: "Kumarakom",
    country: "Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    emotionalMatch: "Peaceful & Bird-watching",
    matchPercentage: 93,
    description: "Experience serenity at Kumarakom Bird Sanctuary and backwater cruises, perfect for nature lovers seeking tranquil moments.",
    culturalHighlights: ["Bird Sanctuary", "Backwater Cruises", "Village Walks"],
    safetyLevel: "high" as const,
    bestTime: "Nov-Feb",
    priceRange: "$$" as const
  },
  {
    name: "Kovalam",
    country: "Kerala",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80",
    emotionalMatch: "Relaxing & Beach Therapy",
    matchPercentage: 91,
    description: "Unwind on pristine crescent beaches with Ayurvedic massages and lighthouse views, ideal for stress relief and rejuvenation.",
    culturalHighlights: ["Lighthouse Beach", "Ayurvedic Centers", "Fishing Villages"],
    safetyLevel: "high" as const,
    bestTime: "Oct-Mar",
    priceRange: "$$" as const
  },
  {
    name: "Athirappilly",
    country: "Kerala",
    image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&q=80",
    emotionalMatch: "Adventurous & Nature's Power",
    matchPercentage: 89,
    description: "Marvel at Kerala's Niagara - the powerful Athirappilly Falls surrounded by lush rainforests, perfect for adventure seekers.",
    culturalHighlights: ["Athirappilly Falls", "Rainforest Trekking", "River Rafting"],
    safetyLevel: "high" as const,
    bestTime: "Jun-Sep",
    priceRange: "$" as const
  }
];

export const bangaloreDestinations: Destination[] = [
  {
    name: "Lalbagh Botanical Garden",
    country: "Bangalore",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    emotionalMatch: "Peaceful & Rejuvenating",
    matchPercentage: 92,
    description: "Find tranquility in this 240-acre botanical paradise with over 1,000 species of flora, perfect for morning meditation walks.",
    culturalHighlights: ["Glass House", "Flower Shows", "Rock Garden"],
    safetyLevel: "high" as const,
    bestTime: "Oct-Mar",
    priceRange: "$" as const
  },
  {
    name: "Nandi Hills",
    country: "Near Bangalore",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    emotionalMatch: "Adventurous & Refreshing",
    matchPercentage: 89,
    description: "Watch breathtaking sunrises from this ancient hill fortress, just 60km from Bangalore - perfect for weekend escapes and cycling.",
    culturalHighlights: ["Sunrise Point", "Tipu's Drop", "Ancient Temples"],
    safetyLevel: "high" as const,
    bestTime: "Oct-Feb",
    priceRange: "$" as const
  },
  {
    name: "Cubbon Park",
    country: "Bangalore",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    emotionalMatch: "Urban Peace & Wellness",
    matchPercentage: 88,
    description: "Escape city stress in this 300-acre urban oasis in the heart of Bangalore, ideal for jogging, yoga, and peaceful reflection.",
    culturalHighlights: ["State Library", "Museum", "Bandstand"],
    safetyLevel: "high" as const,
    bestTime: "Year-round",
    priceRange: "$" as const
  },
  {
    name: "UB City Mall",
    country: "Bangalore",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    emotionalMatch: "Luxurious & Indulgent",
    matchPercentage: 85,
    description: "Indulge in luxury shopping and fine dining in India's most premium mall, perfect for treating yourself and boosting confidence.",
    culturalHighlights: ["Fine Dining", "Luxury Shopping", "Rooftop Views"],
    safetyLevel: "high" as const,
    bestTime: "Year-round",
    priceRange: "$$$" as const
  },
  {
    name: "Bangalore Palace",
    country: "Bangalore",
    image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&q=80",
    emotionalMatch: "Historical & Inspiring",
    matchPercentage: 87,
    description: "Step into royal grandeur at this Tudor-style palace, inspiring awe with its architecture and stories of the Mysore royalty.",
    culturalHighlights: ["Royal Architecture", "Palace Grounds", "Historical Tours"],
    safetyLevel: "high" as const,
    bestTime: "Oct-Mar",
    priceRange: "$$" as const
  },
  {
    name: "Innovative Film City",
    country: "Near Bangalore",
    image: "https://images.unsplash.com/photo-1489599096090-da5b0a113f2e?w=800&q=80",
    emotionalMatch: "Fun & Entertaining",
    matchPercentage: 83,
    description: "Experience Bollywood magic and entertainment at this sprawling film studio and theme park, perfect for family fun and excitement.",
    culturalHighlights: ["Film Studios", "Theme Park", "Cultural Shows"],
    safetyLevel: "high" as const,
    bestTime: "Oct-Mar",
    priceRange: "$$" as const
  },
  {
    name: "Chikballapur",
    country: "Near Bangalore",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    emotionalMatch: "Adventurous & Spiritual",
    matchPercentage: 86,
    description: "Explore ancient hilltop temples and scenic trekking trails, perfect for combining adventure with spiritual experiences.",
    culturalHighlights: ["Nandi Hills Extension", "Ancient Temples", "Trekking Trails"],
    safetyLevel: "high" as const,
    bestTime: "Oct-Mar",
    priceRange: "$" as const
  },
  {
    name: "Wonderla",
    country: "Near Bangalore",
    image: "https://images.unsplash.com/photo-1489599096090-da5b0a113f2e?w=800&q=80",
    emotionalMatch: "Thrilling & Exciting",
    matchPercentage: 85,
    description: "Get your adrenaline pumping at one of India's best amusement parks with world-class rides and water attractions.",
    culturalHighlights: ["Water Rides", "Roller Coasters", "Family Entertainment"],
    safetyLevel: "high" as const,
    bestTime: "Year-round",
    priceRange: "$$" as const
  },
  {
    name: "Bannerghatta National Park",
    country: "Near Bangalore",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    emotionalMatch: "Wildlife & Educational",
    matchPercentage: 88,
    description: "Connect with nature through wildlife safaris and conservation experiences, perfect for families and nature enthusiasts.",
    culturalHighlights: ["Wildlife Safari", "Butterfly Park", "Zoo Experience"],
    safetyLevel: "high" as const,
    bestTime: "Oct-Mar",
    priceRange: "$$" as const
  }
];
