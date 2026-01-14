import useModalStore from "../store/modalStore";
import { X } from "lucide-react";

export default function Page1Modal() {
  const { closeModal } = useModalStore();
  return (
    <div className="bg-white w-140 h-100">
      <X onClick={() => closeModal()} className="cursor-pointer" />
      Page1에서 연 모달이다
    </div>
  );
}
