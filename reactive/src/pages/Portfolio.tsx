import React from "react";
import { Box, Flex, Stack, SimpleGrid } from "@chakra-ui/react";

import { projects } from "../Constants"
import ProjectCard from "../components/core/ProjectCard"
import { InconsolataText, RobotoText } from "../ui/Styles";
import { FadeIn } from "../ui/Transitions";

const ProjectCards = () => {
    return (
        <Flex
            justifyContent="center"
            pl={{ base: 1, md: 20 }}
            pr={{ base: 1, md: 20 }}
            pb={24}
            pt={5}
            m={10}>
            <SimpleGrid columns={{ sm: 1, lg: 2, xl: 3 }} spacingX={8} spacingY={10}>
                {projects.map((project) => (
                    <ProjectCard key={ project.title } {...project} />
                ))}
            </SimpleGrid>
        </Flex>
    );
};

const Portfolio = () => {
    return (
        <FadeIn>
            <Flex
                maxW="12xl"
                py={2}
                px={2}>
                <Stack>
                    <Box>
                        <InconsolataText
                            color="base.text"
                            fontSize={{ base: "3em", md: "4em" }}
                            letterSpacing={-4}>
                            Portfolio
                        </InconsolataText>
                        <RobotoText
                            mt={{ base: "-10px", md: "-16px" }}
                            mb="12px"
                            color="base.grey"
                            fontWeight="semibold"
                            fontSize={{ base: "16px", md: "24px"}}>
                            Games, hackathons, and personal projects
                        </RobotoText>
                    </Box>
                    <ProjectCards />
                </Stack>
            </Flex>
        </FadeIn>
    );
};

export default Portfolio;
