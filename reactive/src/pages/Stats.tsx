import React from "react";
import { Code, Flex, Stack } from "@chakra-ui/react";

import { InconsolataText } from "../ui/Styles";

const Stats = () => {
    return (
        <Flex
            maxW="12xl"
            minH={{ base: "55vh", md: "70vh" }}
            py={2}
            px={2}>
            <Stack>
                <InconsolataText
                color="base.text"
                fontSize={{ base: "3em", md: "4em" }}
                alignSelf="flex-start"
                letterSpacing={-4}>
                   Stats
                </InconsolataText>
                <Code bg="base.background" color="base.text">Code goes here!</Code>
            </Stack>
        </Flex>
    );
};

export default Stats;
