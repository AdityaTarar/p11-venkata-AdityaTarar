import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "./Task1/TodoList";

function App() {
  return (
    <h1>
      <TodoList />
    </h1>
  );
}

export default App;
