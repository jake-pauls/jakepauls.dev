import React from "react";
import { Box } from "@chakra-ui/react";
import { VscMenu, VscClose } from "react-icons/vsc";

type NavToggleProps = {
    toggleNav: () => void;
    isNavOpen: Boolean;
}

const NavToggle = ({ toggleNav, isNavOpen }: NavToggleProps) => {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggleNav}>
            { isNavOpen ? <VscClose /> : <VscMenu /> } 
        </Box>
    );
};

export default NavToggle;