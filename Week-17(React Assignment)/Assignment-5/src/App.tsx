import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Booklist from "./Pages/Booklist";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book-list" element={<Booklist />} />
    </Routes>
  );
}

export default App;
