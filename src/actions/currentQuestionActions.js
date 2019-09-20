import { NEXT_QUESTION, PREVIOUS_QUESTION, RESET_QUESTIONS } from './types';

export const nextQuestion = () => dispatch => {
  dispatch({ type: NEXT_QUESTION, payload: 1 });
};

export const previousQuestion = () => dispatch => {
  dispatch({ type: PREVIOUS_QUESTION, payload: -1 });
};

export const resetQuestions = () => dispatch => {
  dispatch({ type: RESET_QUESTIONS, payload: 0 });
};
