import styled from "styled-components";
import { Box, Flex, Stack } from "@chakra-ui/react";

import SocialIcons from "../components/SocialIcons";
import { MorganiteText, RobotoText } from "../ui/Styles";
import { LightningIcon } from "../ui/BuildingBlocks";
import { FadeIn } from "../ui/Transitions";

const SubtitleText = styled(RobotoText)`
  font-weight: 300;
`;

const HomeTitle = () => {
  return (
    <Flex display="flex" flexWrap="wrap" alignItems="baseline">
      <MorganiteText
        fontSize={{ base: "5em", md: "8em" }}
        color="base.text"
        lineHeight="0%">
        Jake Pauls
      </MorganiteText>
      <LightningIcon fontSize={{ base: "20px", md: "28px" }} />
    </Flex>
  );
};

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
          <Box>
            <SubtitleText
              fontSize={{ base: "1.3em", md: "2em" }}
              color="base.text">
              Software Developer
            </SubtitleText>
          </Box>
          <SocialIcons color="base.primary" />
        </Stack>
      </Flex>
    </FadeIn>
  );
};

export default Home;
