import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ItemList from "./ItemList";

const CategoryAccordion = ({ categoryData, expanded, onChange }) => {
  const category = categoryData.category;

  if (!Array.isArray(category)) {
    return null;
  }

  const count = category.map((ele) =>
    ele.items.reduce((acc, elem) => acc + Number(elem.qty), 0)
  );

  const total = count.reduce((acc, ele) => acc + ele, 0);

  return (
    <Accordion expanded={expanded} onChange={onChange}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          backgroundColor: "#e2e2e2",
          marginBottom: "10px",
          borderRadius: "5px",
        }}
      >
        <Box
          flex="1"
          textAlign="left"
          fontWeight="bold"
          display="flex"
          justifyContent="space-between"
        >
          <Typography color="tomato">
            {categoryData.displayName}{" "}
            <Box
              component="span"
              width="25px"
              height="25px"
              borderRadius="50%"
              color="white"
              bgcolor="tomato"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              fontSize="14px"
            >
              {total}
            </Box>
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        {total <= 0 ? (
          <Typography>No Items in this Category</Typography>
        ) : (
          <ItemList category={category} count={count} />
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default CategoryAccordion;
