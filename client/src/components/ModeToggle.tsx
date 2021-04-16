import React, { useContext } from "react";

import { ModeContext } from "../contexts/ModeContext";

const ModeToggle = () => {
    const { mode, toggleMode } = useContext(ModeContext);
    console.log("useContext: " + mode.type);

    // TODO: Implement UI Tooltip
    const getCurrentMode = (): string => {
        return mode.type === "light" ? "dark" : "light";
    };

    return (
        <div>
            <button onClick={toggleMode}>Click me!</button> 
        </div>
    );
};

export default ModeToggle;