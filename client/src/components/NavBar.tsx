import React, { useState } from "react";
import { Link as RouteLink } from "react-router-dom";
import { Box, Flex, Link, Stack, Text } from "@chakra-ui/react";

import NavToggle from "./NavToggle";
import ModeToggle from "./ModeToggle";
import Logo from "./Logo";

const NavItem = ({ route = "/", text = "" }) => {
    return (
        <Link as={RouteLink} to={route} color="base.text">
            <Text display="block">
                {text}
            </Text>
        </Link>
    );
};


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavBar = () => { 
        setIsOpen(!isOpen) 
    };

    return (
        <Box>
            <Flex
                minHeight={"60px"}
                paddingY={{ base: 1 }}
                paddingX={{ base: 1 }}
                borderBottom={1}
                align={"center"}>

                {/* <NavToggle toggleNav={toggleNavBar} isNavOpen={isOpen} /> */}

                <Logo />

                <Stack
                    flex={{ base: 1, md: 1 }}
                    justify={"flex-end"}
                    align={"center"}
                    direction={"row"}
                    spacing={10}>
                    <NavItem route="/" text="Home" />
                    <NavItem route="/about" text="About" />
                    <ModeToggle />
                </Stack>
            </Flex>
        </Box>
    );
};

export default NavBar;