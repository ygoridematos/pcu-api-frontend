import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home"; // Importando da pasta correta
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
