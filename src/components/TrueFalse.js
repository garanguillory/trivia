import React from "react";
import { View } from "react-native";
import styled from "styled-components";

import DefaultButton from "./DefaultButton";
import colors from "../utils/colors";

const TrueFalse = ({ currentQuestion, answerQuestion, quizResults }) => {
  return (
    <ButtonGroup>
      <DefaultButton
        text="TRUE"
        onPressHandler={() => answerQuestion(true, currentQuestion)}
        style={{
          backgroundColor:
            quizResults[currentQuestion] !== undefined &&
            quizResults[currentQuestion] === true
              ? `${colors.pastel.green}`
              : null
        }}
      />
      <DefaultButton
        text="FALSE"
        onPressHandler={() => answerQuestion(false, currentQuestion)}
        style={{
          backgroundColor:
            quizResults[currentQuestion] !== undefined &&
            quizResults[currentQuestion] === false
              ? `${colors.pastel.red}`
              : null
        }}
      />
    </ButtonGroup>
  );
};

const ButtonGroup = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;

export default TrueFalse;
