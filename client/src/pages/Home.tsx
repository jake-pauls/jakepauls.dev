import React from "react";
import styled from "styled-components";
import { Flex, Stack } from "@chakra-ui/react";
import { BsLightningFill } from "react-icons/bs";

import SocialIcons from "../components/SocialIcons";
import { LightningIcon, MorganiteText, RobotoText } from "../ui/Styles";

const TitleLightningIcon = styled(LightningIcon)`
    font-size: 32px;
    margin-left: 100%;
`;

const SubtitleText = styled(RobotoText)`
    font-weight: 300;
`;

const Title = () => {
    return (
        <Flex
            display="flex"
            alignItems="center"
            flexWrap="wrap">
            <MorganiteText
                fontWeight="600"
                fontSize={{ base: "6em", md: "8em" }}
                color="base.text"
                lineHeight={{ base: "0%", md: "0%" }}>
                    Jake Pauls
                    <TitleLightningIcon as={BsLightningFill} />
            </MorganiteText>
        </Flex>
    );
}

const Subtitle = () => {
    return (
        <SubtitleText
            fontSize={{ base: "1.3em", md: "2em"}}
            color="base.text">
                Software Developer
        </SubtitleText>
    );
}

const Home = () => {
    return (
        <Flex
            align="center"
            justify="center"
            direction={{ base: "column-reverse", md: "row" }}
            minH={{ base: "55vh", md: "72vh" }}
            px={10}
            mb={10}>
            <Stack align="center">
                <Title />
                <Subtitle />
                <SocialIcons color="base.primary"/>
            </Stack>
        </Flex>
    );
};

export default Home;