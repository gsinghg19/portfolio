import * as React from "react";
import PrimarySearchAppBar from "../Homepage/ButtonBar.jsx";
import ProjectCard from "../Cards/ProjectCard.jsx";
import ComplexGrid from "../Cards/complexGrid";
import Copyright from "../Copyright/Copyright.jsx";

const FutureProjects = () => {
  return (
    <>
      <PrimarySearchAppBar />
      <div>
        <h1>Future Projects</h1>
      </div>
      <ProjectCard>
        <ComplexGrid />
      </ProjectCard>
      <Copyright />
    </>
  );
};

export default FutureProjects;
