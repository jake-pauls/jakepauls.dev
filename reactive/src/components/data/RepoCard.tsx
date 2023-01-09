import { Box, Icon, Link } from "@chakra-ui/react";
import { GoRepoForked } from "react-icons/go";

import { Repository } from "../../types/repository";

import { Badge } from "../../ui/BuildingBlocks";
import { InconsolataText, RobotoText } from "../../ui/Styles";

const createStatsBadges = (stats: (string | number)[]) => {
  let nonEmptyStats = stats.filter((stat) => stat !== "");

  return nonEmptyStats.map((s, k) => <Badge key={k} content={s} />);
};

export const RepoCard = (repo: Repository) => {
  const stars = "★ " + repo.stars;
  const watchers = "👁 " + repo.watchers;
  const statsArray = [stars, watchers, repo.language];

  return (
    <Box
      borderRadius="md"
      boxShadow="md"
      overflow="hidden"
      mb="auto"
      _hover={{ boxShadow: "md" }}>
      <Box pl={{ base: 1, md: 2 }} pb={{ base: 1, md: 2 }}>
        <Box
          display={{ base: "block", md: "flex" }}
          justifyContent="space-between"
          alignItems="baseline"
          mt={3}>
          <Box lineHeight="tight">
            <InconsolataText
              color="base.grey"
              fontSize={{ base: "xs", md: "md" }}
              ml={2}
              mr={2}>
              last updated: {repo.lastUpdated}
            </InconsolataText>
          </Box>
          <Box my={{ base: 2, md: 0 }}>
            <Badge content={repo.size + " kb"} />
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
              <Link href={repo.url} color="base.text">
                {repo.name}
              </Link>
            </RobotoText>
          </Box>
          <Box>
            <RobotoText
              color="base.text"
              fontSize={{ base: "md", md: "lg" }}
              ml={2}
              mr={2}>
              {repo.description}
            </RobotoText>
          </Box>
          <Box
            display={{ base: "block", md: "flex" }}
            justifyContent="space-around"
            mx={{ base: 0, md: 4 }}
            my={4}>
            {createStatsBadges(statsArray)}
            {repo.isFork ? (
              <Badge content={<Icon as={GoRepoForked} w={2.5} h={2.5} />} />
            ) : (
              <></>
            )}
            {repo.license !== "" ? <Badge content={repo.license} /> : <></>}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RepoCard;
