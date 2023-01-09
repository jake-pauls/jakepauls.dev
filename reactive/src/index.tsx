import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App";
import { ModeProvider } from "./contexts/ModeContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModeProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </ModeProvider>
  </React.StrictMode>
);
