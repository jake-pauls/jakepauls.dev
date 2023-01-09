import styled from "styled-components";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

import { MorganiteText } from "../../ui/Styles";
import { LightningIcon } from "../../ui/BuildingBlocks";

const LogoText = styled(MorganiteText)`
  font-size: 100px;
`;

const Logo = () => {
  return (
    <Flex flex={{ base: 1 }} alignItems="baseline">
      <Link to="/" color="base.text">
        <LogoText color="base.text">JP</LogoText>
      </Link>
      <LightningIcon ml="-10px" fontSize="30px" />
    </Flex>
  );
};

export default Logo;
