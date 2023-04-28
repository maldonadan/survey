import { Fade } from "@mui/material";
import Votes from "./mui/Votes";
import SurveySummary from "./SurveySummary";
import useQuestions from "./useQuestions";

function Survey({ questions, renderAnsweredQuestion }) {
  const { currentQuestion, answerQuestion, answeredQuestions } =
    useQuestions(questions);
  if (currentQuestion) {
    return (
      <div>
        {questions.map((question, index) => {
          return (
            <Fade key={index} in={currentQuestion.id === question.id}>
              <div
                style={{
                  display:
                    currentQuestion.id === question.id ? "block" : "none",
                }}
              >
                <div>{question.texto}</div>
                <Votes onClick={answerQuestion} />
              </div>
            </Fade>
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
