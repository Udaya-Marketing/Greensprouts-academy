import React from "react";
import { Clock, IndianRupee, Home, TrendingUp, ArrowRight, Check } from "lucide-react";

export default function CropComparisonTable() {
  const crops = [
    {
      name: "Microgreens",
      tagline: "Superfood Business",
      harvestTime: "7–10 Days",
      minSpace: "15–30 sq ft (Balcony / Shelf)",
      initialInvestment: "₹1,500 – ₹3,500",
      profitPotential: "₹15,000 – ₹60,000 / mo",
      skillLevel: "Beginner Friendly",
      detailUrl: "/programs/microgreens",
      slug: "microgreens",
    },
    {
      name: "Hydroponics",
      tagline: "Soil-Free Leafy Greens & Herbs",
      harvestTime: "28–35 Days",
      minSpace: "30–60 sq ft (Balcony / Terrace)",
      initialInvestment: "₹3,500 – ₹8,000",
      profitPotential: "₹25,000 – ₹1,20,000 / mo",
      skillLevel: "Beginner to Intermediate",
      detailUrl: "/programs/hydroponics",
      slug: "hydroponics",
    },
    {
      name: "Mushroom Cultivation",
      tagline: "High-Yield Oyster & Shiitake",
      harvestTime: "18–25 Days",
      minSpace: "50–100 sq ft (Dark Room / Shed)",
      initialInvestment: "₹2,000 – ₹5,000",
      profitPotential: "₹20,000 – ₹80,000 / mo",
      skillLevel: "Beginner Friendly",
      detailUrl: "/programs/mushroom-cultivation",
      slug: "mushroom-cultivation",
    },
    {
      name: "Aquaponics",
      tagline: "Circular Fish + Plants Loop",
      harvestTime: "30 Days (Greens) / 6 Mos (Fish)",
      minSpace: "80–200 sq ft (Terrace / Backyard)",
      initialInvestment: "₹6,000 – ₹15,000",
      profitPotential: "₹30,000 – ₹1,50,000 / batch",
      skillLevel: "Intermediate",
      detailUrl: "/programs/aquaponics",
      slug: "aquaponics",
    },
    {
      name: "Saffron & Specialty",
      tagline: "Indoor Controlled Environment",
      harvestTime: "90–100 Days (Flower Flush)",
      minSpace: "100–300 sq ft (Insulated Room)",
      initialInvestment: "₹50,000 – ₹1,50,000",
      profitPotential: "₹2–5 Lakh per kg",
      skillLevel: "Advanced / Commercial",
      detailUrl: "/programs/saffron-specialty",
      slug: "saffron-specialty",
    },
  ];

  return (
    <div className="w-full bg-[#FFFFFF] border border-[#DFECD8] rounded-3xl p-6 sm:p-8 shadow-sm overflow-hidden">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="badge-pill badge-pill-lime text-xs">Side-by-Side Comparison</span>
          <h3 className="heading-headline text-xl sm:text-2xl text-[#231F20] mt-1">
            Compare disciplines <span className="text-[#00693E]">at a glance</span>
          </h3>
        </div>
        <p className="text-xs text-[#527860] max-w-xs">
          Choose based on your available space, turnaround speed, and investment budget.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
          <thead>
            <tr className="border-b-2 border-[#D8E8CE] bg-[#F7FAF4] text-[#244723]">
              <th className="py-3 px-3.5 font-extrabold">Discipline</th>
              <th className="py-3 px-3.5 font-extrabold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#8BC53F]" /> Harvest Turnaround
              </th>
              <th className="py-3 px-3.5 font-extrabold">
                <span className="flex items-center gap-1">
                  <Home className="w-3.5 h-3.5 text-[#8BC53F]" /> Min Space Needed
                </span>
              </th>
              <th className="py-3 px-3.5 font-extrabold">
                <span className="flex items-center gap-1">
                  <IndianRupee className="w-3.5 h-3.5 text-[#8BC53F]" /> Starter Investment
                </span>
              </th>
              <th className="py-3 px-3.5 font-extrabold">
                <span className="flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-[#8BC53F]" /> Profit Potential *
                </span>
              </th>
              <th className="py-3 px-3.5 text-right font-extrabold">Detail Page</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EAF2E4]">
            {crops.map((c) => (
              <tr key={c.name} className="hover:bg-[#F9FCF6] transition-colors">
                <td className="py-3.5 px-3.5 font-bold text-[#231F20]">
                  <div>{c.name}</div>
                  <span className="text-[11px] font-normal text-[#587B64] block">{c.tagline}</span>
                </td>
                <td className="py-3.5 px-3.5 font-semibold text-[#2F5E1C]">
                  {c.harvestTime}
                </td>
                <td className="py-3.5 px-3.5 text-[#375841]">
                  {c.minSpace}
                </td>
                <td className="py-3.5 px-3.5 text-[#375841] font-medium">
                  {c.initialInvestment}
                </td>
                <td className="py-3.5 px-3.5 font-extrabold text-[#1F4C18]">
                  {c.profitPotential}
                </td>
                <td className="py-3.5 px-3.5 text-right">
                  <a
                    href={c.detailUrl}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0B6E4F] hover:text-[#00693E] hover:underline"
                  >
                    <span>View Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 pt-3 border-t border-[#DFECD8] flex items-center justify-between text-[11px] text-[#557861]">
        <span>* Returns depend on local market, setup scale, and temperature management.</span>
        <a href="/pricing" className="font-bold text-[#8BC53F] hover:underline">
          All programs start at ₹999 →
        </a>
      </div>
    </div>
  );
}
