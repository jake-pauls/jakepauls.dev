import React from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

import { InconsolataText, PageHeader } from "../ui/Styles";
import { FadeIn } from "../ui/Transitions";
import { Repository } from "../types/repository";
import { GitHubProfile } from "../types/gitHubProfile";
import { queryRepositories, queryProfile } from "../hooks/APIQueries";

import Loading from "../components/core/Loading";
import APIError from "../components/core/APIError";
import RepoCard from "../components/data/RepoCard";
import GitHubProfileCard from "../components/data/GitHubProfileCard";
import GitHubLanguageCard from "../components/data/GitHubLanguageCard";

const RepoCards = () => {
    const { isLoading: loading, data: repos, status: callStatus } = queryRepositories();

    if (loading) {
        return (
           <Loading />
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
                )) : <APIError /> }
                </SimpleGrid>
        </Flex>
    );
};

const ProfileCard = () => {
    const { data: profile, status: callStatus } = queryProfile();

    return (
        <Box>
            { callStatus === "success"
              ? <GitHubProfileCard {...profile as GitHubProfile} />
              : "" }
        </Box>
    );
};

const Stats = () => {
    return (
        <FadeIn>
            <Flex
                mx={{ base: 0, lg: 12 }}
                py={2}
                px={2}>
                <Box width="100%">
                    <PageHeader heading="Stats" subheading="Making my statistics instructor proud?" />
                    <Box p={4} >
                        <InconsolataText color="base.grey">Profile Metrics</InconsolataText>
                        <Flex
                            justifyContent="center"
                            m={4}>
                            <SimpleGrid columns={{ sm: 1, md: 2 }} spacingX={8} spacingY={10}>
                                <ProfileCard />
                                <GitHubLanguageCard />
                            </SimpleGrid>
                        </Flex>
                    </Box>
                    <Box p={4}>
                        <InconsolataText color="base.grey">Recently Updated Repositories</InconsolataText>
                        <RepoCards />
                    </Box>
                </Box>
            </Flex>
        </FadeIn>
    );
};

export default Stats;
