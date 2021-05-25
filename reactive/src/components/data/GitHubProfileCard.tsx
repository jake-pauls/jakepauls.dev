import React from "react";
import { Box, Code, Icon, Image, Link } from "@chakra-ui/react";
import { GrGithub } from "react-icons/gr";

import { GitHubProfile } from "../../types/gitHubProfile";
import { InconsolataText, RobotoText } from "../../ui/Styles";

const GitHubProfileCard = (profile: GitHubProfile) => {
    return (
        <Box
         borderRadius="md"
         boxShadow="sm"
         overflow="hidden"
         mb="auto"
         _hover={{ boxShadow: "md" }}>
         <Box pl={2} pr={2} pb={2}>
            <Box d="flex" justifyContent="space-between" alignItems="baseline" mx={1} mt={3}>
                <Box lineHeight="tight">
                    <InconsolataText color="base.grey" fontSize={{ base: "xs", md: "md" }} ml={2} mr={2}>
                        {profile.location}
                    </InconsolataText>
                </Box>
                <Box>
                    <Icon as={GrGithub} color="base.primary" />
                </Box>
            </Box>
            <Box mt={1} mb={3}>
                <Box d="flex" alignItems="center" m={4}>
                    <Image
                        src={profile.avatarUrl}
                        alt="Jake Pauls"
                        boxSize={{ base: "50px", lg: "75px"}}
                        boxShadow="md"
                        borderRadius="full"/>
                    <Box mx={2}>
                        <RobotoText
                            color="base.text"
                            align="left"
                            lineHeight={1}
                            fontSize={{ base: "0.75em", sm: "1.25em", md: "1.5em" }}
                            fontWeight="black"
                            py={{ base: 0, md: 3 }}
                            mx={2}>
                            <Link href={profile.profileUrl} color="base.text">{profile.name}</Link>
                        </RobotoText>
                    </Box>
                </Box>
                <Box m={2} alignSelf="left">
                    <Box>
                        <Code color="base.grey" background="base.background" fontSize={{ base: "xs", md: "sm" }}>Followers: <b>{profile.followers}</b> &nbsp;</Code>
                        <Code color="base.grey" background="base.background" fontSize={{ base: "xs", md: "sm" }}>Following: <b>{profile.following}</b></Code>
                    </Box>
                    <Box>
                        <Code color="base.grey" background="base.background" fontSize={{ base: "xs", md: "sm" }}>Total Stars: <b>{profile.totalStars}</b>&nbsp;</Code>
                        <Code color="base.grey" background="base.background" fontSize={{ base: "xs", md: "sm" }}>Total Watchers: <b>{profile.totalWatchers}</b></Code>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
   );
};

export default GitHubProfileCard;
