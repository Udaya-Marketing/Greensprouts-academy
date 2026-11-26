export interface Trainer {
  id: string;
  name: string;
  role: string;
  qualification: string;
  experience: string;
  location: string;
  image: string;
  shortBio: string;
  expandedBio: string;
  specialties: string[];
  tags: string[];
  keyHighlights: string[];
}

export interface MissionPillar {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export const MISSION_PILLARS: MissionPillar[] = [
  {
    title: "Qualified Trainers",
    subtitle: "B.Sc & B.E. Agronomists",
    description: "Every session is led by formally educated agriculture engineers and agronomists with verified university credentials, not hobbyists.",
    iconName: "GraduationCap",
  },
  {
    title: "International Experience",
    subtitle: "India · Maldives · Oman",
    description: "Field-tested operational know-how deployed across tropical islands, arid Middle Eastern deserts, and diverse Indian agro-climatic zones.",
    iconName: "Globe2",
  },
  {
    title: "Commercial Scale",
    subtitle: "Production, R&D & Design",
    description: "Real enterprise blueprints—from rooftop pilot systems to multi-acre commercial greenhouses and shipping container farms.",
    iconName: "Building2",
  },
  {
    title: "Business First",
    subtitle: "Agripreneurship Lens",
    description: "Farming taught as a viable, scalable enterprise with clear unit economics, harvest logistics, and premium B2B buyer channels.",
    iconName: "TrendingUp",
  },
];

export const TRAINERS: Trainer[] = [
  {
    id: "kirubhakaran rajendran",
    name: "Kirubhakaran Rajendran",
    role: "Lead Trainer & Agronomist",
    qualification: "B.Sc Agriculture",
    experience: "4+ Years International Commercial Practice",
    location: "India  Maldives  Oman",
    image: "/images/team/Kirubha.png",
    shortBio: "Production and R&D specialist across three countries. Leads high-tech training in commercial hydroponics, circular aquaponics, exotic mushrooms, and indoor saffron.",
    expandedBio: "Kirubhakaran has managed commercial food security projects across India, the Maldives, and Oman. In the Maldives, he helped engineer hydroponic nutrient solutions for island communities cut off from fresh mainland supply. In Oman, he oversaw modern shade-house and open-field agriculture consultancy in challenging desert heat. At Green Sprouts Academy, he heads the curriculum development and live technical masterclasses, ensuring every student learns verified, field-tested farming techniques.",
    specialties: ["Commercial Hydroponics", "Aquaponic RAS", "Exotic & Medicinal Mushrooms", "Indoor Saffron CEA"],
    tags: [
      "Hydroponics R&D",
      "Aquaponics",
      "Exotic Mushrooms",
      "Medicinal Mushrooms",
      "Saffron",
      "Medicinal Plants",
      "Open Field",
      "International Projects",
    ],
    keyHighlights: [
      "Led hydroponic production deployments in the Maldives & Oman",
      "Pioneered indoor saffron flowering trials under controlled photoperiods",
      "Designed commercial nutrient formulations for high-yielding leafy greens & herbs",
      "Trained aspiring urban growers and commercial farmers",
    ],
  },
  {
    id: "vijay murugesan",
    name: "Vijay Murugesan",
    role: "Agronomist & Trainer",
    qualification: "B.Sc Agriculture",
    experience: "2.5 Years Pan-India Projects",
    location: "Pan-India Deployments",
    image: "/images/team/Vijay.png",
    shortBio: "Industry and trade network specialist. Makes hydroponics accessible from schools to commercial expos; designs starter kits with custom nutrient formulation.",
    expandedBio: "Vijay brings intense grassroots energy to urban farming education. Known for demystifying plant nutrition and making soil-free farming easy for everyday families, he has organized over 40 hands-on workshops in colleges, schools, and agri-expos across South and Western India. He maintains an extensive network of seed producers, greenhouse fabricators, and organic buyers, connecting academy graduates directly with reliable suppliers and lucrative local markets.",
    specialties: ["Custom Nutrient Formulation", "College & School Workshops", "Trader Networks", "Kit Formulation"],
    tags: [
      "Hydroponics Kits",
      "Aeroponic Systems",
      "Nutrient Formulation",
      "Agronomy Networks",
      "College Workshops",
      "Project Setup",
      "Material Sourcing",
      "Trader Contacts",
    ],
    keyHighlights: [
      "Set up community hydroponics and aeroponics installations across multiple Indian states",
      "Formulated the Green Sprouts Academy custom-ratio A+B nutrient kit",
      "Direct supplier contacts for seeds, net pots, and growing mediums passed on to students",
      "Regular guest speaker at university entrepreneurship summits",
    ],
  },
  {
    id: "Suriya ramesh",
    name: "Suriya Ramesh",
    role: "Agricultural Engineer · CEA Specialist",
    qualification: "B.E. Agriculture Engineering",
    experience: "2+ Years (Spireverse Engineering Design, Chennai)",
    location: "Chennai & Pan-India",
    image: "/images/team/Surya.png",
    shortBio: "Specialist in Controlled Environment Agriculture (CEA), AutoCAD farm designs, HVAC & PPFD calculations, and precision fertigation automation.",
    expandedBio: "Suriya is an agricultural engineer focused on precision automation and high-efficiency greenhouse architecture. With background at Spireverse Engineering Design in Chennai, he specializes in modeling closed-loop vertical farms, calculating exact PPFD light requirements, and sizing precision irrigation pumps and HVAC dehumidification. He ensures our students understand the physical mechanics that eliminate crop failures and optimize electrical efficiency.",
    specialties: ["AutoCAD Farm Design", "CEA & Container Farming", "HVAC & PPFD Lighting", "Precision Fertigation"],
    tags: [
      "CEA Specialist",
      "Container Farming",
      "HVAC & PPFD",
      "AutoCAD Farm Design",
      "Automation",
      "Precision Irrigation",
      "Rooftop Gardening",
      "Agri-tech R&D",
    ],
    keyHighlights: [
      "Designed CAD blueprints for multi-tier indoor container farms",
      "Engineered automated dosing loops with electrical conductivity (EC) feedback",
      "Expert in low-cost microclimate cooling for Indian summer environments",
      "Mentor for ag-tech hardware and IoT sensor integrations",
    ],
  },
  {
    id: "pradeep rajendran",
    name: "Pradeep Rajendran",
    role: "Agronomist & Trainer · Blueberry Farm Specialist",
    qualification: "B.E. Agriculture Engineering",
    experience: "2+ Years Commercial Blueberry & CEA",
    location: "Commercial Farms · Tamil Nadu & Karnataka",
    image: "/images/team/Pradeep.png",
    shortBio: "Hands-on experience in commercial blueberry farming and protected CEA; hydroponics, aeroponics, on-site material sourcing, and commercial crop setups.",
    expandedBio: "Pradeep is a crop specialist with deep hands-on expertise in high-value berry cultivation, particularly commercial protected blueberry orchards and soilless substrate systems. His engineering mindset combined with agronomic field practice gives students a realistic view of high-margin specialty crop management, irrigation automation, and disease scouting. He mentors advanced students scaling up from backyard trials to commercial land plots.",
    specialties: ["Blueberry Substrate Farming", "Commercial Aeroponics", "On-site Material Sourcing", "Project Setup"],
    tags: [
      "Blueberry Farming",
      "Hydroponics",
      "Aeroponic Systems",
      "Nutrient Formulation",
      "Project Setup",
      "College Workshops",
      "Agronomy Networks",
      "Material Sourcing",
    ],
    keyHighlights: [
      "Specialist in acidophilic high-value crops (blueberries, cranberries) in substrate bags",
      "Helped commission commercial aeroponic tower installations",
      "Expertise in cost-effective local fabrication of greenhouse structures",
      "Conducts live practical demonstrations during weekly academy sessions",
    ],
  },
];
