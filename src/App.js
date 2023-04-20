import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Merged from "./components/Merged";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import OurStore from "./pages/OurStore.js";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Merged />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<OurStore />} />
        </Routes>
      </BrowserRouter>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default App;
