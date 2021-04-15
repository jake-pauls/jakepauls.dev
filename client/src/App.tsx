import React, { useContext } from "react";
import { ModeContext } from "./contexts/ModeContext";

const App: React.FC = () => {
  const { mode, toggleMode } = useContext(ModeContext);
  console.log("useContext: " + mode.type);
  return (
    <div>
      <h1>Hello, World</h1>
      <button onClick={toggleMode}>
        Switch to {mode.type === "light" ? "dark" : "light"} mode
      </button>
    </div>
  );
};

export default App;