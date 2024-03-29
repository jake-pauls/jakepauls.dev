import { useState } from "react";
import { Box, Flex, Collapse, Stack } from "@chakra-ui/react";

import NavToggle from "./NavToggle";
import { DesktopNavItem, MobileNavItem } from "./NavItem";
import ModeToggle from "../ModeToggle";
import Logo from "../core/Logo";
import { DividerLightningIcon } from "../../ui/BuildingBlocks";
import { Links } from "../../Constants";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      <Flex align="center">
        <Logo />
        <Flex display={{ base: "none", md: "flex" }} marginLeft={10}>
          <Stack
            mt={5}
            flex={{ base: 1, md: 1 }}
            justify={"flex-end"}
            align={"center"}
            direction={"row"}
            spacing={2}>
            <DesktopNavItem route="/about" text="about" />
            <DividerLightningIcon />
            <DesktopNavItem route="/portfolio" text="portfolio" />
            <DividerLightningIcon />
            <DesktopNavItem route="/stats" text="stats" />
            {/*<DividerLightningIcon />*/}
            {/*<DesktopNavItem url={Links.RESUME} text="resume" />*/}
          </Stack>
        </Flex>
        <NavToggle toggleNav={toggleNavBar} isNavOpen={isOpen} />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Stack mb={3} mt={5} display={{ md: "none" }}>
          <MobileNavItem route="/about" text="about" toggleNav={toggleNavBar} />
          <MobileNavItem
            route="/portfolio"
            text="portfolio"
            toggleNav={toggleNavBar}
          />
          <MobileNavItem route="/stats" text="stats" toggleNav={toggleNavBar} />
          {/*<MobileNavItem
            url={Links.RESUME}
            text="resume"
            toggleNav={toggleNavBar}
          />*/}
        </Stack>
      </Collapse>
      <ModeToggle />
    </Box>
  );
};

export default NavBar;
