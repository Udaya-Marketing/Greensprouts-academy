"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  Sparkles, 
  GraduationCap, 
  Clock,
  ChevronDown
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

interface HeaderProps {
  onOpenEnrollModal?: () => void;
}

export default function Header({ onOpenEnrollModal }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Primary 8 Nav links (English only, Single-line)
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "Pricing", href: "/pricing" },
    { name: "Field Gallery", href: "/gallery" },
    { name: "Success Stories", href: "/stories" },
    { name: "Resources", href: "/resources" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  // For compact screens (1024px-1279px), first 5 links + More dropdown (Resources & FAQ)
  const primaryLinks = navLinks.filter(
    (l) => l.name !== "Resources" && l.name !== "FAQ" && l.name !== "Contact"
  );
  const moreLinks = navLinks.filter((l) => l.name === "Resources" || l.name === "FAQ");
  const isMoreActive = moreLinks.some((l) => pathname === l.href);

  return (
    <header className="w-full z-50 sticky top-0 transition-all duration-300">
      {/* Top Announcement Bar (English Only, Centered / Evenly Spaced, No Lang Switcher) */}
      <div className="bg-[#EAF5DC] border-b border-[#DFECD8] text-[#231F20] text-xs font-medium py-2 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 mx-auto sm:mx-0 text-center sm:text-left">
            <span className="inline-flex items-center justify-center bg-[#8BC53F] text-[#231F20] p-1 rounded-full text-xs font-bold shrink-0">
              <GraduationCap className="w-3.5 h-3.5" />
            </span>
            <span className="text-[11px] sm:text-xs">
              <strong>Student Special:</strong> Show your college ID and get <strong>20% OFF</strong> · Limited seats for next batch
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 text-[#00693E] font-semibold bg-white/90 px-3 py-0.5 rounded-full border border-[#B5DF93] text-[11px]">
              <Clock className="w-3.5 h-3.5 text-[#0B6E4F]" />
              <span>{SITE_CONFIG.contact.seatsRemaining} Seats Left in Saturday Batch</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#DFECD8] py-2"
            : "bg-[#F6FAEF]/95 backdrop-blur-sm border-b border-[#DFECD8] py-2.5 sm:py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
          {/* Brand Logo - Legible height ~48-56px, transparent / multiply blend */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group shrink-0" 
            aria-label="Green Sprouts Academy Home"
          >
            <img
              src="/assets/logo-transparent.png"
              alt="Green Sprouts Academy – Seed to Success"
              className={`transition-all duration-300 logo-blend object-contain ${
                scrolled ? "h-11 sm:h-12" : "h-12 sm:h-14"
              }`}
            />
          </Link>

          {/* Desktop Full Nav Links (>= 1280px: all 8 items single line) */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-2.5 py-1.5 rounded-full text-[11px] font-medium uppercase tracking-[0.14em] whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-[#B5DF93] text-[#231F20] font-semibold shadow-xs border border-[#8BC53F]/40"
                      : "text-[#231F20] hover:text-[#00693E] hover:bg-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Compact Desktop Nav (1024px to 1279px: Primary links + More Dropdown + Contact) */}
          <div className="hidden min-[1101px]:flex xl:hidden items-center gap-1">
            {primaryLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-2.5 py-1.5 rounded-full text-[11px] font-medium uppercase tracking-[0.14em] whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-[#B5DF93] text-[#231F20] font-semibold shadow-xs border border-[#8BC53F]/40"
                      : "text-[#231F20] hover:text-[#00693E] hover:bg-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* "More" Dropdown for Resources & FAQ on narrower desktop */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[11px] font-medium uppercase tracking-[0.14em] whitespace-nowrap transition-all ${
                  isMoreActive
                    ? "bg-[#B5DF93] text-[#231F20] font-semibold shadow-xs border border-[#8BC53F]/40"
                    : "text-[#231F20] hover:text-[#00693E] hover:bg-white"
                }`}
                aria-expanded={moreDropdownOpen}
              >
                <span>More</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${moreDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {moreDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-lg border border-[#DFECD8] py-2 z-50 animate-fade-in">
                  {moreLinks.map((subLink) => {
                    const isSubActive = pathname === subLink.href;
                    return (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        onClick={() => setMoreDropdownOpen(false)}
                        className={`block px-4 py-2 text-xs uppercase tracking-[0.14em] transition-colors ${
                          isSubActive
                            ? "bg-[#EAF5DC] text-[#00693E] font-bold"
                            : "text-[#231F20] hover:bg-[#F6FAEF] hover:text-[#00693E]"
                        }`}
                      >
                        {subLink.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`px-2.5 py-1.5 rounded-full text-[11px] font-medium uppercase tracking-[0.14em] whitespace-nowrap transition-all ${
                pathname === "/contact"
                  ? "bg-[#B5DF93] text-[#231F20] font-semibold shadow-xs border border-[#8BC53F]/40"
                  : "text-[#231F20] hover:text-[#00693E] hover:bg-white"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Action CTA: Enroll Now (Leaf green fill #8BC53F, charcoal text #231F20, deep green ₹999 badge) */}
          <div className="hidden min-[1101px]:flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                if (onOpenEnrollModal) onOpenEnrollModal();
                else window.location.href = "/contact";
              }}
              className="btn-primary text-xs py-2 px-4 sm:px-5 shadow-sm whitespace-nowrap"
              id="header-enroll-btn"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#231F20]" />
              <span className="font-semibold">Enroll Now</span>
              <span className="bg-[#00693E] text-white text-[10px] font-bold px-2 py-0.5 rounded-full ml-0.5 shadow-xs">
                ₹999
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 min-[1101px]:hidden shrink-0">
            <button
              onClick={() => {
                if (onOpenEnrollModal) onOpenEnrollModal();
                else window.location.href = "/contact";
              }}
              className="sm:hidden max-[360px]:hidden btn-primary text-[11px] py-1.5 px-3"
            >
              <span>Enroll</span>
              <span className="max-[360px]:hidden bg-[#00693E] text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full ml-1">
                ₹999
              </span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#EAF5DC] text-[#231F20] hover:bg-[#DDF0C7] focus:outline-none transition-colors border border-[#B5DF93]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Clean Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F6FAEF] border-b border-[#DFECD8] px-4 pt-3 pb-6 shadow-xl transition-all">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-xs uppercase tracking-[0.14em] font-medium transition-all ${
                      isActive
                        ? "bg-[#B5DF93] text-[#231F20] font-bold border border-[#8BC53F]/40"
                        : "text-[#231F20] hover:bg-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-3 mt-2 border-t border-[#DFECD8] flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenEnrollModal) onOpenEnrollModal();
                    else window.location.href = "/contact";
                  }}
                  className="btn-primary w-full py-3 text-xs font-bold justify-center"
                >
                  <Sparkles className="w-4 h-4 text-[#231F20]" />
                  <span>Enroll in Live Batch</span>
                  <span className="bg-[#00693E] text-white text-[10px] font-bold px-2 py-0.5 rounded-full ml-1">
                    ₹999
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
