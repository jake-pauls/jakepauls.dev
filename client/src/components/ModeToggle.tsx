import React, { useContext } from "react";
import { Tooltip, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { ModeContext } from "../contexts/ModeContext";

const ModeToggle = () => {
    const { mode, toggleMode } = useContext(ModeContext);
    console.log("useContext: " + mode.type);

    const getCurrentMode = (): string => {
        return mode.type === "light" ? "Dark Mode" : "Light Mode";
    };

    const getModeIcon = () => {
        return mode.type === "light" ? <MoonIcon /> : <SunIcon />;
    };

    return (
        <div>
            <Tooltip 
                aria-label="mode-tooltip" 
                label={getCurrentMode()} 
                closeOnClick={false}
                background="base.text"
                textColor="base.background">
                <IconButton
                    aria-label="mode-icon" 
                    onClick={toggleMode} 
                    icon={getModeIcon()} 
                    isRound={true} 
                    color="base.primary" 
                    background="base.text"
                    _hover={{ bg: "base.text" }}
                    _focus={{ boxShadow: "base.text" }} />
            </Tooltip>
        </div>
    );
};

export default ModeToggle;