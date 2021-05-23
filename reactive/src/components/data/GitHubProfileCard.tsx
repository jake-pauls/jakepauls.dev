import React from "react";
import { Box, Link } from "@chakra-ui/react";

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
            <Box d="flex" justifyContent="space-between" alignItems="baseline" mt={3}>
                <Box lineHeight="tight">
                    <InconsolataText color="base.grey" fontSize={{ base: "xs", md: "md" }} ml={2} mr={2}>
                        {profile.location}
                    </InconsolataText>
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
                        <Link href={profile.profileUrl} color="base.text">{profile.name}</Link>
                    </RobotoText>
                </Box>
                <Box>
                    <RobotoText color="base.text" fontSize={{ base: "md", md: "lg" }} ml={2} mr={2}>
                        {profile.location}
                    </RobotoText>
                </Box>
            </Box>
        </Box>
    </Box>
   );
};

export default GitHubProfileCard;
