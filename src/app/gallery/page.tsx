"use client";

import React, { useState, useEffect, useCallback } from "react";
import { 
  Globe2, 
  MapPin, 
  Sparkles, 
  Filter, 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  Camera
} from "lucide-react";
import { FIELD_PROJECTS, GALLERY_ITEMS, GalleryPhoto } from "@/data/gallery";
import { useModals } from "@/components/ModalContext";
// import SidewaysImageStrip from "@/components/SidewaysImageStrip";

export default function GalleryPage() {
  const { openEnrollModal } = useModals();
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedFilter === "all") return true;
    return item.category === selectedFilter;
  });

  // Active list for lightbox navigation
  const currentImagesList = filteredItems;

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null || currentImagesList.length === 0) return;
    setLightboxIndex((prev) => 
      prev === null || prev === 0 ? currentImagesList.length - 1 : prev - 1
    );
  }, [lightboxIndex, currentImagesList.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null || currentImagesList.length === 0) return;
    setLightboxIndex((prev) => 
      prev === null || prev === currentImagesList.length - 1 ? 0 : prev + 1
    );
  }, [lightboxIndex, currentImagesList.length]);

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handleClose, handlePrev, handleNext]);

  const selectedPhoto = lightboxIndex !== null ? currentImagesList[lightboxIndex] : null;

  return (
    <div className="w-full space-y-16 sm:space-y-24 py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* 1. Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DFECD8] shadow-sm mb-4 text-xs font-bold text-[#00693E]">
          <Globe2 className="w-4 h-4 text-[#8BC53F]" />
          <span>India · Maldives · Oman</span>
        </div>
        <h1 className="heading-headline text-3xl sm:text-5xl text-[#231F20]">
          Field experience & <span className="text-[#00693E]">global projects</span>
        </h1>
        <p className="mt-3 text-sm sm:text-base text-[#2C3E32] leading-relaxed">
          Our curriculum is built from real commercial installations—from isolated island food security systems in the Maldives to arid-zone shade farming in Oman and high-tech vertical farms across India.
        </p>
      </div>

      {/* 2. Three Country Deep-Dive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FIELD_PROJECTS.map((proj) => (
          <div
            key={proj.country}
            className="card-fresh overflow-hidden shadow-sm flex flex-col justify-between group"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EAF5DC]">
                <img
                  src={proj.image}
                  alt={proj.title}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#00693E] shadow-sm border border-[#B5DF93]">
                  {proj.country}
                </div>
                <div className="absolute bottom-3 left-3 right-3 bg-black/45 backdrop-blur-md px-3 py-1 rounded-lg text-white text-[11px] truncate">
                  <MapPin className="w-3 h-3 inline mr-1 text-[#8BC53F]" />
                  {proj.location}
                </div>
              </div>

              <div className="p-6">
                <span className="text-[10px] uppercase font-bold text-[#0B6E4F] tracking-wider block">
                  {proj.role}
                </span>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-[#231F20] mt-1">
                  {proj.title}
                </h3>
                <p className="text-xs text-[#2C3E32] mt-2.5 leading-relaxed">
                  {proj.description}
                </p>

                {/* Tech deployed */}
                <div className="mt-4 pt-4 border-t border-[#DFECD8]">
                  <span className="text-[11px] font-bold text-[#231F20] block mb-1.5">
                    Technologies Deployed:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {proj.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-medium text-[#231F20] bg-[#EAF5DC] px-2 py-0.5 rounded border border-[#B5DF93]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <div className="p-3 rounded-xl bg-[#F6FAEF] border border-[#DFECD8] text-xs font-semibold text-[#00693E]">
                ⚡ {proj.impact}
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* 3. Horizontal Life at Green Sprouts Strip */}
      {/* <div className="-mx-4 sm:-mx-6">
        <SidewaysImageStrip />
      </div> */}


      {/* 4. CHANGE 3: IMAGE-ONLY VISUAL PORTFOLIO (NO TEXT, NO GAPS) */}
      <section className="space-y-8" id="portfolio-grid">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="badge-pill badge-pill-lime text-xs">
              <Camera className="w-3.5 h-3.5 text-[#00693E]" />
              Visual Portfolio
            </span>
            <h2 className="heading-headline text-2xl sm:text-4xl text-[#231F20] mt-1">
              Field photos & <span className="text-[#00693E]">site operations</span>
            </h2>
          </div>

          {/* Filter Chips: All, Hydroponics, Mushrooms, Microgreens, Saffron, Students */}
          {/* <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {[
              { id: "all", label: "All" },
              { id: "hydroponics", label: "Hydroponics" },
              { id: "mushrooms", label: "Mushrooms" },
              { id: "microgreens", label: "Microgreens" },
              { id: "saffron", label: "Saffron" },
              { id: "students", label: "Students" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.14em] transition-all cursor-pointer ${
                  selectedFilter === f.id
                    ? "bg-[#8BC53F] text-[#231F20] font-bold shadow-xs border border-[#8BC53F]"
                    : "bg-white border border-[#DFECD8] text-[#231F20] hover:bg-[#EAF5DC]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div> */}
        </div>

        {/* Each card keeps the source image's natural orientation at every size. */}
        <div className="columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
          {filteredItems.map((photo, index) => (
            <button
              type="button"
              key={`gallery-${photo.id}`}
              onClick={() => setLightboxIndex(index)}
              aria-label={`Open ${photo.title}`}
              style={{ aspectRatio: String(photo.aspectRatio) }}
              className="group mb-3 inline-block w-full break-inside-avoid overflow-hidden rounded-2xl border border-[#DFECD8] bg-[#EAF5DC] shadow-xs hover:shadow-md sm:mb-4"
            >
              <img
                src={photo.image}
                alt={photo.alt || photo.title}
                loading="lazy"
                decoding="async"
                className="block h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      </section>

      {/* 
        CHANGE 3 & 6: LIGHT LIGHTBOX WITH PREV/NEXT ARROWS & KEYBOARD SUPPORT
        All backgrounds stay light. No dark sections or dark overlays.
      */}
      {selectedPhoto && (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-white/92 backdrop-blur-md animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white border border-[#B5DF93] rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[92vh] animate-scale-up"
          >
            <button
              onClick={handleClose}
              className="absolute right-3 top-3 z-10 rounded-full bg-white/95 p-2 text-[#231F20] shadow-md transition-colors hover:bg-[#EAF5DC]"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Main Image Stage with Nav Arrows */}
            <div className="relative flex-1 bg-white flex items-center justify-center min-h-[280px] sm:min-h-[420px] p-4 overflow-hidden">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.alt || selectedPhoto.title}
                className="max-h-[82vh] max-w-full w-auto object-contain rounded-xl shadow-xs"
              />

              {/* Previous Arrow Button */}
              <button
                onClick={handlePrev}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 border border-[#B5DF93] text-[#231F20] hover:bg-[#8BC53F] hover:text-[#231F20] shadow-md flex items-center justify-center transition-all cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Arrow Button */}
              <button
                onClick={handleNext}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 border border-[#B5DF93] text-[#231F20] hover:bg-[#8BC53F] hover:text-[#231F20] shadow-md flex items-center justify-center transition-all cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Enrollment CTA */}
      <div className="bg-[#EAF5DC] border border-[#B5DF93] rounded-3xl p-8 sm:p-12 text-center shadow-xs">
        <h3 className="heading-headline text-2xl sm:text-4xl text-[#231F20]">
          Learn the exact blueprints from our <span className="text-[#00693E]">commercial sites</span>
        </h3>
        <p className="text-xs sm:text-sm text-[#2C3E32] max-w-md mx-auto mt-2 leading-relaxed">
          Every blueprint, pump calculation, and nutrient ratio taught in class comes directly from these active facilities.
        </p>
        <button
          onClick={() => openEnrollModal()}
          className="btn-primary mt-6 py-3.5 px-8 font-bold text-xs sm:text-sm shadow-md"
        >
          <Sparkles className="w-4 h-4 text-[#231F20]" />
          <span>Enroll for ₹999 · Start Learning</span>
        </button>
      </div>
    </div>
  );
}
