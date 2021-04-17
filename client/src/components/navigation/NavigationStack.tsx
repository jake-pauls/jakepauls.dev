import React from "react";
import { Flex, Stack } from "@chakra-ui/react";

import ModeToggle from "../ModeToggle";
import { DesktopNavItem, MobileNavItem } from "./NavItem";

export const NavigationStack = () => {
    return(
        <Flex
            display={{ base: "none", md: "flex" }}
            marginLeft={10}>
            <Stack
                flex={{ base: 1, md: 1 }}
                justify={"flex-end"}
                align={"center"}
                direction={"row"}
                spacing={20}>
                <DesktopNavItem route="/" text="home" />
                <DesktopNavItem route="/about" text="about" />
                <ModeToggle />
            </Stack>
        </Flex>
    );
};

export const MobileNavigationStack = () => {
    return (
        <Stack
            p={3}
            m={3}
            display={{ md: 'none' }}
            borderBottomWidth="1px"
            borderBottomColor="base.grey"
            borderTopWidth="1px"
            borderTopColor="base.grey">
            <MobileNavItem route="/" text="home" />
            <MobileNavItem route="/about" text="about" />
        </Stack>
    );
};