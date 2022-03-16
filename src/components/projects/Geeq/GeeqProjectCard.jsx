import * as React from "react";
import { Grid } from "@mui/material";
import GeeqCard from "../Geeq/Geeq.jsx";

const ProjectCard = () => {
  return (
    <Grid item xs={12} align="center">
      <GeeqCard />
    </Grid>
  );
};

export default ProjectCard;
