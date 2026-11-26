export interface Program {
  id: string;
  slug: string;
  title: string;
  headline: string;
  badge: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  overviewImage: string;
  detailImage: string;
  duration: string;
  schedule: string;
  kitIncluded: string;
  kitDetails: string[];
  growthCycle: string;
  spaceRequired: string;
  earningPotential: string;
  disclaimer: string;
  keyHighlights: string[];
  whoItsFor: string[];
  syllabus: {
    day: string;
    topic: string;
    details: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const PROGRAMS: Program[] = [
  {
    id: "hydroponics",
    slug: "hydroponics",
    title: "Hydroponics (Soil-Free Farming)",
    headline: "Grow 40% Faster Without Soil Using Precision Water & Nutrients",
    badge: "Most High-Tech",
    shortDescription: "Master NFT, DWC, vertical systems and LED grow rooms with real commercial farm practice. Soil-free, water-smart, with 40% faster crop growth than conventional farming.",
    fullDescription: "Hydroponics revolutionizes food production by eliminating soil-borne pathogens and conserving up to 90% water. In this comprehensive live practical program, our lead agronomists take you from fundamental nutrient chemistry (EC, pH, PPM) to designing commercial NFT gullies, Dutch buckets, and indoor climate-controlled grow racks.",
    image: "/images/gallery/IMG_0581.webp",
    overviewImage: "/images/gallery/IMG_0574.webp",
    detailImage: "/images/gallery/IMG_0650.webp",
    duration: "3–5 Days Live Intensive",
    schedule: "Daily 7:30 PM – 9:00 PM IST + Weekend Practical Session",
    kitIncluded: "Hydroponics Starter Kit (Net pots, EC/TDS meter guide, Nutrient A+B stock, Rockwool/clay pebbles medium, system blueprints)",
    kitDetails: [
      "10x Heavy-duty Net Pots (2-inch & 3-inch)",
      "Nutrient Solution A + B Concentrates (Formulated for leafy greens)",
      "Expanded Clay Pebbles & Rockwool Grow Medium",
      "Digital EC/TDS and pH Testing Guide + Chart",
      "Step-by-step DIY NFT & DWC System Blueprint",
      "Seed packet: Premium Italian Basil & Butterhead Lettuce",
    ],
    growthCycle: "28–35 Days (Leafy greens)",
    spaceRequired: "Balcony (30–60 sq ft) or Commercial Terrace / Warehouse",
    earningPotential: "₹25,000 – ₹1,20,000 / month on 500–1000 sq ft setup",
    disclaimer: "Estimated figures based on average Indian urban farm yields and retail sale to cafes/restaurants. Actual results depend on temperature management, pest prevention, market access, and crop mix.",
    keyHighlights: [
      "Nutrient Film Technique (NFT) & Deep Water Culture (DWC) masterclass, other Hydroponic systems masterclass",
      "Formulating custom A+B macronutrient & micronutrient solutions",
      "Indoor LED PPFD spectrums, ventilation & humidity management",
      "Commercial farm economics: Capex, Opex, and B2B hotel tie-ups",
    ],
    whoItsFor: [
      "Urban home growers wanting fresh, pesticide-free greens for family",
      "Entrepreneurs planning a rooftop, balcony, or commercial greenhouse venture",
      "Agriculture graduates and students seeking hands-on modern farming credentials",
      "Chefs, cafe owners, and hospitality professionals seeking farm-to-table supply",
    ],
    syllabus: [
      {
        day: "Day 1",
        topic: "Hydroponics Fundamentals & Systems Overview",
        details: [
          "Physics & biology of soilless farming: root oxygenation and transpiration",
          "Deep dive: NFT (Nutrient Film Technique), DWC (Deep Water Culture), and Dutch Buckets",
          "Selecting optimal crops: Lettuces, Basil, Bok Choy, Mint, Spinach, and Vine crops",
        ],
      },
      {
        day: "Day 2",
        topic: "Water Quality, pH & Custom Nutrient Formulation",
        details: [
          "Understanding EC, TDS, pH, and water source filtration",
          "Demystifying Part A & Part B solutions: Calcium Nitrate, Chelated Iron, NPK",
          "Diagnosing nutrient deficiencies, burn, and root rot prevention",
        ],
      },
      {
        day: "Day 3",
        topic: "Indoor CEA, Lighting & Climate Optimization",
        details: [
          "Grow room calculations: PPFD, DLI, lux vs PAR, and LED fixture placement",
          "Air circulation, CFM calculations, and humidity control (VPD principles)",
          "Automation timers, sensors, and water pump fail-safe setups",
        ],
      },
      {
        day: "Day 4",
        topic: "Harvest, Post-Harvest Packaging & Farm Economics",
        details: [
          "Sanitary harvesting methods and cold-chain shelf-life extension",
          "Commercial unit economics: Setup cost per square foot, ROI timeline",
          "Pricing models for selling to high-end restaurants, organic supermarkets, and direct-to-consumer",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need an agricultural background to learn hydroponics?",
        answer: "No. Our course is structured from the ground up for beginners, urban hobbyists, and aspiring commercial growers. Our agronomists explain all chemistry and engineering in simple, actionable terms.",
      },
      {
        question: "Can I grow hydroponics in my balcony in an apartment?",
        answer: "Absolutely! Even a small 4x4 ft balcony receiving 3–4 hours of indirect sunlight can produce 40–60 heads of fresh lettuce and herbs monthly using vertical towers or a compact NFT rack.",
      },
      {
        question: "When will the starter kit be delivered?",
        answer: "If you enroll in the Standard or Premium plan, your kit is dispatched via speed courier across India and reaches your address within 3–5 working days with tracking details.",
      },
    ],
  },
  {
    id: "aquaponics",
    slug: "aquaponics",
    title: "Aquaponics (Circular Farming)",
    headline: "Fish + Plants in One Zero-Waste, High-Yield Symbiotic Ecosystem",
    badge: "Zero Waste",
    shortDescription: "Combine freshwater aquaculture with soilless plant culture in a circular, chemical-free ecosystem. Learn commercial RAS systems that yield organic crops and healthy fish simultaneously.",
    fullDescription: "Aquaponics is the ultimate bio-integrated farming method where fish waste provides natural organic fertilizer for plants, and plants purify the water returned to the fish tank. You will learn bio-filtration nitrification cycles, fish biology, stocking density, and commercial Recirculating Aquaculture Systems (RAS).",
    image: "/images/gallery/IMG_0041.webp",
    overviewImage: "/images/gallery/IMG_0042.webp",
    detailImage: "/images/gallery/IMG_0043.webp",
    duration: "3–4 Days Live Training",
    schedule: "Daily 7:30 PM – 9:00 PM IST",
    kitIncluded: "Aquaponics Starter Kit (Fish nutrition sample, organic seeds, system plumbing schematic, ammonia/nitrite test strip guide)",
    kitDetails: [
      "Recirculating System Blueprint & Plumbing Schematics",
      "Fish Feed Samples with High-Protein Formulation",
      "Water Chemistry Testing Strips (Ammonia, Nitrite, Nitrate)",
      "Organic Heirloom Basil & Mint Seed Assortment",
      "Nitrifying Bacteria Starter Guide & Inoculation Instructions",
    ],
    growthCycle: "30 Days (Greens) & 6–8 Months (Fish harvest)",
    spaceRequired: "Backyard, Terrace (100–300 sq ft) or Farm Land",
    earningPotential: "₹30,000 – ₹1,50,000 / batch (Dual income: Fish + Organic produce)",
    disclaimer: "Dual revenue streams depend on fish species (Tilapia, Pangasius, Carp), feed conversion ratio (FCR), water temperature, and regional live fish sales prices.",
    keyHighlights: [
      "Dual harvest: High-value organic greens + fresh freshwater fish",
      "Zero chemical fertilizers: 100% natural bio-filtration loop",
      "Commercial RAS design: Solid waste settling tanks, bio-filters, and sump basins",
      "Commercial scaling from small 500-litre IBC setups to commercial farm ponds",
    ],
    whoItsFor: [
      "Permaculture and organic food enthusiasts wanting complete food sovereignty",
      "Farmers and landowners looking for dual-yield revenue from existing water bodies",
      "Urban terrace owners wishing to produce both organic greens and protein at home",
    ],
    syllabus: [
      {
        day: "Day 1",
        topic: "The Aquaponic Triangle: Fish, Bacteria & Plants",
        details: [
          "Biological nitrification: Nitrosomonas and Nitrobacter bacteria conversion",
          "Selecting fish varieties: Tilapia, Koi, Pangasius, and freshwater prawns",
          "Sizing fish tank to grow bed ratios (1:1 to 1:3 rules of thumb)",
        ],
      },
      {
        day: "Day 2",
        topic: "Plumbing, Bio-filters & Siphon Engineering",
        details: [
          "Bell siphons: How flood-and-drain cycles oxygenate plant roots effortlessly",
          "Radial flow filters, swirl separators, and mineralization tanks",
          "Selecting aerators, submersible pumps, and backup battery inverter sizing",
        ],
      },
      {
        day: "Day 3",
        topic: "Water Monitoring & Daily System Management",
        details: [
          "Managing pH buffering without harming fish",
          "Feeding schedules, Feed Conversion Ratio (FCR), and disease prevention",
          "Plant nutrient balancing: Supplementing Iron (Fe Chelate) and Potassium safely",
        ],
      },
    ],
    faqs: [
      {
        question: "Is fish farming in an urban backyard smelly?",
        answer: "Not at all when bio-filtration is balanced! A healthy aquaponic system smells like fresh morning rain or a river bank because beneficial aerobic bacteria immediately convert all organic matter.",
      },
      {
        question: "What fish can I start with in India?",
        answer: "Tilapia (GIFT Tilapia) is the hardiest and fastest-growing fish for Indian climates, capable of reaching 500g in 5–6 months. Pangasius and Koi are also popular choices.",
      },
    ],
  },
  {
    id: "mushroom-cultivation",
    slug: "mushroom-cultivation",
    title: "Mushroom Cultivation (High Yield)",
    headline: "Fast Harvest Cycles & High Profit Margins in Minimal Indoor Space",
    badge: "High Margin",
    shortDescription: "Cultivate oyster, exotic (Shiitake, Lion's Mane) and medicinal mushroom varieties. (45 - 80 days), high returns, zero sunlight required, selling at ₹300–₹800/kg.",
    fullDescription: "Mushroom cultivation is one of the most profitable agri-businesses per square foot because it utilizes vertical space indoors, requires no sunlight, and converts agricultural waste (paddy straw, sawdust) into gourmet protein and functional medicine.",
    image: "/images/gallery/IMG_3801.webp",
    overviewImage: "/images/gallery/WhatsApp Image 2026-10-22 at 4.16.20 PM.webp",
    detailImage: "/images/gallery/WhatsApp Image 2026-10-22 at 4.16.20 PM (1).webp",
    duration: "3–4 Days Live Training",
    schedule: "Daily 7:30 PM – 9:00 PM IST",
    kitIncluded: "Mushroom Cultivation Starter Kit (Pure lab spawn, autoclave PP bags, sterilized substrate base, spray mister, hygiene gloves)",
    kitDetails: [
      "1x Pure Mother Spawn Pack (Pleurotus Florida / Oyster)",
      "4x Heavy-duty Autoclavable Polypropylene Grow Bags",
      "Sterilization & Substrate Preparation Protocol Sheet",
      "Precision Micro-Mist Trigger Spray Bottle",
      "Hygienic gloves, alcohol swabs, and rubber ties",
      "Mushroom dehydration & value-added processing handbook",
    ],
    growthCycle: "45–80 Days to First Flush",
    spaceRequired: "Spare Bedroom, Garage, Balcony Corner (50–150 sq ft)",
    earningPotential: "₹20,000 – ₹80,000 / month from a single 10x10 room setup",
    disclaimer: "Market price of fresh oyster mushrooms ranges from ₹200–₹350/kg, while exotic varieties like Milky, Shiitake, and Lion's Mane sell for ₹500–₹1200/kg. Earnings depend on local retail distribution and drying facilities.",
    keyHighlights: [
      "Step-by-step chemical and steam pasteurization of paddy straw & sawdust",
      "Zero light requirement: Perfect for dark rooms, basements, or shaded huts",
      "Multiple flushes: Harvest 3–4 times from every single grow bag",
      "Value-addition: Mushroom powder, pickles, dried snacks for 3x retail margin",
    ],
    whoItsFor: [
      "Homemakers and individuals looking for a low-cost, high-return home business",
      "Rural and suburban growers wanting to monetize paddy straw and agro-waste",
      "Health-conscious entrepreneurs interested in medicinal and functional mushrooms",
    ],
    syllabus: [
      {
        day: "Day 1",
        topic: "Mushroom Biology & Variety Selection",
        details: [
          "Understanding mycelium, spawning, and pinning dynamics",
          "Selecting varieties: White Oyster (Florida), Grey Oyster (Sajor-caju), Milky Mushroom (Calocybe indica)",
          "Room layout: Racks, humidity, ventilation, and lighting basics",
        ],
      },
      {
        day: "Day 2",
        topic: "Substrate Preparation, Pasteurization & Inoculation",
        details: [
          "Straw chopping, soaking, and hot water / chemical sterilization techniques",
          "Moisture test: How to nail the 60-65% moisture sweet spot",
          "Layered vs mixed spawning in PP bags under sterile conditions",
        ],
      },
      {
        day: "Day 3",
        topic: "Incubation, Pinhead Formation & Harvesting Flushes",
        details: [
          "Dark spawn run phase: Temperature, CO2 levels, and contamination screening",
          "Inducing fruiting: Fresh air exchange (FAE), misting, and temperature shock",
          "Harvesting technique, second and third flush management, and disposal",
        ],
      },
      {
        day: "Day 4",
        topic: "Marketing, Packaging & Value-Added Products",
        details: [
          "Perforated packaging to prevent sweating and prolong shelf life to 5 days",
          "Solar dehydration for year-round shelf life and export-grade dried mushrooms",
          "Selling directly to local vegetable vendors, supermarkets, and wellness cafes",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I grow mushrooms during hot summer months?",
        answer: "Yes! While White Oyster grows best at 22–28°C, Milky Mushroom (Calocybe indica) thrives in hot Indian summers up to 35°C. We teach seasonal crop rotation so you harvest 365 days a year.",
      },
      {
        question: "How much initial investment is needed?",
        answer: "You can start your first trial batch for under ₹2,000 using our starter kit and simple household equipment. A commercial 200-bag room can be set up for under ₹15,000.",
      },
    ],
  },
  {
    id: "microgreens",
    slug: "microgreens",
    title: "Microgreens (Superfood Business)",
    headline: "Ready in 7–10 Days: Grow, Package & Sell at Premium Superfood Prices",
    badge: "Fastest Cash Flow",
    shortDescription: "Harvest nutritious baby greens in just 7 to 21 days. Learn soil-free tray growing, commercial packaging, and selling directly to organic stores, restaurants, and health-conscious families.",
    fullDescription: "Microgreens are 9-day-old vegetable seedlings packed with up to 40x higher nutrient density than mature plants. With zero wait time, rapid cash turnover, and high selling prices (₹60–₹120 per 50g punnet), microgreens are the fastest way to start an urban agri-business.",
    image: "/images/gallery/IMG_3873.webp",
    overviewImage: "/images/gallery/IMG_3873.webp",
    detailImage: "/images/gallery/IMG_3873.webp",
    duration: "3 Days Live Fast-Track",
    schedule: "Daily 7:30 PM – 9:00 PM IST",
    kitIncluded: "Complete Microgreens Starter Kit (Non-GMO seed varieties, 2-3 food-grade trays, compressed cocopeat brick, fine-spray mister)",
    kitDetails: [
      "3x Food-Grade Heavy Duty Microgreen Trays (with drainage & bottom tray)",
      "5x High-Germination Seed Varieties (Radish Sango, Pea Shoots, Sunflower, Mustard, Broccoli)",
      "Compressed Washed Cocopeat Block (Low EC)",
      "Continuous Mist Fine Spray Bottle (300ml)",
      "Commercial Packaging Punnet Samples with Label Design Template",
      "Quick Reference Seed Density & Blackout Schedule Sheet",
    ],
    growthCycle: "7–21 Days from Seed to Harvest",
    spaceRequired: "Balcony Shelf, Kitchen Counter, or 5-tier Vertical Rack (15–50 sq ft)",
    earningPotential: "₹15,000 – ₹60,000 / month from just two 4-tier racks",
    disclaimer: "Yields and revenues assume selling 50–100 punnets weekly at ₹80–₹100 each. Pricing varies between tier-1 metro markets and smaller towns.",
    keyHighlights: [
      "Harvest your first crop in just 21 days from enrollment",
      "Seed blackout techniques, weight techniques, and bottom-watering mastery",
      "Commercial packaging, shelf-life extension up to 10–12 days",
      "Subscription model playbook: Getting 25 recurring monthly home subscribers",
    ],
    whoItsFor: [
      "Busy working professionals wanting a low-time-commitment side business",
      "Parents and homemakers seeking clean, nutrient-dense superfoods for their children",
      "Gym enthusiasts, fitness coaches, and wellness advocates",
    ],
    syllabus: [
      {
        day: "Day 1",
        topic: "Seed Selection, Density & Medium Preparation",
        details: [
          "Top microgreen varieties: Pea shoots, Radish, Broccoli, Amaranth, Sunflower",
          "Calculating precise seed weight per 10x20 tray to avoid mould and ensure thick yield",
          "Cocopeat buffering, sterilisation, and alternative hemp/jute mats",
        ],
      },
      {
        day: "Day 2",
        topic: "Germination, Blackout Stacking & Light Transition",
        details: [
          "The blackout stacking method: Why weighted trays create stronger, thicker stems",
          "Bottom-watering protocol: Preventing mould, damp-off, and fungal issues",
          "Natural sunlight vs LED light spectrum timing for vivid coloration",
        ],
      },
      {
        day: "Day 3",
        topic: "Sharp Harvesting, Packaging & B2B/B2C Sales Playbook",
        details: [
          "Clean harvest techniques and spin-drying methods for zero moisture decay",
          "Packaging in breathable clamshells and shelf-life optimization (10+ days)",
          "The 'Sample Drop' strategy: How our students sign 5–10 cafes and salad bars in week one",
        ],
      },
    ],
    faqs: [
      {
        question: "How much time per day does a microgreens business take?",
        answer: "Only 15 to 25 minutes a day! You spend a few minutes bottom-watering in the morning and evening, plus 1–2 hours on harvest/delivery days.",
      },
      {
        question: "Can I sell living microgreens in trays?",
        answer: "Yes! High-end chefs and premium organic stores often prefer buying live microgreens in mini trays so they can snip them fresh directly onto gourmet dishes.",
      },
    ],
  },
  {
    id: "saffron-specialty",
    slug: "saffron-specialty",
    title: "Saffron & Specialty (High Value Crop)",
    headline: "Indoor Precision Saffron, Medicinal & Aromatic Plants (₹2–5 Lakh / kg)",
    badge: "Highest Value",
    shortDescription: "Cultivate indoor saffron (Crocus sativus), exotic medicinal herbs, and high-value aromatic crops year-round using Controlled Environment Agriculture (CEA), with a cultivation cycle of 120 to 160 days for optimal growth and harvest.",
    fullDescription: "Saffron is the world's most prized spice, traditionally confined to Kashmir. Today, through modern Controlled Environment Agriculture (CEA), precision temperature regulation, and photoperiod manipulation, saffron can be cultivated indoors anywhere in India—from Chennai and Bangalore to Mumbai and Delhi.",
    image: "/images/gallery/saffron.webp",
    overviewImage: "/images/gallery/saffron1.webp",
    detailImage: "/images/gallery/saffron.webp",
    duration: "4–5 Days Live Masterclass",
    schedule: "Daily 7:30 PM – 9:00 PM IST",
    kitIncluded: "Specialty Crop Blueprint + High-Altitude Corm Sourcing Guide & Climate Profile Templates",
    kitDetails: [
      "Indoor Saffron CEA Room Design Blueprints & HVAC Sizing Guide",
      "Crocus Corm Sourcing Directory (Grade-1 Kashmir Certified Suppliers)",
      "Multi-stage Climate Profile Chart (Dormancy, Flowering, Multiplication)",
      "High-Value Medicinal & Aromatic Crops Feasibility Report",
      "Purity Testing & NABL Lab Certification Protocol for Red Stigmas",
    ],
    growthCycle: "Indoor Flowering in 100–160 Days; Bulb Multiplication in Soil/Troughs",
    spaceRequired: "Insulated Room or Insulated Shipping Container (100–300 sq ft)",
    earningPotential: "₹2,00,000 – ₹5,00,000 / kg (Specialty harvest based on grade)",
    disclaimer: "Indoor saffron requires precise climate control (chilling units, dehumidifiers, photoperiod LEDs). Saffron flowers once annually per bulb cycle, while daughter corms multiply for subsequent seasons. Scale, temperature control precision, and corm quality directly govern yield.",
    keyHighlights: [
      "Indoor soilless flowering protocols without any sunlight",
      "4-stage CEA temperature & humidity curve: From 25°C down to 10°C chilling",
      "Stigma extraction, drying, and moisture preservation for ISO Grade-I quality",
      "Companion medicinal crops: Stevia, Ashwagandha, Cordyceps, and Rosemary",
    ],
    whoItsFor: [
      "Investors and agri-business developers looking for high-ticket agricultural projects",
      "Farmers with existing cold-storage or climate-controlled warehouse spaces",
      "Enthusiasts wanting to pioneer high-tech indoor spice farming in non-traditional regions",
    ],
    syllabus: [
      {
        day: "Day 1",
        topic: "Saffron Corm Biology & Sourcing Quality",
        details: [
          "Crocus sativus life cycle: Corm grades (10g+ flowering size vs vegetative corms)",
          "Pre-treatment, antifungal dipping, and dormancy wake-up triggers",
          "Kashmiri vs Iranian corm genetics and procurement strategies",
        ],
      },
      {
        day: "Day 2",
        topic: "Indoor CEA Room Design: HVAC, Chilling & Photoperiod",
        details: [
          "Insulation specifications (PUF panels) and airflow circulation design",
          "Automating the 4-phase temperature ramp: Incubation (22°C) to Chilling (12°C/10°C)",
          "LED light spectrum requirements during flower initiation",
        ],
      },
      {
        day: "Day 3",
        topic: "Flowering Flush, Stigma Plucking & Precision Drying",
        details: [
          "Daily harvest routines during the intense 15-day flowering window",
          "Plucking red stigmas without breaking styles: preserving crocin, picrocrocin, safranal",
          "Dehydration protocols at 45°C–50°C to lock in deep ruby color and pungent aroma",
        ],
      },
      {
        day: "Day 4",
        topic: "Corm Multiplication, Soil Troughs & Economics",
        details: [
          "Post-harvest vegetative cycle: Planting spent corms in soil beds/grow bags for multiplying",
          "Turn 100 kg of corms into 180–220 kg of seed corms for next season",
          "Comprehensive Capex/Opex model, payback period, and lab certification marketing",
        ],
      },
    ],
    faqs: [
      {
        question: "Can saffron really be grown indoors in warm places like Chennai or Hyderabad?",
        answer: "Yes! Indoor saffron cultivation takes place inside an insulated room where temperature, humidity, and lighting are completely controlled via air conditioning and dehumidifiers. Outdoor climate does not affect the indoor crop.",
      },
      {
        question: "Where do we buy the saffron corms (bulbs)?",
        answer: "We connect our students with verified, disease-free corm growers in Kashmir who supply graded corms (10g–12g+) ready for flowering.",
      },
    ],
  },
];
