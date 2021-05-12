import React from "react";
import { Flex, Stack, SimpleGrid } from "@chakra-ui/react";

import ProjectCard from "../components/core/ProjectCard"
import { InconsolataText } from "../ui/Styles";

const ProjectCards = () => {
    return (
        <Flex justifyContent="center">
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                <ProjectCard
                    title="The Phantom Blade"
                    description="👹 Proof of concept for a Metroidvania-style game built in Unity... psst... it involves ninjas"
                    date="March 2021"
                    category="Game"
                    language="C#" />
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
            <Stack width="100%">
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
