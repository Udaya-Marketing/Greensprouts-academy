"use client";

import React, { useState, useRef, useCallback } from "react";
import { Sparkles, ArrowLeftRight } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <span className="badge-pill badge-pill-lime text-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#8BC53F]" />
          Visual Balcony Transformation
        </span>
        <h3 className="heading-headline text-2xl sm:text-3xl text-[#231F20] mt-2">
          From an empty urban balcony <span className="text-[#00693E]">to a fresh organic oasis</span>
        </h3>
        <p className="text-xs sm:text-sm text-[#2C3E32] max-w-xl mx-auto mt-1.5">
          Drag the slider below to see how our students transform dusty 40 sq ft apartment balconies into self-watering, vertical hydroponic food systems.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden shadow-xl border-4 border-white select-none cursor-ew-resize bg-[#E8F0E2]"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* Background Image: AFTER (Thriving Garden) */}
        <img
          src="/images/gallery/IMG_5173.webp"
          alt="After: Thriving vertical hydroponic A-frame system with fresh basil and greens"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Foreground Image: BEFORE (Bare Balcony / Day 1) clipped with sliderPosition */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src="/images/gallery/IMG_4067.webp"
            alt="Before: Hands-on transplanting of young seedling plug into hydroponic channel"
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%" }}
          />
          {/* Label Before */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#553820] shadow-md border border-[#E0D5C1]">
            🔴 DAY 1: Seedling Transplanting
          </div>
        </div>

        {/* Label After */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#23581C] shadow-md border border-[#B5DF93]">
          🟢 DAY 30: Lush Hydroponic Harvest
        </div>

        {/* Draggable Divider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-[#8BC53F] shadow-xl flex items-center justify-center text-[#8BC53F]">
            <ArrowLeftRight className="w-5 h-5" />
          </div>
        </div>

        {/* Instruction pill at bottom */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md text-white px-4 py-1 rounded-full text-[11px] font-medium pointer-events-none flex items-center gap-1.5">
          <span>👈 Drag or tap left & right 👉</span>
        </div>
      </div>
    </div>
  );
}
