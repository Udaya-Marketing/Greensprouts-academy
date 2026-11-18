"use client";

import React, { useState } from "react";
import { 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  Mail, 
  MapPin, 
  GraduationCap, 
  ShieldCheck, 
  QrCode, 
  Copy, 
  Check, 
  Clock, 
  Sparkles,
  ExternalLink
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { PROGRAMS } from "@/data/courses";
import { PRICING_PLANS } from "@/data/pricing";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("hydroponics");
  const [selectedPlan, setSelectedPlan] = useState("standard");
  const [isStudent, setIsStudent] = useState(false);
  const [notes, setNotes] = useState("");
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const planObj = PRICING_PLANS.find((p) => p.id === selectedPlan) || PRICING_PLANS[1];
  const programObj = PROGRAMS.find((p) => p.slug === selectedProgram) || PROGRAMS[0];

  const basePrice = planObj.price;
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

    const waMsg = encodeURIComponent(
      `START - Green Sprouts Enrollment Form\n` +
      `Name: ${name}\n` +
      `WhatsApp: ${whatsapp}\n` +
      `Email: ${email}\n` +
      `City: ${city}\n` +
      `Course: ${programObj.title}\n` +
      `Plan: ${planObj.name} (₹${finalPrice})\n` +
      `Student 20% Discount: ${isStudent ? "YES (Will show College ID)" : "No"}\n` +
      `Questions/Notes: ${notes || "None"}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${waMsg}`, "_blank");
    }, 1200);
  };

  return (
    <div className="w-full space-y-16 py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* 1. Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DFECD8] shadow-sm mb-4 text-xs font-bold text-[#00693E]">
          <Sparkles className="w-4 h-4 text-[#8BC53F]" />
          <span>Immediate Batch Assistance</span>
        </div>
        <h1 className="heading-headline text-3xl sm:text-5xl text-[#231F20]">
          Ready to start <span className="text-[#00693E]">your journey?</span>
        </h1>
        <p className="mt-3 text-sm sm:text-base text-[#2C3E32] leading-relaxed">
          Limited seats per batch to ensure live personal Q&A with our lead agronomists. Fill out this 2-minute registration and our team will guide you to the right plan and batch schedule.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Contact & Information (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Contact Details Card */}
          <div className="bg-white border border-[#DFECD8] rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
            <h2 className="text-xl font-bold text-[#231F20] border-b border-[#DFECD8] pb-3">
              Direct Contact & Channels
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#2C3E32]">
              {/* WhatsApp */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EAF5DC] flex items-center justify-center text-[#25D366] shrink-0 border border-[#B5DF93]">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="font-bold text-[#231F20] block">WhatsApp Support:</span>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=START`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00693E] font-extrabold hover:underline block"
                  >
                    {SITE_CONFIG.contact.phone}
                  </a>
                  <p className="text-[11px] text-[#557861] mt-0.5">
                    Message <strong>"START"</strong> to receive the batch schedule and registration link.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EAF5DC] flex items-center justify-center text-[#8BC53F] shrink-0 border border-[#B5DF93]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-[#231F20] block">Official Email:</span>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="text-[#00693E] font-semibold hover:underline block"
                  >
                    {SITE_CONFIG.contact.email} <span className="text-[10px] text-[#8BC53F]">[PLACEHOLDER]</span>
                  </a>
                  <p className="text-[11px] text-[#557861] mt-0.5">
                    For enterprise, college workshops, and student ID verification.
                  </p>
                </div>
              </div>

              {/* Delivery / Location */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EAF5DC] flex items-center justify-center text-[#8BC53F] shrink-0 border border-[#B5DF93]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-[#231F20] block">Format & Location:</span>
                  <p className="text-[#00693E] font-semibold">100% Online · Across India</p>
                  <p className="text-[11px] text-[#557861] mt-0.5">
                    3–5 day live training with doorstep physical kit delivery.
                  </p>
                </div>
              </div>

              {/* Student discount reminder */}
              <div className="p-3.5 rounded-2xl bg-[#F6FAEF] border border-[#B5DF93] flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-[#8BC53F] shrink-0" />
                <div className="text-xs">
                  <strong className="text-[#204919] block">20% Student Discount Active:</strong>
                  <span className="text-[#4E7558]">
                    Show your college ID upon registration to receive 20% OFF.
                  </span>
                </div>
              </div>
            </div>

            {/* External Form Link Placeholder */}
            <div className="pt-2 border-t border-[#DFECD8]">
              <span className="text-[11px] text-[#557861] block mb-1">
                Prefer Google Forms? [PLACEHOLDER]
              </span>
              <a
                href={SITE_CONFIG.contact.registrationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#0B6E4F] hover:underline inline-flex items-center gap-1"
              >
                <span>Direct Google Registration Form Link</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* UPI Payment Box */}
          <div className="bg-[#FFFFFF] border border-[#DFECD8] rounded-3xl p-6 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#231F20] flex items-center gap-1.5">
                <QrCode className="w-4 h-4 text-[#8BC53F]" /> UPI QR & Payment Info
              </span>
              <span className="text-xs font-bold text-[#00693E] bg-[#EAF5DC] px-2 py-0.5 rounded">
                Instant Confirmation
              </span>
            </div>

            <div className="p-3 bg-[#F6FAEF] rounded-2xl border border-[#DFECD8] flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#5A7E68] block">UPI ID [PLACEHOLDER]</span>
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
          </div>
        </div>

        {/* Right Column: 2-Minute Registration Form (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-[#DFECD8] rounded-3xl p-6 sm:p-10 shadow-sm">
          {!submitted ? (
            <div>
              <div className="mb-6">
                <span className="badge-pill badge-pill-lime text-xs">
                  <Clock className="w-3.5 h-3.5 text-[#8BC53F]" /> Takes Under 2 Minutes
                </span>
                <h2 className="text-2xl font-bold text-[#231F20] mt-1.5">
                  Registration & Batch Enrollment
                </h2>
                <p className="text-xs text-[#527860] mt-0.5">
                  Our faculty team follows up personally on WhatsApp with batch joining instructions.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                {/* 1. Track & Plan */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#231F20] mb-1">
                      Choose Discipline *
                    </label>
                    <select
                      value={selectedProgram}
                      onChange={(e) => setSelectedProgram(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DFECD8] text-[#231F20] font-medium focus:outline-none focus:border-[#8BC53F]"
                    >
                      {PROGRAMS.map((prog) => (
                        <option key={prog.slug} value={prog.slug}>
                          {prog.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#231F20] mb-1">
                      Select Plan *
                    </label>
                    <select
                      value={selectedPlan}
                      onChange={(e) => setSelectedPlan(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DFECD8] text-[#231F20] font-medium focus:outline-none focus:border-[#8BC53F]"
                    >
                      {PRICING_PLANS.map((pl) => (
                        <option key={pl.id} value={pl.id}>
                          {pl.name} – {pl.subTitle} (₹{pl.price})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 2. Personal Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#231F20] mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kiruba Raj"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DFECD8] text-[#231F20] focus:outline-none focus:border-[#8BC53F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#231F20] mb-1">
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DFECD8] text-[#231F20] focus:outline-none focus:border-[#8BC53F]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DFECD8] text-[#231F20] focus:outline-none focus:border-[#8BC53F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#231F20] mb-1">
                      City & State (for kit delivery) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chennai, Tamil Nadu"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DFECD8] text-[#231F20] focus:outline-none focus:border-[#8BC53F]"
                    />
                  </div>
                </div>

                {/* 3. Student Checkbox */}
                <div className="p-3.5 rounded-2xl bg-[#F6FAEF] border border-[#B5DF93] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#8BC53F] shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-[#204919] block">
                        I am currently a College / University Student
                      </span>
                      <span className="text-[11px] text-[#4E7558]">
                        Apply 20% discount (Show College ID upon WhatsApp confirmation)
                      </span>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={isStudent}
                    onChange={(e) => setIsStudent(e.target.checked)}
                    className="w-5 h-5 accent-[#8BC53F] rounded cursor-pointer"
                  />
                </div>

                {/* Optional Notes */}
                <div>
                  <label className="block text-xs font-bold text-[#231F20] mb-1">
                    Any specific question or growing space detail? (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Growing on my 50 sq ft balcony; interested in commercial scaling."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DFECD8] text-[#231F20] focus:outline-none focus:border-[#8BC53F]"
                  />
                </div>

                {/* Pricing Summary */}
                <div className="bg-[#F6FAEF] p-4 rounded-2xl border border-[#DFECD8] flex items-center justify-between">
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
                        20% Student Discount Applied (-₹{discountAmount})
                      </span>
                    ) : (
                      <span>All sessions & Certificate Included</span>
                    )}
                  </div>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="btn-primary w-full py-3.5 rounded-xl text-base font-bold shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Registration & Get Batch Link</span>
                </button>

                <p className="text-[11px] text-center text-[#557861] pt-1">
                  🔒 We respect your privacy. Zero spam. Immediate WhatsApp follow-up with joining links.
                </p>
              </form>
            </div>
          ) : (
            /* Submission Confirmation */
            <div className="text-center py-8 animate-fade-in space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EAF5DC] text-[#8BC53F] flex items-center justify-center mx-auto border border-[#B5DF93]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <span className="badge-pill badge-pill-lime text-xs">Registration Received</span>
              <h2 className="text-2xl font-extrabold text-[#231F20]">
                Thank You, {name}!
              </h2>
              <p className="text-xs sm:text-sm text-[#2C3E32] max-w-md mx-auto leading-relaxed">
                Your registration for <strong>{programObj.title}</strong> ({planObj.name} Plan · ₹{finalPrice}) has been sent to our faculty desk.
              </p>

              <div className="mt-6 p-5 rounded-2xl bg-[#F6FAEF] border border-[#DFECD8] text-left max-w-md mx-auto">
                <span className="text-xs font-bold text-[#231F20] block mb-1">
                  Next Step to Secure Your Seat:
                </span>
                <p className="text-xs text-[#527860] leading-relaxed">
                  Send <strong>"START"</strong> to our WhatsApp coordinator at <strong>{SITE_CONFIG.contact.phone}</strong> with your payment screenshot or student ID photo.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
                    `START - I have submitted my registration for ${programObj.title} (${planObj.name} Plan - ₹${finalPrice}). Please send my batch joining link.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-3 px-6 text-xs font-bold justify-center"
                >
                  Open WhatsApp Confirmation
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary py-3 px-6 text-xs font-bold"
                >
                  Edit Registration
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
