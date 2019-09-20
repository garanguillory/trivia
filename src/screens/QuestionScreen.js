import React from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { withNavigation } from "react-navigation";
import styled from "styled-components";

import {
  nextQuestion,
  previousQuestion
} from "../actions/currentQuestionActions";
import { answerQuestion } from "../actions/quizResultsActions";
import TrueFalse from "../components/TrueFalse";
import MultipleChoice from "../components/MultipleChoice";
import Status from "../components/QuizStatus";


const QuestionScreen = ({
  answerQuestion,
  currentQuestion,
  navigation,
  nextQuestion,
  previousQuestion,
  questions,
  quizResults
}) => {

  return (
    <Container>
      <Header>{questions[currentQuestion].category}</Header>
      <Question>{questions[currentQuestion].question}</Question>
      {questions[currentQuestion].incorrect_answers.length > 1 ? 
        <MultipleChoice 
          currentQuestion={currentQuestion}
          answerQuestion={answerQuestion}
          questions={questions}
          quizResults={quizResults}
        /> :
        <TrueFalse 
          currentQuestion={currentQuestion}
          answerQuestion={answerQuestion}
          quizResults={quizResults}
        />
      }
      {quizResults[currentQuestion] === undefined ? (
        <Response>Your answer: </Response>
      ) : (
        <Response>
          Your answer: {quizResults[currentQuestion].toString()}
        </Response>
      )}
      <Status
        currentQuestion={currentQuestion}
        finishQuiz={() => navigation.navigate("Results")}
        next={() => nextQuestion()}
        nextHidden={quizResults[currentQuestion] === undefined ? true : false}
        numberOfQuestions={questions.length}
        previous={() => previousQuestion()}
        style={{ bottom: 20, position: "absolute", width: "90%" }}
      />
    </Container>
  );
};

const Container = styled(View)`
  align-items: center;
  background-color: white;
  border: 10px solid black;
  border-radius: 5px;
  flex: 1;
  justify-content: center;
  margin: 50px 5px;
`;

const Header = styled(Text)`
  font-size: 20px;
  position: absolute;
  text-align: center;
  top: 20px;
`;

const Question = styled(Text)`
  font-size: 20px;
  margin: 20px auto;
  text-align: center;
  width: 90%;
`;

const Response = styled(Text)`
  margin-top: 20px;
  text-align: center;
`;

function mapStateToProps(state) {
  const { currentQuestion, questions, quizResults } = state;
  return {
    currentQuestion,
    questions,
    quizResults
  };
}

export default connect(
  mapStateToProps,
  { answerQuestion, nextQuestion, previousQuestion }
)(withNavigation(QuestionScreen));
