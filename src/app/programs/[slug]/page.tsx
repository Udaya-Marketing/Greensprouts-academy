import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROGRAMS } from "@/data/courses";
import ProgramDetailClient from "./ProgramDetailClient";

export async function generateStaticParams() {
  return PROGRAMS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = PROGRAMS.find((p) => p.slug === slug);
  if (!program) return { title: "Program Not Found" };

  return {
    title: `${program.title} Training & Starter Kit`,
    description: `${program.headline}. ${program.shortDescription} Starting at ₹999 with Certificate of Completion.`,
    openGraph: {
      title: `${program.title} | Green Sprouts Academy`,
      description: program.shortDescription,
      images: [program.detailImage],
    },
  };
}

async function ProgramDetailContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = PROGRAMS.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  return <ProgramDetailClient program={program} />;
}

export default function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center bg-[#F6FAEF]">
          <div className="flex items-center gap-3 text-sm font-semibold text-[#00693E]">
            <div className="w-5 h-5 rounded-full border-2 border-[#8BC53F] border-t-transparent animate-spin" />
            <span>Loading program details...</span>
          </div>
        </div>
      }
    >
      <ProgramDetailContent params={params} />
    </Suspense>
  );
}
