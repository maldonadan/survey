import Rating from "@mui/material/Rating";

function Votes({ onClick }) {
  return <Rating onChange={(_event, vote) => onClick(vote)} />;
}

export default Votes;
