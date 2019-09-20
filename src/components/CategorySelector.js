import React, { useState } from "react";
import { Picker, View } from "react-native";
import styled from "styled-components";
import categories from "../utils/categories";

const renderCategories = categories => {
  return categories.map(category => {
    return (
      <Picker.Item
        key={category.category}
        label={category.category}
        value={category.value}
      />
    );
  });
};


const CategorySelector = ({selectCategory}) => {
  const [category, setCategory] = useState("any");
  const valueChange = value => {
    setCategory(value);
    selectCategory(value);
  };
  return (
    <Container>
      <Picker
        selectedValue={category}
        onValueChange={value => valueChange(value)}
      >
        {renderCategories(categories)}
      </Picker>
    </Container>
  );
};

const Container = styled(View)`
  width: 80%;
`;

// const StyledPicker = styled(Picker)``;

export default CategorySelector;
