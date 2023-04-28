import Votes from "./mui/Votes";
import SurveySummary from "./SurveySummary";
import useQuestions from "./useQuestions";

function Survey({ questions, renderAnsweredQuestion }) {
  const { currentQuestion, answerQuestion, answeredQuestions } =
    useQuestions(questions);
  if (currentQuestion) {
    return (
      <div className="survey">
        {questions.map((question, index) => {
          return (
            <div
              key={index}
              style={{
                display: currentQuestion.id === question.id ? "block" : "none",
              }}
            >
              <div>{question.texto}</div>
              <Votes onClick={answerQuestion} />
            </div>
          );
        })}
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
