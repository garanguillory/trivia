import React from "react";
import { FlatList, Text, View } from "react-native";
import styled from "styled-components";
import { Feather } from "@expo/vector-icons";

import colors from '../utils/colors';

const AnswerList = ({ data, headerText, keyExtractor, style, wrong }) => {
  return (
    <View style={style}>
      <Header>{headerText}</Header>
      <List
        data={data}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => {
          return (
            <Answer>
              <Icon
                name={wrong ? "x" : "check"}
                style={{ color: wrong ? `${colors.pastel.red}` : `${colors.pastel.green}` }}
              />
              <AnswerTextGroup>
                <AnswerText>{item.question}</AnswerText>
                <CorrectAnswer>
                  <Feather name="corner-down-right" />
                  correct answer: {item["correct_answer"].toString()}
                </CorrectAnswer>
              </AnswerTextGroup>
            </Answer>
          );
        }}
      />
    </View>
  );
};

const Header = styled(Text)`
  font-size: 20px;
  margin-bottom: 10px;
`;

const List = styled(FlatList)`
  text-align: left;
`;

const Answer = styled(View)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Icon = styled(Feather)`
  font-size: 20px;
`;

const AnswerTextGroup = styled(View)`
  flex-direction: column;

  width: 90%;
`;

const AnswerText = styled(Text)`
  font-size: 12px;
`;

const CorrectAnswer = styled(Text)`
  font-size: 12px;
  margin-left: 10px;
  margin-top: 5px;
`;

export default AnswerList;
