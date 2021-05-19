import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

import { LightningIcon, MorganiteText } from "../../ui/Styles";

const LogoText = styled(MorganiteText)`
    font-size: 100px;
`;

const Logo = () => {
    return (
        <Flex
            flex={{ base: 1 }}
            justify={{ base: "start", md: "start" }}>
            <Link to="/" color="base.text">
                <LogoText color="base.text">JP</LogoText>
            </Link>
            <LightningIcon mt="78px" ml="-10px" fontSize="30px"/>
        </Flex>
    );
};

export default Logo;
