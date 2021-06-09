import React from "react";
import { Box, Badge, Link } from "@chakra-ui/react";

import { Repository } from "../../types/repository";
import { InconsolataText, RobotoText } from "../../ui/Styles";

const createStatsBadges = (stats: (string | number)[]) => {
    return stats.map((s, k) => (
         <Badge
            key={k}
            color="base.black"
            backgroundColor="base.primary"
            borderRadius="full"
            fontSize={{ base: "10px", md: "xs" }}
            px={2}
            ml={1}
            mr={1}>
            {s}
         </Badge>
    ));
};

export const RepoCard = (repo: Repository) => {
    const stars = "★ " + repo.stars;
    const watchers = "👁 " + repo.watchers;
    const statsArray = [ stars, watchers, repo.language ];

    return (
        <Box
         borderRadius="md"
         boxShadow="sm"
         overflow="hidden"
         mb="auto"
         _hover={{ boxShadow: "md" }}>
         <Box pl={{ base: 1, md: 2 }} pb={{ base: 1, md: 2 }}>
            <Box d={{ base: "block", md: "flex" }} justifyContent="space-between" alignItems="baseline" mt={3}>
                <Box lineHeight="tight">
                    <InconsolataText color="base.grey" fontSize={{ base: "xs", md: "md" }} ml={2} mr={2}>
                        last updated: {repo.lastUpdated}
                    </InconsolataText>
                </Box>
                <Box my={{ base: 2, md: 0 }}>
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
                <Box d={{ base: "block", md: "flex" }} justifyContent="space-around" mx={{ base: 0, md: 4 }} my={4}>
                    {createStatsBadges(statsArray.filter((stat) => {
                        return stat !== "";
                    }))}
                    {repo.license !== "" ?
                        <Badge
                            color="base.black"
                            backgroundColor="base.primary"
                            borderRadius="full"
                            fontSize={{ base: "10px", md: "xs" }}
                            whiteSpace="nowrap"
                            overflow="hidden"
                            textOverflow="ellipsis"
                            width="90px"
                            px={2}
                            ml={1}
                            mr={1}>
                            {repo.license}
                        </Badge>
                    : "" }
                </Box>
            </Box>
        </Box>
    </Box>
   );
};

export default RepoCard;
