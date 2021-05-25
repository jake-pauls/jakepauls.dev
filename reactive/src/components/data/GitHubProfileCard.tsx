import React from "react";
import { Box, Code, Icon, Image, Link } from "@chakra-ui/react";
import { GrGithub } from "react-icons/gr";

import { GitHubProfile } from "../../types/gitHubProfile";
import { InconsolataText, RobotoText } from "../../ui/Styles";

const GitHubProfileCard = (profile: GitHubProfile) => {
    return (
        <Box
         borderRadius="md"
         boxShadow="md"
         overflow="hidden"
         mb="auto"
         _hover={{ boxShadow: "lg" }}>
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
                        boxSize="75px"
                        boxShadow="md"
                        borderRadius="full"/>
                    <Box mx={2}>
                        <RobotoText
                            color="base.text"
                            align="left"
                            lineHeight={0}
                            fontSize={{ base: "1em", md: "1.75em", sm: "1.25em" }}
                            fontWeight="black"
                            py={3}
                            mx={2}>
                            <Link href={profile.profileUrl} color="base.text">{profile.name}</Link>
                        </RobotoText>
                        <Box m={2}>
                            <Box>
                                <Code color="base.grey" background="base.background">Followers: <b>{profile.followers}</b> &nbsp;</Code>
                                <Code color="base.grey" background="base.background">Following: <b>{profile.following}</b></Code>
                            </Box>
                            <Box>
                                <Code color="base.grey" background="base.background">Total Stars: <b>{profile.totalStars}</b>&nbsp;</Code>
                                <Code color="base.grey" background="base.background">Total Watchers: <b>{profile.totalWatchers}</b></Code>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
   );
};

export default GitHubProfileCard;
