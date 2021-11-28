import React from "react";
import Cities from "./pages/Cities";
import Home from "./pages/Home.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { City } from "./components/City";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cities" element={<Cities />} />
        <Route path="/City/:id" element={<City />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
