import React from "react";
import { Code, Flex, Stack } from "@chakra-ui/react";
import { BsLightningFill } from "react-icons/bs";

import { MorganiteText, TitleLightningIcon } from "../ui/Styles";

const Portfolio = () => {
    return (
        <Flex 
            maxW="12xl" 
            minH={{ base: "55vh", md: "70vh" }}
            py={2} 
            px={2}>
            <Stack>
            <MorganiteText 
            color="base.text"
            fontSize={{ base: "6em", md: "8em" }} 
            alignSelf="flex-start"
            lineHeight="0%"
            mb={10}
            mt={20}>
                Portfolio
                <TitleLightningIcon as={BsLightningFill} />
        </MorganiteText>                <Code bg="base.background" color="base.text">Code goes here!</Code>
            </Stack>
        </Flex>
    );
};

export default Portfolio;