import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navigation from "./Componants/Navigation"
import { useState } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Resume from './Pages/Resume';


export default function App(){
  return(
    <Router>
      <Navigation />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element = {<About />} />
          <Route path="/project" element = {<Project />} />
          <Route path="/contact" element = {<Contact />} />
          <Route path="/resume" element = {<Resume />} />
        </Routes>  
    </Router>

   
  );

}


