import React from "react";
import { Box, Badge, Flex, Link } from "@chakra-ui/react";

import { Repository } from "../../types/repository";
import { InconsolataText, RobotoText } from "../../ui/Styles";

const createStatsBadges = (stats: (string | number)[]) => {
    return stats.map((s, k) => (
         <Badge
            key={k}
            color="base.black"
            backgroundColor="base.primary"
            borderRadius="full"
            fontSize="xs"
            px="2"
            ml={1}
            mr={1}>
            {s}
         </Badge>
    ));
};

export const RepoCard = (repo: Repository) => {
    const stars = "★ " + repo.stars;
    const watchers = "👁 " + repo.watchers;
    const statsArray = [ stars, watchers, repo.license, repo.language ];

    return (
        <Box
         borderRadius="md"
         boxShadow="md"
         overflow="hidden"
         mb="auto"
         _hover={{ boxShadow: "lg" }}>
         <Box pl={2} pr={2} pb={2}>
            <Box d="flex" justifyContent="space-between" alignItems="baseline" mt={3}>
                <Box lineHeight="tight">
                    <InconsolataText color="base.grey" fontSize={{ base: "xs", md: "md" }} ml={2} mr={2}>
                        last updated: {repo.lastUpdated}
                    </InconsolataText>
                </Box>
                <Box>
                    <Badge color="base.black" backgroundColor="base.primary" fontSize="xs" borderRadius="full" px={2} ml={2} mr={2}>
                        {repo.size} kB
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
                        <Link href={repo.url} color="base.text">{repo.name}</Link>
                    </RobotoText>
                </Box>
                <Box>
                    <RobotoText color="base.text" fontSize={{ base: "md", md: "lg" }} ml={2} mr={2}>
                        {repo.description}
                    </RobotoText>
                </Box>
                <Flex justifyContent="space-between" m={4}>
                    {createStatsBadges(statsArray.filter((stat) => {
                        return stat !== "";
                    }))}
                </Flex>
            </Box>
        </Box>
    </Box>
   );
};

export default RepoCard;
