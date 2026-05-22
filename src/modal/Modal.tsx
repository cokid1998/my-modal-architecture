import { useEffect, useRef } from "react";
import useModalStore from "../store/modalStore";

export default function Modal() {
  const { modalContentStack, closeModal } = useModalStore();
  const overlayRef = useRef<HTMLDivElement>(null);

  // 모달이 열렸을 때 스크롤 막기
  // 모달이 열렸을 때 세로 스크롤 width 때문에 일어나는 Layout shift방지
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "auto";
    };
  }, []);

  // 모달이 열렸을 때 esc를 누르면 모달이 닫히도록
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // overlay영역을 클릭하면 모달이 닫히도록
  useEffect(() => {
    const handleClickOverlay = (e: MouseEvent) => {
      if (e.target === overlayRef.current) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOverlay);

    return () => document.removeEventListener("mousedown", handleClickOverlay);
  }, [closeModal]);

  return (
    <div
      className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black/80"
      ref={overlayRef}
    >
      {modalContentStack.map((modal, index) => (
        <div key={index} className={`absolute z-[${index}]`}>
          {modal}
        </div>
      ))}
    </div>
  );
}
