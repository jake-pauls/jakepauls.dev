import React from "react";
import { ButtonGroup, ButtonGroupProps, IconButton } from "@chakra-ui/react";
import { GrGithub, GrLinkedinOption, GrMail, GrMedium } from "react-icons/gr";
import { FaItchIo } from "react-icons/fa";

import { Links } from "../Constants";

const SocialIcons = (props: ButtonGroupProps) => {
  return (
    <ButtonGroup variant="ghost" color="gray.600" {...props}>
      <IconButton
        as="a"
        href={Links.LINKEDIN}
        _hover={{ bg: "base.text" }}
        isRound={true}
        aria-label="LinkedIn"
        icon={<GrLinkedinOption size={18} />}
      />
      <IconButton
        as="a"
        href={Links.GITHUB}
        _hover={{ bg: "base.text" }}
        isRound={true}
        aria-label="GitHub"
        icon={<GrGithub size={18} />}
      />
      <IconButton
        as="a"
        href={Links.EMAIL}
        _hover={{ bg: "base.text" }}
        isRound={true}
        aria-label="Email"
        icon={<GrMail size={18} />}
      />
      <IconButton
        as="a"
        href={Links.MEDIUM}
        _hover={{ bg: "base.text" }}
        isRound={true}
        aria-label="Email"
        icon={<GrMedium size={18} />}
      />
      <IconButton
        as="a"
        href={Links.ITCH}
        _hover={{ bg: "base.text" }}
        isRound={true}
        aria-label="Itch.io"
        icon={<FaItchIo size={18} />}
      />
    </ButtonGroup>
  );
};

export default SocialIcons;
