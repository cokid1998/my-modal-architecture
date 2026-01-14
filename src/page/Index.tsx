import useModalStore from "../store/modalStore";
import IndexModal from "../modal/IndexModal";
import { Link } from "react-router";

export default function Index() {
  const { openModal } = useModalStore();

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-2xl">Index 페이지</h1>

      <button
        className="w-fit bg-emerald-400 p-2 rounded-sm cursor-pointer"
        onClick={() => openModal(<IndexModal />)}
      >
        모달열기
      </button>

      <Link className="border w-fit p-2 rounded-sm" to={"/page1"}>
        Page1가기
      </Link>
    </div>
  );
}
