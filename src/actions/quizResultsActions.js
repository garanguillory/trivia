import { ANSWER_QUESTION, RESET_ANSWERS } from "./types";

export const answerQuestion = (answer, currentQuestion) => dispatch => {
  dispatch({
    type: ANSWER_QUESTION,
    payload: {
      answer,
      currentQuestion
    }
  });
};

export const resetAnswers = () => dispatch => {
  dispatch({ type: RESET_ANSWERS })
};