import React, { useState } from "react";

import { Mode } from "../types/mode";
import { dark, light } from "../ui/Mode";

type ModeContext = { mode: Mode; toggleMode: () => void };

export const ModeContext = React.createContext<ModeContext>({} as ModeContext);

export const ModeProvider = ({ children }: { children?: React.ReactNode }) => {
  const [mode, setMode] = useState<Mode>(light);

  const toggleMode = () => {
    setMode(mode.type === "light" ? dark : light);
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};
