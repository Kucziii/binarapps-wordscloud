import React from "react";
import { Flex } from "rebass";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const HeaderWrapper = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 76px;
  width: 100vw;
  background-color: white;
  box-shadow: rgba(4, 4, 4, 0.3) 0px 2px 8px 0px;
`;

const LogoContainer = styled(Flex)`
  margin-left: 40px;
  align-items: center;
`;

export const HeaderBar = () => {
  return (
    <HeaderWrapper>
      <LogoContainer>
        <Link to="/">BinarApps Wordscloud</Link>
      </LogoContainer>
    </HeaderWrapper>
  );
};

export default HeaderBar;
