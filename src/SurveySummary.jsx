function SurveySummary({ answeredQuestions, renderAnsweredQuestion }) {
  return (
    <div>
      {answeredQuestions.map((answeredQuestions, index) => (
        <div key={index}>{renderAnsweredQuestion(answeredQuestions)}</div>
      ))}
    </div>
  );
}

export default SurveySummary;
