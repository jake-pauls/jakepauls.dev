import React from "react";
import { Box, Flex, Stack, SimpleGrid } from "@chakra-ui/react";

import { projects } from "../Constants"
import ProjectCard from "../components/core/ProjectCard"
import { InconsolataText, RobotoText } from "../ui/Styles";

const ProjectCards = () => {
    return (
        <Flex justifyContent="center">
            <SimpleGrid columns={{ base: 1, sm: 1, md: 2, xl: 3 }} spacingX={8} spacingY={10}>
                {projects.map((project) => (
                    <ProjectCard key={ project.title } {...project} />
                ))}
            </SimpleGrid>
        </Flex>
    );
};

const Portfolio = () => {
    return (
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
                        mt={{ base: "-6px", md: "-16px" }}
                        mb={{ base: "4px", md: "12px" }}
                        color="base.grey"
                        fontWeight="semibold"
                        fontSize={{ base: "12px", md: "24px"}}>
                        Games, hackathons, and personal projects
                    </RobotoText>
                </Box>
                <ProjectCards />
            </Stack>
        </Flex>
    );
};

export default Portfolio;
