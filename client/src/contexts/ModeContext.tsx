import React, { useState } from "react";

import { Mode } from "../ui/mode";
import { dark, light } from "../ui/Mode";

type ModeContext = { mode: Mode; toggleMode: () => void };

export const ModeContext = React.createContext<ModeContext>({} as ModeContext);

export const ModeProvider: React.FC = ({ children }: { children?: React.ReactNode }) => {
    const [mode, setMode] = useState<Mode>(light);
    console.log(mode);

    const toggleMode = () => {
        console.log("Switching from " + mode + " mode to the other mode");
        setMode(mode.type === "light" ? dark : light);
    }

    return (
        <ModeContext.Provider value={{ mode, toggleMode }}>
            { children }
        </ModeContext.Provider>
    );
};