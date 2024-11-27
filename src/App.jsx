// src/App.jsx
import React, { useContext, useState } from "react";
import "./App.css";
import { CountContext } from "./context/CountContext";
import { UserContext } from "./context/UserContext"; // Import the UserContext

const App = () => {
  const { count, increment, decrement } = useContext(CountContext); // Access the counter context
  const { user, logIn, logOut } = useContext(UserContext); // Access the user context

  const [isRegistering, setIsRegistering] = useState(false); // Toggle between login and register

  const handleToggleForm = () => {
    setIsRegistering((prev) => !prev);
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (isRegistering) {
      console.log("Register:", { username, password });
      // Call register function (placeholder)
    } else {
      logIn(username); // Log in the user
    }

    e.target.reset(); // Clear the form
  };

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

      <hr />

      {!user ? (
        <div>
          <h2>{isRegistering ? "Register" : "Login"}</h2>
          <form onSubmit={handleAuthSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              style={{ margin: "0.5rem", padding: "0.5rem" }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              style={{ margin: "0.5rem", padding: "0.5rem" }}
            />
            <button type="submit" style={{ padding: "0.5rem 1rem" }}>
              {isRegistering ? "Register" : "Login"}
            </button>
          </form>
          <button
            onClick={handleToggleForm}
            style={{
              marginTop: "1rem",
              background: "transparent",
              border: "none",
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            {isRegistering
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </button>
        </div>
      ) : (
        <div>
          <h2>Welcome, {user}!</h2>
          <button onClick={logOut} style={{ padding: "0.5rem 1rem" }}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
