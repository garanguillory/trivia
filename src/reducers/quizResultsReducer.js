import { ANSWER_QUESTION, RESET_ANSWERS } from '../actions/types';

const quizResultsReducer = (results={}, action) => {
  switch (action.type) {
    case ANSWER_QUESTION:
      const { answer, currentQuestion } = action.payload;
      return { ...results, [currentQuestion]: answer };
    case RESET_ANSWERS:
      return {}
    default:
      return results;
  }
};

export default quizResultsReducer;
