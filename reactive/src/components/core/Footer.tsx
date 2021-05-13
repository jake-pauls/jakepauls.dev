import React from "react";
import { Box, Icon, Link, Stack, Text, Tooltip } from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import { Golang } from "grommet-icons";

import SocialIcons from "../SocialIcons"
import { Links } from "../../Constants";

type FooterProps = {
    showIcons: Boolean;
};

const getReactIconLink = () => {
    return (
        <Tooltip label="React" aria-label="go-tooltip">
            <Link href={Links.REACT} isExternal>
                <Icon color="base.text" as={FaReact} />
            </Link>
        </Tooltip>
    );
};

const getGolangIconLink = () => {
    return (
        <Tooltip label="Go" aria-label="go-tooltip">
            <Link href={Links.GOLANG} title="Go" isExternal>
                <Icon color="base.text" as={Golang} />
            </Link>
        </Tooltip>
    );
};

const getGitHubRepoLink = () => {
    return (
        <Link href={Links.REPO} title="Go" textDecoration="underline" isExternal>GitHub</Link>
    );
};

const Footer = ({ showIcons }: FooterProps) => {
    return (
        <Box
            as="footer"
            mt="auto"
            bottom="5"
            width="100%"
            position="absolute"
            px={{ base: '4', md: '8' }}>
            <Stack direction="column" align="center">
                <SocialIcons display={ showIcons ? "default" : "none"} />
                <Text
                    fontSize="sm"
                    align="center"
                    color="base.text">
                   Powered by {getReactIconLink()} and {getGolangIconLink()} | Source on {getGitHubRepoLink()} <br />
                   Made with 💛 in { new Date().getFullYear() } | Jake Pauls
                </Text>
            </Stack>
        </Box>
    );
};

export default Footer;
