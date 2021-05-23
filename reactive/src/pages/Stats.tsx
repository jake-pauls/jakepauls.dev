import React from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";

import { PageHeader, RobotoText } from "../ui/Styles";
import { FadeIn } from "../ui/Transitions";
import { Repository } from "../types/repository";
import { GitHubProfile } from "../types/gitHubProfile";
import { queryRepositories, queryProfile } from "../hooks/APIQueries";

import Loading from "../components/core/Loading";
import RepoCard from "../components/data/RepoCard";
import GitHubProfileCard from "../components/data/GitHubProfileCard";

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
                )) : <RobotoText>Sorry, data could not be loaded at this time.</RobotoText> }
            </SimpleGrid>
        </Flex>
    );
};

const ProfileCard = () => {
    const { isLoading: loading, data: profile, status: callStatus } = queryProfile();

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
            { callStatus === "success"
              ? <GitHubProfileCard {...profile as GitHubProfile} />
              : <RobotoText>Sorry, data could not be loaded at this time.</RobotoText> }
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
                    <PageHeader heading="Stats" subheading="GitHub metrics and recently updated repositories" />
                    <RepoCards />
                    <ProfileCard />
                </Box>
            </Flex>
        </FadeIn>
    );
};

export default Stats;
