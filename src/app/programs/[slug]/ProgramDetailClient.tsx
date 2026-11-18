"use client";

import React, { useState } from "react";
import { 
  Sprout, 
  Sparkles, 
  Clock, 
  Calendar, 
  Package, 
  TrendingUp, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  HelpCircle,
  AlertCircle,
  Users,
  ChevronRight,
  BookOpen,
  Home,
  ChevronDown,
  GraduationCap
} from "lucide-react";
import { Program } from "@/data/courses";
import { PRICING_PLANS } from "@/data/pricing";
import { useModals } from "@/components/ModalContext";

export default function ProgramDetailClient({ program }: { program: Program }) {
  const { openEnrollModal, openCertificateModal } = useModals();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-16 sm:space-y-24 py-10 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-[#557861]">
        <a href="/" className="hover:text-[#231F20] transition-colors">Home</a>
        <ChevronRight className="w-3.5 h-3.5 opacity-60" />
        <a href="/programs" className="hover:text-[#231F20] transition-colors">Programs</a>
        <ChevronRight className="w-3.5 h-3.5 opacity-60" />
        <span className="text-[#231F20] font-bold">{program.title}</span>
      </nav>

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge-pill badge-pill-lime text-xs">
              <Sprout className="w-3.5 h-3.5 text-[#8BC53F]" />
              {program.badge}
            </span>
            <span className="badge-pill bg-[#FFFFFF] text-xs">
              <Clock className="w-3.5 h-3.5 text-[#8BC53F]" />
              {program.duration}
            </span>
          </div>

          <h1 className="heading-headline text-3xl sm:text-5xl text-[#231F20]">
            {program.title}
          </h1>

          <p className="text-base sm:text-lg text-[#0B6E4F] font-medium">
            "{program.headline}"
          </p>

          <p className="text-sm sm:text-base text-[#44664F] leading-relaxed">
            {program.fullDescription}
          </p>

          {/* Quick Info Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-white border border-[#DFECD8] text-xs shadow-sm">
            <div>
              <span className="text-[#688E75] block">Batch Schedule:</span>
              <strong className="text-[#231F20]">{program.schedule.split("+")[0]}</strong>
            </div>
            <div>
              <span className="text-[#688E75] block">Growth Cycle:</span>
              <strong className="text-[#231F20]">{program.growthCycle}</strong>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-[#688E75] block">Credential:</span>
              <button
                onClick={openCertificateModal}
                className="text-[#0B6E4F] font-bold underline flex items-center gap-1"
              >
                <span>Certificate Included</span>
              </button>
            </div>
          </div>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => openEnrollModal(program.slug, "standard")}
              className="btn-primary w-full sm:w-auto py-3.5 px-8 text-sm font-bold shadow-md"
            >
              <span>Enroll in Batch · Starting ₹999</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#syllabus"
              className="btn-secondary w-full sm:w-auto py-3.5 px-6 text-xs sm:text-sm font-bold"
            >
              View Day-by-Day Syllabus
            </a>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#527860] pt-1">
            <GraduationCap className="w-4 h-4 text-[#8BC53F]" />
            <span>Eligible for 20% Student Discount with college ID</span>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-[#E8F0E2]">
            <img
              src={program.detailImage}
              alt={program.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#B5DF93] shadow">
              <span className="text-[10px] uppercase font-bold text-[#8BC53F] tracking-wider block">
                Estimated Commercial Return *
              </span>
              <p className="text-sm font-extrabold text-[#1F4C18] mt-0.5">
                {program.earningPotential}
              </p>
              <span className="text-[10px] text-[#638770] block mt-0.5">
                * Based on local market, conditions & scale.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. WHAT YOU LEARN (DAY BY DAY SYLLABUS) */}
      <section id="syllabus" className="scroll-mt-24">
        <div className="mb-8">
          <span className="badge-pill badge-pill-lime text-xs">
            <BookOpen className="w-3.5 h-3.5 text-[#8BC53F]" />
            Live Curriculum
          </span>
          <h2 className="heading-headline text-2xl sm:text-4xl text-[#231F20] mt-2">
            What you learn <span className="text-[#00693E]">step-by-step</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#2C3E32] mt-1">
            Every module includes hands-on formula demonstrations, screen shares of system blueprints, and live interactive troubleshooting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {program.syllabus.map((mod, i) => (
            <div
              key={mod.day}
              className="bg-white border border-[#DFECD8] rounded-3xl p-6 sm:p-7 shadow-sm hover:border-[#8BC53F] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#DFECD8] pb-3 mb-3">
                  <span className="text-xs font-extrabold text-[#2F5E1C] bg-[#EAF5DC] px-3 py-1 rounded-full">
                    {mod.day}
                  </span>
                  <span className="text-xs font-semibold text-[#668A72]">
                    7:30 PM – 9:00 PM IST
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#231F20]">
                  {mod.topic}
                </h3>

                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#2C3E32]">
                  {mod.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#8BC53F] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-[#DFECD8] text-[11px] text-[#5A7E68] flex items-center justify-between">
                <span>Includes PDF Study Notes</span>
                <span>Live Q&A Included</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHO THIS PROGRAM IS FOR */}
      <section>
        <div className="mb-8">
          <span className="badge-pill badge-pill-lime text-xs">
            <Users className="w-3.5 h-3.5 text-[#8BC53F]" />
            Audience Focus
          </span>
          <h2 className="heading-headline text-2xl sm:text-3xl text-[#231F20] mt-2">
            Who is this training <span className="text-[#00693E]">designed for?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {program.whoItsFor.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#DFECD8] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-full bg-[#EAF5DC] text-[#8BC53F] flex items-center justify-center font-bold text-xs mb-3">
                  0{i + 1}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[#231F20] leading-relaxed">
                  {item}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#DFECD8] text-[11px] text-[#0B6E4F] font-bold">
                ✓ Full practical support
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. STARTER KIT UNBOXING BREAKDOWN */}
      <section className="bg-gradient-to-br from-[#F6FAEF] via-[#FFFDF5] to-[#EAF5DC] border-2 border-[#D2EABB] rounded-3xl p-6 sm:p-10 shadow-sm">
        <div className="max-w-3xl mb-8">
          <span className="badge-pill bg-white text-xs font-bold text-[#8BC53F] border border-[#B5DF93]">
            <Package className="w-3.5 h-3.5 text-[#8BC53F]" />
            Standard & Premium Plans
          </span>
          <h2 className="heading-headline text-2xl sm:text-3xl text-[#231F20] mt-2">
            Included starter kit: <span className="text-[#00693E]">unbox & grow</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#2C3E32] mt-1">
            {program.kitIncluded}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {program.kitDetails.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-2xl border border-[#D8E8CE] shadow-sm flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-[#EAF5DC] text-[#8BC53F] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                ✓
              </div>
              <div>
                <p className="text-xs font-bold text-[#231F20]">{item}</p>
                <span className="text-[10px] text-[#648871]">Delivered to your door</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-[#B5DF93] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#2C3E32]">
            <strong>Free Doorstep Express Courier</strong> across India included with Standard & Premium plans.
          </div>
          <button
            onClick={() => openEnrollModal(program.slug, "standard")}
            className="btn-primary py-3 px-6 text-xs sm:text-sm font-bold shadow-md"
          >
            Enroll in Standard with Starter Kit (₹1,999)
          </button>
        </div>
      </section>

      {/* 5. EARNING POTENTIAL & HONEST MARKET DISCLAIMER */}
      <section className="bg-white border border-[#DFECD8] rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#EAF5DC] flex items-center justify-center text-[#0B6E4F] shrink-0 border border-[#B5DF93]">
            <TrendingUp className="w-6 h-6 text-[#8BC53F]" />
          </div>
          <div className="flex-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8BC53F]">
              Economics & Market Guidance
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#231F20] mt-0.5">
              Target Earning Potential: {program.earningPotential}
            </h3>

            <div className="mt-4 p-4 rounded-2xl bg-[#FFFDF5] border border-[#E0ECD9] text-xs text-[#2C3E32] leading-relaxed">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-[#FBC02D] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#231F20]">Important Business Reality Note:</strong> {program.disclaimer}
                </div>
              </div>
            </div>

            <p className="text-xs text-[#527860] mt-3">
              During the live training, our faculty breaks down exact pricing spreadsheets, seed costs, electrical consumption, packaging expenses, and local distribution channels.
            </p>
          </div>
        </div>
      </section>

      {/* 6. PROGRAM FAQ */}
      <section>
        <div className="mb-8">
          <span className="badge-pill badge-pill-lime text-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#8BC53F]" />
            Frequently Asked Questions
          </span>
          <h2 className="heading-headline text-2xl sm:text-3xl text-[#231F20] mt-2">
            Got questions about <span className="text-[#00693E]">{program.title.split(" ")[0]}?</span>
          </h2>
        </div>

        <div className="space-y-3">
          {program.faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-[#DFECD8] rounded-2xl p-5 shadow-sm transition-all"
            >
              <button
                onClick={() => toggleFaq(i)}
                className="w-full text-left font-bold text-sm sm:text-base text-[#231F20] flex items-center justify-between gap-4"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#8BC53F] transition-transform ${
                    openFaqIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaqIndex === i && (
                <div className="mt-3 pt-3 border-t border-[#DFECD8] text-xs sm:text-sm text-[#2C3E32] leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. ENROLLMENT BANNER */}
      <section className="bg-gradient-to-r from-[#F6FAEF] to-[#EAF5DC] border-2 border-[#B5DF93] rounded-3xl p-8 sm:p-12 text-center">
        <h3 className="heading-headline text-2xl sm:text-4xl text-[#231F20]">
          Reserve your seat for <span className="text-[#00693E]">{program.title}</span>
        </h3>
        <p className="text-xs sm:text-sm text-[#2C3E32] max-w-md mx-auto mt-2">
          Interactive evening batches with live faculty support, digital notes, and verifiable Certificate of Completion.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => openEnrollModal(program.slug, "basic")}
            className="btn-secondary py-3 px-6 text-xs sm:text-sm font-bold"
          >
            Basic Plan · ₹999
          </button>
          <button
            onClick={() => openEnrollModal(program.slug, "standard")}
            className="btn-primary py-3 px-8 text-xs sm:text-sm font-bold shadow-md"
          >
            Standard Plan + Free Starter Kit · ₹1,999
          </button>
          <button
            onClick={() => openEnrollModal(program.slug, "premium")}
            className="btn-yellow py-3 px-6 text-xs sm:text-sm font-bold"
          >
            Premium Mentorship · ₹4,999
          </button>
        </div>

        <p className="text-[11px] text-[#557861] mt-3">
          🎓 College Students get 20% OFF on all plans with valid ID card.
        </p>
      </section>
    </div>
  );
}
