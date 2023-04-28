import { useState } from "react";
import Votes from "./Votes";
import SurveySummary from "./SurveySummary";

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
      <SurveySummary
        answeredQuestions={answeredQuestions}
        renderAnsweredQuestion={renderAnsweredQuestion}
      />
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
