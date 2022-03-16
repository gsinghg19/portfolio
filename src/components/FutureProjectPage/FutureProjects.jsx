import * as React from "react";
import PrimarySearchAppBar from "../Homepage/ButtonBar.jsx";
import { Grid } from "@mui/material";
import Copyright from "../Copyright/Copyright.jsx";
import FutureProjectCard from "../FutureProjects/Alan_ai/Alan_Ai_Card.jsx";

const FutureProjects = () => {
  return (
    <>
      <PrimarySearchAppBar />
      <h1 align="center">Future Projects</h1>
      <Grid>
        <FutureProjectCard />
      </Grid>
      <Copyright />
    </>
  );
};

export default FutureProjects;
