import { Fade, Rating, Typography } from "@mui/material";

function OnGoingSurvey({ questions, currentQuestion, answerQuestion }) {
  return (
    <div className="survey">
      {questions.map((question, index) => {
        const isTheCurrentQuestion = currentQuestion.id === question.id;
        return (
          <Fade key={index} in={isTheCurrentQuestion}>
            <div
              className="summary-question"
              style={{ display: isTheCurrentQuestion ? "block" : "none" }}
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

export default OnGoingSurvey;
