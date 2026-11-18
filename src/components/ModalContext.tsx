"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import QuickEnrollModal from "@/components/QuickEnrollModal";
import CertificateModal from "@/components/CertificateModal";
import MicrogreensGuideModal from "@/components/MicrogreensGuideModal";

interface ModalContextType {
  openEnrollModal: (programSlug?: string, planId?: string) => void;
  openCertificateModal: () => void;
  openGuideModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [enrollOpen, setEnrollOpen] = useState(false);
  const [certOpen, setCertOpen] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);

  const [enrollProgramSlug, setEnrollProgramSlug] = useState<string | undefined>(undefined);
  const [enrollPlanId, setEnrollPlanId] = useState<string | undefined>(undefined);

  const openEnrollModal = (programSlug?: string, planId?: string) => {
    setEnrollProgramSlug(programSlug);
    setEnrollPlanId(planId);
    setEnrollOpen(true);
  };

  const openCertificateModal = () => setCertOpen(true);
  const openGuideModal = () => setGuideOpen(true);

  return (
    <ModalContext.Provider
      value={{
        openEnrollModal,
        openCertificateModal,
        openGuideModal,
      }}
    >
      {children}

      {/* Global Modals Mounted */}
      <QuickEnrollModal
        isOpen={enrollOpen}
        onClose={() => setEnrollOpen(false)}
        defaultProgramSlug={enrollProgramSlug}
        defaultPlanId={enrollPlanId}
      />

      <CertificateModal
        isOpen={certOpen}
        onClose={() => setCertOpen(false)}
      />

      <MicrogreensGuideModal
        isOpen={guideOpen}
        onClose={() => setGuideOpen(false)}
      />
    </ModalContext.Provider>
  );
}

export function useModals() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModals must be used within a ModalProvider");
  }
  return context;
}
