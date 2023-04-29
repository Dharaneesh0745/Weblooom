// Here i imported the requed pages location...

import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Project from "./routes/Project";
import Contact from "./routes/Contact";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    {/* Totally I created 3 pages, one is home page, second is project page, third is contact page
        Here by using <Route />, I linked 3 pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
