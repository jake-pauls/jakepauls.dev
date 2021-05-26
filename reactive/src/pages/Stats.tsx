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
import GitHubTotalReposCard from "../components/data/GitHubTotalReposCard";

type RepoCardsProps = {
    isLoading: boolean;
    repos: Object[] | undefined;
    status: string;
};

type ProfileCardProps = {
    profile: Object | undefined;
    status: string;
};

const RepoCards = (props: RepoCardsProps) => {
    if (props.isLoading) {
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
                { props.status === "success" ? props.repos!.map((repo: Repository) => (
                        <RepoCard key={repo.cloneUrl} {...repo} />
                )) : <APIError /> }
                </SimpleGrid>
        </Flex>
    );
};

const ProfileCard = (props: ProfileCardProps) => {
    return (
        <Box>
            { props.status === "success"
              ? <GitHubProfileCard {...props.profile as GitHubProfile} />
              : "" }
        </Box>
    );
};

const Stats = () => {
    const { isLoading: loading, data: repos, status: reposCallStatus } = queryRepositories();
    const { data: profile, status: profileCallStatus } = queryProfile();

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
                        <hr />
                        <Flex
                            justifyContent="center"
                            m={4}>
                            <SimpleGrid columns={{ sm: 1, md: 3 }} spacingX={8} spacingY={10}>
                                <ProfileCard profile={profile} status={profileCallStatus}/>
                                <GitHubLanguageCard />
                                <GitHubTotalReposCard count={repos?.length} />
                            </SimpleGrid>
                        </Flex>
                    </Box>
                    <Box p={4}>
                        <InconsolataText color="base.grey">Recently Updated Repositories</InconsolataText>
                        <hr />
                        <RepoCards isLoading={loading} repos={repos} status={reposCallStatus} />
                    </Box>
                </Box>
            </Flex>
        </FadeIn>
    );
};

export default Stats;
