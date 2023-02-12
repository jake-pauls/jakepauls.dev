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

  const ubceaLink = <Link href={Links.UBCEA}>UBC Esports Association</Link>;

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
              Hey! My name is <b>Jake. &nbsp; 👋</b>
              <br />
              <br />I love software. In particular, I'm fascinated with the
              development behind
              <b> game engines, graphics, and games</b>. I'm both personally and
              professionally motivated to navigate the blurs that exist between
              programming, art, and culture. I love empowering creative
              workflows as much as I love understanding what makes things work.
              <br />
              <br />
              Currently, I'm an undergraduate student at BCIT finishing a{" "}
              {bcitProgramLink} with an expected graduation date of
              <b> April 2023</b>. At the moment, I'm currently on the lookout
              for internship and (potentially!) full-time opportunities starting{" "}
              <b> May 2023</b>.
              <br />
              <br />
              While I finish my degree I'm studying engines, learning about
              graphics, making games, and volunteering as a Director at{" "}
              {ubceaLink}!
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
