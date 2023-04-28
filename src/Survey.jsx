import { useState } from "react";

const votes = [1, 2, 3, 4, 5];

function Survey({ questions, renderAnsweredQuestion }) {
  const [currentIndexQuestion, setCurrentIndexQuestion] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const showNextQuestion = () =>
    setCurrentIndexQuestion(currentIndexQuestion + 1);
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
      {votes.map((vote) => (
        <div key={vote}>
          <label htmlFor={vote}>
            {vote}
            <input
              id={vote}
              type="radio"
              role="radio"
              name="vote"
              onClick={() => {
                showNextQuestion();
                setAnsweredQuestions((answeredQuestions) => [
                  ...answeredQuestions,
                  { vote, question: questions[currentIndexQuestion] },
                ]);
              }}
            />
          </label>
        </div>
      ))}
    </div>
  );
}

export default Survey;
