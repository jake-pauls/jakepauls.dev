import React from "react";
import { Box, Badge, IconButton, Tooltip } from "@chakra-ui/react"
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
};

const createTechBadges = (tech: string[]) => {
    return tech.map((t, k) => (
         <Badge key={k} color="base.black" backgroundColor="base.primary" borderRadius="full" px="2" ml={1} mr={1}>
            {t}
         </Badge>
    ));
};

const ProjectCard = (props: ProjectCardProps) => {
    return (
        <Box
            borderRadius="lg"
            borderColor="base.text"
            boxShadow="md">
            <Box p={3} m={3}>
                <Box d="flex" justifyContent="space-between" alignItems="baseline">
                    <Box
                        mt={1}
                        lineHeight="tight">
                        <InconsolataText color="base.grey" fontSize="md" ml={2} mr={2}>
                            {props.date}
                        </InconsolataText>
                    </Box>
                    <Box mt={1}>
                        <Badge color="base.black" backgroundColor="base.primary" fontSize="sm" borderRadius="full" px={2} ml={2} mr={2}>
                            {props.category}
                        </Badge>
                    </Box>
                </Box>
                <Box mt={1}>
                    <InconsolataText
                        color="base.text"
                        align="center"
                        lineHeight={1}
                        fontSize={{ base: "2em", md: "2.5em" }}
                        p={2}
                        ml={2}
                        mr={2}>
                        {props.title}
                    </InconsolataText>
                </Box>
                <Box mt={1}>
                    <RobotoText color="base.text" fontSize={{ base: "md", md: "lg" }} ml={2} mr={2}>
                        {props.description}
                    </RobotoText>
                </Box>
                <Box d="flex" justifyContent="center" alignItems="baseline">
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
                <Box d="flex" justifyContent="center" alignItems="baseline" mt={3} mb={2} ml={2} mr={2}>
                    {createTechBadges(props.tech)}
                </Box>
            </Box>
        </Box>
    );
};

export default ProjectCard;
