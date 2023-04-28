import { useState } from "react";

const votes = [1, 2, 3, 4, 5];

function Survey({ questions, renderAnsweredQuestion }) {
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const currentIndexQuestion = answeredQuestions.length;
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
