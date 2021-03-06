import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ModeProvider } from "./contexts/ModeContext";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <ModeProvider>
      <App />
    </ModeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
