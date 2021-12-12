import React from "react";
import { Box, Flex, Skeleton, SimpleGrid, Stack } from "@chakra-ui/react";

import { PageHeader, DividerSubheading } from "../ui/BuildingBlocks";
import { FadeIn } from "../ui/Transitions";
import { Repository } from "../types/repository";
import { GitHubProfile } from "../types/gitHubProfile";
import {
  queryRepositories,
  queryProfile,
  queryLanguages,
} from "../hooks/APIQueries";

import RepoCard from "../components/data/RepoCard";
import GitHubProfileCard from "../components/data/GitHubProfileCard";
import GitHubLanguageCard from "../components/data/GitHubLanguageCard";
import GitHubTotalReposCard from "../components/data/GitHubTotalReposCard";

type RepoCardsProps = {
  repos: Object[] | undefined;
  status: string;
};

type ProfileCardProps = {
  profile: Object | undefined;
};

const RepoCards = (props: RepoCardsProps) => {
  return (
    <Flex
      justifyContent="center"
      pl={{ base: 1, md: 16 }}
      pr={{ base: 1, md: 16 }}
      pb={24}
      pt={5}
      m={4}>
      <SimpleGrid columns={{ sm: 1, lg: 2, xl: 3 }} spacingX={8} spacingY={10}>
        {props.status === "success"
          ? props
              .repos!.slice(0, 6)
              .map((repo: Repository) => (
                <RepoCard key={repo.cloneUrl} {...repo} />
              ))
          : ""}
      </SimpleGrid>
    </Flex>
  );
};

const ProfileCard = (props: ProfileCardProps) => {
  return (
    <Box>
      <GitHubProfileCard {...(props.profile as GitHubProfile)} />
    </Box>
  );
};

const Stats = () => {
  const { data: repos, status: reposCallStatus } = queryRepositories();
  const { data: langs, status: langsCallStatus } = queryLanguages();
  const { data: profile, status: profileCallStatus } = queryProfile();

  return (
    <FadeIn>
      <Flex mx={{ base: 0, lg: 12 }} py={2} px={2}>
        <Box width="100%">
          <PageHeader
            heading="Stats"
            subheading="Making my statistics instructor proud"
          />
          <Box p={4}>
            <DividerSubheading subheading="Profile Metrics" />
            {reposCallStatus === "success" &&
            profileCallStatus === "success" &&
            langsCallStatus === "success" ? (
              <FadeIn>
                <Flex justifyContent="center" m={4} pt={2}>
                  <SimpleGrid
                    columns={{ sm: 1, md: 3 }}
                    spacingX={8}
                    spacingY={10}>
                    <ProfileCard profile={profile} />
                    <GitHubLanguageCard langs={langs} />
                    <GitHubTotalReposCard
                      count={repos?.length}
                      status={reposCallStatus}
                    />
                  </SimpleGrid>
                </Flex>
              </FadeIn>
            ) : (
              <Stack mt={4} mb={6}>
                <Skeleton
                  height="50px"
                  startColor="base.primary"
                  endColor="base.background"
                />
              </Stack>
            )}
          </Box>
          <Box m={4} pt={2}>
            <DividerSubheading subheading="Recently Updated Repositories" />
            {reposCallStatus === "success" ? (
              <FadeIn>
                <RepoCards repos={repos} status={reposCallStatus} />
              </FadeIn>
            ) : (
              <Stack mt={4} mb={6}>
                <Skeleton
                  height="100px"
                  startColor="base.primary"
                  endColor="base.background"
                />
              </Stack>
            )}
          </Box>
        </Box>
      </Flex>
    </FadeIn>
  );
};

export default Stats;
