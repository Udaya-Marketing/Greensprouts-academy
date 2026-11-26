export interface PricingPlan {
  id: string;
  name: string;
  subTitle: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: string;
  isPopular?: boolean;
  bestFor: string;
  description: string;
  includes: string[];
  features: {
    name: string;
    included: boolean;
    note?: string;
  }[];
  ctaText: string;
  ctaSubtext: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    subTitle: "Foundation Training",
    price: 999,
    bestFor: "Best for students & curious beginners",
    description: "Get full access to live expert interactive sessions, comprehensive digital workbooks, and certified credentials to kickstart your agri journey.",
    includes: [
      "3 Days Live Online Training",
      "Comprehensive Study Notes & Digital Resource Pack",
      "Live Interactive Q&A Support with Faculty",
      "Official Certificate of Completion (Digital & Verifiable)",
      "Lifetime access to session recordings",
    ],
    features: [
      { name: "3–5 Days Live Online Training", included: true },
      { name: "Official Certificate of Completion", included: true },
      { name: "Complete Study Notes & Guides", included: true },
      { name: "Live Faculty Q&A Support", included: true },
      { name: "Session Video Replays (Lifetime)", included: true },
      { name: "Physical Starter Kit Delivered to Doorstep", included: false, note: "Digital blueprints only" },
      { name: "1-on-1 Personal Mentorship", included: false },
      { name: "Business Setup & Pricing Guidance", included: false },
      { name: "Vendor & Trader Contact Network Access", included: false },
    ],
    ctaText: "Enroll in Basic (₹999)",
    ctaSubtext: "Instant batch confirmation · ₹799 with Student ID",
  },
  {
    id: "standard",
    name: "Standard",
    subTitle: "Training + Starter Kit",
    price: 1999,
    originalPrice: 2999,
    discountPercentage: "33% OFF",
    isPopular: true,
    bestFor: "Best for hobbyists & home growers",
    description: "Our most popular package. Hands-on practical kit delivered right to your home so you can follow along with the trainers during live classes.",
    includes: [
      "Everything in Basic Foundation Training",
      "Complete Physical Starter Kit (₹1,000 value) FREE",
      "Speed courier doorstep delivery across India",
      "Live step-by-step kit assembly workshop",
      "Official Certificate of Completion",
      "Alumni WhatsApp group access for peer support",
    ],
    features: [
      { name: "3–5 Days Live Online Training", included: true },
      { name: "Official Certificate of Completion", included: true },
      { name: "Complete Study Notes & Guides", included: true },
      { name: "Live Faculty Q&A Support", included: true },
      { name: "Session Video Replays (Lifetime)", included: true },
      { name: "Physical Starter Kit Delivered to Doorstep", included: true, note: "Choice of Kit included" },
      { name: "1-on-1 Personal Mentorship", included: false, note: "Group support included" },
      { name: "Business Setup & Pricing Guidance", included: false },
      { name: "Vendor & Trader Contact Network Access", included: true, note: "Curated supplier list" },
    ],
    ctaText: "Enroll in Standard (₹1,999)",
    ctaSubtext: "Includes Free Physical Starter Kit · ₹1,599 with Student ID",
  },
  {
    id: "premium",
    name: "Premium",
    subTitle: "Pro Mentorship",
    price: 4999,
    bestFor: "Best for serious agri-entrepreneurs",
    description: "The complete entrepreneurial incubator. Beyond training and starter gear, receive direct one-on-one mentorship from our lead agronomists to set up your business.",
    includes: [
      "Everything in Standard Training + Starter Kit",
      "1–2 Months Personal 1-on-1 Mentorship & Site Review",
      "Custom Farm CAD Layout & HVAC / Lighting Sizing",
      "Commercial Unit Economics, Pricing & Vendor List",
      "Direct WhatsApp access to Kirubhakaran & Suriya",
      "Buyer connection assistance & contract review",
    ],
    features: [
      { name: "3–5 Days Live Online Training", included: true },
      { name: "Official Certificate of Completion", included: true },
      { name: "Complete Study Notes & Guides", included: true },
      { name: "Live Faculty Q&A Support", included: true },
      { name: "Session Video Replays (Lifetime)", included: true },
      { name: "Physical Starter Kit Delivered to Doorstep", included: true, note: "Deluxe Starter Kit" },
      { name: "1-on-1 Personal Mentorship", included: true, note: "1–2 Months dedicated mentorship" },
      { name: "Business Setup & Pricing Guidance", included: true, note: "Custom financial modeling" },
      { name: "Vendor & Trader Contact Network Access", included: true, note: "Direct introductions" },
    ],
    ctaText: "Enroll in Premium (₹4,999)",
    ctaSubtext: "Limited to 5 candidates per batch · ₹3,999 with Student ID",
  },
];

export interface StarterKitBreakdown {
  discipline: string;
  title: string;
  iconName: string;
  items: string[];
  highlights: string;
}

export const STARTER_KITS: StarterKitBreakdown[] = [
  {
    discipline: "Hydroponics",
    title: "Hydroponic Balcony Starter Kit",
    iconName: "Sprout",
    items: [
      "5–10 Heavy Duty Food-Grade Net Pots (2 & 3 inch)",
      "Nutrient Solution Concentrates A + B (Complete Leafy & Herb formula)",
      "High-Porosity Expanded Clay Pebbles & Rockwool Grow Plugs",
      "Detailed Demo Setup Guide & DIY Pipe Drilling Blueprints",
      "EC/pH Testing Color Chart and Calibration Reference",
    ],
    highlights: "Enough nutrients to grow up to 4 complete harvests of fresh Italian basil, mint, or butterhead lettuce.",
  },
  {
    discipline: "Microgreens",
    title: "Microgreens Superfood Kit",
    iconName: "Leaf",
    items: [
      "3–5 High-Germination Non-GMO Seed Varieties (Radish, Pea, Sunflower, Mustard)",
      "2–3 Reusable Food-Grade Growing Trays with Drainage Slots",
      "Compressed Washed Low-EC Cocopeat Brick",
      "Continuous Fine-Mist Spray Bottle (300ml)",
      "Blackout Stacking Protocol & Day-by-Day Calendar Card",
    ],
    highlights: "Grow your first harvest ready to eat in 7 days right on your kitchen counter.",
  },
  {
    discipline: "Mushroom Cultivation",
    title: "Mushroom Cultivation Spawn Kit",
    iconName: "Trees",
    items: [
      "1–2 Packets of Pure Certified Mother Spawn (White / Grey Oyster)",
      "Heavy-duty Autoclavable Polypropylene Grow Bags",
      "Sterilized Substrate Pre-Mix / Straw Preparation Protocol",
      "Step-by-Step Incubation & Pinhead Triggering Guide Sheet",
      "Hygienic prep gloves, alcohol swabs, and airtight bag clips",
    ],
    highlights: "Guaranteed first flush within 20 days. Produces 1.5–2 kg of fresh gourmet oyster mushrooms.",
  },
  {
    discipline: "Aquaponics",
    title: "Aquaponics Pilot Demo Kit",
    iconName: "Fish",
    items: [
      "High-Protein Balanced Fish Nutrition Pellets Sample",
      "Organic Seed Packet (Mint, Basil, Spinach)",
      "System Engineering Plumbing Diagram (IBC Tote & Aquarium setups)",
      "Ammonia, Nitrite & Nitrate Test Strip Guide",
      "Biological Nitrification Starter Guide",
    ],
    highlights: "The ideal hands-on kit to set up a small aquarium or balcony tank aquaponic loop.",
  },
];
