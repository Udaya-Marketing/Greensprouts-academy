"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ChevronLeft, ChevronRight, Check, Sparkles } from "lucide-react";
import LeafMark from "./LeafMark";

interface ScrollExperienceProps {
  onOpenEnrollModal?: () => void;
}

interface TrackData {
  id: string;
  stepNumber: string;
  shortName: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  desc: string;
  leftImage: string;
  rightImage: string;
  tag: string;
  highlight: string;
  previewLabel: string;
  bulletPoints: string[];
  href: string;
  ctaText: string;
  price: string;
}

const TRACKS: TrackData[] = [
  {
    id: "track-1",
    stepNumber: "01",
    shortName: "Seed to Success",
    eyebrow: "SEED TO SUCCESS",
    title: "From Seed to Success",
    subtitle: "Smart agriculture training",
    desc: "Commercial-grade agronomy simplified for entrepreneurs, rooftop growers, and forward-thinking farmers across India. Master Hydroponics, Aquaponics, Mushroom Cultivation, Microgreens & CEA Saffron live from qualified B.Sc & B.E. agronomists.",
    leftImage: "/images/gallery/IMG_0264.webp",
    rightImage: "/images/gallery/IMG_0265.webp",
    tag: "Live Interactive Masterclasses",
    highlight: "3–5 Day Live Batches",
    previewLabel: "Demonstration Setup",
    bulletPoints: [
      "Four Core Tracks: Hydroponics, Aquaponics, Mushrooms & Saffron",
      "Doorstep Hands-On Starter Kit with Seeds, Feed & Nutrients Included",
      "Direct 1-on-1 Agronomist Q&A & Farm Setup Consultation",
    ],
    href: "/programs",
    ctaText: "Explore Programs",
    price: "₹999",
  },
  {
    id: "track-2",
    stepNumber: "02",
    shortName: "Hydroponics & Microgreens",
    eyebrow: "HIGH-EFFICIENCY CULTIVATION",
    title: "Hydroponics & Microgreens",
    subtitle: "90% water savings · 300% higher yields",
    desc: "Master nutrient film technique (NFT), deep water culture (DWC), Dutch buckets, substrate chemistry, and microgreen commercial harvests with doorstep hands-on starter kits.",
    leftImage: "/images/gallery/IMG_0563.webp",
    rightImage: "/images/gallery/IMG_3873.webp",
    tag: "Fast Turnaround Cycles",
    highlight: "Harvest in 7–10 Days",
    previewLabel: "Vertical NFT Hydroponics Rack",
    bulletPoints: [
      "Commercial EC, pH & Nutrient Reservoir Balancing Recipes",
      "7–10 Day Rapid Seed-to-Harvest Commercial Cycles",
      "Direct B2B Salad & Gourmet Restaurant Sales Playbook",
    ],
    href: "/programs/hydroponics",
    ctaText: "Explore Hydroponics",
    price: "₹999",
  },
  {
    id: "track-3",
    stepNumber: "03",
    shortName: "Mushrooms & Saffron",
    eyebrow: "EXOTIC CROPS & CONTROLLED ENVIRONMENT",
    title: "Mushrooms & Indoor Saffron",
    subtitle: "High-margin urban agripreneurship",
    desc: "Master precision temperature, humidity, and sterilization protocols for oyster, milky mushrooms and climate-controlled Kashmiri saffron in urban darkrooms.",
    leftImage: "/images/gallery/WhatsApp Image 2026-10-22 at 4.16.20 PM.webp",
    rightImage: "/images/gallery/IMG_0215.webp",
    tag: "Premium Market Value",
    highlight: "High Margin Specialty Crops",
    previewLabel: "Indoor CEA Saffron Chamber",
    bulletPoints: [
      "Sterilization, Bag Filling & Spore-to-Flush Darkroom Setup",
      "Precision Temperature & RH Cycling for Urban Spaces",
      "₹1.5L–₹3L/kg Commercial Dried Saffron Unit Economics",
    ],
    href: "/programs/mushrooms",
    ctaText: "Explore Specialty Tracks",
    price: "₹1,499",
  },
  {
    id: "track-4",
    stepNumber: "04",
    shortName: "Aquaponics",
    eyebrow: "CIRCULAR FISH + PLANT FARMING",
    title: "Aquaponics",
    subtitle: "Fish and plants in one sustainable loop",
    desc: "Learn how fish and plants grow together in one circular system: tank and grow-bed design, water cycling, fish feed and plant balance, and commercial RAS systems for high yield. Your Starter Kit includes fish feed sample, seeds for plants, a system diagram and a setup sheet.",
    leftImage: "/images/gallery/IMG_0039.webp",
    rightImage: "/images/gallery/IMG_0242.webp",
    tag: "Dual-Harvest System",
    highlight: "Circular Farming",
    previewLabel: "Commercial RAS Tanks & Grow Beds",
    bulletPoints: [
      "Natural Bio-Filtration: Zero Chemical Fertilizer Nitrification Loop",
      "Tank & Grow Bed Sizing, Water Cycling & Siphon Engineering",
      "Commercial High-Yield RAS Systems & High-Protein Fish Feed Balance",
    ],
    href: "/programs/aquaponics",
    ctaText: "Explore Aquaponics",
    price: "₹999",
  },
];

const CARD_STICKY_TOP_CLASSES = [
  "top-[5.25rem] max-[639px]:top-[4.5rem]",
  "top-[6.4rem] max-[639px]:top-[5.25rem]",
  "top-[7.55rem] max-[639px]:top-[6rem]",
  "top-[8.7rem] max-[639px]:top-[6.75rem]",
];

export default function ScrollExperience({ onOpenEnrollModal }: ScrollExperienceProps) {
  const [activeTrack, setActiveTrack] = useState<number>(0);
  const [cardScales, setCardScales] = useState<number[]>([1, 1, 1, 1]);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  // Smooth bidirectional scroll & stack calculation for 4 cards
  const updateScrollState = useCallback(() => {
    if (!containerRef.current) return;

    const cards = cardRefs.map((r) => r.current);
    if (!cards[0] || !cards[1] || !cards[2] || !cards[3]) return;

    const stickyOffset = window.innerWidth >= 1024 ? 90 : 80;
    const windowH = window.innerHeight;

    // Determine current active card by checking which card's top is nearest the sticky anchor
    const rect0 = cards[0].getBoundingClientRect();
    const rect1 = cards[1].getBoundingClientRect();
    const rect2 = cards[2].getBoundingClientRect();
    const rect3 = cards[3].getBoundingClientRect();

    let currentActive = 0;
    if (rect3.top <= stickyOffset + 80) {
      currentActive = 3;
    } else if (rect2.top <= stickyOffset + 80) {
      currentActive = 2;
    } else if (rect1.top <= stickyOffset + 80) {
      currentActive = 1;
    } else {
      currentActive = 0;
    }
    setActiveTrack(currentActive);

    // Compute scale effects when lower cards are covered by subsequent cards
    // Opacity is ALWAYS kept at 100% (1) so underlying text NEVER ghosts through
    const newScales = [1, 1, 1, 1];

    // Card 0 coverage by Card 1
    if (rect1.top < windowH && rect1.top > stickyOffset) {
      const progress = 1 - (rect1.top - stickyOffset) / (windowH - stickyOffset);
      const clamped = Math.min(Math.max(progress, 0), 1);
      newScales[0] = 1 - clamped * 0.03;
    } else if (rect1.top <= stickyOffset) {
      newScales[0] = 0.97;
    }

    // Card 1 coverage by Card 2
    if (rect2.top < windowH && rect2.top > stickyOffset) {
      const progress = 1 - (rect2.top - stickyOffset) / (windowH - stickyOffset);
      const clamped = Math.min(Math.max(progress, 0), 1);
      newScales[1] = 1 - clamped * 0.03;
      newScales[0] = 0.97 - clamped * 0.03;
    } else if (rect2.top <= stickyOffset) {
      newScales[1] = 0.97;
      newScales[0] = 0.94;
    }

    // Card 2 coverage by Card 3
    if (rect3.top < windowH && rect3.top > stickyOffset) {
      const progress = 1 - (rect3.top - stickyOffset) / (windowH - stickyOffset);
      const clamped = Math.min(Math.max(progress, 0), 1);
      newScales[2] = 1 - clamped * 0.03;
      newScales[1] = 0.97 - clamped * 0.02;
      newScales[0] = 0.94 - clamped * 0.02;
    } else if (rect3.top <= stickyOffset) {
      newScales[2] = 0.97;
      newScales[1] = 0.95;
      newScales[0] = 0.92;
    }

    setCardScales(newScales);
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateScrollState);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateScrollState();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [updateScrollState]);

  // Jump to specific track smoothly
  const scrollToTrack = (index: number) => {
    const el = cardRefs[index]?.current;
    if (el) {
      const navOffset = window.innerWidth >= 1024 ? 110 : 90;
      const elRect = el.getBoundingClientRect();
      const targetScrollY = window.pageYOffset + elRect.top - navOffset;
      window.scrollTo({
        top: targetScrollY,
        behavior: "smooth",
      });
      setActiveTrack(index);
    }
  };

  return (
    <div
      id="scroll-experience-section"
      ref={containerRef}
      className="w-full relative px-4 sm:px-6 lg:px-8 pt-4 pb-12"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header & Interactive Floating Track Selector */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5DC] border border-[#B5DF93] text-xs font-semibold text-[#00693E] mb-2 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#8BC53F]" />
              <span>Interactive Course Tracks</span>
            </div>
            <h2 className="heading-headline text-2xl sm:text-4xl text-[#1E1E1E] tracking-tight">
              Curated pathways <span className="text-[#00693E]">from soil to profit</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#1E1E1E]/80 mt-1 max-w-xl">
              Scroll down to explore each specialized agricultural discipline, or use the tabs below to jump directly.
            </p>
          </div>

          {/* Jump Tabs & Prev/Next Arrows */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 bg-[#FAFDF6] p-1.5 rounded-full border border-[#DFECD8] shadow-xs">
              {TRACKS.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => scrollToTrack(idx)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold font-ui transition-all flex items-center gap-1.5 ${
                    activeTrack === idx
                      ? "bg-[#00693E] text-white shadow-xs"
                      : "bg-white text-[#1E1E1E]/80 hover:bg-[#EAF5DC] hover:text-[#00693E]"
                  }`}
                  aria-label={`Jump to Track ${t.stepNumber}: ${t.title}`}
                >
                  <span className={activeTrack === idx ? "text-white" : "text-[#00693E]"}>
                    {t.stepNumber}
                  </span>
                  <span className="hidden sm:inline">{t.shortName}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => scrollToTrack(Math.max(activeTrack - 1, 0))}
                disabled={activeTrack === 0}
                className="w-8 h-8 rounded-full bg-[#EAF5DC] border border-[#B5DF93] flex items-center justify-center text-[#00693E] hover:bg-[#8BC53F] hover:text-[#1E1E1E] transition-colors disabled:opacity-40 disabled:pointer-events-none shadow-xs"
                aria-label="Previous track"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollToTrack(Math.min(activeTrack + 1, TRACKS.length - 1))}
                disabled={activeTrack === TRACKS.length - 1}
                className="w-8 h-8 rounded-full bg-[#EAF5DC] border border-[#B5DF93] flex items-center justify-center text-[#00693E] hover:bg-[#8BC53F] hover:text-[#1E1E1E] transition-colors disabled:opacity-40 disabled:pointer-events-none shadow-xs"
                aria-label="Next track"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 1. STACKED PANELS: Mobile & Desktop Sticky Stacking */}
        <div className="scroll-experience-cards relative space-y-8 sm:space-y-12">
          {TRACKS.map((track, idx) => {
            // BUG FIX: Fully opaque background (#FFFFFF) and strictly ascending z-index
            // so nothing from lower cards shows through when upper cards stack on top.
            const cardStyle = {
              zIndex: 10 + idx * 10,
              transform: `scale(${cardScales[idx] || 1})`,
              transformOrigin: "center top",
              backgroundColor: "#ffffff",
              opacity: 1,
            };

            return (
              <div
                key={track.id}
                ref={cardRefs[idx]}
                style={cardStyle}
                className={`sticky ${CARD_STICKY_TOP_CLASSES[idx]} w-full rounded-2xl sm:rounded-3xl bg-white border border-[#B5DF93] shadow-xl overflow-hidden transition-transform duration-200 ease-out will-change-transform`}
              >
                {/* Card Header Bar */}
                <div className="bg-[#FAFDF6] border-b border-[#DFECD8] px-4 sm:px-8 py-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-[#00693E] text-white text-xs font-bold font-ui flex items-center justify-center shadow-xs">
                      {track.stepNumber}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#1E1E1E]">
                      {track.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="hidden sm:inline text-xs font-semibold text-[#53735D]">
                      Track {track.stepNumber} of 04
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#EAF5DC] border border-[#B5DF93] text-[11px] font-bold text-[#00693E]">
                      {track.highlight}
                    </span>
                  </div>
                </div>

                {/* Card Main Content: Two Columns */}
                <div className="p-4 sm:p-8 lg:p-10 bg-white">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
                    {/* Left Imagery Panel */}
                    <div className="relative w-full min-w-0 max-w-full lg:col-span-5 aspect-[16/10] sm:aspect-[16/10] lg:aspect-auto lg:h-full min-h-[200px] sm:min-h-[240px] lg:min-h-[280px] rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-[#DFECD8] bg-[#EAF5DC] box-border">
                      <img
                        src={track.leftImage}
                        alt={`${track.title} - ${track.subtitle}`}
                        className="block w-full h-full max-w-full object-cover object-center"
                        loading="lazy"
                          decoding="async"
                          width={960}
                          height={600}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />

                      {/* Floating Badges */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white gap-2 min-w-0">
                        <span className="min-w-0 max-w-[65%] truncate bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#00693E] shadow-sm border border-[#B5DF93]">
                          {track.tag}
                        </span>

                        <span className="shrink-0 text-xs font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full">
                          {track.price}
                        </span>
                      </div>
                    </div>

                    {/* Right Details Panel */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-4 sm:space-y-6">
                      <div>
                        {/* Eyebrow */}
                        <div className="flex items-center gap-2 mb-1.5">
                          <LeafMark className="w-4 h-4 shrink-0" />
                          <span className="eyebrow text-[#0B6E4F]">
                            {track.eyebrow}
                          </span>
                        </div>

                        {/* Headline */}
                        <h3 className="heading-headline text-xl sm:text-2xl lg:text-3xl text-[#1E1E1E] tracking-tight">
                          {track.title}
                        </h3>

                        {/* Subtitle: Plain medium-weight text in slogan green (no cursive/italic) */}
                        <p className="font-subheading text-sm sm:text-base text-[#0B6E4F] mt-0.5 font-medium">
                          {track.subtitle}
                        </p>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-[#1E1E1E]/80 mt-2.5 leading-relaxed">
                          {track.desc}
                        </p>

                        {/* Secondary Image Peek */}
                        <div className="mt-4 relative h-20 sm:h-28 rounded-xl overflow-hidden border border-[#B5DF93]/60 shadow-xs bg-[#EAF5DC]">
                          <img
                            src={track.rightImage}
                            alt={track.previewLabel}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          decoding="async"
                          width={600}
                          height={280}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
                          <span className="absolute bottom-2 left-2.5 text-[10.5px] font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                            {track.previewLabel}
                          </span>
                        </div>

                        {/* Bullet Highlights */}
                        <div className="mt-4 space-y-2">
                          {track.bulletPoints.map((bp) => (
                            <div key={bp} className="flex items-start gap-2">
                              <div className="w-4 h-4 rounded-full bg-[#EAF5DC] border border-[#B5DF93] flex items-center justify-center text-[#00693E] shrink-0 mt-0.5">
                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                              </div>
                              <span className="text-xs sm:text-sm text-[#1E1E1E]/85 font-medium leading-snug">
                                {bp}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Actions */}
                      <div className="pt-4 border-t border-[#DFECD8] flex flex-wrap items-center justify-between gap-3">
                        <Link
                          href={track.href}
                          className="btn-primary text-xs py-2 px-5"
                        >
                          <span>{track.ctaText}</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>

                        {onOpenEnrollModal && (
                          <button
                            onClick={onOpenEnrollModal}
                            className="link-expert text-xs inline-flex items-center gap-1 font-bold text-[#00693E] hover:text-[#1E1E1E] transition-colors"
                          >
                            <span>Enroll for {track.price}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. CALM LIGHT SECTION: Smooth natural flow */}
        <section className="relative z-40 max-w-5xl mx-auto mt-16 sm:mt-24 py-12 sm:py-16 px-4 sm:px-6 bg-[#F6FAEF] text-center rounded-3xl border border-[#DFECD8] shadow-xs">
          <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-[#B5DF93] flex items-center justify-center mb-4">
              <LeafMark className="w-7 h-7" />
            </div>

            <span className="eyebrow text-[#0B6E4F] mb-1.5">
              ACADEMY PHILOSOPHY
            </span>

            <h2 className="heading-headline text-2xl sm:text-4xl text-[#1E1E1E] tracking-tight leading-tight">
              Growing farmers <span className="text-[#00693E]">in better ways.</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#1E1E1E]/80 max-w-xl mt-3 leading-relaxed">
              From hands-on starter kits to commercial unit economics, our certified agronomist faculty empowers you with practical farming independence.
            </p>

            <div className="mt-6">
              <a
                href="#trainers"
                className="link-expert text-sm font-bold text-[#00693E] hover:text-[#1E1E1E] inline-flex items-center gap-2 group"
              >
                <span>→ Meet Our Trainers</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
