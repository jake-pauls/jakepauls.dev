import React from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";

import { InconsolataText, RobotoText } from "../ui/Styles";
import { FadeIn } from "../ui/Transitions";

import RepoTable from "../components/data/RepoTable";

const Stats = () => {
    return (
        <FadeIn>
            <Flex
                py={2}
                px={2}>
                <Stack>
                    <Box>
                        <InconsolataText
                            color="base.text"
                            fontSize={{ base: "3em", md: "4em" }}
                            letterSpacing={-4}>
                            Stats
                        </InconsolataText>
                        <RobotoText
                            mt={{ base: "-10px", md: "-16px" }}
                            mb="12px"
                            color="base.grey"
                            fontWeight="semibold"
                            fontSize={{ base: "16px", md: "24px"}}>
                            Making my statistics instructor proud.
                        </RobotoText>
                    </Box>
                </Stack>
            </Flex>
            <RepoTable/>
        </FadeIn>
    );
};

export default Stats;
