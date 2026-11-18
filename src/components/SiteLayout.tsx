"use client";

import React, { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { ModalProvider, useModals } from "@/components/ModalContext";
import MotionRevealProvider from "@/components/MotionRevealProvider";

function LayoutInner({ children }: { children: ReactNode }) {
  const { openEnrollModal } = useModals();

  return (
    <div className="min-h-screen flex flex-col bg-[#F6FAEF] text-[#231F20] antialiased selection:bg-[#B5DF93] selection:text-[#231F20]">
      <MotionRevealProvider />
      <Header onOpenEnrollModal={() => openEnrollModal()} />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <ModalProvider>
      <LayoutInner>{children}</LayoutInner>
    </ModalProvider>
  );
}
