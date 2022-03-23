import * as React from "react";
import { Paper } from "@mui/material";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import PrimarySearchAppBar from "./ButtonBar";
import ProjectCard from "../Cards/ProjectCard.jsx";
import Copyright from "../Copyright/Copyright.jsx";
import LinearIndeterminate from "../Loading/Loading.jsx";
import GeeqCard from "../projects/Geeq/GeeqProjectCard";
import NewsCard from "../projects/FrontendProject/Nc-NewsProjectCard";
import BackendProjectCard from "../projects/BackendProject/BackendProjectCard";

// const cardLinks = ["Project1, Project2, Project3, Project4"];

const Homepage = () => {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    // <Paper sx={{ p: 0, margin: 0.5 }}>
    <>
      <PrimarySearchAppBar />
      {/* <LinearIndeterminate /> */}
      <h1 align="center">Projects</h1>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <GeeqCard />
        <NewsCard />
        <BackendProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Grid>
      <Copyright />
    </>
    // </Paper>
  );
};

export default Homepage;
