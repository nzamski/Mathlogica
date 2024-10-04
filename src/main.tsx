import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import "./index.css";
import { PaperPage } from "./pages/PaperPage";
import { MuiXLicense } from "./utils/MuiXLicense.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MuiXLicense />
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<PaperPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
