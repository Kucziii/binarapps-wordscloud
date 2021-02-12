import React, { useEffect } from "react";
import { Flex, Box } from "rebass";
import { inject, observer } from "mobx-react";
import styled from "@emotion/styled";
import routes from "../../_app/routing/routes";

const PageWrapper = styled(Flex)`
  flex-direction: column;
  padding-top: 76px;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Tile = styled(Flex)`
  flex-direction: column;
  background-color: #fff;
  color: #000;
  width: 70%;
  border-radius: 15px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  padding: 30px;
`;

const Text = styled(Box)`
  text-align: center;
  font-size: 30px;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 24px;
  }
`;

const Score = styled(Box)`
  text-align: center;
  color: #36c6fe;
  font-weight: 600;
  font-size: 30px;
  margin-top: 10px;

  @media (max-width: 1024px) {
    font-size: 24px;
  }
`;

const Button = styled("button")`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  padding: 10px 30px;
  border: 2px solid #36c6fe;
  color: #36c6fe;
  background-color: white;
  border-radius: 999px;
  outline: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #36c6fe;
  }
`;

const SubmitBox = styled(Flex)`
  justify-content: center;
  margin-top: 30px;
`;

const ResultPage = inject(
  "userStore",
  "wordsStore"
)(
  observer(
    ({
      history,
      userStore: { userName },
      wordsStore: { score, clearStore }
    }) => {
      useEffect(() => {
        if (!score && userName) {
          history.push("/game");
        } else if (!score && !userName) {
          history.push("/");
        }
      }, []);

      const handlePlayAgain = () => {
        clearStore();
        history.push("/game");
      };

      return (
        <PageWrapper>
          <Tile>
            <Text>Congratulations, {userName}!</Text>
            <Text>Your score: </Text>
            <Score>
              {score} {score === 1 ? "point" : "points"}
            </Score>
            <SubmitBox>
              <Button onClick={() => handlePlayAgain()}>Play again!</Button>
            </SubmitBox>
          </Tile>
        </PageWrapper>
      );
    }
  )
);

export default ResultPage;
