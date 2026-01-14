import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import Modal from "../modal/Modal";
import useModalStore from "../store/modalStore";

export default function ModalProvider({ children }: { children: ReactNode }) {
  const { isModalOpen } = useModalStore();

  return (
    <>
      {isModalOpen && createPortal(<Modal />, document.body)}
      {children}
    </>
  );
}
