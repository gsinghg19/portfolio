import * as React from "react";

import { Grid } from "@mui/material";
import ComplexGrid from "../Cards/complexGrid.jsx";

const ProjectCard = () => {
  return (
    <Grid item xs={12} align="center">
      <ComplexGrid />
    </Grid>
  );
};

export default ProjectCard;
