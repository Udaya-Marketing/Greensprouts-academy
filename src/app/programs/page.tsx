"use client";

import React, { useState } from "react";
import { 
  Sprout, 
  Sparkles, 
  Clock, 
  Home, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle,
  Package,
  Layers,
  ChevronRight
} from "lucide-react";
import { PROGRAMS } from "@/data/courses";
import { useModals } from "@/components/ModalContext";
import CropComparisonTable from "@/components/CropComparisonTable";
import ProfitCalculator from "@/components/ProfitCalculator";

export default function ProgramsOverviewPage() {
  const { openEnrollModal } = useModals();
  const [filterSpace, setFilterSpace] = useState<string>("all");

  const filteredPrograms = PROGRAMS.filter((p) => {
    if (filterSpace === "all") return true;
    if (filterSpace === "balcony") return p.spaceRequired.toLowerCase().includes("balcony");
    if (filterSpace === "room") return p.spaceRequired.toLowerCase().includes("room") || p.id === "mushroom-cultivation";
    if (filterSpace === "terrace") return p.spaceRequired.toLowerCase().includes("terrace") || p.spaceRequired.toLowerCase().includes("commercial");
    return true;
  });

  return (
    <div className="w-full space-y-20 py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DFECD8] shadow-sm mb-4 text-xs font-bold text-[#00693E]">
          <Sprout className="w-4 h-4 text-[#8BC53F]" />
          <span>Curated Agriculture Curriculum</span>
        </div>
        <h1 className="heading-headline text-3xl sm:text-5xl text-[#231F20]">
          Explore our 5 modern <span className="text-[#00693E]">agri disciplines</span>
        </h1>
        <p className="mt-3 text-sm sm:text-base text-[#2C3E32] leading-relaxed">
          From kitchen counters and balconies to multi-acre commercial greenhouse ventures. Every program is 100% online live, includes practical kits, and is led by qualified B.Sc/B.E agronomists.
        </p>

        {/* Enroll Banner */}
        <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-3 bg-[#EAF5DC] border border-[#B5DF93] p-2 sm:p-2.5 rounded-2xl shadow-sm">
          <span className="text-xs font-semibold text-[#231F20] px-2">
            Ready to start growing? Evening live batches starting this Saturday.
          </span>
          <button
            onClick={() => openEnrollModal()}
            className="btn-primary py-2 px-4 text-xs font-bold rounded-xl"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Enroll Now · ₹999</span>
          </button>
        </div>
      </div>

      {/* Space Filter Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        <span className="text-xs font-bold text-[#557861] mr-1">Filter By Space:</span>
        {[
          { id: "all", label: "All 5 Disciplines" },
          { id: "balcony", label: "Balcony / Window (20–60 sq ft)" },
          { id: "room", label: "Spare Room / Dark Space" },
          { id: "terrace", label: "Terrace / Commercial (200+ sq ft)" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilterSpace(tab.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              filterSpace === tab.id
                ? "bg-[#8BC53F] text-white shadow-sm"
                : "bg-white border border-[#DFECD8] text-[#31533C] hover:bg-[#F6FAEF]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Disciplines Detailed List */}
      <div className="space-y-12">
        {filteredPrograms.map((prog, index) => (
          <div
            key={prog.id}
            className="bg-white border border-[#DFECD8] rounded-3xl p-6 sm:p-10 shadow-sm hover:border-[#8BC53F] transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Visual Column (5 cols) */}
            <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-[#E8F0E2]">
                <img
                  src={prog.overviewImage}
                  alt={prog.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={600}
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-extrabold text-[#00693E] shadow-sm border border-[#DFECD8]">
                  {prog.badge}
                </div>
                <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-[#B5DF93] text-xs">
                  <span className="font-bold text-[#231F20] block">Earning Potential:</span>
                  <p className="text-[#2F5E1C] font-extrabold">{prog.earningPotential}</p>
                </div>
              </div>
            </div>

            {/* Info Column (7 cols) */}
            <div className={`lg:col-span-7 space-y-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#8BC53F] uppercase tracking-wider">
                  Discipline 0{index + 1}
                </span>
                <span>·</span>
                <span className="text-xs font-semibold text-[#527860] bg-[#EAF5DC] px-2.5 py-0.5 rounded-full">
                  {prog.duration}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#231F20]">
                {prog.title}
              </h2>

              <p className="text-sm font-semibold text-[#0B6E4F]">
                "{prog.headline}"
              </p>

              <p className="text-xs sm:text-sm text-[#2C3E32] leading-relaxed">
                {prog.fullDescription}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-3 border-y border-[#DFECD8] text-xs">
                <div>
                  <span className="text-[#6C907B] block">Growth Cycle:</span>
                  <strong className="text-[#231F20]">{prog.growthCycle}</strong>
                </div>
                <div>
                  <span className="text-[#6C907B] block">Space Needed:</span>
                  <strong className="text-[#231F20]">{prog.spaceRequired.split("(")[0]}</strong>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[#6C907B] block">Starter Kit:</span>
                  <strong className="text-[#2F5E1C]">Included in Standard</strong>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-1.5 text-xs text-[#2A4D35]">
                {prog.keyHighlights.slice(0, 3).map((hl, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8BC53F] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`/programs/${prog.slug}`}
                  className="btn-primary w-full sm:w-auto py-3 px-6 text-xs sm:text-sm font-bold justify-center"
                >
                  <span>Explore Syllabus & Equipment</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => openEnrollModal(prog.slug, "standard")}
                  className="btn-secondary w-full sm:w-auto py-3 px-5 text-xs sm:text-sm font-bold justify-center"
                >
                  <span>Enroll in {prog.title.split(" ")[0]}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Side-by-side Comparison Matrix */}
      <CropComparisonTable />

      {/* Profit & Yield Calculator */}
      <ProfitCalculator />
    </div>
  );
}
