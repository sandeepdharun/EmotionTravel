// Centralized destination datasets for Tamil Nadu
// Shared across pages and recommendation engine

export type Destination = {
  name: string;
  country: string; // Region label (e.g., "Tamil Nadu", "Kerala", "Bangalore", "Near Bangalore")
  district?: string; // Sub-region (e.g., "Thiruvananthapuram", "Idukki")
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
      | "festival"
      | "history"
      | "nature"
      | "temple";
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

export const keralaDestinations: Destination[] = [
  {
    name: "Thiruvananthapuram",
    country: "Kerala",
    image: "https://i.ibb.co/RGstVDP3/image-af6c7bf2.png",
    emotionalMatch: "Heritage & Statehood",

    matchPercentage: 98,
    description: "The evergreen city of India with sacred temples and golden beaches.",
    culturalHighlights: ["Padmanabhaswamy Temple", "Kovalam Beach", "Ponmudi"],
    safetyLevel: "high",
    bestTime: "Oct-Mar",
    priceRange: "$$",
    touristPlaces: [
      {
        name: "Padmanabhaswamy Temple",
        description: "The wealthiest temple in the world, a masterpiece of Dravidian architecture.",
        category: "temple",
        emotion: "Spiritual / Divine",
      },
      {
        name: "Kovalam Beach",
        description: "Internationally renowned beach with a distinctive lighthouse and crescent coastline.",
        category: "beach",
        emotion: "Adventure / Active",
      },
      {
        name: "Napier Museum",
        description: "An architectural gem housing rare archaeological and historic artifacts.",
        category: "historical",
        emotion: "Pride / History",
      },
      {
        name: "Ponmudi",
        description: "A scenic hill station with winding roads, tea estates, and misty peaks.",
        category: "nature",
        emotion: "Romantic / Dreamy",
      },
      {
        name: "Varkala Cliff",
        description: "A unique geological formation with a stunning beach and vibrant cliffside cafes.",
        category: "beach",
        emotion: "Awe / Wow",
      },
      {
        name: "Poovar Island",
        description: "Where the lake, river, and sea meet, offering serene golden sand beaches.",
        category: "nature",
        emotion: "Calm / Healing",
      },
      {
        name: "Agasthyarkoodam",
        description: "The second highest peak in Kerala, known for its rare medicinal herbs.",
        category: "adventure",
        emotion: "Mystery / Hidden",
      },
      {
        name: "Shangumugham Beach",
        description: "Famous for its giant mermaid sculpture and perfect sunset views.",
        category: "beach",
        emotion: "Calm / Healing",
      },
    ]
  },
  {
    name: "Kollam",
    country: "Kerala",
    image: "https://i.ibb.co/1t0yRpF9/Firefly-20260215215840.png",
    emotionalMatch: "Cashew & Canals",

    matchPercentage: 92,
    description: "The gateway to the backwaters, rich in trade history and natural beauty.",
    culturalHighlights: [
      {
        name: "Ashtamudi Lake",
        description: "A vast palm-shaped water body known for its unique ecosystem and houseboats.",
        category: "nature",
      },
      {
        name: "Munroe Island",
        description: "A hidden cluster of eight islands offering canoe tours through narrow canals.",
        category: "nature",
      },
      {
        name: "Jatayu Earth Center",
        description: "Home to the world's largest bird sculpture, symbolizing safety and honor.",
        category: "art",
      },
    ],
    safetyLevel: "high",
    bestTime: "Nov-Mar",
    priceRange: "$$",
    touristPlaces: [
      {
        name: "Thangassery Light House",
        description: "A historic lighthouse offering panoramic views of the Arabian Sea.",
        category: "historical",
        emotion: "Adventure / Active",
      },
      {
        name: "Palaruvi Waterfalls",
        description: "Meaning 'Stream of Milk', one of the highest waterfalls in Kerala.",
        category: "nature",
        emotion: "Calm / Healing",
      },
      {
        name: "Thenmala Ecotourism",
        description: "India's first planned ecotourism destination with trekking and boating.",
        category: "adventure",
        emotion: "Adventure / Active",
      },
      {
        name: "Sasthamkotta Lake",
        description: "The largest freshwater lake in Kerala, known as the Queen of Lakes.",
        category: "nature",
        emotion: "Calm / Healing",
      },
      {
        name: "Kollam Beach",
        description: "A vibrant beach park perfect for evening strolls and watching sunsets.",
        category: "beach",
        emotion: "Romantic / Social",
      },
      {
        name: "Shenduruny Wildlife Sanctuary",
        description: "A sanctuary rich in biodiversity, part of the Agasthyamalai Biosphere Reserve.",
        category: "nature",
        emotion: "Mystery / Hidden",
      },
    ]
  },
  {
    name: "Pathanamthitta",
    country: "Kerala",
    image: "https://i.ibb.co/nMzdk3YT/image-a92af501.png",
    emotionalMatch: "Pilgrim's Paradise",

    matchPercentage: 90,
    description: "The headquarters of pilgrimage tourism with pristine forests and rivers.",
    culturalHighlights: [
      {
        name: "Gavi Eco Tourism",
        description: "A pristine forest area perfect for trekking, camping, and wildlife spotting.",
        category: "nature",
      },
      {
        name: "Aranmula Boat Race",
        description: "The oldest river boat fiesta in Kerala, held during Onam.",
        category: "festival",
      },
      {
        name: "Konni Elephant Cage",
        description: "A historic elephant training center and museum.",
        category: "culture",
      },
    ],
    safetyLevel: "medium",
    bestTime: "Sep-Feb",
    priceRange: "$$",
    touristPlaces: [
      {
        name: "Sabarimala Temple",
        description: "One of the most famous pilgrim centers, situated amidst dense forests.",
        category: "temple",
        emotion: "Spiritual / Divine",
      },
      {
        name: "Perunthenaruvi Waterfalls",
        description: "A natural wonder where water flows over a rocky bed into a ravine.",
        category: "nature",
        emotion: "Adventure / Active",
      },
      {
        name: "Aranmula Parthasarathy Temple",
        description: "An ancient temple on the banks of the Pamba river, key to the boat race.",
        category: "temple",
        emotion: "Spiritual / Divine",
      },
      {
        name: "Adavi Eco Tourism",
        description: "Famous for coracle rafting (bowl boat riding) through the forest river.",
        category: "adventure",
        emotion: "Adventure / Active",
      },
      {
        name: "Kaviyoor Rock Cut Temple",
        description: "An 8th-century rock-cut cave temple dedicated to Lord Shiva.",
        category: "historical",
        emotion: "Pride / History",
      },
      {
        name: "Mannadi",
        description: "The place where the freedom fighter Velu Thampi Dalawa took his last breath.",
        category: "historical",
        emotion: "Pride / History",
      },
    ]
  },
  {
    name: "Alappuzha",
    country: "Kerala",
    image: "https://i.ibb.co/998Psxn0/image-5ff17120.png",
    emotionalMatch: "Venice of the East",

    matchPercentage: 96,
    description: "World-famous backwaters and houseboats gliding through emerald canals.",
    culturalHighlights: ["Houseboats", "Kuttanad", "Marari Beach"],
    safetyLevel: "high",
    bestTime: "Oct-Feb",
    priceRange: "$$$",
    touristPlaces: [
      {
        name: "Kuttanad Backwaters",
        description: "Cruise through the 'Rice Bowl of Kerala', seeing farming below sea level.",
        category: "nature",
        emotion: "Awe / Wow",
      },
      {
        name: "Alappuzha Beach",
        description: "A historic beach with an old pier extending into the sea, holding colonial tales.",
        category: "beach",
        emotion: "Pride / History",
      },
      {
        name: "Marari Beach",
        description: "A pristine, sleepy fishing village beach perfect for doing absolutely nothing.",
        category: "beach",
        emotion: "Calm / Healing",
      },
      {
        name: "Ambalappuzha Temple",
        description: "Famous for its unique architecture and the legendary sweet milk porridge (Palpayasam).",
        category: "temple",
        emotion: "Spiritual / Divine",
      },
      {
        name: "Pathiramanal Island",
        description: "A birdwatcher's paradise island in the middle of Vembanad Lake.",
        category: "nature",
        emotion: "Mystery / Hidden",
      },
      {
        name: "Krishnapuram Palace",
        description: "A museum palace famous for the massive Gajendra Moksha mural painting.",
        category: "historical",
        emotion: "Pride / History",
      },
      {
        name: "Alleppey Lighthouse",
        description: "Offers a panoramic view of the Arabian Sea and the sprawling town.",
        category: "historical",
        emotion: "Adventure / Active",
      },
      {
        name: "Revi Karunakaran Museum",
        description: "A private museum showcasing crystals, ivory, and Tanjore paintings.",
        category: "cultural",
        emotion: "Intellectual",
      },
    ]
  },
  {
    name: "Kottayam",
    country: "Kerala",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1000",
    emotionalMatch: "Letters & Lakes",

    matchPercentage: 93,
    description: "A land of letters, latex, and lakes, bordered by the Western Ghats and Vembanad.",
    culturalHighlights: [
      {
        name: "Kumarakom",
        description: "A village cluster of little islands on Vembanad Lake, famous for bird watching.",
        category: "nature",
      },
      {
        name: "Ilaveezhapoonchira",
        description: "A valley where no leaves fall, offering stunning sunrise and sunset views.",
        category: "nature",
      },
      {
        name: "Vaikom Temple",
        description: "One of the oldest temples in Kerala, known for the Vaikom Ashtami festival.",
        category: "culture",
      },
    ],
    safetyLevel: "high",
    bestTime: "Nov-Feb",
    priceRange: "$$",
    touristPlaces: [
      {
        name: "Vembanad Lake",
        description: "The longest lake in India, the heart of Kerala’s backwater tourism.",
        category: "nature",
        emotion: "Calm / Healing",
      },
      {
        name: "Kumarakom Bird Sanctuary",
        description: "A haven for migratory birds like the Siberian Stork.",
        category: "nature",
        emotion: "Calm / Healing",
      },
      {
        name: "Thirunakkara Mahadeva Temple",
        description: "A 500-year-old temple known for its traditional Kerala architecture and murals.",
        category: "temple",
        emotion: "Spiritual / Divine",
      },
      {
        name: "Marmala Waterfalls",
        description: "A scenic waterfall located inside a private rubber estate.",
        category: "nature",
        emotion: "Adventure / Active",
      },
      {
        name: "Bay Island Driftwood Museum",
        description: "A unique museum displaying artistic driftwood sculptures.",
        category: "cultural",
        emotion: "Intellectual",
      },
      {
        name: "Mango Meadows Agricultural Theme Park",
        description: "The world's first agricultural theme park with over 4800 species of plants.",
        category: "nature",
        emotion: "Intellectual",
      },
    ]
  },
  {
    name: "Idukki",
    country: "Kerala",
    image: "https://i.ibb.co/S7fNP81M/image-18597594.png",
    emotionalMatch: "Spice Garden",

    matchPercentage: 99,
    description: "A high-range paradise of tea plantations, wildlife sanctuaries, and misty peaks.",
    culturalHighlights: ["Munnar Tea Gardens", "Thekkady", "Idukki Dam"],
    safetyLevel: "high",
    bestTime: "Sep-Mar",
    priceRange: "$$",
    touristPlaces: [
      {
        name: "Munnar Tea Gardens",
        description: "Endless rolling hills covered in emerald green tea plantations.",
        category: "nature",
        emotion: "Awe / Wow",
      },
      {
        name: "Eravikulam National Park",
        description: "Home to the endangered Nilgiri Tahr and the blooming Neelakurinji flowers.",
        category: "nature",
        emotion: "Adventure / Active",
      },
      {
        name: "Idukki Dam",
        description: "One of the highest arch dams in Asia, a marvel of engineering between two mountains.",
        category: "historical",
        emotion: "Awe / Wow",
      },
      {
        name: "Ramakkalmedu",
        description: "A windy hill station with massive statues and views of Tamil Nadu farmlands.",
        category: "nature",
        emotion: "Adventure / Active",
      },
      {
        name: "Thekkady (Periyar)",
        description: "Famous for its elephant sightings and boat rides in the sanctuary.",
        category: "nature",
        emotion: "Mystery / Hidden",
      },
      {
        name: "Vagamon",
        description: "Pine forests, meadows, and mist make this a dreamy, quiet hill retreat.",
        category: "nature",
        emotion: "Romantic / Dreamy",
      },
      {
        name: "Meesapulimala",
        description: "The second highest peak in the majestic Western Ghats, a trekker’s dream.",
        category: "adventure",
        emotion: "Adventure / Active",
      },
      {
        name: "Hill View Park",
        description: "Offers spectacular views of the Idukki Arch Dam and Cheruthoni Dam.",
        category: "nature",
        emotion: "Calm / Healing",
      },
    ]
  },
  {
    name: "Ernakulam",
    country: "Kerala",
    image: "https://i.ibb.co/nsF5t6v7/image-fdbb96e7.png",
    emotionalMatch: "Queen of Arabian Sea",

    matchPercentage: 94,
    description: "The commercial capital blending colonial heritage with cosmetic urbanity.",
    culturalHighlights: ["Fort Kochi", "Marine Drive", "Cherai Beach"],
    safetyLevel: "high",
    bestTime: "Oct-Mar",
    priceRange: "$$",
    touristPlaces: [
      {
        name: "Fort Kochi",
        description: "A potpourri of Portuguese, Dutch, and British colonial architecture with Chinese fishing nets.",
        category: "historical",
        emotion: "Pride / History",
      },
      {
        name: "Mattancherry Palace",
        description: "Known as the Dutch Palace, featuring Kerala murals depicting Hindu temple art.",
        category: "historical",
        emotion: "Pride / History",
      },
      {
        name: "Marine Drive",
        description: "A scenic promenade facing the backwaters, perfect for evening walks and sunsets.",
        category: "nature",
        emotion: "Calm / Healing",
      },
      {
        name: "Jew Town & Synagogue",
        description: "A historic area with antique shops and the oldest active synagogue in the Commonwealth.",
        category: "cultural",
        emotion: "Mystery / Hidden",
      },
      {
        name: "Cherai Beach",
        description: "A lovely beach on Vypin Island, ideal for swimming and dolphin spotting.",
        category: "beach",
        emotion: "Calm / Healing",
      },
      {
        name: "Hill Palace Museum",
        description: "The largest archaeological museum in Kerala, the former imperial administrative office.",
        category: "historical",
        emotion: "Pride / History",
      },
      {
        name: "Bolgatty Palace",
        description: "A Dutch palace on an island, now a heritage hotel with lush gardens.",
        category: "historical",
        emotion: "Romantic / Social",
      },
      {
        name: "Mangalavanam Bird Sanctuary",
        description: "An ecologically sensitive area in the heart of the city, hosting migratory birds.",
        category: "nature",
        emotion: "Calm / Healing",
      },
    ]
  },
  {
    name: "Thrissur",
    country: "Kerala",
    image: "https://i.ibb.co/BKVL2Swf/image-f1937955.png",
    emotionalMatch: "Cultural Capital",

    matchPercentage: 95,
    description: "The land of festivals, elephants, and sacred temple arts.",
    culturalHighlights: [
      {
        name: "Athirappilly Falls",
        description: "Experience the thunderous roar of Kerala's largest waterfall amidst dense Shola forests.",
        category: "nature",
      },
      {
        name: "Vadakkunnathan Temple",
        description: "A 9-acre architectural masterpiece dedicated to Lord Shiva, centered in the city's heart.",
        category: "culture",
      },
      {
        name: "Thrissur Pooram",
        description: "Witness the 'Mother of all Festivals' with caparisoned elephants, percussion, and fireworks.",
        category: "festival",
      },
    ],
    safetyLevel: "high",
    bestTime: "All year",
    priceRange: "$",
    touristPlaces: [
      {
        name: "Vadakkunnathan Temple",
        description: "An ancient Shiva temple sprawl with classic Kerala architecture and sacred groves.",
        category: "temple",
        emotion: "Spiritual / Divine",
      },
      {
        name: "Athirappilly Waterfalls",
        description: "The 'Niagara of India', mesmerizing and powerful, featured in epic films.",
        category: "nature",
        emotion: "Awe / Wow",
      },
      {
        name: "Punnathur Kotta",
        description: "An elephant sanctuary home to over 60 gentle giants, offering close encounters.",
        category: "nature",
        emotion: "Adventure / Active",
      },
      {
        name: "Shakthan Thampuran Palace",
        description: "A blend of Dutch and Kerala architecture, telling stories of the Cochin dynasty.",
        category: "historical",
        emotion: "Pride / History",
      },
      {
        name: "Vilangan Kunnu",
        description: "Known as the 'Oxygen Jar' of Thrissur, offering panoramic views of the city.",
        category: "nature",
        emotion: "Calm / Healing",
      },
      {
        name: "Paramekkavu Bagavathi Temple",
        description: "A key temple in the famous Thrissur Pooram, vibrant and culturally rich.",
        category: "temple",
        emotion: "Spiritual / Divine",
      },
      {
        name: "Chavakkad Beach",
        description: "Where the river meets the sea, famous for its serene Azhimukam and lighthouse.",
        category: "beach",
        emotion: "Calm / Healing",
      },
      {
        name: "Basilica of Our Lady of Dolours",
        description: "The tallest church tower in Asia, a gothic marvel dominating the skyline.",
        category: "temple",
        emotion: "Awe / Wow",
      },
      {
        name: "Peechi Dam & Wildlife Sanctuary",
        description: "A perfect picnic spot with boating, botanical gardens, and potential wildlife sightings.",
        category: "nature",
        emotion: "Adventure / Active",
      },
      {
        name: "Snehatheeram Beach",
        description: "Ideally named 'Love Shore', a well-maintained beach park perfect for families.",
        category: "beach",
        emotion: "Romantic / Social",
      },
      {
        name: "Cheppara",
        description: "A lesser-known rock hill offering stunning sunset views without the crowds.",
        category: "nature",
        emotion: "Mystery / Hidden",
      },
      {
        name: "Vazhachal Waterfalls",
        description: "Just upstream from Athirappilly, calmer but equally scenic with forest surroundings.",
        category: "nature",
        emotion: "Calm / Healing",
      },
    ]
  },
  {
    name: "Palakkad",
    country: "Kerala",
    image: "https://i.ibb.co/TM7ywFH7/image-27767b2b.png",
    emotionalMatch: "Granary of Kerala",

    matchPercentage: 89,
    description: "A gap in the ghats opening to endless paddy fields and palmyrah trees.",
    culturalHighlights: [
      {
        name: "Silent Valley",
        description: "One of the last remaining rainforests in India, home to the Lion-tailed Macaque.",
        category: "nature",
      },
      {
        name: "Malampuzha Dam",
        description: "A large masonry dam with lush gardens, ropeway, and the famous Yakshi sculpture.",
        category: "culture",
      },
      {
        name: "Kalpathy Heritage Village",
        description: "An ancient Brahmin settlement famous for its Ratholsavam (Chariot Festival).",
        category: "festival",
      },
    ],
    safetyLevel: "medium",
    bestTime: "Sep-Feb",
    priceRange: "$",
    touristPlaces: [
      {
        name: "Palakkad Fort",
        description: "One of the best-preserved forts in Kerala, built by Hyder Ali in 1766.",
        category: "historical",
        emotion: "Pride / History",
      },
      {
        name: "Nelliyampathy Hills",
        description: "Known as the 'Ooty of Kerala', offering cloud-kissed peaks and orange farms.",
        category: "nature",
        emotion: "Romantic / Dreamy",
      },
      {
        name: "Parambikulam Tiger Reserve",
        description: "A biodiversity hotspot with teak plantations and wildlife safaris.",
        category: "nature",
        emotion: "Adventure / Active",
      },
      {
        name: "Dhoni Waterfalls",
        description: "Accessible via a trek through reserve forests, perfect for nature lovers.",
        category: "adventure",
        emotion: "Adventure / Active",
      },
      {
        name: "Kava Island",
        description: "A scenic spot behind Malampuzha Dam, often appearing in movies.",
        category: "nature",
        emotion: "Calm / Healing",
      },
      {
        name: "Mangalam Dam",
        description: "A quiet reservoir surrounded by dense forest, ideal for picnics.",
        category: "nature",
        emotion: "Calm / Healing",
      },
    ]
  },
  {
    name: "Malappuram",
    country: "Kerala",
    image: "https://i.ibb.co/gLhmm0Mj/image-bed25b34.png",
    emotionalMatch: "Soccer & Soul",

    matchPercentage: 88,
    description: "A historic land of teak forests, football fervor, and colonial legacy.",
    culturalHighlights: [
      {
        name: "Teak Museum",
        description: "World's first teak museum, showcasing the history and significance of Nilambur teak.",
        category: "nature",
      },
      {
        name: "Kottakkunnu",
        description: "A hilltop garden offering panoramic views, ruins of an old fort, and open-air theater.",
        category: "lifestyle",
      },
      {
        name: "Thirunavaya",
        description: "Historic site of the Mamankam festival on the banks of Bharathapuzha.",
        category: "history",
      },
    ],
    safetyLevel: "high",
    bestTime: "Sep-Mar",
    priceRange: "$",
    touristPlaces: [
      {
        name: "Adyanpara Waterfalls",
        description: "A cascading waterfall in Nilambur, surrounded by evergreen forests.",
        category: "nature",
        emotion: "Calm / Healing",
      },
      {
        name: "Kadalundi Bird Sanctuary",
        description: "Where the river meets the sea, hosting over 60 species of migratory birds.",
        category: "nature",
        emotion: "Calm / Healing",
      },
      {
        name: "Padinharekara Beach",
        description: "A stunning confluence of the Bharathapuzha, Tirur Puzha, and the Arabian Sea.",
        category: "beach",
        emotion: "Romantic / Social",
      },
      {
        name: "Kodikuthimala",
        description: "Known as the Ooty of Malappuram, offering trekking trails and watchtowers.",
        category: "adventure",
        emotion: "Adventure / Active",
      },
      {
        name: "Nilambur Kovilakam",
        description: "The residence of the local rajas, featuring beautiful woodwork and architecture.",
        category: "historical",
        emotion: "Pride / History",
      },
      {
        name: "Nedumkayam Rainforest",
        description: "Dense teak forests with an old wooden bridge and elephants nearby.",
        category: "nature",
        emotion: "Mystery / Hidden",
      },
    ]
  },
  {
    name: "Kozhikode",
    country: "Kerala",
    image: "https://i.ibb.co/RprKP0wm/image-7a2f9883.png",
    emotionalMatch: "City of Spices",

    matchPercentage: 91,
    description: "Where history was made on the shores, famous for food and hospitality.",
    culturalHighlights: [
      {
        name: "Kappad Beach",
        description: "The historic beach where Vasco da Gama landed in 1498, changing history forever.",
        category: "history",
      },
      {
        name: "Beypore Port",
        description: "Famous for Uru (wooden ship) building yards that have supplied vessels to Arabs for centuries.",
        category: "livelihood",
      },
      {
        name: "Mananchira Square",
        description: "A man-made freshwater pond surrounded by temples, churches, and old homes.",
        category: "culture",
      },
    ],
    safetyLevel: "high",
    bestTime: "Sep-May",
    priceRange: "$",
    touristPlaces: [
      {
        name: "Kozhikode Beach",
        description: "A lively beach with an old crumbling pier and famous food stalls nearby.",
        category: "beach",
        emotion: "Romantic / Social",
      },
      {
        name: "Mishkal Mosque",
        description: "A 14th-century mosque with timber architecture, devoid of minarets.",
        category: "temple",
        emotion: "Spiritual / Divine",
      },
      {
        name: "Thusharagiri Waterfalls",
        description: "‘Snow-capped mountains’—a trekking destination with three waterfalls.",
        category: "adventure",
        emotion: "Adventure / Active",
      },
      {
        name: "Sargaalaya Arts & Crafts Village",
        description: "A dedicated village showcasing Kerala's traditional artisans and crafts.",
        category: "cultural",
        emotion: "Intellectual",
      },
      {
        name: "Kadalundi River View",
        description: "Scenic boat rides through mangroves offering peace and bird watching.",
        category: "nature",
        emotion: "Calm / Healing",
      },
      {
        name: "Kakkayam Dam",
        description: "A perfect trekking and boating location with high scenic value.",
        category: "adventure",
        emotion: "Adventure / Active",
      },
    ]
  },
  {
    name: "Wayanad",
    country: "Kerala",
    image: "https://i.ibb.co/JWMhGhNp/image-e015f7e3.png",
    emotionalMatch: "Green Paradise",

    matchPercentage: 97,
    description: "A pristine plateau of tribal heritage, caves, and spice plantations.",
    culturalHighlights: [
      {
        name: "Edakkal Caves",
        description: "Prehistoric caves featuring Stone Age carvings from 6000 BC.",
        category: "history",
      },
      {
        name: "Banasura Sagar Dam",
        description: "The largest earth dam in India, set against the backdrop of misty hills.",
        category: "nature",
      },
      {
        name: "Tribal Heritage",
        description: "The district has the largest population of tribals in Kerala, with unique customs.",
        category: "people",
      },
    ],
    safetyLevel: "high",
    bestTime: "Oct-May",
    priceRange: "$$",
    touristPlaces: [
      {
        name: "Chembra Peak",
        description: "A trekking paradise famous for its heart-shaped lake halfway to the top.",
        category: "adventure",
        emotion: "Romantic / Dreamy",
      },
      {
        name: "Pookode Lake",
        description: "A natural freshwater lake nestled among evergreen forests and hills.",
        category: "nature",
        emotion: "Calm / Healing",
      },
      {
        name: "Soochipara Waterfalls",
        description: "A three-tiered waterfall surrounded by deciduous, evergreen, and montane forests.",
        category: "nature",
        emotion: "Adventure / Active",
      },
      {
        name: "Thirunelli Temple",
        description: "An ancient temple dedicated to Lord Vishnu, known as the 'Kashi of the South'.",
        category: "temple",
        emotion: "Spiritual / Divine",
      },
      {
        name: "Kuruvadweep",
        description: "A protected river delta on the Kabini River, rich in flora and fauna.",
        category: "nature",
        emotion: "Mystery / Hidden",
      },
      {
        name: "Wayanad Wildlife Sanctuary",
        description: "An integral part of the Nilgiri Biosphere Reserve, home to tigers and elephants.",
        category: "nature",
        emotion: "Adventure / Active",
      },
    ]
  },
  {
    name: "Kannur",
    country: "Kerala",
    image: "https://i.ibb.co/3GcBcRD/image-2e893e86.png",
    emotionalMatch: "Looms & Lores",

    matchPercentage: 90,
    description: "The land of Theyyam, handlooms, and unspoiled beaches.",
    culturalHighlights: [
      {
        name: "Theyyam",
        description: "A spectacular ritual art form that blends dance, mime, and music.",
        category: "festival",
      },
      {
        name: "Handloom Heritage",
        description: "Kannur is famous for its high-quality handloom exports and weaving cooperative societies.",
        category: "livelihood",
      },
      {
        name: "St. Angelo Fort",
        description: "A massive triangular laterite fort standing guard over the Arabian Sea.",
        category: "history",
      },
    ],
    safetyLevel: "high",
    bestTime: "Oct-May",
    priceRange: "$",
    touristPlaces: [
      {
        name: "Muzhappilangad Drive-in Beach",
        description: "Asia’s longest drive-in beach, offering a unique coastal driving experience.",
        category: "beach",
        emotion: "Adventure / Active",
      },
      {
        name: "Payyambalam Beach",
        description: "Known for its long stretch of golden sand and the sculpture of a mother and child.",
        category: "beach",
        emotion: "Calm / Healing",
      },
      {
        name: "Arakkal Museum",
        description: "Dedicated to the Arakkal family, the only Muslim royal family in Kerala.",
        category: "historical",
        emotion: "Pride / History",
      },
      {
        name: "Paithalmala",
        description: "A hill station offering trekking trails and panoramic views of the Kodagu forests.",
        category: "nature",
        emotion: "Adventure / Active",
      },
      {
        name: "Parassinikadavu Snake Park",
        description: "Home to a variety of snakes and other reptiles, dedicated to preservation.",
        category: "nature",
        emotion: "Intellectual",
      },
      {
        name: "Dharmadam Island",
        description: "A small private island visible from the beach, accessible during low tide.",
        category: "nature",
        emotion: "Mystery / Hidden",
      },
    ]
  },
  {
    name: "Kasaragod",
    country: "Kerala",
    image: "https://i.ibb.co/21rFHFRL/image-d96e691f.png",
    emotionalMatch: "Land of Gods",

    matchPercentage: 92,
    description: "The northernmost tip featuring majestic forts and distinct linguistic culture.",
    culturalHighlights: [
      {
        name: "Bekal Fort",
        description: "The largest fort in Kerala, offering commanding views of the coastline.",
        category: "history",
      },
      {
        name: "Linguistic Diversity",
        description: "A melting pot of seven languages including Tulu, Kannada, and Malayalam.",
        category: "culture",
      },
      {
        name: "Yakshagana",
        description: "A traditional theater form that combines dance, music, dialogue, and costume.",
        category: "art",
      },
    ],
    safetyLevel: "high",
    bestTime: "Oct-Mar",
    priceRange: "$",
    touristPlaces: [
      {
        name: "Ranipuram",
        description: "Often called the 'Ooty of Kasaragod', known for its trekking trails and shola forests.",
        category: "nature",
        emotion: "Adventure / Active",
      },
      {
        name: "Ananthapura Lake Temple",
        description: "The only lake temple in Kerala, legendary home of a vegetarian crocodile.",
        category: "temple",
        emotion: "Spiritual / Divine",
      },
      {
        name: "Kappil Beach",
        description: "A secluded and clean beach, perfect for those looking for solitude.",
        category: "beach",
        emotion: "Calm / Healing",
      },
      {
        name: "Chandragiri Fort",
        description: "A 17th-century fort situated beside the Chandragiri river.",
        category: "historical",
        emotion: "Pride / History",
      },
      {
        name: "Valiyaparamba Backwaters",
        description: "A scenic backwater stretch fed by four rivers and dotted with small islands.",
        category: "nature",
        emotion: "Romantic / Dreamy",
      },
      {
        name: "Madhur Temple",
        description: "An ancient Shiva temple with unique architecture and copper plate roofing.",
        category: "temple",
        emotion: "Spiritual / Divine",
      },
    ]
  }
];

export const getAllDestinations = () => [
  ...tamilNaduDestinations,
  ...keralaDestinations,
];

export const getDestinationByName = (name: string) => {
  return getAllDestinations().find(
    (dest) => dest.name.toLowerCase() === name.toLowerCase()
  );
};
