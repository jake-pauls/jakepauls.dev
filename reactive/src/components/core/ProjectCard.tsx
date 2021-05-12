import React from "react";
import { Box } from "@chakra-ui/react"

import { InconsolataText } from "../../ui/Styles";

type ProjectCardProps = {
    title: string
};

const ProjectCard = ({ title }: ProjectCardProps) => {
    return (
        <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg">
            <InconsolataText>{title}</InconsolataText>
        </Box>
    );
};

export default ProjectCard;
