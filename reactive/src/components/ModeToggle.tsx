import React, { useContext } from "react";
import { Tooltip, IconButton, Box } from "@chakra-ui/react";
import { RiMoonClearFill } from "react-icons/ri";
import { WiDaySunny } from "react-icons/wi";

import { ModeContext } from "../contexts/ModeContext";

const ModeToggle = () => {
    const { mode, toggleMode } = useContext(ModeContext);

    const getCurrentMode = (): string => {
        return mode.type === "light" ? "Dark Mode" : "Light Mode";
    }

    const getModeIcon = () => {
        return mode.type === "light" ? <RiMoonClearFill size={28} /> : <WiDaySunny size={36} />;
    };

    return (
        <Box
            zIndex="1"
            position="fixed"
            bottom="1.5em"
            right="1.5em">
            <Tooltip
                aria-label="mode-tooltip"
                label={getCurrentMode()}
                closeOnClick={false}>
                <IconButton
                    aria-label="mode-icon"
                    onClick={toggleMode}
                    icon={getModeIcon()}
                    isRound={true}
                    color="base.primary"
                    bg="base.text"
                    size="lg"
                    _hover={{ bg: "base.text" }}
                    _focus={{ boxShadow: "base.text" }}
                    boxShadow="primary" />
            </Tooltip>
        </Box>
    );
};

export default ModeToggle;
