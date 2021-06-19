import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Flex justifyContent="center" alignSelf="center" pt={12}>
      <Spinner
        thickness="4px"
        speed="0.85s"
        emptyColor="base.grey"
        color="base.primary"
        size="xl"
      />
    </Flex>
  );
};

export default Loading;
