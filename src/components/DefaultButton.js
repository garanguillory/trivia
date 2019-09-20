import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const DefaultButton = ({ onPressHandler, style, text, textStyle }) => {
  
  return (
    <StyledButton style={style} onPress={onPressHandler}>
      <Text style={textStyle}>{text}</Text>
    </StyledButton>
  );
};

const StyledButton = styled(TouchableOpacity)`
  align-items: center;
  border: 2px solid black;
  border-radius: 5px;
  justify-content: center;
  padding: 10px 20px;
  text-transform: uppercase;
`;


export default DefaultButton; 

