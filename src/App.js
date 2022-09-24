import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import Navigation from "./Componants/Navigation";
import { useState } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Thanks from "./Pages/Thanks";

// import Resume from "./Componants/Resume";

export default function App() {
  const [isFirstMount, setIsFirstMount] = useState(true);
  return (
    <Router>
        <Navigation />
        <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route path="/" element={<Home isFirstMount={isFirstMount}/>} />
          <Route path="/about" element={<About isFirstMount={isFirstMount} />} />
          <Route path="/project" element={<Project isFirstMount={isFirstMount} />} />
          <Route path="/contact" element={<Contact isFirstMount={isFirstMount} />} />
          <Route path="/thanks" element={<Thanks isFirstMount={isFirstMount} />} />
          {/* <Route path="/about/resume" element={<Resume isFirstMount={isFirstMount} />} /> */}
          {/* <Route path="/about/resume" element={<Resume />} /> */}
        </Routes>
    </AnimatePresence>
      </Router>
      
  );
}
// react page transitions
