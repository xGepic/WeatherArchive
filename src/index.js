import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LandingPage from "./Components/LandingPage/landingPage";
import MyComponent from "./Components/LandingPage/MyComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);
