import React from "react";
import { Accordion, AccordionDetails } from "@mui/material";

const AccordionComponent = ({ expandedId, onChange, children }) => {
  return (
    <Accordion
      expanded={expandedId}
      onChange={onChange}
      sx={{
        marginTop: "10px",
        borderRadius: "0px",
        boxShadow: "none",
      }}
    >
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;
