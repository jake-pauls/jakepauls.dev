import React from "react";
import { Flex, Stack, SimpleGrid } from "@chakra-ui/react";

import { Projects } from "../Constants"
import ProjectCard from "../components/core/ProjectCard"
import { InconsolataText } from "../ui/Styles";

const ProjectCards = () => {
    return (
        <Flex justifyContent="center">
            <SimpleGrid columns={{ base: 1, sm: 1, md: 2, xl: 3 }} spacing={8}>
                { Projects.map((project) => (
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
                <InconsolataText
                color="base.text"
                fontSize={{ base: "3em", md: "4em" }}
                letterSpacing={-4}>
                    Portfolio
                </InconsolataText>
                <ProjectCards />
            </Stack>
        </Flex>
    );
};

export default Portfolio;
