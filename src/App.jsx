import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // ✅ Import Navbar
import Footer from "./components/Footer";
import Hero from "./components/Hero"; // ✅ Import Hero section
// import About from "./components/About";
import Sppu from "./Pages/Sppu"; // ✅ Make sure Sppu is imported!
import Plasement from "./Pages/Plasement"; // ✅ Import Plasement if needed
import Contact from "./Pages/Contact";  // ✅ Import Contact page if needed
import Branch from "./Pages/Branch";  // ✅ Import Branch if needed
import Resume from "./Pages/Resume"; // ✅ Import Resume if needed
import "./App.css";
import Homecard from "./components/Homecard";

function App() {
  const currentMode = localStorage.getItem("mode") || "light";
  const [mode, setMode] = useState(currentMode);

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <Router>
      <div className={`flex flex-col min-h-screen ${mode === "light" ? "bg-gray-100" : "bg-gray-800"}`}>

        <Navbar mode={mode} setMode={setMode} />
        <Routes>
          <Route path="/" element={<><Hero mode={mode} /><Homecard mode={mode} /></>} /> {/* ✅ Card only on Home */}
          <Route path="/products" element={<Homecard mode={mode} />} /> {/* ✅ Card on /products */}
          <Route path="/sppu" element={<Sppu mode={mode} />} /> {/* ✅ Sppu page */}
          <Route path="/Plasement" element={<Plasement mode={mode} />} /> {/* ✅ Plasement page */}
          <Route path="/contact" element={<Contact mode={mode} />} />
          <Route path="/Branch" element={<Branch mode={mode} />} /> {/* ✅ Branch page */}
          <Route path="/Resume" element={<Resume mode={mode} />} /> {/* ✅ Resume page */}

          {/* Add more routes as needed */}
          {/* Example: */}
          {/* <Route path="/engineering-notes" element={<EngineeringNotes mode={mode} />} /> */}
          
{/* ✅ Contact page */}
          {/* Uncomment if you have an About page */}
          {/* <Route path="/about" element={<About mode={mode} />} /> */}

          {/* Add more routes as needed */}
          {/* Example: */}
          {/* <Route path="/engineering-notes" element={<EngineeringNotes mode={mode} />} /> */}
          {/* <Route path="/about" element={<About mode={mode} />} /> */}
          {/* Add more routes as needed */}

        </Routes>



        <Footer mode={mode} />
      </div>
    </Router>
  );
}

export default App;
