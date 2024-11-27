import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import CountContextProvider from "./context/CountContext";
import UserContextProvider from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CountContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </CountContextProvider>
  </React.StrictMode>
);
