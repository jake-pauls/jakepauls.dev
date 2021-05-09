import React from "react";
import { Link as RouteLink } from "react-router-dom";
import { Flex, Link } from "@chakra-ui/react";
import { BsLightningFill } from "react-icons/bs";

import { InconsolataText } from "../../ui/Styles";
import { DividerLightningIcon } from "../../ui/Styles";

type NavItem = {
    route: string;
    text: string;
};

export const DesktopNavItem = ({ route = "/", text = "" }: NavItem) => {
    return (
        <Link as={RouteLink} to={route} color="base.text">
            <InconsolataText fontSize="32px" display="block">
                {text}
            </InconsolataText>
        </Link>
    );
};

export const MobileNavItem = ({ route = "/", text = "" }: NavItem) => {
    return (
        <Flex
            py={1}
            justify={"space-between"}
            align={"center"}>
            <DividerLightningIcon as={BsLightningFill} />
            <Link as={RouteLink} to={route} color="base.text">
                <InconsolataText fontSize="38px" display="block">
                    {text}
                </InconsolataText>
            </Link>
        </Flex>
    );
};
