import React from "react";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  GraduationCap, 
  Award, 
  ArrowUpRight
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import LeafMark from "./LeafMark";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-[#F6FAEF] text-[#231F20] pt-14 pb-8 border-t border-[#B5DF93]/60 transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Mission & Trust Banner */}
        <div className="bg-white border border-[#B5DF93] rounded-3xl p-6 sm:p-8 mb-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF5DC] flex items-center justify-center text-[#00693E] shrink-0 border border-[#B5DF93]">
              <LeafMark className="w-7 h-7" />
            </div>
            <div>
              <span className="eyebrow text-[#0B6E4F]">
                Our Core Mission · Seed to Success
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#231F20] mt-0.5">
                "{SITE_CONFIG.mission}"
              </h3>
              <p className="text-sm text-[#2C3E32] mt-1">
                {SITE_CONFIG.footerLine}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#EAF5DC] text-[#00693E] px-3.5 py-1.5 rounded-full border border-[#B5DF93]">
              <ShieldCheck className="w-4 h-4 text-[#8BC53F]" />
              Certified Faculty
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#EAF5DC] text-[#00693E] px-3.5 py-1.5 rounded-full border border-[#B5DF93]">
              <Award className="w-4 h-4 text-[#8BC53F]" />
              Completion Certificate
            </span>
          </div>
        </div>

        {/* Main 4-Column Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-[#DFECD8]">
          {/* Brand Info with Larger Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Link href="/" className="inline-block">
                <img
                  src="/assets/logo-transparent.png"
                  alt="Green Sprouts Academy – Seed to Success"
                  className="h-14 sm:h-16 logo-blend object-contain"
                />
              </Link>
            </div>

            <p className="text-sm text-[#2C3E32] leading-relaxed pr-4">
              {SITE_CONFIG.subline}
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-semibold bg-[#EAF5DC] text-[#00693E] px-3.5 py-2 rounded-xl border border-[#B5DF93]">
                <GraduationCap className="w-4 h-4 text-[#0B6E4F]" />
                <span>{SITE_CONFIG.delivery}</span>
              </span>
            </div>
          </div>

          {/* Specializations / Programs */}
          <div>
            <h4 className="font-ui text-xs font-bold text-[#231F20] tracking-wider uppercase mb-4">
              Programs (5 Disciplines)
            </h4>
            <ul className="space-y-2.5 text-xs text-[#2C3E32]">
              <li>
                <Link href="/programs/hydroponics" className="hover:text-[#00693E] hover:underline flex items-center justify-between">
                  <span>Hydroponics Masterclass</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/programs/aquaponics" className="hover:text-[#00693E] hover:underline flex items-center justify-between">
                  <span>Aquaponics System Design</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/programs/mushrooms" className="hover:text-[#00693E] hover:underline flex items-center justify-between">
                  <span>Mushroom Cultivation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/programs/microgreens" className="hover:text-[#00693E] hover:underline flex items-center justify-between">
                  <span>Microgreens Commercial</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/programs/saffron" className="hover:text-[#00693E] hover:underline flex items-center justify-between">
                  <span>Indoor Saffron CEA Farming</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-ui text-xs font-bold text-[#231F20] tracking-wider uppercase mb-4">
              Academy Links
            </h4>
            <ul className="space-y-2.5 text-xs text-[#2C3E32]">
              <li><Link href="/pricing" className="hover:text-[#00693E] hover:underline">Pricing & Starter Kits</Link></li>
              <li><Link href="/gallery" className="hover:text-[#00693E] hover:underline">Commercial Field Projects</Link></li>
              <li><Link href="/stories" className="hover:text-[#00693E] hover:underline">Student Harvest Stories</Link></li>
              <li><Link href="/resources" className="hover:text-[#00693E] hover:underline">Free Calculator & Guides</Link></li>
              <li><Link href="/faq" className="hover:text-[#00693E] hover:underline">Frequently Asked Questions</Link></li>
              <li><Link href="/contact" className="hover:text-[#00693E] hover:underline">Contact & Enrollment</Link></li>
            </ul>
          </div>

          {/* Contact Details & WhatsApp CTA */}
          <div>
            <h4 className="font-ui text-xs font-bold text-[#231F20] tracking-wider uppercase mb-4">
              Connect With Faculty
            </h4>
            <div className="space-y-3 text-xs text-[#2C3E32]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8BC53F] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#8BC53F] shrink-0" />
                <a 
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=START`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#00693E] font-medium"
                >
                  WhatsApp: {SITE_CONFIG.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#8BC53F] shrink-0" />
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-[#00693E] font-medium">
                  {SITE_CONFIG.contact.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=START`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-[#8BC53F] text-[#231F20] font-bold text-xs hover:bg-[#00693E] hover:text-white transition-all shadow-xs"
                >
                  <span>Message "START" on WhatsApp</span>
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#53735D] gap-3 text-center sm:text-left">
          <p>© {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
          <p className="text-[11px] text-[#231F20] font-medium">
            {SITE_CONFIG.footerLine}
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/faq" className="hover:text-[#00693E]">FAQ</Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-[#00693E]">Enrollment Terms</Link>
            <span>·</span>
            <span className="text-[#00693E] font-bold">20% Student Discount Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
