import { X } from "lucide-react";
import useModalStore from "../store/modalStore";

export default function IndexModal() {
  const { closeModal } = useModalStore();
  return (
    <div className="bg-white w-140 h-100">
      <X onClick={() => closeModal()} className="cursor-pointer" />
      인덱스에서 연 모달이다
    </div>
  );
}
