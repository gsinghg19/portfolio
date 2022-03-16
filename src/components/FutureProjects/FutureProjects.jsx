import * as React from "react";
import Paper from "@mui/material/Paper";
import PrimarySearchAppBar from "../Homepage/ButtonBar.jsx";
import ProjectCard from "../Cards/ProjectCard.jsx";
import ComplexGrid from "../Cards/complexGrid";
import Copyright from "../Copyright/Copyright.jsx";

const FutureProjects = () => {
  return (
    <Paper sx={{ p: 0, margin: 0.5 }}>
      <PrimarySearchAppBar />
      <div>
        <h1>Future Projects</h1>
      </div>
      <ProjectCard>
        <ComplexGrid />
      </ProjectCard>
      <Copyright />
    </Paper>
  );
};

export default FutureProjects;
