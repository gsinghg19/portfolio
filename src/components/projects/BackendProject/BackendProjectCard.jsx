import * as react from "react";
import { Grid } from "@mui/material";
import BackendProject from "../BackendProject/BackendProject.jsx";

function BackendProjectCard() {
  return (
    <Grid item xs={12} align="center">
      <BackendProject />
    </Grid>
  );
}

export default BackendProjectCard;
