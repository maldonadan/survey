import { useState } from "react";
import Votes from "./Votes";

function Survey({ questions, renderAnsweredQuestion }) {
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const currentIndexQuestion = answeredQuestions.length;
  const answerQuestion = (vote) =>
    setAnsweredQuestions((answeredQuestions) => [
      ...answeredQuestions,
      { vote, question: questions[currentIndexQuestion] },
    ]);
  if (!questions[currentIndexQuestion]) {
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
      <div>{questions[currentIndexQuestion].texto}</div>
      <Votes onClick={answerQuestion} />
    </div>
  );
}

export default Survey;
