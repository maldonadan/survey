import { useState } from "react";
import Votes from "./Votes";

function Survey({ questions, renderAnsweredQuestion }) {
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const currentIndexQuestion = answeredQuestions.length;
  const currentQuestion = questions[currentIndexQuestion];
  const answerQuestion = (vote) =>
    setAnsweredQuestions((answeredQuestions) => [
      ...answeredQuestions,
      { vote, question: currentQuestion },
    ]);
  if (!currentQuestion) {
    return (
      <div>
        {answeredQuestions.map((answeredQuestions, index) => (
          <div key={index}>{renderAnsweredQuestion(answeredQuestions)}</div>
        ))}
      </div>
    );
  }
  return (
    <div className="survey">
      <div>{currentQuestion.texto}</div>
      <Votes onClick={answerQuestion} />
    </div>
  );
}

export default Survey;
