import * as React from "react";
import { Paper } from "@mui/material";
import { Grid } from "@mui/material";
import PrimarySearchAppBar from "./ButtonBar";
import ProjectCard from "../Cards/ProjectCard.jsx";
import Copyright from "../Copyright/Copyright.jsx";

const cardLinks = ["Project1, Project2, Project3, Project4"];

const Homepage = () => {
  return (
    <Paper sx={{ p: 0, margin: 0.5 }}>
      <PrimarySearchAppBar />
      <h1 align="center">Projects</h1>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 9 }}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Grid>
      <Copyright />
    </Paper>
  );
};

export default Homepage;
