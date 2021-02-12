import React, { useState, useEffect } from "react";
import { Flex, Box } from "rebass";
import { inject, observer } from "mobx-react";
import styled from "@emotion/styled";
import TagCloud from "react-tag-cloud";
import WordItem from "./WordItem";
import Buttons from "./Buttons";

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
  @media (max-width: 1024px) {
    padding: 15px 0;
  }
`;

const Title = styled(Box)`
  text-align: center;
  font-size: 50px;
  color: #000;
  font-weight: 600;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 2px solid #36c6fe;

  @media (max-width: 1024px) {
    font-size: 24px;
  }
`;

const SubmitBox = styled(Flex)`
  justify-content: center;
  margin-top: 30px;
`;

const CloudContainer = styled(Flex)`
  align-items: center;
  justify-content: center;
`;

const GamePage = inject("wordsStore")(
  observer(
    ({ history, wordsStore: { getRandomGroupItem, fetchWordsList } }) => {
      const [group, setGroup] = useState(null);
      const [width, setWidth] = useState(0);

      useEffect(() => {
        const updateWindowDimensions = () => {
          setWidth(window.innerWidth);
        };
        setWidth(window.innerWidth);
        window.addEventListener("resize", updateWindowDimensions);
        return () =>
          window.removeEventListener("resize", updateWindowDimensions);
      }, []);

      useEffect(() => {
        const getData = async () => {
          await fetchWordsList();
          setGroup(getRandomGroupItem());
        };

        getData();
      }, []);

      console.log("test", width);
      const { all_words: allWords, question } = group || {};
      return (
        <PageWrapper>
          <Tile>
            <Title>{question}</Title>
            <CloudContainer>
              <TagCloud
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  color: "black",
                  padding: width < 1000 ? 18 : 30,
                  width: "100%",
                  height: "300px"
                }}
              >
                {allWords &&
                  allWords.map((item) => (
                    <WordItem
                      text={item}
                      group={group}
                      style={{
                        fontSize:
                          width < 1000
                            ? Math.floor(Math.random() * (18 - 14 + 1)) + 14
                            : Math.floor(Math.random() * (40 - 20 + 1)) + 20
                      }}
                    />
                  ))}
              </TagCloud>
            </CloudContainer>
            <SubmitBox>
              <Buttons history={history} />
            </SubmitBox>
          </Tile>
        </PageWrapper>
      );
    }
  )
);

export default GamePage;
