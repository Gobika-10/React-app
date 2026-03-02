import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Footer from "./Components/Footer";
import Home from "./PAges/Home";
import Login from "./Form/Login"
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/section" element={<Section />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;