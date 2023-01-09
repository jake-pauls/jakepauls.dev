import styled from "styled-components";
import { Box, Icon, IconProps } from "@chakra-ui/react";
import { BsLightningChargeFill } from "react-icons/bs";

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
        fontSize={{ base: "16px", md: "24px" }}>
        {props.subheading}
      </RobotoText>
    </Box>
  );
};

const FadedDivider = styled.hr`
  border: 0;
  height: 2px;
  background-image: linear-gradient(to right, #f8bd00, rgba(0, 0, 0, 0));
`;

export const DividerSubheading = (props: PageHeaderProps) => {
  return (
    <Box>
      <RobotoText color="base.text" fontWeight="black">
        {props.subheading}
      </RobotoText>
      <FadedDivider />
    </Box>
  );
};

/* Lightning Icons */
export const LightningIcon = (props: IconProps) => {
  return <Icon color={lightning} as={BsLightningChargeFill} {...props} />;
};

export const DividerLightningIcon = () => {
  return <LightningIcon pt="10px" fontSize="32px" />;
};
