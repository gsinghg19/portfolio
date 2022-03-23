import * as React from "react";
import { Grid } from "@mui/material";
import DvdFrontEndCard from "../DvdFrontendProject/DvdFrontEnd.jsx";

const ProjectCard = () => {
  return (
    <Grid item xs={12} align="center">
      <DvdFrontEndCard />
    </Grid>
  );
};

export default ProjectCard;
