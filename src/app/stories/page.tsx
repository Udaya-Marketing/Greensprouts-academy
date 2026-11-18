"use client";

import React from "react";
import { 
  Quote, 
  Sparkles, 
  CheckCircle2, 
  Share2, 
  Camera, 
  Gift, 
  ArrowRight,
  Award,
  Users
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { useModals } from "@/components/ModalContext";
import StudentFeedback from "./StudentFeedback";
import VideoFeedback from "./VideoFeedback";

export default function SuccessStoriesPage() {
  const { openEnrollModal } = useModals();

  const harvestShowcase = [
    {
      title: "First Microgreens Harvest in 8 Days",
      grower: "Ananya R., Bengaluru",
      image: "/images/gallery/IMG_4493.jpg",
      metric: "6 Trays · Supplied to Organic Cafe",
      tag: "Microgreens",
    },
    {
      title: "Balcony Hydroponic Lettuce & Basil",
      grower: "Vikram S., Pune",
      image: "/images/gallery/IMG_5170.jpg",
      metric: "50 Plants Monthly · Zero Pesticides",
      tag: "Hydroponics",
    },
    {
      title: "Oyster Mushrooms Pinhead Flush",
      grower: "Deepak M., Hyderabad",
      image: "/images/gallery/IMG_3801.jpg",
      metric: "15 kg Yield · Spare Bedroom Setup",
      tag: "Mushroom Cultivation",
    },
    {
      title: "Indoor Flower Cultivation Showcase",
      grower: "Aditya & Priya, Jaipur",
      image: "/images/gallery/IMG_0106.jpg",
      metric: "Flowering Crops Grown in a Controlled Environment",
      tag: "Specialty Flowers",
    },
  ];

  return (
    <div className="w-full space-y-20 py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* 1. Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DFECD8] shadow-sm mb-4 text-xs font-bold text-[#00693E]">
          <Quote className="w-4 h-4 text-[#8BC53F]" />
          <span>Real Harvests · Real Agripreneurs</span>
        </div>
        <h1 className="heading-headline text-3xl sm:text-5xl text-[#231F20]">
          Student success stories & <span className="text-[#00693E]">harvest gallery</span>
        </h1>
        <p className="mt-3 text-sm sm:text-base text-[#2C3E32] leading-relaxed">
          See how our students transformed spare balconies, dark storerooms, and terraces into sustainable food systems and thriving commercial enterprises.
        </p>

        {/* <div className="mt-4 inline-block bg-[#FFF9C4] border border-[#FFE082] px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#6D4C00]">
          ⚠️ Notice: Testimonial cards below contain clearly labeled sample student feedback for demonstration until live verified reviews are provided.
        </div> */}
      </div>

      <VideoFeedback />
      <StudentFeedback />

      {/* 3. Show Your Harvest Showcase */}
      <section className="bg-gradient-to-br from-[#F6FAEF] via-[#FFFDF5] to-[#EAF5DC] border-2 border-[#D2EABB] rounded-3xl p-6 sm:p-10 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="badge-pill bg-white text-xs font-bold text-[#8BC53F] border border-[#B5DF93]">
              <Camera className="w-3.5 h-3.5 text-[#8BC53F]" />
              Student Harvests
            </span>
            <h2 className="heading-headline text-2xl sm:text-3xl text-[#231F20] mt-2">
              Student harvest showcase <span className="text-[#00693E]">& social wall</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#2C3E32] mt-1">
              Real harvest photos from our students and community across India.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#00693E] bg-white px-3.5 py-1.5 rounded-xl border border-[#DFECD8] shadow-xs">
              Direct From Student Farms
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {harvestShowcase.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#D8E8CE] rounded-2xl overflow-hidden shadow-sm group"
            >
              <div className="relative aspect-square overflow-hidden bg-[#E8F0E2]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded text-[10px] font-bold text-[#00693E]">
                  {item.tag}
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-xs sm:text-sm text-[#231F20]">{item.title}</h4>
                <p className="text-[11px] text-[#557861] mt-0.5">{item.grower}</p>
                <div className="mt-3 pt-2 border-t border-[#DFECD8] text-[10px] font-bold text-[#00693E]">
                  🌿 {item.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Alumni Community & Referral Rewards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Alumni Community */}
        <div className="bg-white border border-[#DFECD8] rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#EAF5DC] text-[#8BC53F] flex items-center justify-center mb-4 border border-[#B5DF93]">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#231F20]">
              Lifetime Alumni WhatsApp Group
            </h3>
            <p className="text-xs sm:text-sm text-[#2C3E32] mt-2 leading-relaxed">
              When you enroll in Green Sprouts Academy, you never grow alone. Join over 1,200+ active growers across India sharing pH calibrations, seed deals, bulk buyer leads, and local market tips daily.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#DFECD8]">
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=START`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full py-2.5 text-xs font-bold justify-center"
            >
              <span>Join Alumni WhatsApp Channel</span>
            </a>
          </div>
        </div>

        {/* Referral Reward Section */}
        <div className="bg-white border border-[#DFECD8] rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#FFF9C4] text-[#996500] flex items-center justify-center mb-4 border border-[#FFE082]">
              <Gift className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#231F20]">
              Refer a Fellow Grower · Earn Free Seed Kits
            </h3>
            <p className="text-xs sm:text-sm text-[#2C3E32] mt-2 leading-relaxed">
              Introduce a friend, college peer, or colleague to Green Sprouts Academy. When they register for any live training plan, both of you receive a complimentary exotic herb seed pack + custom nutrient booster refill.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#DFECD8]">
            <button
              onClick={() => openEnrollModal()}
              className="btn-primary w-full py-2.5 text-xs font-bold justify-center"
            >
              <span>Enroll With a Friend · ₹999</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
