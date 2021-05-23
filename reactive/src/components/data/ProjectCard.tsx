import React from "react";
import { Box, Badge, IconButton, Image, Tooltip } from "@chakra-ui/react"
import { GrGithub } from "react-icons/gr";
import { FaPaperclip } from "react-icons/fa";

import { InconsolataText, RobotoText } from "../../ui/Styles";

type ProjectCardProps = {
    title: string;
    description: string;
    date: string;
    category: string;
    tech: string[];
    ghLink: string;
    projLink: string;
    image: string;
};

const createTechBadges = (tech: string[]) => {
    return tech.map((t, k) => (
         <Badge
            key={k}
            color="base.black"
            backgroundColor="base.primary"
            borderRadius="full"
            fontSize="xs"
            px="2"
            ml={1}
            mr={1}>
            {t}
         </Badge>
    ));
};

const ProjectCard = (props: ProjectCardProps) => {
    return (
        <Box
            borderRadius="md"
            boxShadow="md"
            overflow="hidden"
            mb="auto"
            _hover={{ boxShadow: "lg" }}>
            <Image src={props.image} alt={props.title} />
            <Box pl={2} pr={2} pb={2}>
                <Box d="flex" justifyContent="space-between" alignItems="baseline" mt={3}>
                    <Box lineHeight="tight">
                        <InconsolataText color="base.grey" fontSize={{ base: "xs", md: "md" }} ml={2} mr={2}>
                            {props.date}
                        </InconsolataText>
                    </Box>
                    <Box>
                        <Badge color="base.black" backgroundColor="base.primary" fontSize="xs" borderRadius="full" px={2} ml={2} mr={2}>
                            {props.category}
                        </Badge>
                    </Box>
                </Box>
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
                        <RobotoText color="base.text" fontSize={{ base: "md", md: "lg" }} ml={2} mr={2}>
                            {props.description}
                        </RobotoText>
                    </Box>
                    <Box d="flex" justifyContent="center">
                        <Box>
                        {
                            props.ghLink === "" ? "" :
                            <Tooltip label="GitHub URL" aria-label="repo-tooltip">
                                <IconButton as="a" href={props.ghLink} _hover={{ bg: "base.background" }} background="base.background" px={2} isRound={true} aria-label="GitHub" icon={<GrGithub size={24} />} />
                            </Tooltip>
                        }
                        {
                            props.projLink === "" ? "" :
                            <Tooltip label="Project URL" aria-label="project-tooltip">
                                <IconButton as="a" href={props.projLink} _hover={{ bg: "base.background" }} background="base.background" px={2} isRound={true} aria-label="Play" icon={<FaPaperclip size={24} />} />
                            </Tooltip>
                        }
                        </Box>
                    </Box>
                    <Box mt={2}>
                        {createTechBadges(props.tech)}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ProjectCard;
