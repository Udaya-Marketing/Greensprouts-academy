"use client";

import React, { useState } from "react";
import { 
  IndianRupee, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  GraduationCap, 
  Package, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  MessageCircle,
  ChevronDown,
  Info
} from "lucide-react";
import { PRICING_PLANS, STARTER_KITS } from "@/data/pricing";
import { useModals } from "@/components/ModalContext";

export default function PricingPage() {
  const { openEnrollModal, openCertificateModal } = useModals();
  const [isStudentCalc, setIsStudentCalc] = useState(false);
  const [activeKitTab, setActiveKitTab] = useState(0);

  const comparisonFeatures = [
    { title: "3–5 Days Live Online Training (Evening Batches)", basic: true, standard: true, premium: true },
    { title: "Official Certificate of Completion with QR Verification", basic: true, standard: true, premium: true },
    { title: "Full Digital Study Notes & Formulation Blueprints", basic: true, standard: true, premium: true },
    { title: "Lifetime Video Recording Access in HD", basic: true, standard: true, premium: true },
    { title: "Live Daily Faculty Q&A Support", basic: true, standard: true, premium: true },
    { title: "Physical Starter Kit Delivered to Your Home (Free Courier)", basic: false, standard: true, premium: true },
    { title: "Choice of Starter Kit (Hydroponics / Microgreens / Mushroom / Aqua)", basic: false, standard: true, premium: true },
    { title: "Alumni WhatsApp Network & Supplier Database", basic: false, standard: true, premium: true },
    { title: "1–2 Months 1-on-1 Dedicated Agronomist Mentorship", basic: false, standard: false, premium: true },
    { title: "Commercial CAD Farm Design & HVAC Sizing Review", basic: false, standard: false, premium: true },
    { title: "B2B Hotel & Retail Buyer Introduction Assistance", basic: false, standard: false, premium: true },
  ];

  return (
    <div className="w-full space-y-20 py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* 1. Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DFECD8] shadow-sm mb-4 text-xs font-bold text-[#00693E]">
          <IndianRupee className="w-4 h-4 text-[#8BC53F]" />
          <span>Affordable, Transparent Agri-Education</span>
        </div>
        <h1 className="heading-headline text-3xl sm:text-5xl text-[#231F20]">
          Simple, fair pricing <span className="text-[#00693E]">for every grower</span>
        </h1>
        <p className="mt-3 text-sm sm:text-base text-[#2C3E32] leading-relaxed">
          Start for just ₹999 with our foundation live masterclass, or choose the Standard plan with a complete physical Starter Kit delivered free to your door.
        </p>

        {/* Student Discount Interactive Banner */}
        <div className="mt-6 p-4 rounded-2xl bg-[#EAF5DC] border border-[#B5DF93] max-w-lg mx-auto flex items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-2.5 text-left">
            <GraduationCap className="w-5 h-5 text-[#8BC53F] shrink-0" />
            <div>
              <span className="text-xs font-bold text-[#231F20] block">
                College Student Special: 20% OFF
              </span>
              <span className="text-[11px] text-[#4E7558]">
                Toggle to preview discounted pricing with college ID
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsStudentCalc(!isStudentCalc)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              isStudentCalc
                ? "bg-[#8BC53F] text-white shadow-sm"
                : "bg-white border border-[#B5DF93] text-[#00693E]"
            }`}
          >
            {isStudentCalc ? "20% OFF Applied ✓" : "Apply 20% OFF"}
          </button>
        </div>
      </div>

      {/* 2. 3 Plan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {PRICING_PLANS.map((plan) => {
          const discount = isStudentCalc ? Math.round(plan.price * 0.2) : 0;
          const displayPrice = plan.price - discount;

          return (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
                plan.isPopular
                  ? "bg-gradient-to-b from-[#F6FAEF] to-[#EAF5DC] border-2 border-[#8BC53F] shadow-xl relative scale-100 md:-translate-y-3"
                  : "bg-white border border-[#DFECD8] shadow-sm hover:border-[#8BC53F]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#00693E]">
                    {plan.name}
                  </span>
                  {plan.isPopular && (
                    <span className="shimmer-badge text-[#543800] text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-[#FFD54F]">
                      MOST POPULAR · 33% OFF
                    </span>
                  )}
                </div>

                <h2 className="text-2xl font-bold text-[#231F20]">{plan.subTitle}</h2>
                <p className="text-xs text-[#527860] mt-1">{plan.bestFor}</p>

                <div className="mt-5 mb-5 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-[#1B4214] tracking-tight font-num">
                    ₹{displayPrice}
                  </span>
                  {(plan.originalPrice || isStudentCalc) && (
                    <span className="text-sm text-[#6C8E77] line-through">
                      ₹{plan.originalPrice || plan.price}
                    </span>
                  )}
                  <span className="text-xs text-[#557861]">/ one-time</span>
                </div>

                {isStudentCalc && (
                  <p className="text-[11px] font-bold text-[#00693E] bg-[#FFFFFF]/80 p-1.5 rounded-md mb-4 border border-[#DFECD8]">
                    🎓 Student price: ₹{displayPrice} (Save ₹{discount})
                  </p>
                )}

                <p className="text-xs text-[#2C3E32] leading-relaxed mb-6 pb-4 border-b border-[#D8E8CE]">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 text-xs text-[#2A4D35] mb-8">
                  {plan.includes.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#8BC53F] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <button
                  onClick={() => openEnrollModal(undefined, plan.id)}
                  className={`w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 shadow-md ${
                    plan.isPopular ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-center text-[#557861] mt-2">
                  {plan.ctaSubtext}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Comprehensive Side-by-Side Comparison Table */}
      <section className="bg-white border border-[#DFECD8] rounded-3xl p-6 sm:p-10 shadow-sm overflow-hidden">
        <div className="mb-8">
          <span className="badge-pill badge-pill-lime text-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#8BC53F]" />
            Side-by-Side Matrix
          </span>
          <h2 className="heading-headline text-2xl sm:text-3xl text-[#231F20] mt-2">
            Detailed plan feature <span className="text-[#00693E]">comparison</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#527860] mt-1">
            See exactly what is included in each training tier so you choose with 100% confidence.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
            <thead>
              <tr className="border-b-2 border-[#D8E8CE] bg-[#F7FAF4] text-[#244723]">
                <th className="py-3.5 px-4 font-extrabold w-1/2">Curriculum & Service Features</th>
                <th className="py-3.5 px-4 font-extrabold text-center">Basic (₹999)</th>
                <th className="py-3.5 px-4 font-extrabold text-center bg-[#EAF5DC] text-[#245319]">
                  Standard (₹1,999)
                </th>
                <th className="py-3.5 px-4 font-extrabold text-center">Premium (₹4,999)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAF2E4]">
              {comparisonFeatures.map((feat, idx) => (
                <tr key={idx} className="hover:bg-[#F9FCF6]">
                  <td className="py-3 px-4 font-medium text-[#231F20]">{feat.title}</td>
                  <td className="py-3 px-4 text-center">
                    {feat.basic ? (
                      <CheckCircle2 className="w-5 h-5 text-[#8BC53F] mx-auto" />
                    ) : (
                      <span className="text-[#9DB8A4] font-bold">—</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center bg-[#F6FAEF]">
                    {feat.standard ? (
                      <CheckCircle2 className="w-5 h-5 text-[#8BC53F] mx-auto" />
                    ) : (
                      <span className="text-[#9DB8A4] font-bold">—</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {feat.premium ? (
                      <CheckCircle2 className="w-5 h-5 text-[#8BC53F] mx-auto" />
                    ) : (
                      <span className="text-[#9DB8A4] font-bold">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. STARTER KIT BREAKDOWN TABS */}
      <section className="bg-gradient-to-br from-[#F6FAEF] via-[#FFFDF5] to-[#EAF5DC] border-2 border-[#D2EABB] rounded-3xl p-6 sm:p-10 shadow-sm">
        <div className="mb-6">
          <span className="badge-pill bg-white text-xs font-bold text-[#8BC53F] border border-[#B5DF93]">
            <Package className="w-3.5 h-3.5 text-[#8BC53F]" />
            What Arrives at Your Doorstep
          </span>
          <h2 className="heading-headline text-2xl sm:text-3xl text-[#231F20] mt-2">
            Starter kit details <span className="text-[#00693E]">(Standard & Premium)</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#2C3E32] mt-1">
            Choose your specialization kit upon enrollment. Everything needed for your first successful harvest is included.
          </p>
        </div>

        {/* Kit Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {STARTER_KITS.map((kit, idx) => (
            <button
              key={kit.discipline}
              onClick={() => setActiveKitTab(idx)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
                activeKitTab === idx
                  ? "bg-[#8BC53F] text-white shadow-sm"
                  : "bg-white border border-[#DFECD8] text-[#31533C] hover:bg-[#F2F8ED]"
              }`}
            >
              {kit.discipline} Kit
            </button>
          ))}
        </div>

        {/* Active Kit Display */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#DFECD8] shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#DFECD8] pb-4 mb-4">
            <div>
              <h3 className="text-xl font-bold text-[#231F20]">
                {STARTER_KITS[activeKitTab].title}
              </h3>
              <p className="text-xs text-[#557861] mt-0.5">
                {STARTER_KITS[activeKitTab].highlights}
              </p>
            </div>
            <span className="text-xs font-bold text-[#00693E] bg-[#EAF5DC] px-3 py-1 rounded-full border border-[#B5DF93] self-start sm:self-auto">
              Value: ₹1,000 FREE in Standard
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {STARTER_KITS[activeKitTab].items.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-[#2A4D35] p-2.5 rounded-xl bg-[#F6FAEF] border border-[#E2EDDA]">
                <CheckCircle2 className="w-4 h-4 text-[#8BC53F] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-[#DFECD8] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-[#4E7158]">
              Dispatched within 24–48 hours of enrollment. Tracking shared on WhatsApp.
            </span>
            <button
              onClick={() => openEnrollModal(undefined, "standard")}
              className="btn-primary py-2.5 px-6 font-bold rounded-xl"
            >
              Claim This Kit With Standard Plan
            </button>
          </div>
        </div>
      </section>

      {/* 5. WHATSAPP REGISTRATION */}
      <section className="bg-white border border-[#DFECD8] rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="badge-pill badge-pill-lime text-xs">
              <MessageCircle className="w-3.5 h-3.5 text-[#8BC53F]" />
              WhatsApp Registration
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#231F20]">
              DM us to register
            </h3>
            <p className="text-xs text-[#2C3E32] max-w-lg">
              Message our WhatsApp support team to register and get help choosing your program.
            </p>
          </div>

          <a
            href="https://wa.me/919027568753?text=START"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-3 px-6 font-bold rounded-xl shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Support: +91 90275 68753
          </a>
        </div>
      </section>
    </div>
  );
}
