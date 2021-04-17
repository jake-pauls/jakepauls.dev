import React from "react";
import { Link as RouteLink } from "react-router-dom";
import { Flex, Link } from "@chakra-ui/react";

import { InconsolataText } from "../../ui/Styles";

type NavItem = {
    route: string;
    text: string;
}

export const DesktopNavItem = ({ route = "/", text = "" }: NavItem) => {
    return (
        <Link as={RouteLink} to={route} color="base.text">
            <InconsolataText fontSize="42px" display="block">
                {text}
            </InconsolataText>
        </Link>
    );
};

export const MobileNavItem = ({ route = "/", text = "" }: NavItem) => {
    return (
        <Flex
            px={3}
            py={3}
            justify={"space-between"}
            align={"center"}>
            <Link as={RouteLink} to={route} color="base.text">
                <InconsolataText fontSize="42px" display="block">
                    {text}
                </InconsolataText>
            </Link>
        </Flex>
    );
};