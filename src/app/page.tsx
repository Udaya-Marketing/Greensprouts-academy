"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Award,
  GraduationCap,
  Users,
  Clock,
  IndianRupee,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Leaf,
  Layers,
  Quote
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { PROGRAMS } from "@/data/courses";
import { PRICING_PLANS } from "@/data/pricing";
import { TRAINERS } from "@/data/team";
import { TESTIMONIALS } from "@/data/testimonials";
import { useModals } from "@/components/ModalContext";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ProfitCalculator from "@/components/ProfitCalculator";
import VideoHero from "@/components/VideoHero";
import ScrollExperience from "@/components/ScrollExperience";
import SidewaysImageStrip from "@/components/SidewaysImageStrip";
import LeafMark from "@/components/LeafMark";

export default function HomePage() {
  const { openEnrollModal, openCertificateModal, openGuideModal } = useModals();
  const [expandedTrainers, setExpandedTrainers] = React.useState<Record<string, boolean>>({});

  const toggleTrainer = (id: string) => {
    setExpandedTrainers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full space-y-16 sm:space-y-24 pb-24 clip-x">
      {/* 1. FULL-VIEWPORT VIDEO HERO (CHANGE 4) */}
      <VideoHero
        onOpenEnrollModal={() => openEnrollModal()}
        nextSectionId="scroll-experience-section"
      />

      {/* 2. PINNED SCROLL EXPERIENCE & STACKED PANELS (CHANGE 5) */}
      <ScrollExperience onOpenEnrollModal={() => openEnrollModal()} />

      {/* 3. SIDEWAYS IMAGE STRIP (CHANGE 6) */}
      <SidewaysImageStrip />

      {/* 4. KEY STATS BAR */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#F6FAEF] via-white to-[#EAF5DC] border border-[#B5DF93] rounded-3xl p-4 sm:p-6 lg:p-4 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-stretch">
            {SITE_CONFIG.stats.map((st, idx) => (
              <div
                key={st.label}
                className={`p-4 sm:p-5 lg:py-6 lg:px-3 xl:px-5 flex flex-col items-center justify-center text-center h-full transition-all ${idx !== SITE_CONFIG.stats.length - 1 ? "lg:border-r lg:border-[#DFECD8]" : ""
                  } ${idx % 2 === 1 ? "border-l border-[#DFECD8]" : ""} ${idx >= 2 ? "border-t border-[#DFECD8]" : ""
                  } ${idx % 3 !== 0 ? "md:border-l md:border-[#DFECD8]" : "md:border-l-0"} ${idx >= 3 ? "md:border-t md:border-[#DFECD8]" : "md:border-t-0"
                  } lg:border-t-0 lg:border-l-0`}
              >
                <p className="font-num text-xl sm:text-2xl lg:text-lg xl:text-2xl font-bold text-[#00693E] tracking-tight whitespace-nowrap">
                  {st.value}
                </p>
                <p className="font-ui text-xs font-bold text-[#231F20] mt-1.5 uppercase tracking-wider text-center">
                  {st.label}
                </p>
                <p className="text-[11px] text-[#53735D] mt-1 text-center leading-snug">
                  {st.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 5 PROGRAM PREVIEW CARDS */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="badge-pill badge-pill-lime text-xs">
                <Leaf className="w-3.5 h-3.5 text-[#00693E]" />
                5+ Specialized Tracks
              </span>
              <h2 className="heading-headline text-3xl sm:text-4xl text-[#231F20] mt-2">
                Expert-led disciplines <span className="text-[#00693E]">for modern farming</span>
              </h2>
              <p className="text-sm text-[#2C3E32] max-w-xl mt-1.5">
                Every discipline gets a dedicated detail page with comprehensive syllabi, starter kits, and unit economics.
              </p>
            </div>

            <Link
              href="/programs"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#00693E] hover:text-[#231F20] group font-ui"
            >
              <span>Explore All 5 Programs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PROGRAMS.map((prog) => (
              <div
                key={prog.id}
                className="card-fresh flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Card Thumbnail */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#EAF5DC]">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={500}
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#00693E] shadow-sm border border-[#B5DF93]">
                      {prog.badge}
                    </div>
                    <div className="absolute top-3 right-3 bg-[#EAF5DC]/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-[#231F20]">
                      {prog.duration}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-[#231F20] group-hover:text-[#00693E] transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-xs text-[#2C3E32] mt-2 leading-relaxed line-clamp-3">
                      {prog.shortDescription}
                    </p>

                    {/* Key stat badges */}
                    <div className="mt-4 pt-4 border-t border-[#DFECD8] space-y-2 text-xs">
                      <div className="flex items-center justify-between text-[#2C3E32]">
                        <span className="text-[#53735D]">Growth Cycle:</span>
                        <strong className="text-[#231F20]">{prog.growthCycle}</strong>
                      </div>
                      <div className="flex items-center justify-between text-[#2C3E32]">
                        <span className="text-[#53735D]">Earning Scale:</span>
                        <strong className="text-[#00693E]">{prog.earningPotential.split("on")[0].split("(")[0]}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0 flex items-center justify-between gap-3">
                  <Link
                    href={`/programs/${prog.slug}`}
                    className="btn-secondary w-full py-2.5 rounded-xl text-xs font-bold justify-center"
                  >
                    <span>View Syllabus</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={() => openEnrollModal(prog.slug, "standard")}
                    className="btn-primary py-2.5 px-4 rounded-xl text-xs font-bold shrink-0"
                    title={`Enroll in ${prog.title}`}
                  >
                    Enroll
                  </button>
                </div>
              </div>
            ))}

            {/* 6th Card: Custom Consultation / School Workshop */}
            <div className="card-lime p-8 flex flex-col justify-between rounded-3xl border-2 border-dashed border-[#B5DF93]">
              <div>
                <span className="badge-pill bg-white text-xs font-bold text-[#00693E]">
                  Schools & Enterprise
                </span>
                <h3 className="font-heading text-xl font-bold text-[#231F20] mt-3">
                  Need a Customized College Workshop or Commercial Farm Design?
                </h3>
                <p className="text-xs text-[#2C3E32] mt-2 leading-relaxed">
                  Our qualified agronomists organize on-site hydroponics labs for schools, universities, and commercial greenhouse investors across India.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#B5DF93]/60">
                <Link
                  href="/contact"
                  className="btn-primary w-full py-3 rounded-xl text-xs font-bold justify-center"
                >
                  <span>Request Custom Workshop</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE BEFORE/AFTER SLIDER */}
      <section className="px-4 sm:px-6">
        <BeforeAfterSlider />
      </section>

      {/* 7. HOW IT WORKS (3 SIMPLE STEPS) */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="badge-pill badge-pill-lime text-xs">
              <Layers className="w-3.5 h-3.5 text-[#00693E]" />
              Seamless Learning Journey
            </span>
            <h2 className="heading-headline text-3xl sm:text-4xl text-[#231F20] mt-2">
              How Green Sprouts Academy works <span className="text-[#00693E]">in 3 simple steps</span>
            </h2>
            <p className="text-sm text-[#2C3E32] mt-1.5">
              We eliminated theoretical fluff. From your first live session to harvesting your first crop, here is your path:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-white border border-[#B5DF93] rounded-3xl p-8 shadow-sm relative group hover:border-[#00693E] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF5DC] text-[#00693E] font-extrabold text-xl flex items-center justify-center mb-5 border border-[#B5DF93] font-num">
                01
              </div>
              <h3 className="font-heading text-xl font-bold text-[#231F20]">
                Choose Track & Receive Starter Kit
              </h3>
              <p className="text-xs sm:text-sm text-[#2C3E32] mt-2 leading-relaxed">
                Enroll online for ₹999 or choose the Standard plan (₹1,999) to receive a complete hands-on physical starter kit (net pots, nutrient stock, seeds, or mushroom spawn) delivered to your doorstep.
              </p>
              <div className="mt-4 pt-4 border-t border-[#DFECD8] flex items-center gap-2 text-xs text-[#53735D]">
                <Clock className="w-4 h-4 text-[#8BC53F]" /> 2-minute mobile registration
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-[#B5DF93] rounded-3xl p-8 shadow-sm relative group hover:border-[#00693E] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF5DC] text-[#00693E] font-extrabold text-xl flex items-center justify-center mb-5 border border-[#B5DF93] font-num">
                02
              </div>
              <h3 className="font-heading text-xl font-bold text-[#231F20]">
                Attend 3–5 Days Live Online Sessions
              </h3>
              <p className="text-xs sm:text-sm text-[#2C3E32] mt-2 leading-relaxed">
                Join our B.Sc and B.E. agronomists live on Google Meet in comfortable evening batches (7:30 PM). Formulate nutrients, assemble your system, and ask your questions live.
              </p>
              <div className="mt-4 pt-4 border-t border-[#DFECD8] flex items-center gap-2 text-xs text-[#53735D]">
                <Users className="w-4 h-4 text-[#8BC53F]" /> Live faculty Q&A every session
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-[#B5DF93] rounded-3xl p-8 shadow-sm relative group hover:border-[#00693E] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF5DC] text-[#00693E] font-extrabold text-xl flex items-center justify-center mb-5 border border-[#B5DF93] font-num">
                03
              </div>
              <h3 className="font-heading text-xl font-bold text-[#231F20]">
                Harvest, Get Certified & Start Selling
              </h3>
              <p className="text-xs sm:text-sm text-[#2C3E32] mt-2 leading-relaxed">
                Receive your official Certificate of Completion with QR verification code. Use our sales playbook to sell your fresh produce to local cafes, health clubs, or subscription clients.
              </p>
              <div className="mt-4 pt-4 border-t border-[#DFECD8] flex items-center gap-2 text-xs text-[#53735D]">
                <Award className="w-4 h-4 text-[#8BC53F]" /> Digital verifiable credential
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE PROFIT CALCULATOR SECTION */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ProfitCalculator />
        </div>
      </section>

      {/* 9. PRICING PLAN TEASER */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge-pill badge-pill-lime text-xs">
              <IndianRupee className="w-3.5 h-3.5 text-[#00693E]" />
              Transparent Pricing
            </span>
            <h2 className="heading-headline text-3xl sm:text-4xl text-[#231F20] mt-2">
              Accessible agriculture <span className="text-[#00693E]">for everyone</span>
            </h2>
            <p className="text-sm text-[#2C3E32] mt-1.5">
              All plans include 3–5 days live online training, study notes, live Q&A support, and Certificate of Completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-3xl p-7 flex flex-col justify-between transition-all ${plan.isPopular
                    ? "bg-gradient-to-b from-[#EAF5DC] to-white border-2 border-[#8BC53F] shadow-xl relative scale-100 md:-translate-y-2"
                    : "bg-white border border-[#B5DF93] shadow-sm hover:border-[#00693E]"
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-ui text-xs font-bold uppercase tracking-wider text-[#00693E]">
                      {plan.name}
                    </span>
                    {plan.isPopular && (
                      <span className="shimmer-badge text-[#231F20] text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-[#8BC53F]">
                        MOST POPULAR · 33% OFF
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-[#231F20]">{plan.subTitle}</h3>
                  <p className="text-xs text-[#53735D] mt-1">{plan.bestFor}</p>

                  <div className="mt-5 mb-5 flex items-baseline gap-2">
                    <span className="font-num text-4xl font-extrabold text-[#00693E] tracking-tight">
                      ₹{plan.price}
                    </span>
                    {plan.originalPrice && (
                      <span className="text-sm text-[#53735D] line-through font-num">
                        ₹{plan.originalPrice}
                      </span>
                    )}
                    <span className="text-xs text-[#53735D]">/ one-time</span>
                  </div>

                  <p className="text-xs text-[#2C3E32] leading-relaxed mb-6 pb-4 border-b border-[#DFECD8]">
                    {plan.description}
                  </p>

                  {/* Highlights with Twin Leaf bullets */}
                  <ul className="space-y-2.5 text-xs text-[#2C3E32] mb-6">
                    {plan.includes.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <LeafMark className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <button
                    onClick={() => openEnrollModal(undefined, plan.id)}
                    className={`w-full py-3.5 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 shadow-md ${plan.isPopular ? "btn-primary" : "btn-secondary"
                      }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-[#53735D] mt-2">
                    {plan.ctaSubtext}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/pricing"
              className="text-xs sm:text-sm font-bold text-[#00693E] hover:underline"
            >
              Compare full plan features & Starter Kit breakdown in detail →
            </Link>
          </div>
        </div>
      </section>

      {/* 10. COMPACT MEET YOUR TRAINERS SECTION (CHANGE 1) */}
      <section id="trainers" className="px-4 sm:px-6 scroll-mt-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="badge-pill badge-pill-lime text-xs">
                <GraduationCap className="w-3.5 h-3.5 text-[#00693E]" />
                Qualified Agronomists & Engineers
              </span>
              <h2 className="heading-headline text-3xl sm:text-4xl text-[#231F20] mt-2">
                Meet your <span className="text-[#00693E]">trainers</span>
              </h2>
              <p className="text-sm text-[#2C3E32] max-w-xl mt-1.5">
                Learn directly from verified B.Sc & B.E. agricultural scientists who actively design, build, and operate commercial farming systems across India, the Maldives, and Oman.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#00693E] bg-[#EAF5DC] px-3.5 py-1.5 rounded-full border border-[#B5DF93]">
              <ShieldCheck className="w-4 h-4 text-[#8BC53F]" />
              <span>100% Live Faculty Interaction</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {TRAINERS.map((tr) => {
              const isExpanded = !!expandedTrainers[tr.id];

              return (
                <div
                  key={tr.id}
                  className={`card-fresh p-5 flex flex-col justify-between transition-all ${isExpanded ? "border-[#8BC53F] shadow-md ring-1 ring-[#8BC53F]/40" : ""
                    }`}
                >
                  <div>
                    {/* Trainer Photo & Qualification Badge */}
                    <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-[#EAF5DC]">
                      <img
                        src={tr.image}
                        alt={tr.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                        width={400}
                        height={400}
                      />
                      <div className="absolute bottom-2.5 left-2.5 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#00693E] border border-[#B5DF93]">
                        {tr.qualification}
                      </div>
                    </div>

                    {/* Trainer Info */}
                    <div className="flex items-center justify-between gap-1 text-[11px] text-[#00693E] font-semibold mb-1">
                      <span>{tr.location.split("·")[0]}</span>
                      <span className="bg-[#EAF5DC] px-2 py-0.2 rounded-full text-[10px] text-[#231F20] border border-[#B5DF93]">
                        {tr.experience.split(" ")[0]} {tr.experience.split(" ")[1]}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-base sm:text-lg text-[#231F20] leading-snug">
                      {tr.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#0B6E4F] mt-0.5">{tr.role}</p>
                    <p className="text-[11px] text-[#53735D] mt-0.5">{tr.experience}</p>

                    <p className="text-xs text-[#2C3E32] mt-2.5 leading-relaxed">
                      {tr.shortBio}
                    </p>

                    {/* Specialties Pill Badges */}
                    <div className="mt-3 flex flex-wrap gap-1">
                      {tr.specialties.slice(0, 3).map((spec) => (
                        <span
                          key={spec}
                          className="text-[10px] font-medium text-[#231F20] bg-[#EAF5DC] px-2 py-0.5 rounded-md border border-[#B5DF93]"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* Expandable Details Block */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-[#DFECD8] space-y-3.5 text-xs animate-fade-in">
                        <div>
                          <h4 className="font-bold text-[#231F20] text-[11px] uppercase tracking-wider mb-1">
                            Commercial Background:
                          </h4>
                          <p className="text-xs text-[#2C3E32] leading-relaxed">
                            {tr.expandedBio}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-bold text-[#231F20] text-[11px] uppercase tracking-wider mb-1.5">
                            Key Accomplishments:
                          </h4>
                          <ul className="space-y-1.5 text-xs text-[#2C3E32]">
                            {tr.keyHighlights.map((hl, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#00693E] shrink-0 mt-0.5" />
                                <span className="leading-tight">{hl}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-bold text-[#231F20] text-[11px] uppercase tracking-wider mb-1">
                            Focus Tags:
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {tr.tags.slice(0, 6).map((tg) => (
                              <span
                                key={tg}
                                className="text-[10px] text-[#00693E] bg-[#F6FAEF] px-1.5 py-0.5 rounded border border-[#DFECD8]"
                              >
                                #{tg}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Expand / Collapse Button */}
                  <div className="mt-4 pt-3 border-t border-[#DFECD8]">
                    <button
                      onClick={() => toggleTrainer(tr.id)}
                      className="w-full py-2 px-3 rounded-full bg-[#EAF5DC] hover:bg-[#B5DF93] text-[#231F20] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors border border-[#B5DF93]"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? "Collapse Details" : "View Experience & Credentials"}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5 text-[#00693E]" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 text-[#00693E]" />
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. TESTIMONIALS */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="badge-pill badge-pill-lime text-xs">
              <Quote className="w-3.5 h-3.5 text-[#00693E]" />
              Student Experiences
            </span>
            <h2 className="heading-headline text-3xl sm:text-4xl text-[#231F20] mt-2">
              Stories from our <span className="text-[#00693E]">urban agripreneurs</span>
            </h2>
            <p className="text-xs text-[#53735D] mt-1.5">
              [Clearly marked sample student feedback for demonstration until live verified reviews are provided]
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#B5DF93] rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#8BC53F] mb-3 text-xs">
                    {"★".repeat(item.rating)}
                    <span className="text-[11px] font-bold text-[#00693E] ml-2">{item.batch}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#2C3E32] leading-relaxed font-normal">
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DFECD8] flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#231F20]">{item.name}</h4>
                    <p className="text-[11px] text-[#53735D]">{item.role}</p>
                    <p className="text-[10px] text-[#53735D]">{item.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-[#00693E] bg-[#EAF5DC] px-2 py-0.5 rounded-full border border-[#B5DF93]">
                      {item.harvestMetric}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/stories"
              className="text-xs font-bold text-[#00693E] hover:underline"
            >
              See all student harvest stories & alumni community →
            </Link>
          </div>
        </div>
      </section>

      {/* 12. FINAL CALL TO ACTION */}
      <section className="px-4 sm:px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#EAF5DC] via-[#F6FAEF] to-white border-2 border-[#B5DF93] rounded-3xl p-8 sm:p-14 shadow-lg text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#00693E] text-xs font-bold border border-[#B5DF93] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#8BC53F]" />
            Limited Seats Per Batch
          </div>

          <h2 className="heading-headline text-3xl sm:text-5xl text-[#231F20] leading-tight">
            Ready to start <span className="text-[#00693E]">your journey?</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#2C3E32] max-w-xl mx-auto leading-relaxed">
            Limited seats per batch to ensure live personal Q&A with our lead agronomists. Our team will guide you to the right plan and dispatch your starter kit.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
            <button
              onClick={() => openEnrollModal()}
              className="btn-primary w-full py-4 text-xs font-bold shadow-md"
            >
              <span>Enroll Now · Starting at ₹999</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=START`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full py-4 text-xs font-bold"
            >
              <span>Message "START" on WhatsApp</span>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-[#53735D]">
            <span>🎓 20% OFF with college ID</span>
            <span>·</span>
            <span>100% Online · Across India</span>
            <span>·</span>
            <span>Doorstep Starter Kit Delivery</span>
          </div>
        </div>
      </section>
    </div>
  );
}
