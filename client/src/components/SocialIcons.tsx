import React from "react";
import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react'
import { GrGithub, GrLinkedinOption, GrMail, GrTwitter } from "react-icons/gr";

import { Links } from "../Constants";

const SocialIcons = (props: ButtonGroupProps) => {
    return (
        <ButtonGroup variant="ghost" color="gray.600" {...props}>
            <IconButton as="a" href={Links.LINKEDIN} _hover={{ bg: "base.text" }} isRound={true} aria-label="LinkedIn" icon={<GrLinkedinOption fontSize="20px" />} />
            <IconButton as="a" href={Links.GITHUB} _hover={{ bg: "base.text" }} isRound={true} aria-label="GitHub" icon={<GrGithub fontSize="20px" />} />
            <IconButton as="a" href={Links.EMAIL} _hover={{ bg: "base.text" }} isRound={true} aria-label="Email" icon={<GrMail fontSize="20px" />} />
            <IconButton as="a" href={Links.TWITTER} _hover={{ bg: "base.text" }} isRound={true} aria-label="Twitter" icon={<GrTwitter fontSize="20px" />} />
        </ButtonGroup>
  );
};

export default SocialIcons;