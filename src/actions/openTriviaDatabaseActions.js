import axios from "axios";
import { decode } from "../utils/helpers";
import { GET_QUESTIONS, OFFLINE_QUESTIONS } from "../actions/types";

const getSessionToken = async () => {
  const response = await axios.get("https://opentdb.com/api_token.php", {
    params: {
      command: "request"
    }
  });
  const { token } = response.data;
  return token;
};

const resetSessionToken = async newToken => {
  const response = await axios.get("https://opentdb.com/api_token.php", {
    params: {
      command: "reset",
      newToken
    }
  });
  const { token } = response;
  return token;
};

export const getQuestions = (
  amount = 10,
  category = undefined,
  difficulty = "hard",
  type = "boolean"
) => async dispatch => {
  const token = await getSessionToken();

  try {
    const response = await axios.get("https://opentdb.com/api.php", {
      params: {
        amount,
        category,
        difficulty,
        encode: "url3986",
        token,
        type
      }
    });
    const { results, response_code } = response.data;
    switch (response_code) {
      case 0:
        return dispatch({ type: GET_QUESTIONS, payload: decode(type, results) });
      case 1:
        return dispatch({ type: OFFLINE_QUESTIONS });
      case 2:
        return dispatch({ type: OFFLINE_QUESTIONS });
      case 3:
        return dispatch({ type: OFFLINE_QUESTIONS });
      case 4:
        return dispatch({ type: OFFLINE_QUESTIONS });
      default:
        return dispatch({ type: OFFLINE_QUESTIONS });
    }
  } catch (error) {
    dispatch({ type: OFFLINE_QUESTIONS });
  }
};
