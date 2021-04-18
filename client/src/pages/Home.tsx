import React from "react";
import styled from "styled-components";
import { Container, Flex, Stack } from "@chakra-ui/react";
import { BsLightningFill } from "react-icons/bs";

import { LightningIcon, MorganiteText, RobotoText } from "../ui/Styles";

const TitleLightningIcon = styled(LightningIcon)`
    font-size: 32px;
    float: right;
`;

const SubtitleText = styled(RobotoText)`
    font-weight: 300;
`;

const Title = () => {
    return (
        <MorganiteText
            fontWeight="600"
            fontSize={{ base: "6em", md: "8em" }}
            color="base.text"
            lineHeight={{ base: "20%", md: "0%" }}>
                Jake Pauls
                <TitleLightningIcon as={BsLightningFill} />
        </MorganiteText>
    );
}

const Subtitle = () => {
    return (
        <SubtitleText
            py="-2em"
            fontSize={{ base: "1.45em", md: "2em"}}
            color="base.text">
                Software Developer
        </SubtitleText>
    );
}

const Home = () => {
    return (
        <Container maxW="3xl" centerContent>
            <Flex
                position="fixed"
                zIndex="-1"
                align="center"
                justify={{ base: "center", md: "center", xl: "space-between" }}
                direction={{ base: "column-reverse", md: "row" }}
                minH={{ base: "55vh", md: "72vh" }}
                px={8}
                mb={10}>
                    <Stack 
                        align="center">
                        <Title />
                        <Subtitle />
                    </Stack>
                </Flex>
        </Container>
    );
};

export default Home;