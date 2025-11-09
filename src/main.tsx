import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Portfolio from "./components/pages/Portofolio";
import Certificates from "./components/pages/Certificates";
import { inject } from "@vercel/analytics";
import { SpeedInsights } from "@vercel/speed-insights/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
      <SpeedInsights />
    </BrowserRouter>
  </StrictMode>
);

inject();