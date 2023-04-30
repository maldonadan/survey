import { Fade, Rating, Typography } from "@mui/material";
import SurveySummary from "./SurveySummary";
import useQuestions from "./hooks/useQuestions";

function Survey({ questions, renderAnsweredQuestion }) {
  const { currentQuestion, answerQuestion, answeredQuestions } =
    useQuestions(questions);
  if (currentQuestion) {
    return (
      <div className="survey">
        {questions.map((question, index) => {
          const isTheCurrentQuestion = currentQuestion.id === question.id;
          return (
            <Fade key={index} in={isTheCurrentQuestion}>
              <div className="summary-question">
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
