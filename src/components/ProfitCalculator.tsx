"use client";

import React, { useState } from "react";
import { Calculator, Sprout, TrendingUp, AlertCircle, Sparkles, ArrowRight } from "lucide-react";

interface CropOption {
  id: string;
  name: string;
  tagline: string;
  turnaround: string;
  retailPrice: string;
  scalingData: {
    [key: string]: {
      harvest: string;
      monthlyRevenue: string;
      initialSetup: string;
      netMargin: string;
    };
  };
}

const CROPS_DATA: CropOption[] = [
  {
    id: "microgreens",
    name: "Microgreens (Superfood Business)",
    tagline: "Fastest cash turnaround (7–21 days)",
    turnaround: "7–10 Days",
    retailPrice: "₹80 – ₹120 per 50g punnet",
    scalingData: {
      balcony: {
        harvest: "40 – 60 Punnets / month",
        monthlyRevenue: "₹3,500 – ₹7,000",
        initialSetup: "₹2,500 – ₹4,000",
        netMargin: "65–70%",
      },
      room: {
        harvest: "250 – 400 Punnets / month",
        monthlyRevenue: "₹20,000 – ₹45,000",
        initialSetup: "₹12,000 – ₹20,000",
        netMargin: "60–65%",
      },
      terrace: {
        harvest: "800 – 1,200 Punnets / month",
        monthlyRevenue: "₹65,000 – ₹1,20,000",
        initialSetup: "₹35,000 – ₹55,000",
        netMargin: "55–60%",
      },
      commercial: {
        harvest: "2,500+ Punnets / month",
        monthlyRevenue: "₹2,00,000 – ₹3,50,000",
        initialSetup: "₹1,20,000 – ₹2,00,000",
        netMargin: "50–55%",
      },
    },
  },
  {
    id: "hydroponics",
    name: "Hydroponics (Leafy Greens & Herbs)",
    tagline: "40% faster growth without soil",
    turnaround: "28–35 Days",
    retailPrice: "₹35 – ₹60 per lettuce head / ₹150/kg herbs",
    scalingData: {
      balcony: {
        harvest: "50 – 80 Plants / month",
        monthlyRevenue: "₹2,500 – ₹4,500",
        initialSetup: "₹4,000 – ₹7,500",
        netMargin: "60%",
      },
      room: {
        harvest: "300 – 500 Plants / month",
        monthlyRevenue: "₹15,000 – ₹28,000",
        initialSetup: "₹22,000 – ₹38,000",
        netMargin: "55%",
      },
      terrace: {
        harvest: "1,200 – 2,000 Plants / month",
        monthlyRevenue: "₹55,000 – ₹1,10,000",
        initialSetup: "₹75,000 – ₹1,30,000",
        netMargin: "50–55%",
      },
      commercial: {
        harvest: "4,000+ Plants / month",
        monthlyRevenue: "₹1,80,000 – ₹3,20,000",
        initialSetup: "₹2,50,000 – ₹4,50,000",
        netMargin: "45–50%",
      },
    },
  },
  {
    id: "mushrooms",
    name: "Mushroom Cultivation (Oyster / Exotic)",
    tagline: "Zero sunlight required, high margin",
    turnaround: "21–25 Days",
    retailPrice: "₹250 – ₹400 / kg (Oyster) · ₹800/kg (Exotic)",
    scalingData: {
      balcony: {
        harvest: "15 – 25 kg / month",
        monthlyRevenue: "₹4,000 – ₹8,000",
        initialSetup: "₹2,000 – ₹3,500",
        netMargin: "65%",
      },
      room: {
        harvest: "100 – 180 kg / month",
        monthlyRevenue: "₹28,000 – ₹55,000",
        initialSetup: "₹15,000 – ₹25,000",
        netMargin: "60%",
      },
      terrace: {
        harvest: "350 – 500 kg / month",
        monthlyRevenue: "₹90,000 – ₹1,60,000",
        initialSetup: "₹45,000 – ₹75,000",
        netMargin: "55%",
      },
      commercial: {
        harvest: "1,200+ kg / month",
        monthlyRevenue: "₹3,00,000 – ₹5,50,000",
        initialSetup: "₹1,80,000 – ₹3,00,000",
        netMargin: "50%",
      },
    },
  },
  {
    id: "aquaponics",
    name: "Aquaponics (Circular Fish + Greens)",
    tagline: "Dual revenue stream from one water loop",
    turnaround: "30 Days (Greens) & 6 Mos (Fish)",
    retailPrice: "Organic Produce + ₹160–₹220/kg Fresh Fish",
    scalingData: {
      balcony: {
        harvest: "30 Plants + 5 kg Fish / cycle",
        monthlyRevenue: "₹2,000 – ₹4,000",
        initialSetup: "₹6,000 – ₹10,000",
        netMargin: "50%",
      },
      room: {
        harvest: "150 Plants + 25 kg Fish / cycle",
        monthlyRevenue: "₹10,000 – ₹20,000",
        initialSetup: "₹30,000 – ₹50,000",
        netMargin: "50%",
      },
      terrace: {
        harvest: "600 Plants + 120 kg Fish / cycle",
        monthlyRevenue: "₹40,000 – ₹80,000",
        initialSetup: "₹90,000 – ₹1,60,000",
        netMargin: "45–50%",
      },
      commercial: {
        harvest: "2,000 Plants + 500 kg Fish / cycle",
        monthlyRevenue: "₹1,40,000 – ₹2,60,000",
        initialSetup: "₹3,50,000 – ₹6,00,000",
        netMargin: "45%",
      },
    },
  },
  {
    id: "saffron",
    name: "Saffron & Specialty (Indoor CEA)",
    tagline: "Highest value spice in the world",
    turnaround: "90–100 Day Flowering Flush",
    retailPrice: "₹2,00,000 – ₹5,00,000 per kg",
    scalingData: {
      balcony: {
        harvest: "Trial tray only (50–100g dry flower)",
        monthlyRevenue: "₹8,000 – ₹15,000",
        initialSetup: "₹15,000 – ₹25,000",
        netMargin: "40%",
      },
      room: {
        harvest: "250g – 600g dry stigmas / cycle",
        monthlyRevenue: "₹50,000 – ₹1,20,000",
        initialSetup: "₹75,000 – ₹1,50,000",
        netMargin: "45%",
      },
      terrace: {
        harvest: "1.2 kg – 2.5 kg dry stigmas / cycle",
        monthlyRevenue: "₹2,50,000 – ₹5,50,000",
        initialSetup: "₹3,00,000 – ₹6,00,000",
        netMargin: "50%",
      },
      commercial: {
        harvest: "5+ kg dry stigmas / cycle",
        monthlyRevenue: "₹10,00,000 – ₹22,00,000",
        initialSetup: "₹12,00,000 – ₹25,00,000",
        netMargin: "55%",
      },
    },
  },
];

const SPACE_OPTIONS = [
  { id: "balcony", label: "Apartment Balcony", size: "40–60 sq ft" },
  { id: "room", label: "Spare Room / Garage", size: "120–150 sq ft" },
  { id: "terrace", label: "Terrace / Backyard", size: "300–500 sq ft" },
  { id: "commercial", label: "Commercial Plot", size: "1000+ sq ft" },
];

export default function ProfitCalculator() {
  const [selectedCropId, setSelectedCropId] = useState("microgreens");
  const [selectedSpaceId, setSelectedSpaceId] = useState("room");

  const crop = CROPS_DATA.find((c) => c.id === selectedCropId) || CROPS_DATA[0];
  const data = crop.scalingData[selectedSpaceId];

  return (
    <div className="w-full bg-[#FFFFFF] border border-[#DFECD8] rounded-3xl p-6 sm:p-10 shadow-lg">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#E8F0E2] pb-6 mb-8">
        <div>
          <span className="badge-pill badge-pill-lime text-xs">
            <Calculator className="w-3.5 h-3.5 text-[#8BC53F]" />
            Interactive ROI Tool
          </span>
          <h3 className="heading-headline text-2xl sm:text-3xl text-[#231F20] mt-1.5">
            Crop & space <span className="text-[#00693E]">profit calculator</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#2C3E32] mt-1">
            Estimate potential yield, monthly revenue range, and investment payback for your space.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#F6FAEF] px-3.5 py-1.5 rounded-full border border-[#CCE6B5] text-xs font-semibold text-[#2D5C1B]">
          <TrendingUp className="w-4 h-4 text-[#8BC53F]" />
          <span>Real Metro Market Benchmarks</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Inputs (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Select Crop */}
          <div>
            <label className="block text-xs font-bold text-[#231F20] uppercase tracking-wider mb-2">
              1. Choose Agricultural Track:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {CROPS_DATA.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCropId(c.id)}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    selectedCropId === c.id
                      ? "bg-[#EAF5DC] border-[#8BC53F] shadow-sm font-bold text-[#231F20]"
                      : "bg-[#FFFDF5] border-[#E0ECD9] hover:bg-[#F6FAEF] text-[#31533C]"
                  }`}
                >
                  <p className="text-xs sm:text-sm font-bold">{c.name.split("(")[0]}</p>
                  <span className="text-[11px] text-[#557861] block mt-0.5">{c.tagline}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Select Space */}
          <div>
            <label className="block text-xs font-bold text-[#231F20] uppercase tracking-wider mb-2">
              2. Select Available Area:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {SPACE_OPTIONS.map((sp) => (
                <button
                  key={sp.id}
                  onClick={() => setSelectedSpaceId(sp.id)}
                  className={`p-3 rounded-2xl border text-center transition-all ${
                    selectedSpaceId === sp.id
                      ? "bg-[#8BC53F] text-white border-[#0B6E4F] shadow-sm"
                      : "bg-[#FFFDF5] border-[#E0ECD9] text-[#2C4E36] hover:bg-[#F6FAEF]"
                  }`}
                >
                  <p className="text-xs font-bold">{sp.label}</p>
                  <span
                    className={`text-[10px] block mt-0.5 ${
                      selectedSpaceId === sp.id ? "text-white/85" : "text-[#587B64]"
                    }`}
                  >
                    {sp.size}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Turnaround & Selling Benchmark Details */}
          <div className="p-4 rounded-2xl bg-[#F6FAEF] border border-[#E2EDDA] text-xs flex flex-wrap items-center justify-between gap-3 text-[#31533C]">
            <div>
              <span className="text-[#5D8069] block">Harvest Turnaround:</span>
              <strong className="text-[#231F20]">{crop.turnaround}</strong>
            </div>
            <div>
              <span className="text-[#5D8069] block">Average Realization:</span>
              <strong className="text-[#231F20]">{crop.retailPrice}</strong>
            </div>
            <div>
              <span className="text-[#5D8069] block">Est. Gross Margin:</span>
              <strong className="text-[#2F5E1C] font-bold">{data.netMargin}</strong>
            </div>
          </div>
        </div>

        {/* Right Output Projections Card (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#F6FAEF] to-[#EAF5DC] border-2 border-[#D2EABB] rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#00693E]">
              Projected Monthly Returns
            </span>
            <div className="mt-2 mb-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#1A4214] tracking-tight">
                {data.monthlyRevenue}
              </span>
              <span className="text-xs text-[#4F7358] block mt-0.5">Estimated gross revenue / month</span>
            </div>

            <div className="space-y-3 pt-3 border-t border-[#B5DF93] text-xs sm:text-sm">
              <div className="flex items-center justify-between text-[#2A4C34]">
                <span className="text-[#4E7158]">Estimated Monthly Yield:</span>
                <strong className="text-[#231F20]">{data.harvest}</strong>
              </div>
              <div className="flex items-center justify-between text-[#2A4C34]">
                <span className="text-[#4E7158]">Initial Equipment Setup:</span>
                <strong className="text-[#231F20]">{data.initialSetup}</strong>
              </div>
              <div className="flex items-center justify-between text-[#2A4C34]">
                <span className="text-[#4E7158]">Target Payback Period:</span>
                <strong className="text-[#00693E] font-bold">2 – 4 Months</strong>
              </div>
            </div>
          </div>

          {/* Disclaimer (Mandatory) */}
          <div className="mt-6 pt-4 border-t border-[#B5DF93]">
            <div className="flex items-start gap-2 text-[11px] text-[#44664F] leading-tight bg-white/70 p-3 rounded-xl border border-[#DFECD8]">
              <AlertCircle className="w-4 h-4 text-[#8BC53F] shrink-0 mt-0.5" />
              <span>
                <strong>Note & Disclaimer:</strong> Figures are conservative benchmarks based on average retail sales in urban India. Actual earnings depend on temperature management, scale, pest control, and local marketing channels.
              </span>
            </div>

            <a
              href="/pricing"
              className="btn-primary w-full mt-4 py-3 rounded-xl text-xs font-bold justify-center"
            >
              <span>View Training Plans to Start at ₹999</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
