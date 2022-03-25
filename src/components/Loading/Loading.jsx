import * as React from "react";
import Box from "@mui/material/Box";
import ParticleBackground from "../particleJs_Background/ParticleBackground";

export default function LoadingScreen() {
  return (
    <Box sx={{ width: "100%" }}>
      <ParticleBackground />
    </Box>
  );
}
