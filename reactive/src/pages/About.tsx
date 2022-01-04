import React from "react";
import {
  Box,
  Flex,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { GrArchlinux } from "react-icons/gr";
import { SiNeovim } from "react-icons/si";

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
      Bachelor of Technology in Games Development&nbsp;
    </Link>
  );

  const archLink = (
    <Link href={Links.ARCH} m={1}>
      ArchLinux <Icon as={GrArchlinux} />
    </Link>
  );

  const neovimLink = (
    <Link href={Links.NVIM} m={1}>
      Neovim <Icon as={SiNeovim} />
    </Link>
  );

  const dotfilesLink = <Link href={Links.DOTFILES_REPO}>dotfiles</Link>;

  const mediumLink = <Link href={Links.MEDIUM}>Medium</Link>;

  return (
    <FadeIn>
      <Flex m={{ base: 0, lg: 16 }} py={2} px={2}>
        <SimpleGrid columns={{ base: 1, lg: 2 }}>
          <Box pb={{ base: 0, lg: 16 }}>
            <PageHeader
              heading="About"
              subheading='"For science." - Glados, Portal 2'
            />
            <Text color="base.text" fontSize="lg">
              Hey! My name is <b>Jake. &nbsp; 👋</b>
              <br />
              <br />I love software. In particular, I'm fascinated with the
              development behind
              <b> games, game engines, and graphics rendering</b>. I'm both
              personally and professionally motivated to navigate the blur
              between programming, visual effects, and art.
              <br />
              <br />
              Currently, I'm an undergraduate student at BCIT finishing a{" "}
              {bcitProgramLink} with an expected graduation date of
              <b> Spring 2023</b>. At the moment, I'm currently looking for
              internship opportunities for <b> Summer 2022</b>.
              <br />
              <br />
              While I finish my degree, I'm making games, exploring graphics
              APIs, and writing about game design/popular culture on{" "}
              {mediumLink}. Recently, I've become a bit of a Linux ({archLink})
              and vim ({neovimLink}) fanatic, so you'll often find my{" "}
              {dotfilesLink} repo is up to date.
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
