import React, { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import CategoryAccordion from "./CategoryAccordion";
import HouseDetails from "./HouseDetails";

const InventoryDetailsNew = ({ data, move }) => {
  const [expandedId, setExpandedId] = useState(null);

  const handleAccordionChange = (index) => {
    setExpandedId(expandedId === index ? null : index);
  };

  if (!Array.isArray(data)) {
    return <Typography>No Inventory Details Available</Typography>;
  }

  return (
    <Box>
      <Typography variant="h6" fontWeight="bold" textAlign="start" mb={2}>
        Inventory Details{" "}
        <Button
          variant="contained"
          sx={{ backgroundColor: "black", textTransform: "none" }}
        >
          Edit Inventory details
        </Button>
      </Typography>
      {data?.map((categoryData, index) => (
        <CategoryAccordion
          key={index}
          categoryData={categoryData}
          expanded={expandedId === index}
          onChange={() => handleAccordionChange(index)}
        />
      ))}
      <HouseDetails move={move} />
    </Box>
  );
};

export default InventoryDetailsNew;
