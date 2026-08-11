"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import ConsultationModal from "@/components/ConsultationModal";

export type ModalType = "quote" | "consultation";

interface ModalContextType {
  isOpen: boolean;
  modalType: ModalType;
  selectedService?: string;
  openModal: (type?: ModalType, serviceName?: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>("quote");
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const openModal = (type: ModalType = "quote", serviceName?: string) => {
    setModalType(type);
    if (serviceName) {
      setSelectedService(serviceName);
    } else {
      setSelectedService(undefined);
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Global listener for links or buttons targeting #quote or #consultation
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a, button");
      if (!target) return;

      const href = target.getAttribute("href");
      const dataAction = target.getAttribute("data-modal");

      if (dataAction === "quote" || href === "/get-a-quote" || href === "#quote") {
        e.preventDefault();
        openModal("quote");
      } else if (dataAction === "consultation" || href === "#consultation") {
        e.preventDefault();
        openModal("consultation");
      }
    };

    window.addEventListener("click", handleGlobalClick, true);
    return () => window.removeEventListener("click", handleGlobalClick, true);
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, modalType, selectedService, openModal, closeModal }}>
      {children}
      <ConsultationModal
        isOpen={isOpen}
        modalType={modalType}
        initialService={selectedService}
        onClose={closeModal}
      />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
