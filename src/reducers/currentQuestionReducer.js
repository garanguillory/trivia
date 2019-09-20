import { NEXT_QUESTION, PREVIOUS_QUESTION, RESET_QUESTIONS } from '../actions/types';

const currentQuestionReducer = (currentQuestion=0, action) => {
  switch (action.type) {
    case NEXT_QUESTION:
      return currentQuestion + action.payload
    case PREVIOUS_QUESTION:
      return currentQuestion !== 0 ? currentQuestion + action.payload : currentQuestion
    case RESET_QUESTIONS:
      return action.payload
    default:
      return currentQuestion;
  }
};

export default currentQuestionReducer;
