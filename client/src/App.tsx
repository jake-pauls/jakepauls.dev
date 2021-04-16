import React, { useContext } from "react";
import styled from "styled-components";

import ModeToggle from "./components/ModeToggle";
import { ModeContext } from "./contexts/ModeContext";
import { Mode } from "./types/mode";

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