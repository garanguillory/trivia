import { combineReducers } from 'redux';
import questions from '../reducers/questionsReducer';
import currentQuestion from '../reducers/currentQuestionReducer';
import quizResults from './quizResultsReducer';

export default combineReducers({
  currentQuestion,
  questions,
  quizResults,
});
