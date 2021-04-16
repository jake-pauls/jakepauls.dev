import React, { useContext } from "react";

import { ModeContext } from "../contexts/ModeContext";

const ModeToggle = () => {
    const { mode, toggleMode } = useContext(ModeContext);
    console.log("useContext: " + mode.type);

    const getCurrentMode = (): string => {
        return mode.type === "light" ? "dark" : "light";
    };

    return (
        <div>
            <p>Switch to { getCurrentMode() } mode</p>
            <button onClick={toggleMode}>Click me!</button> 
        </div>
    );
};

export default ModeToggle;