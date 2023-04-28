import Votes from "./Votes";
import SurveySummary from "./SurveySummary";
import useQuestions from "./useQuestions";

function Survey({ questions, renderAnsweredQuestion }) {
  const { currentQuestion, answerQuestion, answeredQuestions } =
    useQuestions(questions);
  if (currentQuestion) {
    return (
      <div className="survey">
        <div>{currentQuestion.texto}</div>
        <Votes onClick={answerQuestion} />
      </div>
    );
  }
  return (
    <SurveySummary
      answeredQuestions={answeredQuestions}
      renderAnsweredQuestion={renderAnsweredQuestion}
    />
  );
}

export default Survey;
