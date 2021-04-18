import React from "react";
import { Box, Icon, Link, Stack, Text, Tooltip } from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import { Golang } from "grommet-icons";

import { Links } from "../Constants";

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
            <Link href={Links.GOLANG} title="React" isExternal>
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
        <Box as="footer" role="contentinfo" px={{ base: '4', md: '8' }}>
            <Stack direction="column" align="center" bottom="0">
                <Text 
                    fontSize="sm" 
                    align="center" 
                    color="base.text"
                    mt={{ base: "-9%", md: "-2%" }}>
                   Powered by {getReactIconLink()} and {getGolangIconLink()} | Source on {getGitHubRepoLink()} <br />
                   Made with 💛 in { new Date().getFullYear() } | Jake Pauls
                </Text>
            </Stack>
        </Box>
    );
};

export default Footer;