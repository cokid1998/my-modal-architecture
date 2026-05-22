import { X } from "lucide-react";
import useModalStore from "../store/modalStore";

export default function Index2Modal() {
  const { closeModal } = useModalStore();

  return (
    <div className="bg-red-400 w-40 h-100">
      <X onClick={() => closeModal()} className="cursor-pointer" />
      인덱스2에서 연 모달이다
      <button className="w-fit bg-emerald-400 p-2 rounded-sm cursor-pointer">
        모달안에서 모달열기
      </button>
    </div>
  );
}
