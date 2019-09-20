import React from "react";
import { connect } from "react-redux";
import { Text, View } from "react-native";
import { withNavigation } from "react-navigation";
import styled from "styled-components";

import { resetAnswers } from "../actions/quizResultsActions";
import { resetQuestions } from "../actions/currentQuestionActions";
import DefaultButton from "../components/DefaultButton";
import AnswerList from "../components/AnswerList";
import { correctAnswers, incorrectAnswers } from "../utils/helpers";

const ResultsScreen = ({
  navigation,
  questions,
  quizResults,
  resetAnswers,
  resetQuestions
}) => {

  const correct = correctAnswers(questions, quizResults);
  const incorrect = incorrectAnswers(questions, quizResults);
  const playAgain = () => {
    resetAnswers();
    resetQuestions();
    navigation.navigate("Welcome");
  };

  return (
    <Container>
      <Header>
        You scored: {correct.length}/{questions.length}
      </Header>
      <AnswerList
        style={{ height: "40%", marginBottom: 10, marginTop: 10 }}
        headerText="Correct Answers:"
        data={correct}
        keyExtractor={correct => correct.question}
      />
      <AnswerList
        style={{ height: "40%", marginBottom: 10 }}
        wrong={true}
        headerText="Incorrect Answers:"
        data={incorrect}
        keyExtractor={incorrect => incorrect.question}
      />
      <DefaultButton
        text="PLAY AGAIN"
        onPressHandler={playAgain}
        style={{ marginBottom: 10, marginTop: 10 }}
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
  justify-content: space-between;
  margin: 50px 5px;
`;

const Header = styled(Text)`
  font-size: 20px;
  margin-top: 20px;
`;

function mapStateToProps(state) {
  const { questions, quizResults } = state;
  return {
    questions,
    quizResults
  };
}

export default connect(
  mapStateToProps,
  {
    resetAnswers,
    resetQuestions
  }
)(withNavigation(ResultsScreen));
