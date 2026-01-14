import Page1Modal from "../modal/Page1Modal";
import useModalStore from "../store/modalStore";
import { Link } from "react-router";

export default function Page1() {
  const { openModal } = useModalStore();

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl">Page1 페이지</h1>

      <button
        className="w-fit bg-emerald-400 p-2 rounded-sm cursor-pointer"
        onClick={() => openModal(<Page1Modal />)}
      >
        모달열기
      </button>

      <Link className="border w-fit p-2 rounded-sm" to={"/"}>
        Index가기
      </Link>
    </div>
  );
}
