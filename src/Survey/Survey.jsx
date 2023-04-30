import SurveySummary from "./SurveySummary";
import useQuestions from "./hooks/useQuestions";
import OnGoingSurvey from "./OnGoingSurvey";

function Survey({ questions, renderAnsweredQuestion }) {
  const { currentQuestion, answerQuestion, answeredQuestions } =
    useQuestions(questions);
  if (currentQuestion) {
    return (
      <OnGoingSurvey
        questions={questions}
        currentQuestion={currentQuestion}
        answerQuestion={answerQuestion}
      />
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
