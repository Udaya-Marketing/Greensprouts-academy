"use client";

import React, { useState } from "react";
import { X, Award, ShieldCheck, Printer, Download, Sparkles, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CertificateModal({ isOpen, onClose }: CertificateModalProps) {
  const [studentName, setStudentName] = useState("Aarav Sharma");
  const [courseName, setCourseName] = useState("Commercial Hydroponics & CEA Engineering");

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FFFDF5] border border-[#DFECD8] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#F6FAEF] text-[#31533C] hover:bg-[#E3F2CE] transition-colors"
          aria-label="Close certificate preview"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4">
          <span className="badge-pill badge-pill-lime text-xs">
            <Award className="w-3.5 h-3.5 text-[#8BC53F]" />
            Official Credential Preview
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#231F20] mt-1">
            Certificate of Completion
          </h3>
          <p className="text-xs text-[#527860]">
            Every enrolled student who completes the live program receives a digitally verifiable, stamped credential.
          </p>
        </div>

        {/* Dynamic Name Customizer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 p-3.5 rounded-2xl bg-white border border-[#E0ECD9]">
          <div>
            <label className="block text-[11px] font-bold text-[#446A50] uppercase mb-1">
              Preview With Your Name:
            </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full px-3 py-1.5 rounded-lg border border-[#DFECD8] text-xs font-semibold text-[#231F20] focus:outline-none focus:border-[#8BC53F]"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-[#446A50] uppercase mb-1">
              Select Specialization:
            </label>
            <select
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="w-full px-3 py-1.5 rounded-lg border border-[#DFECD8] text-xs font-semibold text-[#231F20] focus:outline-none focus:border-[#8BC53F]"
            >
              <option value="Commercial Hydroponics & CEA Engineering">Commercial Hydroponics & CEA Engineering</option>
              <option value="Circular Aquaponic Farming & RAS">Circular Aquaponic Farming & RAS</option>
              <option value="High-Yield Gourmet & Medicinal Mushroom Cultivation">High-Yield Mushroom Cultivation</option>
              <option value="Commercial Microgreens Superfood Production">Commercial Microgreens Production</option>
              <option value="Indoor Saffron & High-Value Specialty Crops">Indoor Saffron & High-Value Specialty Crops</option>
            </select>
          </div>
        </div>

        {/* The Certificate Canvas */}
        <div className="border-4 border-[#00693E] p-6 sm:p-8 rounded-2xl bg-[#FCFAF2] text-center relative shadow-md">
          {/* Ornate corner flourish effect */}
          <div className="absolute top-2 left-2 text-[#8BC53F] text-xs font-serif opacity-40">✦ ✦ ✦</div>
          <div className="absolute top-2 right-2 text-[#8BC53F] text-xs font-serif opacity-40">✦ ✦ ✦</div>
          <div className="absolute bottom-2 left-2 text-[#8BC53F] text-xs font-serif opacity-40">✦ ✦ ✦</div>
          <div className="absolute bottom-2 right-2 text-[#8BC53F] text-xs font-serif opacity-40">✦ ✦ ✦</div>

          <div className="flex items-center justify-center gap-2 mb-2">
            <img 
              src="/assets/logo-cropped.png" 
              alt="Green Sprouts Academy – Seed to Success" 
              className="h-8 logo-blend object-contain"
            />
          </div>

          <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#193521] tracking-wide mt-1">
            Certificate of Completion
          </h4>
          <p className="text-[11px] text-[#5A7E68] font-medium">
            This is proudly awarded to certify that
          </p>

          {/* Student Name */}
          <div className="my-3 py-1 border-b-2 border-[#DFECD8] inline-block px-8 max-w-full">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#1B3824] tracking-tight">
              {studentName || "Your Name"}
            </span>
          </div>

          <p className="text-xs text-[#2C3E32] max-w-md mx-auto leading-relaxed">
            has successfully completed the live accredited practical masterclass in
          </p>

          <p className="text-sm sm:text-base font-extrabold text-[#2F5E1C] mt-1 mb-4">
            {courseName}
          </p>

          {/* Signatures & Seal */}
          <div className="grid grid-cols-3 gap-2 items-end pt-4 border-t border-[#DFECD8] mt-4 text-left">
            <div>
              <div className="font-serif italic text-xs text-[#2F5E1C] font-bold">
                Kirubhakaran R.
              </div>
              <p className="text-[10px] text-[#5D806A] font-medium leading-tight">
                Lead Trainer (B.Sc Agri)<br />Production & R&D
              </p>
            </div>

            {/* Gold Seal Emblem */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFE082] via-[#FFD54F] to-[#FFA000] border-2 border-[#FFB300] shadow flex items-center justify-center text-white">
                <Award className="w-6 h-6 text-[#784700]" />
              </div>
              <span className="text-[9px] font-bold text-[#784700] uppercase mt-1">
                Official Seal
              </span>
            </div>

            <div className="text-right">
              <div className="font-serif italic text-xs text-[#2F5E1C] font-bold">
                Suriya Ramesh
              </div>
              <p className="text-[10px] text-[#5D806A] font-medium leading-tight">
                Agronomist (B.E. Agri Eng)<br />CEA Design Specialist
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-xs text-[#527860]">
            <CheckCircle2 className="w-4 h-4 text-[#8BC53F]" />
            <span>Includes unique verification ID & QR code</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="btn-secondary py-2 px-4 rounded-xl text-xs font-bold flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Preview</span>
            </button>
            <button
              onClick={onClose}
              className="btn-primary py-2 px-4 rounded-xl text-xs font-bold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
