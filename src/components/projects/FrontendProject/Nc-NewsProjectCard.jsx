import * as React from "react";
import { Grid } from "@mui/material";
import NewsCard from "../FrontendProject/Nc-News.jsx";

const ProjectCard = () => {
  return (
    <Grid item xs={12} align="center">
      <NewsCard />
    </Grid>
  );
};

export default ProjectCard;
