"use client";

import React, { useRef, useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

import { gsap } from "gsap";

interface VideoHeroProps {
  onOpenEnrollModal?: () => void;
  nextSectionId?: string;
}

export default function VideoHero({
  onOpenEnrollModal,
  nextSectionId = "scroll-experience-section",
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroContainerRef = useRef<HTMLElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [usePosterOnly, setUsePosterOnly] = useState(false);

  useEffect(() => {
    // Check reduced motion or slow connection
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSaveData = (navigator as unknown as { connection?: { saveData?: boolean } })?.connection?.saveData;

    if (prefersReducedMotion || isSaveData) {
      setUsePosterOnly(true);
      if (videoRef.current) {
        videoRef.current.pause();
      }
      return;
    }

    // Intro choreography sequence (under 2 seconds total)
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Soft fade-in of poster and video (opacity 0 to 1 over 1s)
      if (backdropRef.current) {
        tl.fromTo(
          backdropRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.0, ease: "power2.out" },
          0
        );
      }

      // 2. Eyebrow quick fade + slide
      if (eyebrowRef.current) {
        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" },
          0.2
        );
      }

      // 3. Hero headline line-by-line reveal
      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.85, ease: "power3.out" },
          0.35
        );
      }

      // 4. Subline soft reveal
      if (sublineRef.current) {
        tl.fromTo(
          sublineRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" },
          0.55
        );
      }

      // 5. CTA buttons fade + 16px slide-up
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" },
          0.8
        );
      }
    }, heroContainerRef);

    // IntersectionObserver to pause video when off-screen
    const currentVideo = videoRef.current;
    if (!currentVideo) return () => ctx.revert();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentVideo.play().catch(() => { });
          } else {
            currentVideo.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(currentVideo);

    return () => {
      observer.disconnect();
      ctx.revert();
    };
  }, []);

  const handleScrollDown = () => {
    const nextElem = document.getElementById(nextSectionId);
    if (nextElem) {
      nextElem.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.9, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroContainerRef}
      data-reveal="none"
      className="relative w-full min-h-[92vh] sm:min-h-screen flex items-end pb-12 sm:pb-20 pt-16 overflow-hidden"
    >
      {/* Background Video / Bright Poster Fallback */}
      <div
        ref={backdropRef}
        className="absolute inset-0 w-full h-full overflow-hidden bg-[#F6FAEF]"
      >
        {!usePosterOnly && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/assets/hero-poster.jpg"
            disablePictureInPicture
            disableRemotePlayback
            controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setUsePosterOnly(true)}
            className="w-full h-full object-cover object-center pointer-events-none select-none"
          >
            <source src="/assets/herovideo1.mp4" type="video/mp4" />
          </video>
        )}

        {usePosterOnly && (
          <img
            src="/assets/hero-poster.jpg"
            alt="Green Sprouts Academy greenhouse"
            className="w-full h-full object-cover object-center"
          />
        )}

        {/* Transparent overlay shield to prevent browser hover PiP buttons and extension popups */}
        <div className="absolute inset-0 z-[1] pointer-events-auto" aria-hidden="true" />

        {/* Very Light Gradient behind text only (NO DARK OVERLAY) */}
        {/* <div
          className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-transparent pointer-events-none sm:hidden"
          aria-hidden="true"
        /> */}
        {/* <div
          className="hidden sm:block absolute inset-0 bg-gradient-to-r from-white/80 via-white/20 to-transparent pointer-events-none"
          aria-hidden="true"
        /> */}

        {/* Video Placeholder Indicator Tag (Clear user instruction) */}
        {/* <div className="absolute top-6 right-6 hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md border border-[#B5DF93] text-[11px] font-semibold text-[#00693E] shadow-xs">
          <span>🎥 Hero Video</span>
          <span className="text-[#53735D]">· [Placeholder: /assets/hero.mp4]</span>
        </div> */}
      </div>

      {/* Hero Content (Bottom-Left like reference) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
        {/* Soft Frosted-White Panel on Bottom-Left */}
        <div className="bg-white/2 backdrop-blur border border-[#B5DF93]/60 rounded-3xl p-6 sm:p-10 max-w-2xl shadow-xl transition-all">
          {/* Eyebrow Echoing Logo */}
          <span ref={eyebrowRef} className="eyebrow text-[#0B6E4F] mb-3 inline-block">
            SEED TO SUCCESS
          </span>

          {/* Headline */}
          <h1 ref={headlineRef} className="heading-headline text-3xl sm:text-5xl lg:text-6xl text-[#231F20] tracking-tight leading-[1.12]">
            Grow your future <span className="text-[#00693E]">with us</span>
          </h1>

          {/* Subline */}
          <p ref={sublineRef} className="mt-4 text-sm sm:text-base lg:text-lg text-[#2C3E32] leading-relaxed">
            {SITE_CONFIG.subline}
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={onOpenEnrollModal}
              className="btn-primary"
              id="hero-enroll-btn"
            >
              <span>Enroll Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a href="#trainers" className="link-expert">
              <span>Meet our experts</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Round Scroll-Down Button (↓) at Bottom-Right */}
        <div className="hidden md:flex flex-col items-center gap-2 self-end pb-2">
          <button
            onClick={handleScrollDown}
            className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-md border-2 border-[#B5DF93] text-[#231F20] hover:bg-[#8BC53F] hover:text-[#231F20] hover:border-[#8BC53F] flex items-center justify-center shadow-lg transition-all transform hover:translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#8BC53F]"
            aria-label="Scroll down to explore programs"
          >
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
          <span className="font-ui text-[10px] text-[#231F20] font-bold tracking-wider">
            SCROLL
          </span>
        </div>
      </div>
    </section>
  );
}
