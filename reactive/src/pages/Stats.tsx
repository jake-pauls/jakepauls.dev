import React from "react";
import { Flex } from "@chakra-ui/react";

import { PageHeader } from "../ui/Styles";
import { FadeIn } from "../ui/Transitions";

import RepoTable from "../components/data/RepoTable";

const Stats = () => {
    return (
        <FadeIn>
            <Flex
                mx={{ base: 0, lg: 12 }}
                py={2}
                px={2}>
                <PageHeader heading="Stats" subheading="Trying to make my statistics instructor proud" />
            </Flex>
            <RepoTable display={{ base: "none", lg: "block" }} pb={24}/>
        </FadeIn>
    );
};

export default Stats;
