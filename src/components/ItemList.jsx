import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Item from "./Item";

const ItemList = ({ category, count }) => (
  <Box>
    {category.map(
      (ele, i) =>
        count[i] !== 0 && (
          <Box key={i} mb={1}>
            <Typography
              fontWeight="bold"
              mb={2}
              display="flex"
              justifyContent="start"
              variant="h6"
            >
              {ele.displayName}
            </Typography>
            <Grid container spacing={1} textAlign="start">
              {ele.items.map(
                (elem, index) =>
                  elem.qty >= 1 && <Item key={index} elem={elem} />
              )}
            </Grid>
          </Box>
        )
    )}
  </Box>
);

export default ItemList;
