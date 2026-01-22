// Centralized destination datasets for Tamil Nadu
// Shared across pages and recommendation engine

export type Destination = {
  name: string;
  country: string; // Region label (e.g., "Tamil Nadu", "Kerala", "Bangalore", "Near Bangalore")
  image: string;
  emotionalMatch: string;
  matchPercentage: number;
  description: string;
  culturalHighlights: (
    | string
    | {
      name: string;
      description: string;
      category:
      | "people"
      | "livelihood"
      | "culture"
      | "tradition"
      | "lifestyle"
      | "art"
      | "festival";
    }
  )[];
  safetyLevel: "high" | "medium" | "low";
  bestTime: string;
  priceRange: "$" | "$$" | "$$$";
  duration?: string;
  climate?: string;
  language?: string;
  currency?: string;
  idealGroupSize?: string;
  groupDescription?: string;
  topSpots?: string[];
  touristPlaces?: {
    name: string;
    description: string;
    /** Optional emotional category label, e.g. "Calm / Healing" */
    emotion?: string;
    category:
    | "temple"
    | "nature"
    | "adventure"
    | "cultural"
    | "beach"
    | "historical"
    | "shopping"
    | "food";
  }[];
  localCuisine?: string[];
  activities?: string[];
  nearbyAttractions?: string[];
  travelTips?: string[];
};

export const tamilNaduDestinations: Destination[] = [
  {
    name: "Ooty",
    country: "Tamil Nadu",
    image:
      "https://images.unsplash.com/photo-1589136777351-fdc9c9cab193?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    emotionalMatch: "Peaceful & Rejuvenating",
    matchPercentage: 94,
    description:
      "Escape to the serene hill station of Ooty with its tea gardens, misty mountains, and colonial charm perfect for mental peace.",
    culturalHighlights: [
      {
        name: "Tamil Hill Tribe Communities",
        description:
          "Meet the indigenous Toda people who have lived in these hills for over 1,000 years, known for their distinctive huts and buffalo herding traditions.",
        category: "people",
      },
      {
        name: "Tea Estate Workers",
        description:
          "Generations of Tamil families have worked in tea plantations, mastering the art of hand-picking tea leaves and traditional processing methods.",
        category: "livelihood",
      },
      {
        name: "Colonial Heritage Culture",
        description:
          "British colonial influence blends with Tamil traditions, creating unique architecture, gardens, and lifestyle patterns still visible today.",
        category: "culture",
      },
      {
        name: "Nilgiri Traditional Crafts",
        description:
          "Local artisans create beautiful handwoven shawls, eucalyptus oil products, and traditional needlework reflecting hill station heritage.",
        category: "art",
      },
    ],
    safetyLevel: "high" as const,
    bestTime: "Apr-Jun",
    priceRange: "$$" as const,
    duration: "2-3 days",
    climate: "Cool temperate (10-25°C)",
    language: "Tamil, English",
    currency: "Indian Rupee (INR)",
    touristPlaces: [
      {
        name: "Emerald Lake",
        description: "Serene emerald-green lake surrounded by tea gardens and hills",
        category: "nature",
        emotion: "Calm / Healing",
      },
      {
        name: "Avalanche Lake",
        description: "Untouched alpine lake with mist, forests and a cinematic silence",
        category: "nature",
        emotion: "Calm / Healing",
      },
      {
        name: "Upper Bhavani Reservoir",
        description: "Offbeat blue reservoir with rolling grasslands and peaceful drives",
        category: "nature",
        emotion: "Calm / Healing",
      },
      {
        name: "Cairn Hill Forest",
        description: "Shady forest trail ideal for slow walks and quiet thinking",
        category: "nature",
        emotion: "Calm / Healing",
      },
      {
        name: "Sandynallah Reservoir (Kamaraj Sagar Dam)",
        description: "Still waters, mist and cinematic reflections of surrounding hills",
        category: "nature",
        emotion: "Calm / Healing",
      },
      {
        name: "Stone House",
        description: "Historic bungalow from the British era, surrounded by green lawns",
        category: "historical",
        emotion: "Calm / Healing",
      },
      {
        name: "Pine Forest (Shooting Spot)",
        description: "Tall pines, filtered light and film-like atmosphere for dreamy walks",
        category: "nature",
        emotion: "Mystery / Cinematic",
      },
      {
        name: "Parsons Valley",
        description: "Protected valley with misty meadows and an untouched wild feel",
        category: "nature",
        emotion: "Mystery / Cinematic",
      },
      {
        name: "Wenlock Downs (9th Mile)",
        description: "Endless green downs that feel like a movie set in the clouds",
        category: "nature",
        emotion: "Mystery / Cinematic",
      },
      {
        name: "Needle Rock View Point",
        description: "Dramatic cliff-edge viewpoint with 360° cinematic landscapes",
        category: "nature",
        emotion: "Mystery / Cinematic",
      },
      {
        name: "Mukurthi National Park",
        description: "High-altitude shola forests with mist, wildlife and raw drama",
        category: "nature",
        emotion: "Mystery / Cinematic",
      },
      {
        name: "Doddabetta Peak",
        description: "Highest peak in the Nilgiris with sweeping views that make you go wow",
        category: "nature",
        emotion: "Awe / Wow",
      },
      {
        name: "Pykara Waterfalls",
        description: "Layered waterfalls flowing through thick forests and rocky beds",
        category: "nature",
        emotion: "Awe / Wow",
      },
      {
        name: "Glenmorgan Viewpoint",
        description: "Less-crowded viewpoint with deep valleys and tea estates below",
        category: "nature",
        emotion: "Awe / Wow",
      },
      {
        name: "Elk Hill Murugan Temple",
        description: "Hilltop temple with a giant golden Murugan statue watching over Ooty",
        category: "temple",
        emotion: "Awe / Wow",
      },
      {
        name: "Rose Garden",
        description: "Vast garden filled with thousands of roses, perfect for slow walks",
        category: "nature",
        emotion: "Romantic / Social",
      },
      {
        name: "Ooty Botanical Garden",
        description: "240-acre garden with rare trees, flowers and picnic corners",
        category: "nature",
        emotion: "Romantic / Social",
      },
      {
        name: "Tea Museum & Chocolate Factory",
        description: "Tea-tasting, chocolate-making and cozy indoor time with loved ones",
        category: "cultural",
        emotion: "Romantic / Social",
      },
      {
        name: "Oooty Lake",
        description: "Classic boating spot with pedal boats and lively social energy",
        category: "nature",
        emotion: "Romantic / Social",
      },
    ],
    localCuisine: [
      "Nilgiri Tea",
      "Homemade Chocolates",
      "Varkey (local biscuit)",
      "Eucalyptus Honey",
    ],
    activities: [
      "Toy Train Ride",
      "Trekking",
      "Boating",
      "Photography",
      "Tea Garden Tours",
    ],
    nearbyAttractions: ["Coonoor", "Kotagiri", "Pykara Falls", "Emerald Lake"],
    travelTips: [
      "Book Nilgiri Mountain Railway tickets 120 days in advance online to avoid disappointment",
      "Pack layered clothing - mornings are cold (10°C), afternoons warm (20°C)",
      "Stay near Charring Cross for easy access to attractions and restaurants",
      "Visit tea factories early morning (8-10 AM) for fresh processing demonstrations",
      "Carry cash - many local vendors don't accept cards",
      "Download offline maps - network coverage is spotty in remote areas",
      "Book accommodations with heaters during peak season (April-June)",
    ],
  },
  {
    name: "Mahabalipuram",
    country: "Tamil Nadu",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
    emotionalMatch: "Cultural & Reflective",
    matchPercentage: 89,
    description:
      "Discover ancient rock-cut temples and sculptures while enjoying peaceful beach vibes at this UNESCO World Heritage site.",
    culturalHighlights: [
      {
        name: "Ancient Stone Carvers",
        description:
          "Meet artisan families who have been practicing stone carving for 15 generations, continuing the Pallava dynasty traditions with incredible skill.",
        category: "people",
      },
      {
        name: "Fishing Community Heritage",
        description:
          "Local fishermen maintain age-old techniques, using catamarans and traditional nets while living in harmony with the ancient monuments.",
        category: "livelihood",
      },
      {
        name: "UNESCO World Heritage Culture",
        description:
          "Living museum where 7th-century Pallava architecture blends with daily Tamil life, creating a unique cultural preservation model.",
        category: "culture",
      },
      {
        name: "Classical Dance Traditions",
        description:
          "Local Bharatanatyam and folk dance performances narrate the stories carved in stone, keeping ancient narratives alive through movement.",
        category: "art",
      },
    ],
    safetyLevel: "high" as const,
    bestTime: "Nov-Mar",
    priceRange: "$" as const,
    duration: "1-2 days",
    climate: "Tropical coastal (24-32°C)",
    language: "Tamil, English",
    currency: "Indian Rupee (INR)",
    touristPlaces: [
      {
        name: "Shore Temple",
        description: "7th-century structural temple facing the Bay of Bengal",
        category: "temple",
        emotion: "Pride / History",
      },
      {
        name: "Five Rathas",
        description: "Monolithic rock-cut temples shaped like chariots, each unique",
        category: "historical",
        emotion: "Pride / History",
      },
      {
        name: "Arjuna’s Penance",
        description: "Giant rock relief packed with mythological stories in stone",
        category: "historical",
        emotion: "Pride / History",
      },
      {
        name: "Varaha Cave Temple",
        description: "Rock-cut cave temple with beautifully carved panels",
        category: "historical",
        emotion: "Pride / History",
      },
      {
        name: "Mahishasuramardini Cave",
        description: "Cave temple showing Durga’s powerful form in sculpted detail",
        category: "historical",
        emotion: "Pride / History",
      },
      {
        name: "Ganesh Ratha",
        description: "Small rock-cut temple now dedicated to Lord Ganesha",
        category: "historical",
        emotion: "Pride / History",
      },
      {
        name: "Krishna’s Butter Ball",
        description: "Mysterious giant boulder balancing on a slope like magic",
        category: "nature",
        emotion: "Awe / Wow",
      },
      {
        name: "Mahabalipuram Lighthouse",
        description: "Old lighthouse giving sweeping views over sea and ruins",
        category: "historical",
        emotion: "Awe / Wow",
      },
      {
        name: "India Seashell Museum",
        description: "Quirky museum showcasing thousands of rare seashells",
        category: "cultural",
        emotion: "Awe / Wow",
      },
      {
        name: "Descent of the Ganges Relief",
        description: "Large stone panel narrating the descent of the sacred Ganga",
        category: "historical",
        emotion: "Awe / Wow",
      },
      {
        name: "Tiger Cave",
        description: "Rock-cut shrine with tiger-head carvings near the sea",
        category: "historical",
        emotion: "Mystery / Hidden",
      },
      {
        name: "Trimurti Cave Temple",
        description: "Cave temple showing Brahma, Vishnu and Shiva together",
        category: "historical",
        emotion: "Mystery / Hidden",
      },
      {
        name: "Alamparai Fort",
        description: "Sea-side fort ruins partly eaten by time and waves",
        category: "historical",
        emotion: "Mystery / Hidden",
      },
      {
        name: "Sadras Dutch Fort",
        description: "Old Dutch fort near the coast with quiet, story-filled walls",
        category: "historical",
        emotion: "Mystery / Hidden",
      },
      {
        name: "Olakkanesvara Temple",
        description: "Hilltop temple near the lighthouse with panoramic views",
        category: "temple",
        emotion: "Mystery / Hidden",
      },
      {
        name: "Mahabalipuram Beach",
        description: "Relaxed sandy beach perfect for morning walks and sunsets",
        category: "beach",
        emotion: "Calm / Healing",
      },
      {
        name: "Madras Crocodile Bank",
        description: "Conservation center with crocodiles and reptiles near ECR",
        category: "nature",
        emotion: "Calm / Healing",
      },
    ],
    localCuisine: [
      "Fresh Seafood",
      "Filter Coffee",
      "Masala Dosa",
      "Coconut Rice",
    ],
    activities: [
      "Rock Climbing",
      "Beach Volleyball",
      "Sculpture Workshops",
      "Sunrise Meditation",
    ],
    nearbyAttractions: [
      "Covelong Beach",
      "Dakshinachitra",
      "Crocodile Bank",
      "Vedanthangal Bird Sanctuary",
    ],
    travelTips: [
      "Arrive at Shore Temple by 6 AM for magical sunrise photos without crowds",
      "Hire certified ASI guide (₹300) at entrance for authentic historical insights",
      "Wear comfortable walking shoes - you'll walk on uneven stone surfaces",
      "Visit stone carving workshops near Five Rathas - watch artisans at work",
      "Carry water bottle and hat - limited shade between monuments",
      "Best photography time: Golden hour (6-7 AM, 5:30-6:30 PM)",
      "Respect monument rules - no climbing on sculptures for photos",
    ],
  },
  {
    name: "Kodaikanal",
    country: "Tamil Nadu",
    image:
      "https://i.ibb.co/d81Q3MB/38734eb0-1528-4445-a762-d162113047b2.png",
    emotionalMatch: "Romantic & Dreamy",
    matchPercentage: 92,
    description:
      "The 'Princess of Hill Stations' offers misty lakes, pine forests, and cozy weather perfect for romantic getaways.",
    culturalHighlights: ["Kodai Lake", "Coaker's Walk", "Pine Forest"],
    safetyLevel: "high" as const,
    bestTime: "Apr-Jun",
    priceRange: "$$" as const,
    touristPlaces: [
      {
        name: "Berijam Lake",
        description: "Silent, misty lake deep inside the forest – permits add to the magic",
        category: "nature",
        emotion: "Calm / Healing",
      },
      {
        name: "Mannavanur Lake",
        description: "Wide open grasslands, calm waters and grazing sheep all around",
        category: "nature",
        emotion: "Calm / Healing",
      },
      {
        name: "Silent Valley View",
        description: "Viewpoint that lives up to its name – quiet, fog and deep valleys",
        category: "nature",
        emotion: "Calm / Healing",
      },
      {
        name: "Bear Shola Falls",
        description: "Forest waterfall tucked inside trees, perfect for gentle nature time",
        category: "nature",
        emotion: "Calm / Healing",
      },
      {
        name: "Chettiar Park",
        description: "Small, peaceful park with flowers and benches for slow conversations",
        category: "nature",
        emotion: "Calm / Healing",
      },
      {
        name: "Kodaikanal Solar Observatory",
        description: "Historic observatory above the clouds, giving a sense of cosmic calm",
        category: "historical",
        emotion: "Calm / Healing",
      },
      {
        name: "Guna Caves (Devil’s Kitchen)",
        description: "Dark, dramatic rock formations wrapped in mist and movie history",
        category: "nature",
        emotion: "Mystery / Cinematic",
      },
      {
        name: "Pine Forest",
        description: "Tall, dense pines creating a moody, cinematic walking corridor",
        category: "nature",
        emotion: "Mystery / Cinematic",
      },
      {
        name: "Pillar Rocks",
        description: "Massive rock pillars often half-hidden by rolling clouds",
        category: "nature",
        emotion: "Mystery / Cinematic",
      },
      {
        name: "Kukkal Caves",
        description: "Ancient caves with legends, winds and a raw, mysterious setting",
        category: "historical",
        emotion: "Mystery / Cinematic",
      },
      {
        name: "Caps Fly Valley",
        description: "Windy cliff where light objects seem to float – playful yet eerie",
        category: "nature",
        emotion: "Mystery / Cinematic",
      },
      {
        name: "Dolphin’s Nose",
        description: "Iconic viewpoint jutting out like a dolphin, hovering over deep valleys",
        category: "nature",
        emotion: "Awe / Wow",
      },
      {
        name: "Thalaiyar Falls (Rat Tail Falls)",
        description: "One of the highest waterfalls in India, seen from far-off viewpoints",
        category: "nature",
        emotion: "Awe / Wow",
      },
      {
        name: "Moir Point",
        description: "Windy viewpoint where clouds, roads and valleys meet",
        category: "nature",
        emotion: "Awe / Wow",
      },
      {
        name: "Green Valley View (Suicide Point)",
        description: "Deep drop, thick mist and vast green carpets all around",
        category: "nature",
        emotion: "Awe / Wow",
      },
      {
        name: "Vattakanal Falls",
        description: "Forest waterfall on the Vattakanal side, loved by backpackers",
        category: "nature",
        emotion: "Adventure / Active",
      },
      {
        name: "Perumal Peak Trek",
        description: "Popular trek to a high peak with sweeping views and strong winds",
        category: "adventure",
        emotion: "Adventure / Active",
      },
      {
        name: "Kodai Lake (Cycling Path)",
        description: "Loop around the lake with cycles, horses and a lively mood",
        category: "nature",
        emotion: "Adventure / Active",
      },
      {
        name: "Coaker’s Walk",
        description: "Floating-feel cliff walk with railings, fog and valley drops",
        category: "nature",
        emotion: "Adventure / Active",
      },
    ],
    localCuisine: [
      "Homemade Chocolates",
      "Plums",
      "Pears",
      "Eucalyptus Oil",
      "Pine Forest Honey",
    ],
    activities: [
      "Boating",
      "Horse Riding",
      "Trekking",
      "Cycling",
      "Nature Photography",
    ],
    nearbyAttractions: [
      "Berijam Lake",
      "Dolphin's Nose",
      "Green Valley View",
      "Fairy Falls",
    ],
    travelTips: [
      "Book accommodation in advance during peak season",
      "Carry warm clothes",
      "Try local homemade chocolates",
    ],
  },
  {
    name: "Kanyakumari",
    country: "Tamil Nadu",
    image:
      "https://travelcrafters.com.au/wp-content/uploads/2025/01/glass-bridge.jpg.webp",
    emotionalMatch: "Spiritual & Contemplative",
    matchPercentage: 87,
    description:
      "Experience the magical sunrise and sunset at India's southernmost tip, where three seas meet in spiritual harmony.",
    culturalHighlights: [
      "Sunrise Point",
      "Vivekananda Rock",
      "Thiruvalluvar Statue",
    ],
    safetyLevel: "high" as const,
    bestTime: "Oct-Mar",
    priceRange: "$" as const,
    touristPlaces: [
      {
        name: "Sunrise Point",
        description: "Watch the sun rise where three seas meet – pure edge-of-India magic",
        category: "nature",
        emotion: "Lonely / Deep Thinking",
      },
      {
        name: "Kanyakumari Beach",
        description: "Rocky shoreline perfect for sitting, thinking and wave-watching",
        category: "beach",
        emotion: "Lonely / Deep Thinking",
      },
      {
        name: "Sanguthurai Beach",
        description: "Quiet sandy stretch with a long pier and fewer crowds",
        category: "beach",
        emotion: "Lonely / Deep Thinking",
      },
      {
        name: "Vattakottai Fort",
        description: "Coastal fort with sea views, lawns and a slow, reflective vibe",
        category: "historical",
        emotion: "Lonely / Deep Thinking",
      },
      {
        name: "Sothavilai Beach",
        description: "Long, shallow beach ideal for long, meditative walks",
        category: "beach",
        emotion: "Lonely / Deep Thinking",
      },
      {
        name: "Vivekananda Rock Memorial",
        description: "Rock island where Vivekananda meditated, reached by a short ferry",
        category: "temple",
        emotion: "Spiritual / Divine",
      },
      {
        name: "Kumari Amman Temple",
        description: "Ancient seaside temple dedicated to the virgin goddess",
        category: "temple",
        emotion: "Spiritual / Divine",
      },
      {
        name: "Thanumalayan Temple (Suchindram)",
        description: "Temple famous for its musical pillars and carved details",
        category: "temple",
        emotion: "Spiritual / Divine",
      },
      {
        name: "Our Lady of Ransom Church",
        description: "Gothic-style church facing the sea with a glowing white facade",
        category: "temple",
        emotion: "Spiritual / Divine",
      },
      {
        name: "Sai Baba Temple",
        description: "Peaceful temple space for quiet prayer and reflection",
        category: "temple",
        emotion: "Spiritual / Divine",
      },
      {
        name: "Thirparappu Waterfalls",
        description: "Layered waterfall with bathing steps and temple nearby",
        category: "nature",
        emotion: "Adventure / Pride",
      },
      {
        name: "Mathur Aqueduct",
        description: "One of the highest hanging bridges in Asia with dramatic views",
        category: "historical",
        emotion: "Adventure / Pride",
      },
      {
        name: "Padmanabhapuram Palace",
        description: "Beautiful wooden palace with courtyards, pillars and old-world charm",
        category: "historical",
        emotion: "Adventure / Pride",
      },
      {
        name: "Thiruvalluvar Statue",
        description: "133-foot statue in the sea celebrating the legendary Tamil poet",
        category: "historical",
        emotion: "Adventure / Pride",
      },
      {
        name: "Gandhi Mandapam",
        description: "Memorial built at the spot where Gandhi’s ashes were kept for homage",
        category: "historical",
        emotion: "Adventure / Pride",
      },
    ],
    localCuisine: [
      "Fresh Seafood",
      "Banana Chips",
      "Coconut Water",
      "Tamil Meals",
      "Jackfruit Chips",
    ],
    activities: [
      "Sunrise Viewing",
      "Sunset Watching",
      "Ferry Rides",
      "Temple Visits",
      "Beach Walks",
      "Photography",
    ],
    nearbyAttractions: [
      "Padmanabhapuram Palace",
      "Courtallam Falls",
      "Suchindram Temple",
      "Nagercoil",
    ],
    travelTips: [
      "Visit during full moon for best sunrise/sunset views",
      "Book ferry tickets early for Vivekananda Rock",
      "Carry sun protection and water",
    ],
  },
  {
    name: "Yercaud",
    country: "Tamil Nadu",
    image:
      "https://bestplaces.blog/wp-content/uploads/2025/03/Best-Places-to-Visit-in-Yercaud.webp",
    emotionalMatch: "Refreshing & Energizing",
    matchPercentage: 85,
    description:
      "A lesser-known gem in the Shevaroy Hills, perfect for those seeking solitude amidst coffee plantations and serene lakes.",
    culturalHighlights: [
      "Coffee Plantations",
      "Emerald Lake",
      "Servaroyan Temple",
    ],
    safetyLevel: "high" as const,
    bestTime: "Dec-May",
    priceRange: "$" as const,
    touristPlaces: [
      {
        name: "Yercaud Lake (Emerald Lake)",
        description: "Calm central lake ringed by trees and gentle boating",
        category: "nature",
        emotion: "Calm / Healing",
      },
      {
        name: "Botanical Garden",
        description: "Green, shaded garden ideal for slow nature walks",
        category: "nature",
        emotion: "Calm / Healing",
      },
      {
        name: "Orchidarium",
        description: "Specialized garden displaying rare orchids and plants",
        category: "nature",
        emotion: "Calm / Healing",
      },
      {
        name: "Anna Park",
        description: "Well-kept park beside the lake with lawns and flowerbeds",
        category: "nature",
        emotion: "Calm / Healing",
      },
      {
        name: "Shevaroy Temple",
        description: "Hilltop temple with panoramic valley views and cool breeze",
        category: "temple",
        emotion: "Calm / Healing",
      },
      {
        name: "Sri Chakra Mahameru Temple",
        description: "Unique spiritual space with Sri Chakra energy focus",
        category: "temple",
        emotion: "Calm / Healing",
      },
      {
        name: "Pagoda Point",
        description: "Viewpoint with layered hills and town lights in the distance",
        category: "nature",
        emotion: "Awe / Wow",
      },
      {
        name: "Lady’s Seat",
        description: "Cliff viewpoint overlooking hairpin bends and the plains",
        category: "nature",
        emotion: "Awe / Wow",
      },
      {
        name: "Gents Seat",
        description: "Another classic viewpoint for sunrise, sunset and photos",
        category: "nature",
        emotion: "Awe / Wow",
      },
      {
        name: "Karadiyur View Point",
        description: "Offbeat viewpoint with deep valleys and dramatic skies",
        category: "nature",
        emotion: "Awe / Wow",
      },
      {
        name: "Tipperary Viewpoint",
        description: "Quiet lookout over cliffs, forests and scattered settlements",
        category: "nature",
        emotion: "Awe / Wow",
      },
      {
        name: "32-km Loop Road",
        description: "Cinematic drive through coffee estates and hairpin bends",
        category: "adventure",
        emotion: "Adventure / Active",
      },
      {
        name: "Kiliyur Falls",
        description: "Trek down steps to reach a powerful seasonal waterfall",
        category: "nature",
        emotion: "Adventure / Active",
      },
      {
        name: "Peeku Park",
        description: "Playful space to interact with friendly birds and animals",
        category: "nature",
        emotion: "Adventure / Active",
      },
      {
        name: "Grange TreeTop Adventure",
        description: "Zip-lines, rope courses and fun outdoor activities in the trees",
        category: "adventure",
        emotion: "Adventure / Active",
      },
      {
        name: "Bear’s Cave",
        description: "Natural cave formation with legends and a mysterious feel",
        category: "historical",
        emotion: "Mystery / Historic",
      },
      {
        name: "Kottachedu Teak Forest",
        description: "Teak plantations and wild patches with a raw, old-world aura",
        category: "nature",
        emotion: "Mystery / Historic",
      },
      {
        name: "The Grange",
        description: "1820s heritage bungalow with colonial history",
        category: "historical",
        emotion: "Mystery / Historic",
      },
      {
        name: "Norton's Bungalow",
        description: "Old estate house linked with vintage Yercaud legends",
        category: "historical",
        emotion: "Mystery / Historic",
      },
    ],
    localCuisine: [
      "Fresh Coffee",
      "Orange Marmalade",
      "Honey",
      "Tribal Cuisine",
      "Hill Station Snacks",
    ],
    activities: [
      "Coffee Plantation Tours",
      "Boating",
      "Trekking",
      "Nature Photography",
      "Temple Visits",
    ],
    nearbyAttractions: [
      "Salem",
      "Mettur Dam",
      "Hogenakkal Falls",
      "Kolli Hills",
    ],
    travelTips: [
      "Best visited during orange season (April-June)",
      "Carry warm clothes for early morning",
      "Try local orange products",
    ],
  },
  {
    name: "Thanjavur",
    country: "Tamil Nadu",
    image:
      "https://letusdiscoverindia.com/wp-content/uploads/2023/03/pexels-photo-5124396.jpeg",
    emotionalMatch: "Cultural & Inspiring",
    matchPercentage: 88,
    description:
      "Immerse yourself in the rich Chola heritage with magnificent temples, classical music, and traditional art forms.",
    culturalHighlights: [
      "Brihadeeswarar Temple",
      "Thanjavur Paintings",
      "Classical Music",
    ],
    safetyLevel: "high" as const,
    bestTime: "Nov-Feb",
    priceRange: "$" as const,
    touristPlaces: [
      {
        name: "Brihadeeswarar Temple (Big Temple)",
        description: "Iconic UNESCO-listed Chola temple with towering vimana and murals",
        category: "temple",
        emotion: "Spiritual / Divine",
      },
      {
        name: "Punnai Nallur Mariamman Temple",
        description: "Powerful village goddess temple with strong local devotion",
        category: "temple",
        emotion: "Spiritual / Divine",
      },
      {
        name: "Thanjai Mamani Koil",
        description: "Cluster of Vishnu temples with deep mythological stories",
        category: "temple",
        emotion: "Spiritual / Divine",
      },
      {
        name: "Schwartz Church",
        description: "Historic church inside the palace complex from colonial times",
        category: "historical",
        emotion: "Spiritual / Divine",
      },
      {
        name: "Swami Malai Temple (Nearby)",
        description: "One of the six abodes of Murugan, a short drive away",
        category: "temple",
        emotion: "Spiritual / Divine",
      },
      {
        name: "Thanjavur Maratha Palace",
        description: "Royal palace with courtyards, towers and crumbling charm",
        category: "historical",
        emotion: "Pride / History",
      },
      {
        name: "Saraswathi Mahal Library",
        description: "Legendary library with rare manuscripts, palm-leaf texts and books",
        category: "cultural",
        emotion: "Pride / History",
      },
      {
        name: "Sangeetha Mahal",
        description: "Historic performance hall with unique acoustic design",
        category: "cultural",
        emotion: "Pride / History",
      },
      {
        name: "Rajarajan Manimandapam",
        description: "Memorial honoring the great Chola king Rajaraja Cholan",
        category: "historical",
        emotion: "Pride / History",
      },
      {
        name: "Art Gallery (Bronze Gallery)",
        description: "Museum space filled with exquisite Chola bronze statues",
        category: "cultural",
        emotion: "Pride / History",
      },
      {
        name: "Tanjore Doll Workshops",
        description: "Studios where the classic bobble-head dolls are hand-crafted",
        category: "cultural",
        emotion: "Creative",
      },
      {
        name: "Tanjore Painting Centers",
        description: "Ateliers to watch or learn traditional gold-embossed paintings",
        category: "cultural",
        emotion: "Creative",
      },
      {
        name: "Sivaganga Park",
        description: "Family park with greenery, rides and a relaxed local vibe",
        category: "nature",
        emotion: "Creative",
      },
    ],
    localCuisine: [
      "Thanjavur Meals",
      "Puliyodarai",
      "Curd Rice",
      "Traditional Sweets",
      "Filter Coffee",
    ],
    activities: [
      "Temple Architecture Tours",
      "Art Gallery Visits",
      "Classical Music Concerts",
      "Painting Workshops",
      "Heritage Walks",
    ],
    nearbyAttractions: [
      "Kumbakonam",
      "Darasuram",
      "Gangaikonda Cholapuram",
      "Thiruvaiyaru",
    ],
    travelTips: [
      "Hire a guide for temple architecture insights",
      "Visit during music season (Dec-Jan)",
      "Respect temple dress codes",
    ],
  },
  {
    name: "Madurai",
    country: "Tamil Nadu",
    image:
      "https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_Madurai_tv_destination_img_1_l_542_967.jpg",
    emotionalMatch: "Spiritual & Vibrant",
    matchPercentage: 91,
    description:
      "Experience the divine energy of Meenakshi Temple and immerse in the vibrant temple city culture and traditions.",
    culturalHighlights: [
      "Meenakshi Temple",
      "Temple Festivals",
      "Local Markets",
    ],
    safetyLevel: "high" as const,
    bestTime: "Oct-Mar",
    priceRange: "$" as const,
    touristPlaces: [
      {
        name: "Meenakshi Amman Temple",
        description: "Vibrant temple complex with tall gopurams and endless sculptures",
        category: "temple",
        emotion: "Spiritual / Divine",
      },
      {
        name: "Koodal Azhagar Temple",
        description: "Ancient Vishnu temple with layered shrines and carvings",
        category: "temple",
        emotion: "Spiritual / Divine",
      },
      {
        name: "Pazhamudircholai Murugan Temple",
        description: "Hilltop Murugan temple wrapped in greenery and cool air",
        category: "temple",
        emotion: "Spiritual / Divine",
      },
      {
        name: "Alagar Kovil",
        description: "Scenic temple complex near forested hills and streams",
        category: "temple",
        emotion: "Spiritual / Divine",
      },
      {
        name: "Thiruparankundram Murugan Temple",
        description: "Rock-cut Murugan temple, one of the key pilgrimage spots",
        category: "temple",
        emotion: "Spiritual / Divine",
      },
      {
        name: "ISKCON Madurai",
        description: "Clean, peaceful temple campus with bhajans and prasadam",
        category: "temple",
        emotion: "Spiritual / Divine",
      },
      {
        name: "Thirumalai Nayakkar Palace",
        description: "17th-century palace with huge pillars and evening light shows",
        category: "historical",
        emotion: "Pride / History",
      },
      {
        name: "Pudhu Mandapam",
        description: "Pillared hall outside Meenakshi temple turned into a bustling market",
        category: "shopping",
        emotion: "Pride / History",
      },
      {
        name: "Gandhi Memorial Museum",
        description: "Museum chronicling India’s freedom struggle with rare exhibits",
        category: "cultural",
        emotion: "Pride / History",
      },
      {
        name: "Vilachery Pottery Village",
        description: "Artisans’ village known for clay idols and terracotta work",
        category: "cultural",
        emotion: "Pride / History",
      },
      {
        name: "Saint Mary's Cathedral",
        description: "Beautiful old church with stained glass and quiet interiors",
        category: "temple",
        emotion: "Pride / History",
      },
      {
        name: "Samanar Hills (Jain Caves)",
        description: "Ancient Jain carving site on rocky hills with sunset views",
        category: "historical",
        emotion: "Mystery / Offbeat",
      },
      {
        name: "Yanaimalai (Elephant Hill)",
        description: "Elephant-shaped hill with carvings and a strong mythical feel",
        category: "nature",
        emotion: "Mystery / Offbeat",
      },
      {
        name: "Kazimar Big Mosque",
        description: "Old mosque in the heart of the city with layered histories",
        category: "temple",
        emotion: "Mystery / Offbeat",
      },
      {
        name: "Goripalayam Dargah",
        description: "Historic dargah with massive domes and peaceful courtyards",
        category: "temple",
        emotion: "Mystery / Offbeat",
      },
      {
        name: "Vaigai River Bed",
        description: "Open river space where locals gather, walk and just be",
        category: "nature",
        emotion: "Calm / Daily Pulse",
      },
      {
        name: "Vandiyur Mariamman Teppakulam",
        description: "Huge tank used for float festivals and quiet evening walks",
        category: "cultural",
        emotion: "Calm / Daily Pulse",
      },
      {
        name: "Madurai Banana Market",
        description: "Colorful wholesale banana market showing the city’s trading soul",
        category: "shopping",
        emotion: "Calm / Daily Pulse",
      },
    ],
    localCuisine: [
      "Madurai Jigarthanda",
      "Paruthi Paal",
      "Kari Dosa",
      "Mutton Chukka",
      "Filter Coffee",
    ],
    activities: [
      "Temple Tours",
      "Evening Aarti",
      "Heritage Walks",
      "Local Market Shopping",
      "Cultural Performances",
    ],
    nearbyAttractions: ["Rameswaram", "Kodaikanal", "Dindigul", "Palani"],
    travelTips: [
      "Visit temple early morning to avoid crowds",
      "Try famous Jigarthanda drink",
      "Respect temple traditions and dress codes",
    ],
  },
  {
    name: "Rameswaram",
    country: "Tamil Nadu",
    image:
      "https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/destination/m_Rameshwaram_tv_destination_img_5_l_833_1248.jpg",
    emotionalMatch: "Peaceful & Sacred",
    matchPercentage: 89,
    description:
      "Find spiritual solace at this sacred island town with pristine beaches and ancient temples offering deep meditation experiences.",
    culturalHighlights: [
      "Ramanathaswamy Temple",
      "Pamban Bridge",
      "Sacred Baths",
    ],
    safetyLevel: "high" as const,
    bestTime: "Oct-Apr",
    priceRange: "$" as const,
    touristPlaces: [
      {
        name: "Ramanathaswamy Temple",
        description: "Sacred Shiva temple with long corridors and 22 theertha wells",
        category: "temple",
        emotion: "Spiritual / Pious",
      },
      {
        name: "Agni Theertham",
        description: "Sacred sea bathing ghat right opposite the main temple",
        category: "nature",
        emotion: "Spiritual / Pious",
      },
      {
        name: "Panchamukhi Hanuman Temple",
        description: "Temple with five-faced Hanuman idol and floating stones display",
        category: "temple",
        emotion: "Spiritual / Pious",
      },
      {
        name: "Rama Setu (Dhanushkodi Tip)",
        description: "Edge-of-land spot looking out towards the legendary Rama Setu",
        category: "nature",
        emotion: "Spiritual / Pious",
      },
      {
        name: "Lakshmana Tirtham",
        description: "Sacred tank associated with Lakshmana’s worship",
        category: "temple",
        emotion: "Spiritual / Pious",
      },
      {
        name: "Jada Tirtham",
        description: "Quiet sacred pond where Rama is believed to have washed his hair",
        category: "temple",
        emotion: "Spiritual / Pious",
      },
      {
        name: "Dhanushkodi Beach (Ghost Town)",
        description: "Abandoned town and surreal beach at the end of the road",
        category: "beach",
        emotion: "Lonely / Reflective",
      },
      {
        name: "Ariyaman Beach",
        description: "Clean, gentle beach ideal for long reflective walks",
        category: "beach",
        emotion: "Lonely / Reflective",
      },
      {
        name: "Kothandaramaswamy Temple",
        description: "Sea-side temple surviving the cyclone, full of stories",
        category: "temple",
        emotion: "Lonely / Reflective",
      },
      {
        name: "Adam’s Bridge View Point",
        description: "Vantage point to glimpse the line of shoals towards Sri Lanka",
        category: "nature",
        emotion: "Lonely / Reflective",
      },
      {
        name: "Pamban Bridge",
        description: "Iconic rail-and-road bridge giving goosebump sea views",
        category: "historical",
        emotion: "Awe / Wow",
      },
      {
        name: "Gandhamadhana Parvatham",
        description: "Hillock with Rama’s foot impressions and sweeping island views",
        category: "temple",
        emotion: "Awe / Wow",
      },
      {
        name: "APJ Abdul Kalam Memorial",
        description: "Beautifully designed memorial for India’s beloved ‘People’s President’",
        category: "historical",
        emotion: "Awe / Wow",
      },
      {
        name: "Villoondi Theertham",
        description: "Sea well and beach where myth and nature meet",
        category: "nature",
        emotion: "Calm / Natural",
      },
      {
        name: "Kunthukal Beach",
        description: "Less-crowded beach with soft sand and gentle waves",
        category: "beach",
        emotion: "Calm / Natural",
      },
      {
        name: "Water Bird Sanctuary",
        description: "Wetland area attracting migratory birds in the right season",
        category: "nature",
        emotion: "Calm / Natural",
      },
    ],
    localCuisine: [
      "Fresh Seafood",
      "Coconut Rice",
      "Fish Curry",
      "Prawn Fry",
      "Traditional Meals",
    ],
    activities: [
      "Temple Visits",
      "Sacred Baths",
      "Beach Walks",
      "Pilgrimage Tours",
      "Photography",
      "Meditation",
    ],
    nearbyAttractions: ["Madurai", "Kanyakumari", "Tuticorin", "Tiruchendur"],
    travelTips: [
      "Carry towels for sacred baths",
      "Visit Dhanushkodi early morning",
      "Respect pilgrimage traditions",
    ],
  },
  {
    name: "Pondicherry",
    country: "Tamil Nadu",
    image:
      "https://www.southtourism.in/assets/images/cityinfo/Pondicherry2.png",
    emotionalMatch: "Tranquil & International",
    matchPercentage: 90,
    description:
      "Experience French colonial charm mixed with spiritual vibes at Auroville and peaceful beaches perfect for inner reflection.",
    culturalHighlights: ["French Quarter", "Auroville", "Promenade Beach"],
    safetyLevel: "high" as const,
    bestTime: "Oct-Mar",
    priceRange: "$$" as const,
    touristPlaces: [
      {
        name: "White Town (French Quarter)",
        description: "Iconic French streets with pastel buildings and chic cafés",
        category: "cultural",
        emotion: "Romantic / Social",
      },
      {
        name: "Rock Beach (Promenade)",
        description: "Wave-battered rocky shore with a lively evening promenade",
        category: "beach",
        emotion: "Romantic / Social",
      },
      {
        name: "Serenity Beach",
        description: "Relaxed sandy beach popular with surfers and couples",
        category: "beach",
        emotion: "Romantic / Social",
      },
      {
        name: "Old Lighthouse",
        description: "Vintage lighthouse overlooking the sea and town skyline",
        category: "historical",
        emotion: "Romantic / Social",
      },
      {
        name: "French War Memorial",
        description: "Elegant seaside memorial that lights up beautifully at night",
        category: "historical",
        emotion: "Romantic / Social",
      },
      {
        name: "Sri Aurobindo Ashram",
        description: "Quiet ashram space for meditation and inner reflection",
        category: "cultural",
        emotion: "Calm / Healing",
      },
      {
        name: "Eden Beach",
        description: "Blue-flag certified clean beach with clear waters",
        category: "beach",
        emotion: "Calm / Healing",
      },
      {
        name: "Auroville Beach",
        description: "Chill beach with soft sands and young, creative energy",
        category: "beach",
        emotion: "Calm / Healing",
      },
      {
        name: "Ousteri Lake",
        description: "Large lake and birding spot with beautiful sunsets",
        category: "nature",
        emotion: "Calm / Healing",
      },
      {
        name: "Matrimandir Viewing Point",
        description: "Peaceful viewpoint to see the golden Matrimandir sphere from outside",
        category: "cultural",
        emotion: "Calm / Healing",
      },
      {
        name: "Paradise Beach",
        description: "Sand-spit beach reached by boat, perfect for play and photos",
        category: "beach",
        emotion: "Adventure / Active",
      },
      {
        name: "Chunnambar Boat House",
        description: "Backwater boating hub with ferries to Paradise Beach",
        category: "adventure",
        emotion: "Adventure / Active",
      },
      {
        name: "Ariyankuppam Mangrove Kayaking",
        description: "Kayak through narrow mangrove channels in soft light",
        category: "adventure",
        emotion: "Adventure / Active",
      },
      {
        name: "Pondy Marina",
        description: "Waterfront space with food, activities and seaside walks",
        category: "food",
        emotion: "Adventure / Active",
      },
      {
        name: "Pondicherry Museum",
        description: "Museum of French, Roman and Tamil artifacts in an old building",
        category: "cultural",
        emotion: "Intellectual",
      },
      {
        name: "Basilica of the Sacred Heart",
        description: "Neo-Gothic red-and-white church with stained glass",
        category: "temple",
        emotion: "Intellectual",
      },
      {
        name: "Goubert Market",
        description: "Colorful local market with flowers, veggies and daily life",
        category: "shopping",
        emotion: "Intellectual",
      },
    ],
    localCuisine: [
      "French Pastries",
      "Crepes",
      "Fresh Seafood",
      "South Indian Meals",
      "Continental Cuisine",
    ],
    activities: [
      "Heritage Walks",
      "Beach Activities",
      "Yoga Sessions",
      "Cycling Tours",
      "Art Gallery Visits",
      "Meditation",
    ],
    nearbyAttractions: [
      "Mahabalipuram",
      "Chidambaram",
      "Cuddalore",
      "Villupuram",
    ],
    travelTips: [
      "Rent a bicycle to explore the French Quarter",
      "Visit Auroville for spiritual experiences",
      "Try French bakeries for authentic pastries",
    ],
  },
];

export const getAllDestinations = () => [
  ...tamilNaduDestinations,
];

export const getDestinationByName = (name: string) => {
  return getAllDestinations().find(
    (dest) => dest.name.toLowerCase() === name.toLowerCase()
  );
};
