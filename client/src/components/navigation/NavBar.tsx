import React, { useState } from "react";
import { Box, Flex, Collapse } from "@chakra-ui/react";

import NavToggle from "./NavToggle";
import Logo from "./Logo";
import { NavigationStack, MobileNavigationStack } from "./NavigationStack";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavBar = () => { 
        setIsOpen(!isOpen) 
    };

    return (
        <Box mb="20px">
            <Flex align={"center"}>
                <Logo />
                <NavigationStack />
                <NavToggle toggleNav={toggleNavBar} isNavOpen={isOpen} />
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <MobileNavigationStack />
            </Collapse>
        </Box>
    );
};

export default NavBar;