import React, { useContext } from "react";
import { Tooltip, IconButton } from "@chakra-ui/react";
import { RiMoonClearFill } from "react-icons/ri";
import { WiDaySunny } from "react-icons/wi";

import { ModeContext } from "../contexts/ModeContext";

const ModeToggle = () => {
    const { mode, toggleMode } = useContext(ModeContext);

    const getCurrentMode = (): string => {
        return mode.type === "light" ? "Dark Mode" : "Light Mode";
    }

    const getModeIcon = () => {
        return mode.type === "light" ? <RiMoonClearFill size={28} /> : <WiDaySunny size={28} />;
    };

    return (
        <div>
            <Tooltip 
                aria-label="mode-tooltip" 
                label={getCurrentMode()} 
                closeOnClick={false}
                bg="base.text"
                textColor="base.background">
                <IconButton
                    aria-label="mode-icon" 
                    onClick={toggleMode} 
                    icon={getModeIcon()} 
                    isRound={true} 
                    color="base.primary" 
                    bg="base.text"
                    _hover={{ bg: "base.text" }}
                    _focus={{ boxShadow: "base.text" }} />
            </Tooltip>
        </div>
    );
};

export default ModeToggle;