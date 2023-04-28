import Rating from "@mui/material/Rating";

function Votes({ onClick }) {
  return <Rating size="large" onChange={(_event, vote) => onClick(vote)} />;
}

export default Votes;
