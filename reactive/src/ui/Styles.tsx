import React from "react";
import styled from "styled-components";
import { Icon, IconProps, Text } from "@chakra-ui/react";
import { BsLightningFill } from "react-icons/bs";

/* Colors */
export const lightning = "#F8BD00";
export const white = "#E8E8E8";
export const black = "#151515";
export const grey = "#A1A1A1";

/* Typography */
export const MorganiteText = styled(Text)`
    font-family: Morganite;
    font-style: Italic;
    font-size: 16px;
`;

export const InconsolataText = styled(Text)`
    font-weight: bold;
    font-family: Inconsolata;
    font-size: 16px;
    letter-spacing: -1.5px;
`;

export const RobotoText = styled(Text)`
    font-family: Roboto;
    font-size: 16px;
`;

/* Lightning Icons */
export const LightningIcon = (props : IconProps) => {
    return (
        <Icon color={lightning} as={BsLightningFill} {...props} />
    );
};

export const DividerLightningIcon = () => {
    return (
        <LightningIcon pt="10px" fontSize="32px"/>
    );
};
