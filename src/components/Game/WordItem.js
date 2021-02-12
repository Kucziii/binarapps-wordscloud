import React from "react";
import styled from "@emotion/styled";
import { inject, observer } from "mobx-react";

const Item = styled.div`
  color: ${(props) => props.color};

  &:hover {
    cursor: ${(props) => (props.check ? "default" : "pointer")};
  }
`;

const StateBox = styled.div`
  color: ${(props) => (props.good ? "green" : "red")};
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;

const WordItem = inject("wordsStore")(
  observer(
    ({
      text,
      group,
      wordsStore: { setSelectedWords, selectedWords, check },
      ...props
    }) => {
      const { good_words: goodWords } = group || {};
      const handleClick = (val) => {
        if (!check) {
          setSelectedWords(val);
        }
      };

      const inSelectedWords = selectedWords.includes(text);
      const inGoodWords = goodWords.includes(text);

      const handleColor = () => {
        if (!check && inSelectedWords) {
          return "#36c6fe";
        } else if (check && inSelectedWords && inGoodWords) {
          return "green";
        } else if (check && inSelectedWords && !inGoodWords) {
          return "red";
        } else {
          return "inherit";
        }
      };

      return (
        <div {...props}>
          {check && inSelectedWords && inGoodWords && (
            <StateBox good>Good</StateBox>
          )}
          {check && inSelectedWords && !inGoodWords && <StateBox>Bad</StateBox>}
          <Item
            id={text}
            selected={inSelectedWords}
            color={handleColor}
            check={check}
            onClick={() => handleClick(text)}
          >
            {text}
          </Item>
        </div>
      );
    }
  )
);

export default WordItem;
