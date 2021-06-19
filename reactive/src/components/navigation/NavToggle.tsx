import React from "react";
import { Flex } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

type NavToggleProps = {
  toggleNav: () => void;
  isNavOpen: Boolean;
};

const NavToggle = ({ toggleNav, isNavOpen }: NavToggleProps) => {
  return (
    <Flex
      flex={{ base: 0, md: "none" }}
      ml={{ base: 0 }}
      display={{ base: "flex", md: "none" }}
      onClick={toggleNav}>
      {isNavOpen ? (
        <CloseIcon color="base.text" size={28} />
      ) : (
        <HamburgerIcon color="base.text" size={28} />
      )}
    </Flex>
  );
};

export default NavToggle;
