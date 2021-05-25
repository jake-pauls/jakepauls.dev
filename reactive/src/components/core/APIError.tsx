import React from "react";
import { Flex } from "@chakra-ui/react";

import { RobotoText } from "../../ui/Styles";
import { ERROR_MESSAGE } from "../../Constants";

const APIError = () => {
    return (
       <Flex justifyContent="center">
           <RobotoText fontWeight="bold" color="base.text">{ERROR_MESSAGE}</RobotoText>
       </Flex>
    );
};

export default APIError;
