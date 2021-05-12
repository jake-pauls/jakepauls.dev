import React from "react";
import { Box, Badge, IconButton, Tooltip } from "@chakra-ui/react"
import { GrGithub, GrPlayFill } from "react-icons/gr";

import { InconsolataText, RobotoText } from "../../ui/Styles";

type ProjectCardProps = {
    title: string;
    description: string;
    date: string;
    category: string;
    language: string;
};

const ProjectCard = (props: ProjectCardProps) => {
    return (
        <Box
            borderRadius="lg"
            borderColor="base.text"
            boxShadow="md">
            <Box p={4} m={3}>
                <Box d="flex" justifyContent="space-around" alignItems="baseline">
                    <Badge color="base.black" backgroundColor="base.primary" borderRadius="full" px="2">
                        {props.language}
                    </Badge>
                    <Box
                        mt={1}
                        lineHeight="tight">
                        <InconsolataText color="base.grey" fontSize="sm" ml={2} mr={2}>
                            {props.date}
                        </InconsolataText>
                    </Box>
                    <Box
                        mt={1}
                        lineHeight="tight">
                        <InconsolataText color="base.grey" fontSize="sm" ml={2} mr={2}>
                            {props.category}
                        </InconsolataText>
                    </Box>
                </Box>
                <Box
                    mt={1}
                    lineHeight="tight">
                    <InconsolataText color="base.text" fontSize={{ base: "2em", md: "2.5em" }} ml={2} mr={2}>
                        {props.title}
                    </InconsolataText>
                </Box>
                <Box
                    mt={1}
                    lineHeight="tight">
                    <RobotoText color="base.text" fontSize="lg" ml={2} mr={2}>
                        {props.description}
                    </RobotoText>
                </Box>
                <Box d="flex" justifyContent="center" alignItems="baseline">
                    <Tooltip label="GitHub URL" aria-label="repo-tooltip">
                        <IconButton as="a" href="#" color="base.primary" _hover={{ bg: "base.background" }} background="base.background" px={2} isRound={true} aria-label="GitHub" icon={<GrGithub size={24} />} />
                    </Tooltip>
                    <Tooltip label="Project URL" aria-label="project-tooltip">
                        <IconButton as="a" href="#" color="base.primary" _hover={{ bg: "base.background" }} background="base.background" px={2} isRound={true} aria-label="GitHub" icon={<GrPlayFill size={24} />} />
                    </Tooltip>
                </Box>
            </Box>
        </Box>
    );
};

export default ProjectCard;
