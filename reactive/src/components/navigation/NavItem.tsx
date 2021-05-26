import React from "react";
import { Link as RouteLink } from "react-router-dom";
import { Flex, Link } from "@chakra-ui/react";

import { InconsolataText } from "../../ui/Styles";
import { DividerLightningIcon } from "../../ui/BuildingBlocks";

type NavItem = {
    text: string;
    route?: string;
    url?: string;
    toggleNav?: () => void;
};

export const DesktopNavItem = ({ route = "/", text = "", url }: NavItem) => {
    if (url) {
        return (
            <Link href={url} color="base.text">
                <InconsolataText fontSize="32px" display="block">
                    {text}
                </InconsolataText>
            </Link>
        );
    }

    return (
        <Link as={RouteLink} to={route} color="base.text">
            <InconsolataText fontSize="32px" display="block">
                {text}
            </InconsolataText>
        </Link>
    );
};

export const MobileNavItem = ({ route = "/", text = "", url, toggleNav }: NavItem) => {
    if (url) {
        return (
             <Flex
                py={1}
                justify={"space-between"}
                align={"center"}>
                <DividerLightningIcon />
                <Link href={url} color="base.text" onClick={toggleNav}>
                    <InconsolataText fontSize="38px" display="block">
                        {text}
                    </InconsolataText>
                </Link>
            </Flex>
        );
    }

    return (
        <Flex
            py={1}
            justify={"space-between"}
            align={"center"}>
            <DividerLightningIcon />
            <Link as={RouteLink} to={route} color="base.text" onClick={toggleNav}>
                <InconsolataText fontSize="38px" display="block">
                    {text}
                </InconsolataText>
            </Link>
        </Flex>
    );
};
