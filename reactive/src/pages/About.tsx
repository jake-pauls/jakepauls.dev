import React from "react";
import { Box, Flex, Icon, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { GrArchlinux } from "react-icons/gr";

import { InconsolataText, RobotoText } from "../ui/Styles";
import { FadeIn } from "../ui/Transitions";

const AboutImage = () => {
    return (
        <Box ml="auto" mt={{ base: 8, md: 16 }} mb={{ base: 28, md: 0 }} mr={{ base: 0, md: 10 }}>
            <Image
                src="https://avatars.githubusercontent.com/u/48817786?v=4"
                alt="Jake Pauls"
                boxShadow="lg"
                borderRadius="full"/>
        </Box>
    );
};

const About = () => {
    return (
        <FadeIn>
            <Flex
                py={2}
                px={2}>
                <SimpleGrid columns={{ base: 1, md: 2 }}>
                    <Stack spacing={4}>
                        <Box>
                            <InconsolataText
                               color="base.text"
                               fontSize={{ base: "3em", md: "4em" }} >
                               About
                            </InconsolataText>
                            <RobotoText
                                mt={{ base: "-10px", md: "-16px" }}
                                color="base.grey"
                                fontWeight="semibold"
                                fontSize={{ base: "16px", md: "24px"}}>
                                <Icon mr="10px" color="#1793d1" as={GrArchlinux} />
                                I use Arch btw.
                            </RobotoText>
                        </Box>
                        <Text color="base.text" fontSize="lg">
                        I'm baby chartreuse squid taiyaki, coloring book intelligentsia craft beer ugh typewriter chillwave live-edge farm-to-table helvetica cornhole umami. Flannel live-edge schlitz, cliche direct trade snackwave selvage woke cloud bread taiyaki leggings VHS drinking vinegar art party celiac.
                        <br/> <br />Four dollar toast air plant church-key hoodie put a bird on it street art banjo mixtape cloud bread. Tattooed bitters messenger bag, hoodie poke organic kombucha banjo knausgaard fingerstache chillwave blue bottle cred. Twee forage ugh taxidermy paleo succulents next level snackwave helvetica freegan vinyl master cleanse art party photo booth sustainable.
                        </Text>
                    </Stack>
                    <AboutImage />
                </SimpleGrid>
            </Flex>
        </FadeIn>
    );
};

export default About;
