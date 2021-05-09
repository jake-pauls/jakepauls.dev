import React from "react";
import { Flex, Stack } from "@chakra-ui/react";
import { BsLightningFill } from "react-icons/bs";

import { DesktopNavItem, MobileNavItem } from "./NavItem";
import { DividerLightningIcon } from "../../ui/Styles";

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
                spacing={2}>
                <DesktopNavItem route="/about" text="about" />
                <DividerLightningIcon as={BsLightningFill} />
                <DesktopNavItem route="/portfolio" text="portfolio" />
                <DividerLightningIcon as={BsLightningFill} />
                <DesktopNavItem route="/stats" text="stats" />
                <DividerLightningIcon as={BsLightningFill} />
                <DesktopNavItem route="/resume" text="resume" />
            </Stack>
        </Flex>
    );
};

export const MobileNavigationStack = () => {
    return (
        <Stack
            m={3}
            display={{ md: 'none' }}
            borderBottomWidth="1px"
            borderBottomColor="base.grey"
            borderTopWidth="1px"
            borderTopColor="base.grey">
            <MobileNavItem route="/about" text="about" />
            <MobileNavItem route="/portfolio" text="portfolio" />
            <MobileNavItem route="/stats" text="stats" />
            <MobileNavItem route="/resume" text="resume" />
        </Stack>
    );
};
