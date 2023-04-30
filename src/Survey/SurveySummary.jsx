function SurveySummary({ answeredQuestions, renderAnsweredQuestion }) {
  return (
    <div className="survey">
      {answeredQuestions.map((answeredQuestions, index) => (
        <div key={index}>{renderAnsweredQuestion(answeredQuestions)}</div>
      ))}
    </div>
  );
}

export default SurveySummary;
