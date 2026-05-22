import { X } from "lucide-react";
import useModalStore from "../store/modalStore";
import Index2Modal from "./Index2Modal";

export default function IndexModal() {
  const { closeModal, openModal } = useModalStore();
  return (
    <div className="bg-white w-140 h-100">
      <X onClick={() => closeModal()} className="cursor-pointer" />
      인덱스에서 연 모달이다
      <button
        className="w-fit bg-emerald-400 p-2 rounded-sm cursor-pointer"
        onClick={() => openModal(<Index2Modal />)}
      >
        모달안에서 모달열기
      </button>
    </div>
  );
}
