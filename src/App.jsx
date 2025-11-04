
import AppLayout from "./layout/AppLayout";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";

import "./App.css";
import { Route, Routes } from "react-router";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
};

