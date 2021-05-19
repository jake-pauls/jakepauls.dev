import React from "react";
import styled from "styled-components";
import { Flex, Stack } from "@chakra-ui/react";

import SocialIcons from "../components/SocialIcons";
import { LightningIcon, MorganiteText, RobotoText } from "../ui/Styles";
import { FadeIn } from "../ui/Transitions";

const SubtitleText = styled(RobotoText)`
    font-weight: 300;
`;

const HomeTitle = () => {
    return (
        <Flex
            display="flex"
            alignItems="center"
            flexWrap="wrap">
            <MorganiteText
                fontSize={{ base: "5em", md: "8em" }}
                color="base.text"
                lineHeight="0%">
                Jake Pauls
                <LightningIcon fontSize={{ base: "20px", md: "28px" }} ml="92%"/>
            </MorganiteText>
        </Flex>
    );
}

const Home = () => {
    return (
        <FadeIn>
            <Flex
                alignItems="center"
                justifyContent="center"
                direction={{ base: "column-reverse", md: "row" }}
                minH={{ base: "55vh", md: "70vh" }}
                px={10}>
                <Stack align="center">
                    <HomeTitle />
                    <SubtitleText
                        fontSize={{ base: "1.3em", md: "2em"}}
                        color="base.text">
                        Software Developer
                    </SubtitleText>
                    <SocialIcons color="base.primary"/>
                </Stack>
            </Flex>
        </FadeIn>
    );
};

export default Home;
