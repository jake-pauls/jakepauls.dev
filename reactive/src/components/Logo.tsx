import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { BsLightningFill } from "react-icons/bs";

import { MorganiteText, LightningIcon } from "../ui/Styles";

const LogoText = styled(MorganiteText)`
    font-size: 100px;
`;

const LogoLightningIcon = styled(LightningIcon)`
    margin-top: 78px;
    margin-left: -10px;
    font-size: 30px;
`;

const Logo = () => {
    return (
        <Flex
            flex={{ base: 1 }}
            justify={{ base: "start", md: "start" }}>
                <Link to="/" color="base.text">
                    <LogoText color="base.text">JP</LogoText>
                </Link>
                <LogoLightningIcon as={BsLightningFill} />
        </Flex>
    );
};

export default Logo;
