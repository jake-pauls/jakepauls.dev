import { Box, Flex, SimpleGrid, VStack } from "@chakra-ui/react";

import { OTHER_PROJECTS, HIGHLIGHTED_PROJECTS } from "../Constants";
import ProjectCard from "../components/data/ProjectCard";
import { DividerSubheading, PageHeader } from "../ui/BuildingBlocks";
import { FadeIn } from "../ui/Transitions";

const OtherProjectCards = () => {
  return (
    <>
      <Box p={4}>
        <DividerSubheading subheading="Other Projects" />
      </Box>
      <Flex
        justifyContent="center"
        pl={{ base: 1, md: 16 }}
        pr={{ base: 1, md: 16 }}
        pb={24}
        pt={5}
        m={4}>
        <SimpleGrid
          columns={{ sm: 1, lg: 2, xl: 3 }}
          spacingX={8}
          spacingY={10}>
          {OTHER_PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
};

const HighlightedProjectCards = () => {
  return (
    <>
      <Box p={4}>
        <DividerSubheading subheading="Highlighted Projects" />
      </Box>
      <Flex
        justifyContent="center"
        pl={{ base: 1, md: 16 }}
        pr={{ base: 1, md: 16 }}
        pb={24}
        pt={8}
        m={8}>
        <VStack spacing={8}>
          {HIGHLIGHTED_PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </VStack>
      </Flex>
    </>
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
          <HighlightedProjectCards />
          <OtherProjectCards />
        </Box>
      </Flex>
    </FadeIn>
  );
};

export default Portfolio;
