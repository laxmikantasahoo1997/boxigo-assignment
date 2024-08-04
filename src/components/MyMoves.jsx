import React, { useState } from "react";
import Card from "./Card";
import { Typography } from "@mui/material";

const MyMoves = ({ moves }) => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        My Moves
      </Typography>
      {moves?.map((move, index) => (
        <Card
          key={index}
          move={move}
          index={index}
          expandedId={expandedId}
          setExpandedId={setExpandedId}
        />
      ))}
    </>
  );
};

export default MyMoves;
