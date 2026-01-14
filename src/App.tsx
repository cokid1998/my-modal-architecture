import useModalStore from "./store/modalStore";

function App() {
  const { isModalOpen, openModal, closeModal, modalContent } = useModalStore();

  return (
    <div className="flex flex-col">
      {isModalOpen && modalContent}

      <button
        className="bg-emerald-500 p-4 rounded-xl"
        onClick={() => openModal(<div>모달모달</div>)}
      >
        모달열기
      </button>
      <button
        className="bg-rose-500 p-4 rounded-xl"
        onClick={() => closeModal()}
      >
        모달닫기
      </button>
      {JSON.stringify(isModalOpen)}
    </div>
  );
}

export default App;
