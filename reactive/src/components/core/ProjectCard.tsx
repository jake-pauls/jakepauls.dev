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
    imageUrl: string;
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
            borderRadius="md"
            boxShadow="sm"
            overflow="hidden"
            mb="auto"
            _hover={{ boxShadow: "md" }}>
            <Image src={props.imageUrl} alt={props.title} />
            <Box pl={2} pr={2} pb={2} m={3} height="100%`">
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
                <Box alignItems="space-between">
                    <Box mt={1}>
                        <RobotoText
                            color="base.text"
                            align="center"
                            lineHeight={1}
                            fontSize={{ base: "1.75em", md: "2.25em" }}
                            fontWeight="black"
                            p={3}
                            ml={2}
                            mr={2}>
                            {props.title}
                        </RobotoText>
                    </Box>
                    <Box mt={1}>
                        <RobotoText color="base.text" fontSize={{ base: "md", md: "lg" }} ml={2} mr={2}>
                            {props.description}
                        </RobotoText>
                    </Box>
                    <Box d="flex" justifyContent="space-between" alignItems="flex-end">
                        <Box>
                            {createTechBadges(props.tech)}
                        </Box>
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
                </Box>
            </Box>
        </Box>
    );
};

export default ProjectCard;
