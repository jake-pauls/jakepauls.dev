import React from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { BsLightningFill } from "react-icons/bs";

const Logo = () => {
    return (
        <Flex
            flex={{ base: 1 }}
            justify={{ base: "start", md: "start" }}>
            <Text 
                fontSize="100px" 
                fontWeight="bold" 
                color="base.text">
                    JP
            </Text> 
            <Icon as={BsLightningFill} marginTop="82px" marginLeft="-12px"fontSize="35px" color="base.primary"/>
        </Flex>
    );
};

export default Logo;