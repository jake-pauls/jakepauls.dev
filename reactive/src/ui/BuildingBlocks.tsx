import React from "react";
import { Box, Divider, Icon, IconProps } from "@chakra-ui/react";
import { BsLightningFill } from "react-icons/bs";

import { lightning, InconsolataText, RobotoText } from "./Styles";

/* Heading and Subheading */
type PageHeaderProps = {
    heading?: string;
    subheading: string;
};

export const PageHeader = (props: PageHeaderProps) => {
    return (
        <Box>
            <InconsolataText
                color="base.text"
                fontSize={{ base: "3em", md: "4em" }}
                letterSpacing={-4}>
                {props.heading}
            </InconsolataText>
            <RobotoText
                mt={{ base: "-10px", md: "-16px" }}
                mb="12px"
                color="base.grey"
                fontWeight="semibold"
                fontSize={{ base: "16px", md: "24px"}}>
                {props.subheading}
            </RobotoText>
        </Box>
    );
};

export const DividerSubheading = (props: PageHeaderProps) => {
    return (
        <Box>
            <RobotoText color="base.text" fontWeight="black">{props.subheading}</RobotoText>
            <Divider className="faded-hr" orientation="horizontal" />
        </Box>
    );
};

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
