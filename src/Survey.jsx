function Survey({ questions }) {
  const votes = [1, 2, 3, 4, 5];
  return (
    <div className="survey">
      <div>{questions[0].texto}</div>
      {votes.map((vote) => (
        <div key={vote}>
          <label htmlFor={vote}>
            {vote}
            <input id={vote} type="radio" role="radio" name="vote" />
          </label>
        </div>
      ))}
    </div>
  );
}

export default Survey;
