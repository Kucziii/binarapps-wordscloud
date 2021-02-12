import React from "react";
import styled from "@emotion/styled";
import { inject, observer } from "mobx-react";

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

const Buttons = inject("wordsStore")(
  observer(({ history, wordsStore: { setCheck, check, handleFinish } }) => {
    const handleFinishButton = () => {
      handleFinish();
      history.push("/result");
    };

    if (check) {
      return <Button onClick={() => handleFinishButton()}>Finish game</Button>;
    } else if (!check) {
      return <Button onClick={() => setCheck()}>Check answers</Button>;
    }
    return null;
  })
);

export default Buttons;
