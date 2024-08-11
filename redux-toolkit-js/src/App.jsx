import { useState } from "react";

import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        React Redux Toolkit Sample
      </h1>
      <div className="card">
        <AddTodo />
        <Todos/>
      </div>
    </>
  );
}

export default App;
