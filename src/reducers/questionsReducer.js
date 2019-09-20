import initialState from '../initialState';
import { GET_QUESTIONS, OFFLINE_QUESTIONS } from '../actions/types';

const questionsReducer = (questions = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return action.payload;
    case OFFLINE_QUESTIONS:
      return initialState;
    default:
      return questions;
  }
};

export default questionsReducer;
