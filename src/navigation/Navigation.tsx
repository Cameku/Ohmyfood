import React from "react";
import Header from "../components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import Bastille from "../pages/Bastille";
import Palette from "../pages/Palette";
import NotFound from "../pages/NotFound";

const Navigation = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Bastille" element={<Bastille />} />
          <Route path="/Palette" element={<Palette />} />
          <Route path="/Gourmand" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Navigation;
