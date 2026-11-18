"use client";

import React, { useState } from "react";
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  MessageCircle, 
  Mail, 
  Phone,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { FAQ_DATA } from "@/data/faq";
import { SITE_CONFIG } from "@/data/siteConfig";
import { useModals } from "@/components/ModalContext";

export default function FAQPage() {
  const { openEnrollModal } = useModals();
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
    "0-0": true,
    "1-0": true,
  });

  const toggleItem = (catIdx: number, itemIdx: number) => {
    const key = `${catIdx}-${itemIdx}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredCategories = FAQ_DATA.map((cat, catIdx) => {
    const matchingItems = cat.items.filter(
      (item) =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...cat,
      items: matchingItems,
      originalCatIdx: catIdx,
    };
  }).filter((cat) => cat.items.length > 0);

  return (
    <div className="w-full space-y-16 py-12 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* 1. Page Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DFECD8] shadow-sm mb-4 text-xs font-bold text-[#00693E]">
          <HelpCircle className="w-4 h-4 text-[#8BC53F]" />
          <span>Clear Answers · No Ambiguity</span>
        </div>
        <h1 className="heading-headline text-3xl sm:text-5xl text-[#231F20]">
          Frequently asked <span className="text-[#00693E]">questions</span>
        </h1>
        <p className="mt-3 text-sm sm:text-base text-[#2C3E32] leading-relaxed">
          Everything you need to know about our live online batches, starter kit deliveries, verifiable certificates, and student discounts.
        </p>

        {/* Search Bar */}
        <div className="mt-6 relative max-w-md mx-auto">
          <Search className="w-4 h-4 text-[#8BC53F] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. kit, certificate, recording, student discount)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-[#DFECD8] text-xs sm:text-sm text-[#231F20] placeholder:text-[#7A9C86] focus:outline-none focus:border-[#8BC53F] shadow-sm"
          />
        </div>
      </div>

      {/* 2. Categorized Accordion */}
      <div className="space-y-10">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <div key={category.category} className="space-y-3">
              <h2 className="text-lg font-bold text-[#231F20] uppercase tracking-wider pl-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8BC53F]" />
                {category.category}
              </h2>

              <div className="space-y-2.5">
                {category.items.map((item, itemIdx) => {
                  const key = `${category.originalCatIdx}-${itemIdx}`;
                  const isOpen = !!openItems[key];

                  return (
                    <div
                      key={item.question}
                      className="bg-white border border-[#DFECD8] rounded-2xl p-5 shadow-sm transition-all"
                    >
                      <button
                        onClick={() => toggleItem(category.originalCatIdx, itemIdx)}
                        className="w-full text-left font-bold text-sm sm:text-base text-[#231F20] flex items-center justify-between gap-4"
                      >
                        <span>{item.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#8BC53F] shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-[#8BC53F] shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="mt-3 pt-3 border-t border-[#DFECD8] text-xs sm:text-sm text-[#2C3E32] leading-relaxed animate-fade-in">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-3xl border border-[#DFECD8] p-8">
            <p className="text-sm font-bold text-[#231F20]">
              No questions found matching "{searchQuery}"
            </p>
            <p className="text-xs text-[#527860] mt-1">
              Have a specific question? Ask our agronomists directly on WhatsApp.
            </p>
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=START`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 py-2.5 px-5 text-xs font-bold inline-flex items-center gap-1.5"
            >
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        )}
      </div>

      {/* 3. Direct Contact Card */}
      <div className="bg-[#EAF5DC] border-2 border-[#B5DF93] rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="badge-pill bg-white text-xs font-bold text-[#8BC53F]">
            Direct Support
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#231F20] mt-1.5">
            Still Have Questions Before Enrolling?
          </h3>
          <p className="text-xs sm:text-sm text-[#2C3E32] mt-1">
            Our team responds within 15 minutes during daytime hours (9 AM – 9 PM IST).
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
          <a
            href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=START`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-3 px-6 text-xs font-bold text-center"
          >
            WhatsApp: Message "START"
          </a>
          <button
            onClick={() => openEnrollModal()}
            className="btn-secondary py-3 px-6 text-xs font-bold text-center"
          >
            Enroll Online · ₹999
          </button>
        </div>
      </div>
    </div>
  );
}
