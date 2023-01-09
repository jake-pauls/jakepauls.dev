import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ModeProvider } from "./contexts/ModeContext";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ModeProvider>
      <App />
    </ModeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
