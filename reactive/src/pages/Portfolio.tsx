import React from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

import { projects } from "../Constants";
import ProjectCard from "../components/data/ProjectCard";
import { PageHeader } from "../ui/BuildingBlocks";
import { FadeIn } from "../ui/Transitions";

const ProjectCards = () => {
  return (
    <Flex
      justifyContent="center"
      pl={{ base: 1, md: 16 }}
      pr={{ base: 1, md: 16 }}
      pb={24}
      pt={5}
      m={4}>
      <SimpleGrid columns={{ sm: 1, lg: 2, xl: 3 }} spacingX={8} spacingY={10}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

const Portfolio = () => {
  return (
    <FadeIn>
      <Flex mx={{ base: 0, lg: 12 }} py={2} px={2}>
        <Box>
          <PageHeader
            heading="Portfolio"
            subheading="Games, hackathons, and personal projects"
          />
          <ProjectCards />
        </Box>
      </Flex>
    </FadeIn>
  );
};

export default Portfolio;
