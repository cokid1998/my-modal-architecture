import type { ReactNode } from "react";
import { create } from "zustand";

type ModalContent = null | ReactNode;

interface ModalStore {
  isModalOpen: boolean;
  modalContent: ModalContent;
  openModal: (modalContent: ModalContent) => void;
  closeModal: () => void;
}

const useModalStore = create<ModalStore>((set) => ({
  isModalOpen: false,
  modalContent: null,
  openModal: (modalContent: ReactNode) =>
    set(() => ({ modalContent, isModalOpen: true })),
  closeModal: () => set(() => ({ modalContent: null, isModalOpen: false })),
}));

export default useModalStore;
