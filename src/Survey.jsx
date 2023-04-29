import { Fade, Rating, Typography } from "@mui/material";
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
            <Fade key={index} in={currentQuestion.id === question.id}>
              <div
                className="summary-question"
                style={{
                  display:
                    currentQuestion.id === question.id ? "block" : "none",
                }}
              >
                <Typography variant="h4">{question.texto}</Typography>
                <Rating
                  size="large"
                  onChange={(_event, vote) => answerQuestion(vote)}
                />
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
