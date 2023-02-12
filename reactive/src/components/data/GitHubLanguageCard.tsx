import {
  Box,
  Icon,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { GrGithub } from "react-icons/gr";

import { Language } from "../../types/language";
import { InconsolataText } from "../../ui/Styles";

type GitHubLanguageCardProps = {
  langs: Language[] | undefined;
};

const GitHubLanguageCard = (props: GitHubLanguageCardProps) => {
  const LanguageStatistics = () => {
    return (
      <Box>
        <SimpleGrid
          columns={{ base: 2, md: 3 }}
          spacingX={2}
          spacingY={3}
          px={{ base: 2, md: 3 }}
          py={3}>
          {props.langs!.slice(0, 6).map((lang: Language) => (
            <Stat key={lang.language}>
              <StatLabel
                color="base.text"
                fontSize={{ base: "10px", md: "xs" }}>
                {lang.language}
              </StatLabel>
              <StatNumber color="base.text">{lang.count}</StatNumber>
            </Stat>
          ))}
        </SimpleGrid>
      </Box>
    );
  };

  return (
    <Box
      borderRadius="md"
      boxShadow="sm"
      overflow="hidden"
      mb="auto"
      _hover={{ boxShadow: "md" }}>
      <Box pl={2} pr={2} pb={2}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
          mx={1}
          mt={3}>
          <Box lineHeight="tight">
            <InconsolataText
              color="base.grey"
              fontSize={{ base: "xs", lg: "sm" }}
              ml={2}
              mr={4}>
              Language Count (by repository)
            </InconsolataText>
          </Box>
          <Box>
            <Icon as={GrGithub} color="base.primary" />
          </Box>
        </Box>
        <LanguageStatistics />
      </Box>
    </Box>
  );
};

export default GitHubLanguageCard;
