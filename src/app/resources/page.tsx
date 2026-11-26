"use client";

import React, { useState } from "react";
import { 
  BookOpen, 
  Download, 
  Sparkles, 
  Play, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Tag,
  Mail,
  Send,
  Video
} from "lucide-react";
import { useModals } from "@/components/ModalContext";
import { SITE_CONFIG } from "@/data/siteConfig";

export default function ResourcesPage() {
  const { openGuideModal, openEnrollModal } = useModals();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const articles = [
    {
      id: 1,
      title: "Mastering EC & pH in Balcony Hydroponics: The Beginner Chemist's Guide",
      category: "Hydroponics",
      readTime: "5 min read",
      summary: "Why plants refuse to absorb nutrients when water pH rises above 6.8, and how a ₹300 digital tester prevents 90% of yellow leaf failures.",
      image: "/images/gallery/IMG_0242.webp",
      date: "Oct 2026",
    },
    {
      id: 2,
      title: "Microgreens in 7 Days: Blackout Weight Technique for Thicker Stems",
      category: "Microgreens",
      readTime: "4 min read",
      summary: "Why putting a 2kg weight on top of your seed trays for 3 days doubles stem girth and prevents fungal damping off.",
      image: "/images/gallery/IMG_3873.webp",
      date: "Oct 2026",
    },
    {
      id: 3,
      title: "Oyster vs. Milky Mushrooms: How to Harvest Gourmet Fungi 365 Days a Year",
      category: "Mushrooms",
      readTime: "6 min read",
      summary: "Rotate White Oyster in cool winter months and Milky Mushroom during 35°C Indian summer heat for steady monthly cashflow.",
      image: "/images/gallery/WhatsApp Image 2026-10-22 at 4.16.20 PM (1).webp",
      date: "Oct 2026",
    },
    {
      id: 4,
      title: "Indoor Saffron Economics: Sizing Chilling Chillers & PUF Insulated Rooms",
      category: "Saffron CEA",
      readTime: "7 min read",
      summary: "A technical breakdown of air conditioning, dehumidification, and LED lux levels required to induce Crocus flowering indoors.",
      image: "/images/gallery/saffron.webp",
      date: "Oct 2026",
    },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSuccess(true);
  };

  return (
    <div className="w-full space-y-20 py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* 1. Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DFECD8] shadow-sm mb-4 text-xs font-bold text-[#00693E]">
          <BookOpen className="w-4 h-4 text-[#8BC53F]" />
          <span>Knowledge Hub & Agri-Tech Insights</span>
        </div>
        <h1 className="heading-headline text-3xl sm:text-5xl text-[#231F20]">
          Free guides, tutorials & <span className="text-[#00693E]">farmer resources</span>
        </h1>
        <p className="mt-3 text-sm sm:text-base text-[#2C3E32] leading-relaxed">
          Learn modern agricultural science freely through our agronomist-written handbooks, formulation cheat sheets, and video breakdown reels.
        </p>
      </div>

      {/* 2. Featured Lead Magnet Banner */}
      <div className="bg-gradient-to-br from-[#F6FAEF] via-[#FFFDF5] to-[#EAF5DC] border-2 border-[#B5DF93] rounded-3xl p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-3">
          <span className="badge-pill bg-white text-xs font-bold text-[#8BC53F] border border-[#B5DF93]">
            <Sparkles className="w-3.5 h-3.5 text-[#8BC53F]" /> Free Downloadable Guide
          </span>
          <h2 className="heading-headline text-2xl sm:text-4xl text-[#231F20]">
            "Start Microgreens at Home in 7 Days"
          </h2>
          <p className="text-xs sm:text-sm text-[#2C3E32] leading-relaxed max-w-xl">
            Download our 16-page beginner handbook detailing non-GMO seed varieties, tray blackout stacking protocols, bottom-watering routines, and restaurant packaging tips.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={openGuideModal}
              className="btn-primary py-3 px-6 text-xs sm:text-sm font-bold shadow-md flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Free PDF Guide</span>
            </button>
            <span className="text-xs text-[#527860] font-semibold">
              Instant digital download · 100% Free
            </span>
          </div>
        </div>

        <div className="lg:col-span-4 flex justify-center">
          <div className="relative w-48 sm:w-56 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-[#E8F0E2] rotate-2 hover:rotate-0 transition-transform">
            <img
              src="/images/gallery/IMG_0603.webp"
              alt="Microgreens Guide Cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
              <span className="text-[10px] uppercase font-bold text-[#CBEA7B]">Official Handbook</span>
              <p className="text-xs font-extrabold leading-tight">Start Microgreens in 7 Days</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Blog Articles Grid */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="badge-pill badge-pill-lime text-xs">Articles & Insights</span>
            <h2 className="heading-headline text-2xl sm:text-3xl text-[#231F20] mt-1">
              Agronomy tips & <span className="text-[#00693E]">guides</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((art) => (
            <div
              key={art.id}
              className="bg-white border border-[#DFECD8] rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between hover:border-[#8BC53F] transition-all group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E8F0E2]">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-white/95 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#00693E]">
                    {art.category}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-[10px] text-[#6A8F76] mb-1.5">
                    <span>{art.date}</span>
                    <span>·</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#231F20] group-hover:text-[#0B6E4F] transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-[#527860] mt-2 line-clamp-3 leading-relaxed">
                    {art.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => openEnrollModal()}
                  className="text-xs font-bold text-[#0B6E4F] hover:underline flex items-center gap-1"
                >
                  <span>Learn hands-on in live batch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Instagram Reels & YouTube Shorts Video Embed Area */}
      <section className="bg-white border border-[#DFECD8] rounded-3xl p-6 sm:p-10 shadow-sm">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="badge-pill badge-pill-lime text-xs">
              <Video className="w-3.5 h-3.5 text-[#8BC53F]" /> Quick Video Tips
            </span>
            <h2 className="heading-headline text-2xl sm:text-3xl text-[#231F20] mt-1">
              Shorts & reels <span className="text-[#00693E]">from the greenhouse</span>
            </h2>
          </div>
          <p className="text-xs text-[#527860] max-w-xs">
            Bite-sized 60-second video lessons on seed density, hydroponic pipe drilling, and humidity misting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: "How to Calibrate a Digital EC Pen in 60s",
              duration: "0:52",
              views: "18.4K Views",
              channel: "YouTube Shorts [PLACEHOLDER]",
            },
            {
              title: "Harvesting 3 Trays of Radish Microgreens",
              duration: "0:45",
              views: "34.1K Views",
              channel: "Instagram Reel [PLACEHOLDER]",
            },
            {
              title: "Substrate Bag Inoculation Demo",
              duration: "0:58",
              views: "12.8K Views",
              channel: "YouTube Shorts [PLACEHOLDER]",
            },
          ].map((vid, idx) => (
            <div
              key={idx}
              className="relative aspect-[9/14] rounded-2xl overflow-hidden shadow-md border-2 border-[#DFECD8] bg-gradient-to-b from-[#EAF5DC] to-[#DFECD8] flex flex-col justify-between p-4 group cursor-pointer"
            >
              <div className="flex justify-between items-center text-xs font-bold text-[#00693E]">
                <span className="bg-white/90 px-2 py-0.5 rounded text-[10px]">
                  {vid.channel.split(" ")[0]}
                </span>
                <span className="bg-black/60 text-white px-2 py-0.5 rounded text-[10px]">
                  {vid.duration}
                </span>
              </div>

              <div className="flex flex-col items-center justify-center my-auto">
                <div className="w-14 h-14 rounded-full bg-white text-[#8BC53F] shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-md p-3 rounded-xl border border-[#DFECD8]">
                <p className="font-bold text-xs text-[#231F20] leading-snug">{vid.title}</p>
                <span className="text-[10px] text-[#557861] block mt-0.5">{vid.views}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Newsletter / WhatsApp Channel Sign-up */}
      <section className="bg-gradient-to-r from-[#F6FAEF] to-[#EAF5DC] border-2 border-[#B5DF93] rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-sm">
        <span className="badge-pill bg-white text-xs font-bold text-[#8BC53F]">
          Weekly Farming Bulletin
        </span>
        <h3 className="heading-headline text-2xl sm:text-3xl text-[#231F20] mt-2">
          Get free nutrient recipes & <span className="text-[#00693E]">batch alerts</span>
        </h3>
        <p className="text-xs sm:text-sm text-[#2C3E32] mt-1.5 max-w-md mx-auto">
          Join 4,500+ home growers receiving our bi-weekly newsletter with seasonal planting schedules and equipment discounts.
        </p>

        {!newsletterSuccess ? (
          <form onSubmit={handleNewsletterSubmit} className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl bg-white border border-[#B5DF93] text-xs sm:text-sm text-[#231F20] focus:outline-none focus:border-[#8BC53F]"
            />
            <button
              type="submit"
              className="btn-primary py-3 px-6 text-xs sm:text-sm font-bold shadow-sm shrink-0"
            >
              <span>Subscribe Free</span>
            </button>
          </form>
        ) : (
          <div className="mt-6 p-3 bg-white rounded-xl border border-[#B5DF93] text-xs font-bold text-[#00693E]">
            ✓ Thank you! You are now subscribed to the Green Sprouts weekly farming bulletin.
          </div>
        )}
      </section>
    </div>
  );
}
