import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Portfolio from "./components/pages/Portofolio";
import { inject } from "@vercel/analytics";
import { SpeedInsights } from "@vercel/speed-insights/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Portfolio />
    <SpeedInsights />
  </StrictMode>
);

inject();
