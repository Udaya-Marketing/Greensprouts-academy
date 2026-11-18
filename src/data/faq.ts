export interface FAQCategory {
  category: string;
  items: {
    question: string;
    answer: string;
  }[];
}

export const FAQ_DATA: FAQCategory[] = [
  {
    category: "Training Format & Batches",
    items: [
      {
        question: "How are the training sessions conducted?",
        answer: "All classes are conducted 100% online live via interactive video meeting software (Google Meet / Zoom). You can attend comfortably from anywhere in India on your mobile phone, laptop, or tablet. Sessions typically run in the evening from 7:30 PM to 9:00 PM IST so working professionals and students can attend easily.",
      },
      {
        question: "What if I miss a live class due to work or emergencies?",
        answer: "No worries! Every live session is recorded in HD. All enrolled students receive lifetime access to class recordings, slide decks, and digital reference charts in their private student portal.",
      },
      {
        question: "In what language are the sessions conducted?",
        answer: "Sessions are conducted in clear, conversational English and simple Hindi mix, with dedicated regional mentor support (Tamil, Telugu, Hindi) during the live Q&A sessions.",
      },
    ],
  },
  {
    category: "Starter Kits & Shipping",
    items: [
      {
        question: "When will I receive my Starter Kit?",
        answer: "For Standard and Premium enrollments, physical starter kits are dispatched via express courier (Delhivery/BlueDart) within 24–48 hours of registration. Tracking details are shared on WhatsApp, and delivery across India typically takes 3 to 5 business days.",
      },
      {
        question: "Can I choose which starter kit I want in the Standard Plan?",
        answer: "Yes! During checkout or on your enrollment form, you select which specialization starter kit you prefer: Hydroponics, Microgreens, Mushroom Cultivation, or Aquaponics.",
      },
      {
        question: "What if any item in the kit arrives damaged?",
        answer: "We offer an instant 100% free replacement guarantee. Simply share an unboxing photo or video on our WhatsApp support line, and a fresh replacement will be couriered immediately.",
      },
    ],
  },
  {
    category: "Certification & Credentials",
    items: [
      {
        question: "Is the Certificate of Completion recognized?",
        answer: "Yes. Every student who completes the live program receives an official, digitally verifiable Certificate of Completion with a unique verification ID and QR code. It is issued by Green Sprouts Academy and co-signed by qualified B.Sc/B.E Agronomists with international credentials.",
      },
      {
        question: "Can I use the certificate for bank agri-loans, Startup India, or college credits?",
        answer: "Yes, many of our alumni have utilized their certificate as proof of formal agricultural skill training when applying for mudra loans, agri-business incubators, and college credit exemptions.",
      },
    ],
  },
  {
    category: "Business, Economics & Earnings",
    items: [
      {
        question: "How realistic are the earning potential numbers?",
        answer: "Our earnings figures (e.g. ₹20,000–₹80,000/month) represent realistic gross margins achieved by active growers operating at indicated square foot scales in Indian urban centres. Please note: Actual profits depend on your local market, temperature control, distribution effort, and crop quality.",
      },
      {
        question: "Will Green Sprouts Academy buy back our harvest?",
        answer: "We do not run direct buybacks because buybacks often exploit farmers with low floor prices. Instead, we teach you how to sell directly to local organic stores, upscale restaurants, and direct subscribers where you retain 100% of retail margins (₹80–₹120/punnet instead of wholesale ₹20).",
      },
    ],
  },
  {
    category: "Student Discount & College ID",
    items: [
      {
        question: "How do I claim the 20% Student Discount?",
        answer: "Simply check the 'I am a student' checkbox during checkout and upload or WhatsApp a photo of your valid college or university ID card. The 20% discount is applied instantly to any plan.",
      },
    ],
  },
];
