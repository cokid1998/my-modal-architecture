import type { ReactNode } from "react";
import { create } from "zustand";

type ModalContentStack = ReactNode[];

interface ModalStore {
  isModalOpen: boolean;
  modalContentStack: ModalContentStack;
  openModal: (modalContent: ReactNode) => void;
  closeModal: () => void;
}

const useModalStore = create<ModalStore>((set) => ({
  isModalOpen: false,
  modalContentStack: [],
  openModal: (modalContent: ReactNode) => {
    set((state) => {
      const newModalContentStack = [...state.modalContentStack, modalContent];

      return {
        isModalOpen: true,
        modalContentStack: newModalContentStack,
      };
    });
  },
  closeModal: () => {
    set((state) => {
      // 스택에서 마지막 모달을 제거한다.
      const newModalContentStack = state.modalContentStack.slice(0, -1);
      // 스택이 비어있으면 isModalOpen을 false로, 남아있으면 true로 설정한다.
      const isEmpty = newModalContentStack.length === 0;

      return {
        isModalOpen: !isEmpty,
        modalContentStack: newModalContentStack,
      };
    });
  },
}));

export default useModalStore;
