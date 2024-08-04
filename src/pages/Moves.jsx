import React, { useContext } from "react";
import MyMoves from "../components/MyMoves";
import { CircularProgress } from "@mui/material";
import { DataContext } from "../contextAPI/DataContext";

const Moves = () => {
  const { moves, loading } = useContext(DataContext);
  return (
    <>
      {loading ? (
        <CircularProgress color="warning" />
      ) : (
        <MyMoves moves={moves} />
      )}
    </>
  );
};

export default Moves;
