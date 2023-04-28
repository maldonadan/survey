const votes = [1, 2, 3, 4, 5];

function Votes({ onClick }) {
  return votes.map((vote) => (
    <div key={vote}>
      <label htmlFor={vote}>
        {vote}
        <input
          id={vote}
          type="radio"
          role="radio"
          name="vote"
          onClick={() => onClick(vote)}
        />
      </label>
    </div>
  ));
}

export default Votes;
