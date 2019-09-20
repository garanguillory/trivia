import React, { useState } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import styled from "styled-components";

import { getQuestions } from "../actions/openTriviaDatabaseActions";
import DefaultButton from "../components/DefaultButton";
import CategorySelector from "../components/CategorySelector";
import colors from "../utils/colors";

const WelcomeScreen = ({ getQuestions, navigation }) => {
  const [category, setCategory] = useState(9);
  const [difficulty, setDifficulty] = useState("easy");
  const [type, setType] = useState("boolean");

  const startQuiz = () => {
    getQuestions(10, category, difficulty, type);
    navigation.navigate("Question");
  };

  const selectCategory = category => setCategory(category);

  return (
    <Container>
      <IntroText>Welcome to the Trivia Challenge!</IntroText>
      <IntroText>
        You will be presented with 10 Multiple Choice or True or False
        questions.
      </IntroText>
      <TypeSelector>
        <DefaultButton
          text="True or False"
          onPressHandler={() => setType("boolean")}
          style={{ backgroundColor: type === "boolean" ? `${colors.pastel.pink}` : null }}
        />
        <DefaultButton
          text="Multiple Choice"
          onPressHandler={() => setType("multiple")}
          style={{ backgroundColor: type === "multiple" ? `${colors.pastel.violet}` : null }}
        />
      </TypeSelector>
      <CategorySelector selectCategory={selectCategory} />
      <DifficultySelector>
        <DefaultButton
          text="easy"
          onPressHandler={() => setDifficulty("easy")}
          style={{ backgroundColor: difficulty === "easy" ? `${colors.pastel.yellow}` : null }}
        />
        <DefaultButton
          text="medium"
          onPressHandler={() => setDifficulty("medium")}
          style={{ backgroundColor: difficulty === "medium" ? `${colors.pastel.orange}` : null }}
        />
        <DefaultButton
          text="hard"
          onPressHandler={() => setDifficulty("hard")}
          style={{ backgroundColor: difficulty === "hard" ? `${colors.pastel.red}` : null }}
        />
      </DifficultySelector>
      <IntroText>Can you score 100%?</IntroText>
      <DefaultButton
        text="BEGIN"
        onPressHandler={startQuiz}
        style={{ backgroundColor: `${colors.pastel.lightBlue}` }}
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
  justify-content: space-around;
  margin: 50px 5px;
`;

const IntroText = styled(Text)`
  font-size: 20px;
  text-align: center;
  width: 90%;
`;

const TypeSelector = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;

const DifficultySelector = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;

function mapStateToProps(state) {
  return { questions: state.questions };
}

export default connect(
  mapStateToProps,
  { getQuestions }
)(WelcomeScreen);
