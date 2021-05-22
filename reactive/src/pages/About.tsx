import React from "react";
import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";

import { PageHeader } from "../ui/Styles";
import { FadeIn } from "../ui/Transitions";

const AboutImage = () => {
    return (
        <Flex
            justifyContent="center"
            m={{ base: 4, lg: 0 }}
            pb={{ base: 16, lg: 0 }}>
            <Image
                src="https://avatars.githubusercontent.com/u/48817786?v=4"
                alt="Jake Pauls"
                boxShadow="lg"
                borderRadius="full"/>
        </Flex>
    );
};

const About = () => {
    return (
        <FadeIn>
            <Flex
                m={{ base: 0, lg: 24 }}
                py={2}
                px={2}>
                <SimpleGrid columns={{ base: 1, lg: 2 }}>
                    <Box pb={{ base: 0, lg: 16 }}>
                        <PageHeader heading="About" subheading="Obligatory, 'I use Arch btw.'" />
                        <Text color="base.text" fontSize="lg">
                        I'm baby chartreuse squid taiyaki, coloring book intelligentsia craft beer ugh typewriter chillwave live-edge farm-to-table helvetica cornhole umami. Flannel live-edge schlitz, cliche direct trade snackwave selvage woke cloud bread taiyaki leggings VHS drinking vinegar art party celiac.
                        <br/> <br />Four dollar toast air plant church-key hoodie put a bird on it street art banjo mixtape cloud bread. Tattooed bitters messenger bag, hoodie poke organic kombucha banjo knausgaard fingerstache chillwave blue bottle cred. Twee forage ugh taxidermy paleo succulents next level snackwave helvetica freegan vinyl master cleanse art party photo booth sustainable.
                        </Text>
                    </Box>
                    <AboutImage />
                </SimpleGrid>
            </Flex>
        </FadeIn>
    );
};

export default About;
