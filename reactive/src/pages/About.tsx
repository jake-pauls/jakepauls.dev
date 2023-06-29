import { Box, Flex, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";

import { Links } from "../Constants";
import { PageHeader } from "../ui/BuildingBlocks";
import { FadeIn } from "../ui/Transitions";

const AboutImage = () => {
  return (
    <Flex
      justifyContent="center"
      alignSelf="center"
      m={{ base: 4, lg: 0 }}
      pb={{ base: 16, md: 16, lg: 0 }}>
      <Image
        src="https://avatars.githubusercontent.com/u/48817786?v=4"
        alt="Jake Pauls"
        boxSize={{ base: "150px", md: "xs", lg: "sm" }}
        boxShadow="lg"
        borderRadius="full"
      />
    </Flex>
  );
};

const About = () => {
  const bcitProgramLink = (
    <Link href={Links.BCIT_PROGRAM}>
      Bachelor of Technology in Games Development
    </Link>
  );

  const flxLink = <Link href={Links.FLX}>Inflexion Games</Link>;
  const nightingaleLink = <Link href={Links.NIGHTINGALE}>Nightingale</Link>;

  return (
    <FadeIn>
      <Flex m={{ base: 0, lg: 16 }} py={2} px={2}>
        <SimpleGrid columns={{ base: 1, lg: 2 }}>
          <Box pb={{ base: 0, lg: 16 }}>
            <PageHeader
              heading="About"
              subheading='"It always starts with a lighthouse." - Elizabeth, Bioshock Infinite'
            />
            <Text color="base.text" fontSize="lg">
              Hi! My name is <b>Jake. &nbsp; 👋</b>
              <br />
              <br />I specialize in the development of
              <b> game engines, graphics, and creative workflows</b>. I'm
              personally and professionally motivated to navigate the blurs that
              exist between programming, art, and culture. I love exploring
              creative processes as much as I enjoy understanding what makes
              things work.
              <br />
              <br />
              I'm currently an intern at {flxLink} working on {nightingaleLink} and
              I'm also a recent graduate from BCIT with a {bcitProgramLink}. I'm
              currently on the lookout for full-time opportunities starting{" "}
              <b> January 2024</b>.
              <br />
              <br />
              In my free time I'm studying engines, learning more about graphics, and
              making games!
              <br />
              <br />
            </Text>
          </Box>
          <AboutImage />
        </SimpleGrid>
      </Flex>
    </FadeIn>
  );
};

export default About;
