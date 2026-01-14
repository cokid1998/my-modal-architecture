import { Routes, BrowserRouter, Route } from "react-router";
import Index from "./page/Index";
import Page1 from "./page/Page1";
import ModalProvider from "./provider/modalProvider";

function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/page1" element={<Page1 />} />
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
