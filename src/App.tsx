import { useState } from "react";
import "./colors.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/specimen" element={<Specimen />} /> */}
    </Routes>
  );
}

export default App;
