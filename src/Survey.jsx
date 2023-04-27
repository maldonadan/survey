import { useState } from "react";

const votes = [1, 2, 3, 4, 5];

function Survey({ questions }) {
  const [currentIndexQuestion, setCurrentIndexQuestion] = useState(0);
  const showNextQuestion = () =>
    setCurrentIndexQuestion(currentIndexQuestion + 1);
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
              onClick={showNextQuestion}
            />
          </label>
        </div>
      ))}
    </div>
  );
}

export default Survey;
