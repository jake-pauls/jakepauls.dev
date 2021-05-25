import React from "react";
import { Box, Icon } from "@chakra-ui/react";
import { GrGithub } from "react-icons/gr";

import { InconsolataText, RobotoText } from "../../ui/Styles";

const GitHubTotalReposCard = ({ count = 0 }) => {
    return (
        <Box
             borderRadius="md"
             boxShadow="sm"
             mb="auto"
             overflow="hidden"
             _hover={{ boxShadow: "md" }}>
             <Box pl={2} pr={2} pb={2}>
                <Box d="flex" justifyContent="space-between" alignItems="baseline" mx={1} mt={3}>
                    <Box lineHeight="tight">
                        <InconsolataText color="base.grey" fontSize={{ base: "xs", lg: "sm" }} ml={2} mr={2}>
                            Z = (x - μ) / σ
                        </InconsolataText>
                    </Box>
                    <Box>
                        <Icon as={GrGithub} color="base.primary" />
                    </Box>
                </Box>
                <Box d="flex" justifyContent="center" pt={2} px={2}>
                    <RobotoText fontSize="3xl" fontWeight="black">{count}</RobotoText>
                </Box>
                <Box d="flex" justifyContent="center">
                    <RobotoText fontSize="lg" fontWeight="medium">Total Repositories</RobotoText>
                </Box>
             </Box>
        </Box>
    );
};

export default GitHubTotalReposCard;
