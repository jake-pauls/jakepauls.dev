import React from "react";
import { Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import { InconsolataText } from "../ui/Styles";

const AboutTitle = () => {
    return (
        <InconsolataText
            color="base.text"
            fontSize={{ base: "3em", md: "4em" }}
            alignSelf="flex-start"
            letterSpacing={-4}>
                About
        </InconsolataText>
    );
};

// TODO: Find alternative for rendering image
const AboutImage = () => {
    return (
        <Flex alignSelf="center" justifyContent="center">
            <Image
                src="https://avatars.githubusercontent.com/u/48817786?v=4"
                alt="Jake Pauls"
                borderRadius="full"
                boxShadow="primary"
                mt={{ base: 2, md: 0 }}
                mb={{ base: 20, md: 0 }}/>
        </Flex>
    );
};

const About = () => {
    return (
        <Flex
            maxW="12xl"
            py={2}
            px={2}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                <Stack>
                    <AboutTitle />
                    <Text color="base.text" fontSize="lg">
                    I'm baby chartreuse squid taiyaki, coloring book intelligentsia craft beer ugh typewriter chillwave live-edge farm-to-table helvetica cornhole umami. Flannel live-edge schlitz, cliche direct trade snackwave selvage woke cloud bread taiyaki leggings VHS drinking vinegar art party celiac.
                    <br/> <br />Four dollar toast air plant church-key hoodie put a bird on it street art banjo mixtape cloud bread. Tattooed bitters messenger bag, hoodie poke organic kombucha banjo knausgaard fingerstache chillwave blue bottle cred. Twee forage ugh taxidermy paleo succulents next level snackwave helvetica freegan vinyl master cleanse art party photo booth sustainable.
                    </Text>
                </Stack>
                <AboutImage />
            </SimpleGrid>
        </Flex>
    );
};

export default About;
