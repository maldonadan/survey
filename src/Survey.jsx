function Survey({ questions }) {
  return (
    <div className="survey">
      <div>{questions[0].texto}</div>
    </div>
  );
}

export default Survey;
