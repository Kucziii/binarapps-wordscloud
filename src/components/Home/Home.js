import React, { useState, useEffect } from "react";
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

  @media (max-width: 1024px) {
    padding: 15px 10px;
  }
`;

const Title = styled(Box)`
  text-align: center;
  font-size: 50px;
  color: #000;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 30px;
  }
`;

const InputBox = styled(Box)`
  margin-top: 60px;
  text-align: center;
`;

const NameInput = styled.input`
  width: 300px;
  padding: 15px;
  font-size: 18px;
  outline: none;
  border-radius: 10px;

  @media (max-width: 1024px) {
    padding: 10px;
    width: 200px;
    font-size: 14px;
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

const HomePage = inject("userStore")(
  observer(
    ({ history, userStore: { assignUser, userName: storeUserName } }) => {
      const [userName, setUserName] = useState("");

      useEffect(() => {
        if (storeUserName) {
          history.push(routes.game);
        }
      }, [storeUserName]);

      const handleSubmit = async (e) => {
        e.preventDefault();
        if (userName !== "" && userName.trim().length) {
          await assignUser(userName);
          history.push(routes.game);
        }
      };

      return (
        <PageWrapper>
          <Tile>
            <Title>Wordcloud game</Title>
            <form onSubmit={handleSubmit}>
              <InputBox>
                <NameInput
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  name="userName"
                  placeholder="Enter your nickname here..."
                  maxlength="25"
                />
              </InputBox>
              <SubmitBox>
                <Button type="submit" className="btn btn-5">
                  Play
                </Button>
              </SubmitBox>
            </form>
          </Tile>
        </PageWrapper>
      );
    }
  )
);

export default HomePage;
