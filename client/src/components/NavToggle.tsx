import React from "react";
import { Box } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

type NavToggleProps = {
    toggleNav: () => void;
    isNavOpen: Boolean;
}

const NavToggle = ({ toggleNav, isNavOpen }: NavToggleProps) => {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggleNav}>
            { isNavOpen ? <CloseIcon /> : <HamburgerIcon /> } 
        </Box>
    );
};

export default NavToggle;