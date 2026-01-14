import useModalStore from "../store/modalStore";

export default function Modal() {
  const { modalContent, closeModal } = useModalStore();
  return (
    <div
      onClick={() => closeModal()}
      className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black/80"
    >
      <div onClick={(e) => e.stopPropagation()}>{modalContent}</div>
    </div>
  );
}
