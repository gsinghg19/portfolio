import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import PrimarySearchAppBar from "../Homepage/ButtonBar.jsx";
import "animate.css";

const SettingsPage = () => {
  return (
    <>
      <PrimarySearchAppBar />
      <Box>
        {/* <Paper sx={{ p: 0, margin: 0.5 }}> */}
        <div>
          <h1 class="animate__animated animate__bounce">An animated element</h1>
        </div>
        {/* </Paper> */}
      </Box>
    </>
  );
};

export default SettingsPage;
