const makeBoolean = answer => {
  return Array.isArray(answer)
    ? answer.map(string => JSON.parse(string.toLowerCase()))
    : JSON.parse(answer.toLowerCase());
};

export const decode = (type, data) => {
  return data.map(question => {
    return {
      ...question,
      category: decodeURIComponent(question["category"]),
      correct_answer:
        type === "multiple"
          ? decodeURIComponent(question["correct_answer"])
          : makeBoolean(question["correct_answer"]),
      incorrect_answers:
        type === "multiple"
          ? decodeURIComponent(question["incorrect_answers"])
          : makeBoolean(question["incorrect_answers"]),
      question: decodeURIComponent(question["question"])
    };
  });
};

export const correctAnswers = (questions, quizResults) =>
  questions.filter((question, index) => {
    return questions[index]["correct_answer"] === quizResults[index];
  });

export const incorrectAnswers = (questions, quizResults) =>
  questions.filter((question, index) => {
    return questions[index]["correct_answer"] !== quizResults[index];
  });
