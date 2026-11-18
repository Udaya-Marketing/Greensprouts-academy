"use client";

import React, { useState } from "react";
import { 
  X, 
  CheckCircle2, 
  Sparkles, 
  GraduationCap, 
  Send, 
  QrCode, 
  ShieldCheck, 
  CreditCard,
  Copy,
  Check
} from "lucide-react";
import { PROGRAMS } from "@/data/courses";
import { PRICING_PLANS } from "@/data/pricing";
import { SITE_CONFIG } from "@/data/siteConfig";

interface QuickEnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProgramSlug?: string;
  defaultPlanId?: string;
}

export default function QuickEnrollModal({
  isOpen,
  onClose,
  defaultProgramSlug,
  defaultPlanId,
}: QuickEnrollModalProps) {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [selectedProgram, setSelectedProgram] = useState(defaultProgramSlug || "hydroponics");
  const [selectedPlan, setSelectedPlan] = useState(defaultPlanId || "standard");
  const [isStudent, setIsStudent] = useState(false);
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentPlan = PRICING_PLANS.find((p) => p.id === selectedPlan) || PRICING_PLANS[1];
  const programObj = PROGRAMS.find((p) => p.slug === selectedProgram) || PROGRAMS[0];

  const basePrice = currentPlan.price;
  const discountAmount = isStudent ? Math.round(basePrice * 0.2) : 0;
  const finalPrice = basePrice - discountAmount;

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(SITE_CONFIG.contact.upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Also prepare WhatsApp prefill link
    const waText = encodeURIComponent(
      `START - Enrollment Request\n` +
      `Name: ${name}\n` +
      `Phone/WhatsApp: ${whatsapp}\n` +
      `Email: ${email}\n` +
      `Course: ${programObj.title}\n` +
      `Plan: ${currentPlan.name} (₹${finalPrice})\n` +
      `Student 20% Discount: ${isStudent ? "YES (Will share College ID)" : "No"}`
    );
    const waUrl = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${waText}`;

    // Auto open WhatsApp in new tab for user convenience
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-sm animate-fade-in"
      onPointerDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="bg-[#FFFDF5] border border-[#DFECD8] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#F6FAEF] text-[#31533C] hover:bg-[#E3F2CE] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-2">
                <img src="/assets/logo-cropped.png" alt="Green Sprouts Academy – Seed to Success" className="h-8 logo-blend object-contain" />
              </div>
              <span className="badge-pill badge-pill-lime text-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#00693E]" />
                Fast 2-Minute Enrollment · Seed to Success
              </span>
              <h3 className="font-heading text-2xl font-bold text-[#231F20] mt-2">
                Reserve Your Training Seat
              </h3>
              <p className="text-xs text-[#2C3E32] mt-0.5">
                Join our next live online batch. Certificate & interactive faculty support included.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              {/* Program Selector */}
              <div>
                <label className="block text-xs font-bold text-[#231F20] mb-1">
                  Select Agriculture Specialization
                </label>
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DFECD8] text-[#231F20] font-medium focus:outline-none focus:border-[#8BC53F]"
                >
                  {PROGRAMS.map((prog) => (
                    <option key={prog.slug} value={prog.slug}>
                      {prog.title} ({prog.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Plan Selector */}
              <div>
                <label className="block text-xs font-bold text-[#231F20] mb-1">
                  Choose Training Plan
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {PRICING_PLANS.map((plan) => (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        selectedPlan === plan.id
                          ? "bg-[#EAF5DC] border-[#8BC53F] shadow-sm font-bold"
                          : "bg-white border-[#E0ECD9] hover:bg-[#F8FBF5]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#231F20]">{plan.name}</span>
                        {plan.isPopular && (
                          <span className="bg-[#8BC53F] text-white text-[9px] px-1 rounded font-bold">
                            POPULAR
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-extrabold text-[#2F5E1C] mt-1">₹{plan.price}</p>
                      <p className="text-[10px] text-[#557861] truncate">{plan.subTitle}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#231F20] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DFECD8] text-[#231F20] placeholder:text-[#88A391] focus:outline-none focus:border-[#8BC53F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#231F20] mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98765 43210"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DFECD8] text-[#231F20] placeholder:text-[#88A391] focus:outline-none focus:border-[#8BC53F]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#231F20] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DFECD8] text-[#231F20] placeholder:text-[#88A391] focus:outline-none focus:border-[#8BC53F]"
                />
              </div>

              {/* Student Discount Toggle */}
              <div className="p-3 rounded-2xl bg-[#F6FAEF] border border-[#B5DF93] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#8BC53F] shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-[#204919] block">
                      I am a College / University Student
                    </span>
                    <span className="text-[11px] text-[#4E7558]">
                      Apply 20% discount (Show College ID upon confirmation)
                    </span>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={isStudent}
                  onChange={(e) => setIsStudent(e.target.checked)}
                  className="w-5 h-5 accent-[#8BC53F] rounded cursor-pointer"
                  id="student-discount-check"
                />
              </div>

              {/* Price Calculation Summary */}
              <div className="bg-white p-3.5 rounded-2xl border border-[#E0ECD9] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#527860] block">Total Amount to Pay</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-[#235316]">₹{finalPrice}</span>
                    {isStudent && (
                      <span className="text-xs line-through text-[#799C85]">₹{basePrice}</span>
                    )}
                  </div>
                </div>

                <div className="text-right text-[11px] text-[#4E7558]">
                  {isStudent ? (
                    <span className="text-[#00693E] font-bold bg-[#EAF5DC] px-2 py-0.5 rounded">
                      🎉 20% Student OFF (-₹{discountAmount})
                    </span>
                  ) : (
                    <span>All taxes & live session access included</span>
                  )}
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn-primary w-full py-3.5 rounded-xl text-base font-bold shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Confirm Seat · Proceed to Batch Link</span>
              </button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-[#557861] pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8BC53F]" /> Safe & Secure
                </span>
                <span>·</span>
                <span>Immediate WhatsApp Follow-Up</span>
              </div>
            </form>
          </div>
        ) : (
          /* Submission Success View with UPI QR placeholder */
          <div className="text-center py-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#EAF5DC] text-[#8BC53F] flex items-center justify-center mx-auto mb-3 border border-[#DFECD8]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="badge-pill badge-pill-lime text-xs">Registration Received</span>
            <h3 className="text-2xl font-extrabold text-[#231F20] mt-2">
              Welcome to the Batch, {name}!
            </h3>
            <p className="text-xs sm:text-sm text-[#2C3E32] max-w-sm mx-auto mt-1">
              Your details for <strong>{programObj.title}</strong> ({currentPlan.name} Plan) have been reserved.
            </p>

            {/* UPI & QR Section */}
            <div className="mt-5 p-4 rounded-2xl bg-white border border-[#D8E8CE] text-left">
              <div className="flex items-center justify-between border-b border-[#E8F0E2] pb-2.5 mb-3">
                <span className="text-xs font-bold text-[#231F20] flex items-center gap-1.5">
                  <QrCode className="w-4 h-4 text-[#8BC53F]" /> Complete Enrollment via UPI
                </span>
                <span className="text-base font-extrabold text-[#00693E]">₹{finalPrice}</span>
              </div>

              <div className="flex items-center justify-between bg-[#F7FAF4] p-2.5 rounded-xl border border-[#DFECD8]">
                <div>
                  <span className="text-[10px] text-[#5A7E68] uppercase font-bold block">UPI ID [PLACEHOLDER]</span>
                  <code className="text-xs font-bold text-[#231F20]">{SITE_CONFIG.contact.upiId}</code>
                </div>
                <button
                  onClick={handleCopyUpi}
                  className="px-2.5 py-1 rounded-lg bg-white border border-[#DFECD8] text-xs font-bold text-[#00693E] hover:bg-[#EAF5DC] flex items-center gap-1"
                >
                  {copiedUpi ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedUpi ? "Copied" : "Copy"}
                </button>
              </div>

              <p className="text-[11px] text-[#688E75] mt-2.5 leading-relaxed">
                Scan or pay through GPay, PhonePe, or Paytm. Once transferred, send the payment screenshot or message <strong>"START"</strong> to our official WhatsApp line: <strong>{SITE_CONFIG.contact.phone}</strong>.
              </p>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                  `START - I have submitted my registration for ${programObj.title} (${currentPlan.name} Plan - ₹${finalPrice}). Please send my batch joining link.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full py-3 rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <span>Open WhatsApp to Confirm Batch</span>
              </a>

              <button
                onClick={handleReset}
                className="btn-secondary w-full py-2.5 rounded-xl text-xs font-semibold"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
