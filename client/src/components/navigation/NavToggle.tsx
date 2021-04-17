import React from "react";
import { Flex } from "@chakra-ui/react";
import { VscMenu, VscClose } from "react-icons/vsc";

type NavToggleProps = {
    toggleNav: () => void;
    isNavOpen: Boolean;
}

const NavToggle = ({ toggleNav, isNavOpen }: NavToggleProps) => {
    return (
        <Flex
            flex={{ base: 0, md: "none" }}
            ml={{ base: 0 }}
            display={{ base: "flex", md: "none" }}
            onClick={toggleNav}>
            { isNavOpen ? <VscClose size={28}/> : <VscMenu size={28}/> } 
        </Flex>
    );
};

export default NavToggle;