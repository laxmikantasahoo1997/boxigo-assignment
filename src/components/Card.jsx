import React, { useState } from "react";
import { Box, Button, Checkbox, Grid, Paper, Typography } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import HomeIcon from "@mui/icons-material/Home";
import WarningIcon from "@mui/icons-material/Warning";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SocialDistanceRoundedIcon from "@mui/icons-material/SocialDistanceRounded";
import HomeMaxRoundedIcon from "@mui/icons-material/HomeMaxRounded";
import AccordionComponent from "./Accordion";
import InventoryDetails from "./InventoryDetails";
import EditIcon from "@mui/icons-material/Edit";
import "./card.css";

const Card = ({ move, index, expandedId, setExpandedId }) => {
  const handleToggle = () => {
    setExpandedId(expandedId === index ? null : index);
  };
  return (
    <Paper
      elevation={5}
      sx={{
        margin: "2rem",
        padding: "15px 30px",
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={4} sm={6} md={4}>
          <Typography variant="h6" fontWeight={"bold"} textAlign={"left"}>
            From
          </Typography>
          <Typography variant="body2" textAlign={"left"}>
            {move.moving_from}
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sm={6}
          md={2}
          container
          alignItems="center"
          justifyContent="center"
        >
          <Box className="arrow-icon">
            <ArrowForwardOutlinedIcon color="warning" />
          </Box>
        </Grid>
        <Grid item xs={4} sm={6} md={4}>
          <Typography variant="h6" fontWeight={"bold"} textAlign={"left"}>
            To
          </Typography>
          <Typography variant="body2" textAlign={"left"}>
            {move.moving_to}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" fontWeight={"bold"} textAlign={"left"}>
            Request#
          </Typography>
          <Typography
            variant="body2"
            fontWeight={"bold"}
            textAlign={"left"}
            className="primaryColor"
          >
            {move.estimate_id}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          sm={6}
          md={1}
          display="flex"
          alignItems="center"
          gap="5px"
        >
          <HomeIcon color="warning" /> {move?.property_size}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={1}
          display="flex"
          alignItems="center"
          gap="5px"
        >
          <HomeMaxRoundedIcon color="warning" /> {move?.total_items}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={1}
          display="flex"
          alignItems="center"
          gap="5px"
        >
          <SocialDistanceRoundedIcon color="warning" /> {move?.distance}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={2.5}
          display="flex"
          alignItems="center"
          gap="4px"
        >
          <CalendarMonthIcon color="warning" /> {move?.moving_on}{" "}
          <EditIcon fontSize="1rem" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={2}
          display="flex"
          alignItems="center"
          gap="2px"
        >
          <Checkbox defaultChecked color="warning" />
          is flexible
        </Grid>
        <Grid item xs={12} sm={6} md={2.5}>
          <Button
            variant="outlined"
            fullWidth
            onClick={handleToggle}
            color="warning"
            sx={{ textTransform: "none" }}
          >
            {expandedId === index ? "Hide Details" : "View more details"}
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Button
            variant="contained"
            fullWidth
            color="warning"
            sx={{ textTransform: "none" }}
          >
            Quotes Awaiting
          </Button>
        </Grid>
      </Grid>
      <Box textAlign={"start"} display="flex" alignItems={"center"} gap={"5px"}>
        <WarningIcon color="warning" />
        <Typography variant="body2">
          Please update your move date before two days of shifting
        </Typography>
      </Box>
      {expandedId === index && (
        <AccordionComponent
          expandedId={expandedId === index}
          onChange={handleToggle}
        >
          <InventoryDetails move={move} data={move.items.inventory} />
        </AccordionComponent>
      )}
    </Paper>
  );
};

export default Card;
