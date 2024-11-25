// src/App.jsx
import React, { useContext } from "react";
import "./App.css";
import { CountContext } from "./context/CountContext";

const App = () => {
  const { count, increment, decrement } = useContext(CountContext); // Access the context

  return (
    <div className="app" style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <button onClick={increment} style={{ padding: "0.5rem 1rem" }}>
          Increment
        </button>
        <button onClick={decrement} style={{ padding: "0.5rem 1rem" }}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
