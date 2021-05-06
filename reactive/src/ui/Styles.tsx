import styled from "styled-components";
import { Icon, Text } from "@chakra-ui/react";

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

/* Icon */
export const LightningIcon = styled(Icon)`
    color: ${ lightning };
`;

export const DividerLightningIcon = styled(LightningIcon)`
    padding-top: 10px;
    font-size: 32px;
`;

export const TitleLightningIcon = styled(LightningIcon)`
    font-size: 32px;
    margin-left: 100%;
`;
