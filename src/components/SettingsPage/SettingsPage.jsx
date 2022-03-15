import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import PrimarySearchAppBar from "../Homepage/ButtonBar.jsx";

const SettingsPage = () => {
  return (
    <>
      <PrimarySearchAppBar />
      <Box>
        <Paper sx={{ p: 0, margin: 0.5 }}>
          <div>
            <h1>Settings page</h1>
          </div>
        </Paper>
      </Box>
    </>
  );
};

export default SettingsPage;
