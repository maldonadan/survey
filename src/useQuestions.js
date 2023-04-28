import { useState } from "react";

function useQuestions(questions) {
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const currentIndexQuestion = answeredQuestions.length;
  const currentQuestion = questions[currentIndexQuestion];
  const answerQuestion = (vote) =>
    setAnsweredQuestions((answeredQuestions) => [
      ...answeredQuestions,
      { vote, question: currentQuestion },
    ]);
  return {
    currentQuestion,
    answerQuestion,
    answeredQuestions,
  };
}

export default useQuestions;
