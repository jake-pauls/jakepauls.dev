import { Box, IconButton, Tooltip, useMediaQuery } from "@chakra-ui/react";
import { GrGithub } from "react-icons/gr";
import { FaPaperclip, FaPlay } from "react-icons/fa";

import { ImageCarousel } from "./ImageCarousel";
import { Badge } from "../../ui/BuildingBlocks";
import { InconsolataText, RobotoText } from "../../ui/Styles";

type ProjectCardProps = {
  title: string;
  description: string;
  date: string;
  category: string;
  tech: string[];
  ghLink?: string;
  projLink?: string;
  videoLink?: string;
  imageSrcs?: string[];
};

type ProjectLink = {
  link?: string;
};

const createTechBadges = (tech: string[]) => {
  return tech.map((t, k) => <Badge key={k} content={t} />);
};

const GitHubLink = ({ link }: ProjectLink) => {
  if (!link) return <></>;

  return (
    <Tooltip label="GitHub URL" aria-label="repo-tooltip">
      <IconButton
        as="a"
        href={link}
        _hover={{ bg: "base.background" }}
        background="base.background"
        px={2}
        isRound={true}
        aria-label="GitHub"
        icon={<GrGithub size={24} />}
      />
    </Tooltip>
  );
};

const ProjectLink = ({ link }: ProjectLink) => {
  if (!link) return <></>;

  return (
    <Tooltip label="Project URL" aria-label="project-tooltip">
      <IconButton
        as="a"
        href={link}
        _hover={{ bg: "base.background" }}
        background="base.background"
        px={2}
        isRound={true}
        aria-label="Play"
        icon={<FaPaperclip size={24} />}
      />
    </Tooltip>
  );
};

const VideoLink = ({ link }: ProjectLink) => {
  if (!link) return <></>;

  return (
    <Tooltip label="Video" aria-label="video-tooltip">
      <IconButton
        as="a"
        href={link}
        _hover={{ bg: "base.background" }}
        background="base.background"
        px={2}
        isRound={true}
        aria-label="Video"
        icon={<FaPlay size={18} />}
      />
    </Tooltip>
  );
};

const ProjectCard = (props: ProjectCardProps) => {
  // TODO: Make image gallery responsive for mobile
  const [isMobile] = useMediaQuery("(max-width: 1350px)");

  return (
    <Box
      borderRadius="md"
      boxShadow="md"
      overflow="hidden"
      mb="auto"
      maxWidth={{ base: "250px", lg: "3xl", md: "xl" }}>
      <Box pl={2} pr={2} pb={2}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
          mt={3}>
          <Box lineHeight="tight">
            <InconsolataText
              color="base.grey"
              fontSize={{ base: "xs", md: "md" }}
              ml={2}
              mr={2}>
              {props.date}
            </InconsolataText>
          </Box>
          <Box>
            <Badge content={props.category} />
          </Box>
        </Box>
        {!isMobile ? <ImageCarousel images={props.imageSrcs} /> : <></>}
        <Box alignItems="space-between" mt={1} mb={3}>
          <Box>
            <RobotoText
              color="base.text"
              align="center"
              lineHeight={1}
              fontSize={{ base: "1em", md: "1.75em", sm: "1.25em" }}
              fontWeight="black"
              p={3}
              ml={2}
              mr={2}>
              {props.title}
            </RobotoText>
          </Box>
          <Box>
            <RobotoText
              color="base.text"
              fontSize={{ base: "md", md: "lg" }}
              ml={2}
              mr={2}>
              {props.description}
            </RobotoText>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box>
              <GitHubLink link={props.ghLink} />
              <ProjectLink link={props.projLink} />
              <VideoLink link={props.videoLink} />
            </Box>
          </Box>
          <Box mt={2}>{createTechBadges(props.tech)}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
