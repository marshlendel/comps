import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { NavigationProvider } from "./context/NavigationContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);