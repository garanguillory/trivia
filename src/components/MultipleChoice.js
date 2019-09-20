import React from "react";
import { FlatList, View } from "react-native";
import styled from "styled-components";

import DefaultButton from "../components/DefaultButton";
import colors from "../utils/colors";

Array.prototype.unique = function(){
  return this.filter(function (value, index, self){
    return self.indexOf(value) === index;
  });
}

const answerChoices = array => {
  return array.map((element) => {
    return { choice: element };
  }).unique();
};

const MultipleChoice = ({ currentQuestion, answerQuestion, questions, quizResults }) => {
  const { incorrect_answers, correct_answer } = questions[currentQuestion];
  const answers = incorrect_answers.split(',').concat(correct_answer);

  return (
    <Container>
      <List 
        data={answerChoices(answers)}
        keyExtractor={item => item.choice}
        renderItem={({ item }) => {
          return ( 
            <Choice 
              onPressHandler={() => answerQuestion(item.choice, currentQuestion)}
              style={{
                backgroundColor:
                  quizResults[currentQuestion] !== undefined &&
                    quizResults[currentQuestion] === `${item.choice}`
                    ? `${colors.pastel.green}`
                    : null
              }}
              textStyle={{ alignSelf: 'flex-start', fontSize: 20 }}
              text={item.choice} 
            /> 
          );
        }}
      />
    </Container>
  );
};

const Container = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;

const List = styled(FlatList)`
  width: 90%;
`;

const Choice = styled(DefaultButton)`
  border: 2px solid black;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export default MultipleChoice;
