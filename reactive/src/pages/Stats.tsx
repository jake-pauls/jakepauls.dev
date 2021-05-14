import React from "react";
import { Code, Flex, Stack } from "@chakra-ui/react";

import { InconsolataText } from "../ui/Styles";
import { FadeIn } from "../ui/Transitions";

const Stats = () => {
    return (
        <FadeIn>
            <Flex
                maxW="12xl"
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
        </FadeIn>
    );
};

export default Stats;
