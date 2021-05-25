import React from "react";
import { Box, Icon, SimpleGrid, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import { GrGithub } from "react-icons/gr";

import { queryLanguages } from "../../hooks/APIQueries";

import { Language } from "../../types/language";
import { InconsolataText } from "../../ui/Styles";

const GitHubLanguageCard = () => {
    const { data: langs, status: callStatus } = queryLanguages();

    const langStats = (
        <SimpleGrid columns={3} spacingX={2} spacingY={3} p={3}>
            { callStatus === "success" ? langs!.slice(0, 6).map((lang: Language) => (
                <Stat key={lang.language}>
                    <StatLabel color="base.text" fontSize="xs">{lang.language}</StatLabel>
                    <StatNumber color="base.text" >{lang.count}</StatNumber>
                </Stat>
            )) : "" }
        </SimpleGrid>
    );

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
                            Language Count (by repository)
                        </InconsolataText>
                    </Box>
                    <Box>
                        <Icon as={GrGithub} color="base.primary" />
                    </Box>
                </Box>
                <Box>
                    {langStats}
                </Box>
            </Box>
        </Box>
    );
};

export default GitHubLanguageCard;
