"use client";

import React, { useState } from "react";
import { MessageCircle, X, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
    "START - Hi Green Sprouts Academy! I would like to receive the upcoming batch schedule, syllabus and registration details."
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Friendly Tooltip */}
      {showTooltip && (
        <div className="mb-2 bg-white border border-[#DFECD8] shadow-lg rounded-2xl p-3 text-xs text-[#244723] max-w-[240px] animate-fade-in relative flex items-start gap-2">
          <div className="w-2 h-2 rounded-full bg-[#8BC53F] mt-1 shrink-0 animate-ping" />
          <div className="flex-1">
            <p className="font-bold text-[#231F20] flex items-center gap-1">
              Agronomist Online <Sparkles className="w-3 h-3 text-[#FBC02D]" />
            </p>
            <p className="text-[11px] text-[#4D6A57] mt-0.5">
              Send <strong>"START"</strong> for next batch syllabus & 20% student discount.
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#789680] hover:text-[#244723] p-0.5 rounded"
            aria-label="Dismiss hint"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp (Message START)"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="font-bold text-sm tracking-wide hidden sm:inline-block">
          WhatsApp: Message "START"
        </span>
        <span className="bg-white text-[#25D366] text-[10px] font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
          LIVE
        </span>
      </a>
    </div>
  );
}
