import React from "react";
import Header from "../components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import Bastille from "../pages/Bastille";
import Enchanted from "../pages/Enchanted";
import Palette from "../pages/Palette";
import Gourmand from "../pages/Gourmand";

const Navigation = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Bastille" element={<Bastille />} />
          <Route path="/Enchanted" element={<Enchanted />} />
          <Route path="/Palette" element={<Palette />} />
          <Route path="/Gourmand" element={<Gourmand />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Navigation;
