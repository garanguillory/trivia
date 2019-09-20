import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

import DefaultButton from "./DefaultButton";

const QuizStatus = ({
  currentQuestion,
  finishQuiz,
  next,
  nextHidden,
  numberOfQuestions,
  previous,
  style
}) => {
  
  return (
    <Container style={style}>
      <QuestionStatus>
        Question {currentQuestion + 1} of {numberOfQuestions}
      </QuestionStatus>
      <ButtonGroup
        style={{
          justifyContent: currentQuestion === 0 ? "center" : "space-between"
        }}
      >
        {currentQuestion === 0 ? null : (
          <DefaultButton text="PREVIOUS" onPressHandler={previous} />
        )}
        {nextHidden ? null : (
          <DefaultButton
            onPressHandler={
              currentQuestion === numberOfQuestions - 1 ? finishQuiz : next
            }
            text={
              currentQuestion === numberOfQuestions - 1 ? "FINISH QUIZ" : "NEXT"
            }
          />
        )}
      </ButtonGroup>
    </Container>
  );
};

const Container = styled(View)`
  align-items: center;
  justify-content: center;
`;

const QuestionStatus = styled(Text)`
  margin-bottom: 20px;
`;

const ButtonGroup = styled(View)`
  flex-direction: row;
  height: 40px;
  margin: 0 auto;
  width: 90%;
`;

export default QuizStatus;
