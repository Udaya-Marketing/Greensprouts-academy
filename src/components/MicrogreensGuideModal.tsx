"use client";

import React, { useState } from "react";
import { X, BookOpen, Download, CheckCircle2, ShieldCheck, Sparkles, Send } from "lucide-react";

interface MicrogreensGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MicrogreensGuideModal({ isOpen, onClose }: MicrogreensGuideModalProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FFFDF5] border border-[#DFECD8] rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#F6FAEF] text-[#31533C] hover:bg-[#E3F2CE] transition-colors"
          aria-label="Close guide modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!downloaded ? (
          <div>
            <div className="text-center mb-5">
              <div className="w-12 h-12 rounded-full bg-[#EAF5DC] text-[#8BC53F] flex items-center justify-center mx-auto mb-2 border border-[#DFECD8]">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="badge-pill badge-pill-lime text-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#8BC53F]" /> Free PDF Blueprint
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#231F20] mt-1.5">
                "Start Microgreens at Home in 7 Days"
              </h3>
              <p className="text-xs text-[#527860] mt-1">
                A 16-page beginner handbook detailing seed varieties, blackout stacking, watering routines, and harvest recipes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-bold text-[#231F20] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Rao"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DFECD8] text-[#231F20] focus:outline-none focus:border-[#8BC53F]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#231F20] mb-1">
                  Email Address
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
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DFECD8] text-[#231F20] focus:outline-none focus:border-[#8BC53F]"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-3 rounded-xl font-bold text-sm shadow-md mt-2 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Get Free PDF Download</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#638871] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8BC53F]" />
                <span>Zero spam. Direct PDF link sent immediately.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-[#EAF5DC] text-[#8BC53F] flex items-center justify-center mx-auto mb-3 border border-[#DFECD8]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <span className="badge-pill badge-pill-lime text-xs">Download Ready</span>
            <h3 className="text-xl font-extrabold text-[#231F20] mt-2">
              Check Your Inbox, {name}!
            </h3>
            <p className="text-xs text-[#527860] mt-1.5 leading-relaxed">
              We have sent the PDF handbook to <strong>{email}</strong> and on your WhatsApp.
            </p>

            <div className="mt-5 p-4 rounded-2xl bg-white border border-[#D8E8CE]">
              <p className="text-xs font-bold text-[#231F20]">
                Want live practical guidance and a full starter kit?
              </p>
              <p className="text-[11px] text-[#557861] mt-1">
                Join our 3-day Live Online Microgreens Masterclass for just ₹999.
              </p>
              <a
                href="/programs/microgreens"
                className="btn-primary w-full mt-3 py-2 text-xs font-bold justify-center"
              >
                Explore Microgreens Masterclass
              </a>
            </div>

            <button
              onClick={() => {
                setDownloaded(false);
                onClose();
              }}
              className="mt-4 text-xs font-semibold text-[#527860] hover:underline"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
