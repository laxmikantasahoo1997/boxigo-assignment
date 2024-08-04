import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";

const HouseDetails = ({ move }) => {
  return (
    <Box mt={2}>
      <Box display={"flex"} alignItems={"center"} gap={"1rem"}>
        <Typography variant="h6" fontWeight="bold" textAlign={"start"}>
          House Details
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "black", textTransform: "none" }}
        >
          Edit housing details
        </Button>
      </Box>
      <Box>
        <Typography
          variant="body1"
          fontWeight="bold"
          textAlign={"start"}
          className="primaryColor"
        >
          Existing House Details
        </Typography>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2" fontWeight="bold">
              Floor No.
            </Typography>
            <Typography variant="body2">{move?.old_floor_no}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2" fontWeight="bold">
              Elevator Available
            </Typography>
            <Typography variant="body2">
              {move?.old_elevator_availability}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2" fontWeight="bold">
              Distance from Elevator / Staircase to truck
            </Typography>
            <Typography variant="body2">
              {move?.old_parking_distance}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2" fontWeight="bold">
              Additional Information
            </Typography>
            <Typography variant="body2">
              {move?.old_house_additional_info}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Typography
          variant="body1"
          fontWeight="bold"
          textAlign={"start"}
          className="primaryColor"
        >
          New House Details
        </Typography>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2" fontWeight="bold">
              Floor No.
            </Typography>
            <Typography variant="body2">{move?.new_floor_no}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2" fontWeight="bold">
              Elevator Available
            </Typography>
            <Typography variant="body2">
              {move?.new_elevator_availability}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2" fontWeight="bold">
              Distance from Elevator / Staircase to truck
            </Typography>
            <Typography variant="body2">
              {move?.new_parking_distance}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2" fontWeight="bold">
              Additional Information
            </Typography>
            <Typography variant="body2">
              {move?.new_house_additional_info}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default HouseDetails;
