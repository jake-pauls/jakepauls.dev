import React from "react";
import { Box, Flex, SimpleGrid, Spinner } from "@chakra-ui/react";

import { PageHeader, RobotoText } from "../ui/Styles";
import { FadeIn } from "../ui/Transitions";
import { Repository } from "../types/repository";
import { queryRepositories } from "../hooks/APIQueries";

import RepoCard from "../components/data/RepoCards";

const RepoCards = () => {
    const { isLoading: loading, data: repos, status: callStatus } = queryRepositories();

    if (loading) {
        return (
            <Flex justifyContent="center" pt={12}>
               <Spinner
                   thickness="4px"
                   speed="0.85s"
                   emptyColor="base.grey"
                   color="base.primary"
                   size="xl" />
            </Flex>
        );
    }

    return (
        <Flex
            justifyContent="center"
            pl={{ base: 1, md: 16 }}
            pr={{ base: 1, md: 16 }}
            pb={24}
            pt={5}
            m={4}>
            <SimpleGrid columns={{ sm: 1, lg: 2, xl: 3 }} spacingX={8} spacingY={10}>
                { callStatus === "success" ? repos!.map((repo: Repository) => (
                    <RepoCard key={repo.cloneUrl} {...repo} />
                )) : <RobotoText>Sorry, data could not be loaded at this time.</RobotoText> }
            </SimpleGrid>
        </Flex>
    );
};

const Stats = () => {
    return (
        <FadeIn>
            <Flex
                mx={{ base: 0, lg: 12 }}
                py={2}
                px={2}>
                <Box>
                    <PageHeader heading="Stats" subheading="Trying to make my statistics instructor proud" />
                    <RepoCards />
                </Box>
            </Flex>
        </FadeIn>
    );
};

export default Stats;
