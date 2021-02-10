import React from "react";
import { Flex } from "rebass";
import styled from "@emotion/styled";

const PageWrapper = styled(Flex)`
  flex-direction: column;
  padding-top: 76px;
  min-height: 100vh;
`;

const HomePage = () => {
  return <PageWrapper>Hello world</PageWrapper>;
};

export default HomePage;
