import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

const LazyBooklist = lazy(() => import("./Pages/Booklist"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/book-list"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyBooklist />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
