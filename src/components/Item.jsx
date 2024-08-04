import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const Item = ({ elem }) => (
  <Grid container mb={2} ml={1}>
    <Grid
      item
      xs={6}
      display="flex"
      justifyContent="start"
      alignItems="center"
      gap="1rem"
    >
      <Box width="50%">
        <Typography>{elem.displayName}</Typography>
      </Box>
      <Box fontWeight="bold" width="50%">
        {elem.qty}
      </Box>
    </Grid>
    <Grid item xs={6}>
      {elem?.type?.length > 0 ? (
        elem?.type
          ?.filter((typeEle) => typeEle.selected)
          ?.map((typeEle, typeind) => (
            <Typography key={typeind} ml={4}>
              {typeEle.option}
            </Typography>
          ))
      ) : (
        <Typography ml={4}></Typography>
      )}
    </Grid>
  </Grid>
);

export default Item;
