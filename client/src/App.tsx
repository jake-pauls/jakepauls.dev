import React, { useContext } from "react";
import styled from "styled-components";
import { ModeContext } from "./contexts/ModeContext";
import { Mode } from "./ui/mode";

interface CardProps {
  mode: Mode;
}

const Card = styled.div<CardProps>`
  max-width: 350px; 
  border: 1px solid ${({ mode }) => mode.text};
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  margin: 30px auto;
`;

const ModeToggle = () => {
  const { mode, toggleMode } = useContext(ModeContext);
  console.log("useContext: " + mode.type);

  const getCurrentMode = (): string => {
    return mode.type === "light" ? "dark" : "light";
  }

  return (
    <div>
      <p>Switch to { getCurrentMode() } mode</p>
      <button onClick={toggleMode}>Click me!</button> 
    </div>
  );
}

const App: React.FC = () => {
  const { mode } = useContext(ModeContext);

  return (
    <div>
      <Card mode={mode}>
        <h1>Hello, World</h1>
        <ModeToggle />
      </Card>
    </div>
  );
};

export default App;