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
        <CloseIcon color="base.text" w={6} h={6} />
      ) : (
        <HamburgerIcon color="base.text" w={6} h={6} />
      )}
    </Flex>
  );
};

export default NavToggle;
