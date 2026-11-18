"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  mask: "arch" | "rounded" | "circle" | "leaf" | "scallop";
  tilt: number;
  tag: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    src: "/images/gallery/IMG_4492.jpg",
    alt: "Vibrant organic microgreen harvest in natural greenhouse light",
    caption: "Microgreens Live Workshop: Nutrient-rich radish, pea shoots and sweet basil shoots harvested in 10 days.",
    mask: "arch",
    tilt: -2.5,
    tag: "Microgreens Masterclass",
  },
  {
    id: "g2",
    src: "/images/gallery/IMG_0488.jpg",
    alt: "Commercial vertical hydroponic NFT rack system canopy",
    caption: "Commercial NFT Hydroponics: High-density leafy greens cultivated with 90% water conservation.",
    mask: "rounded",
    tilt: 2,
    tag: "Commercial Setup",
  },
  {
    id: "g3",
    src: "/images/gallery/IMG_3801.jpg",
    alt: "White oyster mushroom fruiting bag in climate chamber",
    caption: "Gourmet Mushroom Cultivation: High-yield oyster and milky mushroom flushes in urban darkrooms.",
    mask: "circle",
    tilt: -2,
    tag: "Mushroom Grow Bags",
  },
  {
    id: "g4",
    src: "/images/gallery/IMG_0214.jpg",
    alt: "Indoor climate-controlled high-value botanical blooms",
    caption: "Indoor CEA Specialty: Precision temperature and RH cycling for boutique spice and edible botanical production.",
    mask: "leaf",
    tilt: 2.5,
    tag: "Indoor Specialty CEA",
  },
  {
    id: "g5",
    src: "/images/gallery/IMG_4144.jpg",
    alt: "Aquaculture fish splashing in aquaponics RAS tank",
    caption: "Aquaponics Engineering: Zero chemical fertilizer organic farming utilizing bio-filtered fish waste.",
    mask: "scallop",
    tilt: -2.5,
    tag: "Closed-Loop Farming",
  },
  {
    id: "g6",
    src: "/images/gallery/IMG_4067.jpg",
    alt: "Vertical A-frame hydroponic system with thriving green seedlings",
    caption: "Balcony Agripreneurship: Converting 60 sq. ft. of domestic space into fresh weekly greens.",
    mask: "arch",
    tilt: 2,
    tag: "Urban Farming",
  },
  {
    id: "g7",
    src: "/images/gallery/IMG_4590.jpg",
    alt: "Arid climate protected polyhouse in Oman",
    caption: "Middle East CEA Deployment: 45°C+ arid climate greenhouse automation in Oman.",
    mask: "rounded",
    tilt: -2,
    tag: "International Field Work",
  },
  {
    id: "g8",
    src: "/images/gallery/IMG_0065.jpg",
    alt: "Healthy fish in a clear aquaculture tank",
    caption: "Aquaculture: Monitoring healthy fish in a recirculating water system.",
    mask: "circle",
    tilt: 3,
    tag: "Aquaculture",
  },
  {
    id: "g9",
    src: "/images/gallery/IMG_4416.jpg",
    alt: "Students taking part in a hands-on agriculture training session",
    caption: "Hands-on Training: Students learning practical farming techniques at a greenhouse.",
    mask: "leaf",
    tilt: -2,
    tag: "Hands-on Training",
  },
  {
    id: "g10",
    src: "/images/gallery/IMG_4429.jpg",
    alt: "Agriculture trainees gathered at a greenhouse",
    caption: "Student Community: Trainees sharing their experience at a commercial growing facility.",
    mask: "scallop",
    tilt: 2,
    tag: "Student Community",
  },
];

export default function SidewaysImageStrip() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Drag interaction refs
  const isDraggingRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const scrollLeftStartRef = useRef<number>(0);
  const hasDraggedRef = useRef<boolean>(false);

  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeDot, setActiveDot] = useState<number>(0);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  // Update scroll arrows and dot indicator based on scroll position
  const handleScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const scrollLeft = el.scrollLeft;
    const maxScroll = el.scrollWidth - el.clientWidth;

    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < maxScroll - 10);

    const cardWidth = 320;
    const index = Math.min(
      Math.max(0, Math.round(scrollLeft / cardWidth)),
      GALLERY_ITEMS.length - 1
    );
    setActiveDot(index);
  }, []);

  // Keep the gallery position independent of vertical page scrolling.
  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, [handleScroll]);

  // Button scroll handler: smoothly shifts strip left or right by card width
  const scrollByAmount = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const shift = 340;
    el.scrollBy({
      left: direction === "left" ? -shift : shift,
      behavior: "smooth",
    });
  };

  // Jump to specific item using navigation dots
  const scrollToItem = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const shift = 320;
    el.scrollTo({
      left: index * shift,
      behavior: "smooth",
    });
    setActiveDot(index);
  };

  // Mouse drag handlers for desktop smooth dragging
  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftStartRef.current = el.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const el = scrollContainerRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = x - startXRef.current;
    if (Math.abs(walk) > 6) {
      hasDraggedRef.current = true;
    }
    el.scrollLeft = scrollLeftStartRef.current - walk;
  };

  const onMouseUpOrLeave = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, item: GalleryItem) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelectedItem(item);
    }
  };

  const getMaskClass = (mask: GalleryItem["mask"]) => {
    switch (mask) {
      case "arch":
        return "mask-arch";
      case "circle":
        return "mask-circle";
      case "leaf":
        return "mask-leaf";
      case "scallop":
        return "mask-scallop";
      case "rounded":
      default:
        return "mask-rounded";
    }
  };

  const getBadgePosition = (mask: GalleryItem["mask"]) => {
    switch (mask) {
      case "circle":
        return "top-7 left-1/2 -translate-x-1/2";
      case "arch":
      case "leaf":
      case "scallop":
        return "top-4 left-1/2 -translate-x-1/2";
      case "rounded":
      default:
        return "top-3.5 left-3.5";
    }
  };

  const getZoomPosition = (mask: GalleryItem["mask"]) => {
    switch (mask) {
      case "circle":
        return "bottom-7 left-1/2 -translate-x-1/2";
      case "leaf":
      case "scallop":
        return "bottom-4 right-6";
      default:
        return "bottom-3.5 right-3.5";
    }
  };

  return (
    <section
      data-reveal-strip="true"
      className="w-full bg-[#FAFDF6] py-10 sm:py-16 border-y border-[#E8F3DE] relative overflow-hidden select-none"
    >
      {/* Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-[#EAF5DC] border border-[#B5DF93] flex items-center justify-center text-[#00693E] shadow-xs shrink-0">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00693E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 21h18" />
              <path d="M5 21V10l7-5 7 5v11" />
              <path d="M12 5v16" />
              <path d="M8 10h8" />
              <path d="M8 16h8" />
            </svg>
          </div>
          <div>
            <span className="eyebrow text-[#0B6E4F]">
              SAMPLE GALLERY · LIFE AT GREEN SPROUTS
            </span>
            <h2 className="heading-headline text-2xl sm:text-3xl text-[#1E1E1E] mt-0.5 tracking-tight">
              Hands-on agriculture in action
            </h2>
          </div>
        </div>

        {/* Short Line & Controls on Top-Right */}
        <div className="flex flex-col sm:items-end gap-2">
          <div className="text-left sm:text-right">
            <p className="font-ui text-xs sm:text-sm font-semibold tracking-wider text-[#00693E]">
              Real farms. Real learners. Real results.
            </p>
            <span className="text-[11px] text-[#53735D]">
              Swipe or tap any image to inspect details
            </span>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-end">
            <button
              type="button"
              onClick={() => scrollByAmount("left")}
              disabled={!canScrollLeft}
              className="w-8 h-8 rounded-full bg-[#EAF5DC] border border-[#B5DF93] flex items-center justify-center text-[#00693E] hover:bg-[#8BC53F] hover:text-[#1E1E1E] transition-colors disabled:opacity-35 disabled:pointer-events-none shadow-xs"
              aria-label="Scroll left in gallery"
              title="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount("right")}
              disabled={!canScrollRight}
              className="w-8 h-8 rounded-full bg-[#EAF5DC] border border-[#B5DF93] flex items-center justify-center text-[#00693E] hover:bg-[#8BC53F] hover:text-[#1E1E1E] transition-colors disabled:opacity-35 disabled:pointer-events-none shadow-xs"
              aria-label="Scroll right in gallery"
              title="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Fluid Sideways Moving Scroll Track */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUpOrLeave}
        onMouseLeave={onMouseUpOrLeave}
        className="w-full max-w-full overflow-x-auto flex items-center gap-6 sm:gap-10 px-4 sm:px-8 py-4 cursor-grab active:cursor-grabbing select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        {GALLERY_ITEMS.map((item) => {
          const maskClass = getMaskClass(item.mask);

          return (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => {
                if (!hasDraggedRef.current) {
                  setSelectedItem(item);
                }
              }}
              onKeyDown={(e) => handleKeyDown(e, item)}
              className="group relative shrink-0 cursor-pointer transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-[#8BC53F]/40 w-[260px] sm:w-[300px] lg:w-[320px]"
              style={{
                transform: `rotate(${item.tilt}deg)`,
              }}
            >
              {/* Image Container with varied shape mask & hover transform */}
              <div
                className={`relative aspect-[3/4] overflow-hidden bg-[#EAF5DC] border-2 border-white shadow-md transition-all duration-500 group-hover:rotate-0 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:border-[#B5DF93] ${maskClass}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={853}
                />

                {/* Subtle light frosted overlay on hover */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/15 transition-all duration-300 pointer-events-none" />

                {/* BUG FIX: Category Badge positioned safely inside visible area of shape mask */}
                <span className={`absolute ${getBadgePosition(item.mask)} bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#00693E] shadow-xs border border-[#B5DF93] whitespace-nowrap max-w-[85%] text-center`}>
                  {item.tag}
                </span>

                {/* Zoom icon on hover positioned safely */}
                <div className={`absolute ${getZoomPosition(item.mask)} w-8 h-8 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-[#1E1E1E] opacity-0 group-hover:opacity-100 transition-opacity shadow-sm`}>
                  <ZoomIn className="w-4 h-4 text-[#00693E]" />
                </div>
              </div>

              {/* Caption below: wraps to two lines, no ellipsis, no counters, aligned layout */}
              <div className="mt-3 px-2 text-center min-h-[2.5rem] flex items-center justify-center">
                <p className="text-xs font-semibold text-[#1E1E1E] line-clamp-2 leading-snug group-hover:text-[#00693E] transition-colors">
                  {item.alt}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Dot Indicators */}
      <div className="flex items-center justify-center gap-1.5 mt-6">
        {GALLERY_ITEMS.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToItem(i)}
            aria-label={`Jump to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeDot === i ? "w-6 bg-[#00693E]" : "w-2 bg-[#B5DF93] hover:bg-[#8BC53F]"
            }`}
          />
        ))}
      </div>

      {/* Accessible Lightbox Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 bg-[#1E1E1E]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-[#B5DF93] rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl relative p-6 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#F6FAEF] text-[#1E1E1E] hover:bg-[#EAF5DC] hover:text-[#00693E] transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#F6FAEF] mb-5 border border-[#DFECD8]">
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-3 left-3 bg-white/95 px-3 py-1 rounded-full text-xs font-bold text-[#00693E] shadow-sm border border-[#B5DF93]">
                {selectedItem.tag}
              </span>
            </div>

            {/* Content & Caption */}
            <div className="space-y-2">
              <span className="eyebrow text-[#0B6E4F]">
                GREEN SPROUTS FIELD ARCHIVE
              </span>
              <h3 className="heading-headline text-xl text-[#1E1E1E]">
                {selectedItem.alt}
              </h3>
              <p className="text-sm text-[#1E1E1E]/80 leading-relaxed">
                {selectedItem.caption}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#DFECD8] flex items-center justify-between">
              <a
                href="/programs"
                className="btn-primary text-xs py-2 px-5"
              >
                Learn This Crop System
              </a>
              <button
                onClick={() => setSelectedItem(null)}
                className="btn-secondary text-xs py-2 px-4"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
