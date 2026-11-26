export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  programTaken: string;
  batch: string;
  rating: number;
  quote: string;
  harvestImage?: string;
  harvestMetric: string;
  isPlaceholderSample: boolean; // Clearly marked sample text until real reviews are provided
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Aakash Varma",
    role: "Former IT Consultant · Now Urban Agripreneur",
    location: "Bengaluru, Karnataka",
    programTaken: "Hydroponics + Microgreens",
    batch: "Batch #14 Graduate",
    rating: 5,
    quote: "[SAMPLE TESTIMONIAL - Placeholder content until live student review is verified]: The 3-day live hydroponics training was an eye-opener. Vijay and Kirubhakaran demystified nutrient chemistry which I used to find intimidating. Within 4 weeks of completing the program and receiving the starter kit, my apartment balcony produces 50 heads of fresh basil and lettuce monthly. I now supply two local cafes every Tuesday!",
    harvestImage: "/images/gallery/IMG_5165.webp",
    harvestMetric: "45 kg Harvest in First 60 Days",
    isPlaceholderSample: true,
  },
  {
    id: "test-2",
    name: "Dr. Priyamvada Sen",
    role: "Dentist & Terrace Gardener",
    location: "Pune, Maharashtra",
    programTaken: "Mushroom Cultivation",
    batch: "Batch #18 Graduate",
    rating: 5,
    quote: "[SAMPLE TESTIMONIAL - Placeholder content until live student review is verified]: I had zero farming experience and wanted to grow fresh food for my family. The spawn kit arrived in 3 days. Following Suriya's substrate sterilization method, we had our first flush of fresh white oyster mushrooms in just 22 days. The live Q&A sessions gave me all the confidence I needed.",
    harvestImage: "/images/gallery/IMG_3801.webp",
    harvestMetric: "12 kg Oyster Mushrooms from 6 bags",
    isPlaceholderSample: true,
  },
  {
    id: "test-3",
    name: "Rohan & Sneha Deshmukh",
    role: "Co-Founders, SproutBox Foods",
    location: "Hyderabad, Telangana",
    programTaken: "Microgreens (Superfood Business)",
    batch: "Batch #11 Graduate",
    rating: 5,
    quote: "[SAMPLE TESTIMONIAL - Placeholder content until live student review is verified]: The business focus of Green Sprouts Academy is what makes it unique. They didn't just teach us how to grow microgreens; they taught us how to package them in breathable punnets, price them for 60% gross margin, and sign up monthly subscribers. We started with two wire racks in our spare room and turned profitable in month two.",
    harvestImage: "/images/gallery/IMG_3973.webp",
    harvestMetric: "80+ Weekly Subscribers in Hyderabad",
    isPlaceholderSample: true,
  },
  {
    id: "test-4",
    name: "Karthik Subramanian",
    role: "Final Year B.Tech Student",
    location: "Coimbatore, Tamil Nadu",
    programTaken: "Hydroponics (Foundation Training)",
    batch: "Batch #22 Graduate",
    rating: 5,
    quote: "[SAMPLE TESTIMONIAL - Placeholder content until live student review is verified]: I availed the 20% student discount using my college ID card. The trainers are genuine B.Sc and B.E agronomists with international project credentials, so there was no theoretical fluff. The certificate helped me land an internship at an agri-tech greenhouse startup.",
    harvestImage: "/images/gallery/IMG_3981.webp",
    harvestMetric: "Certified Agri-Tech Trainee",
    isPlaceholderSample: true,
  },
];
