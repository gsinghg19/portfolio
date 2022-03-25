import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card"
import PrimarySearchAppBar from "../Homepage/ButtonBar.jsx";
import "animate.css";


const SettingsPage = () => {
  return (
    <>
      <PrimarySearchAppBar />
      <Paper sx={{p:0.5, margin:10}}>
      <h1 class="animate__animated animate__bounce">Settings</h1>
      </Paper>
      <Paper sx={{p:50, margin:10}}>
        <Card sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
          <section class="test-body-article" style={{width:"100%", height:"100%"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in purus pharetra, sagittis tellus dapibus, egestas diam. Nullam sagittis sodales dignissim.
            Nam tempor tincidunt sapien, ut accumsan augue porttitor quis. Etiam leo nisl, elementum ac elit non, suscipit efficitur arcu.
            Maecenas commodo sollicitudin libero non iaculis. In id molestie velit. Donec sed luctus ante, vel facilisis leo.
            In neque ex, hendrerit ut dolor id, tempus vestibulum ex. Ut eu tellus viverra erat condimentum mollis.
            Aliquam non pellentesque sapien, sed ultricies erat. Aenean cursus, elit eu convallis tristique, neque ante placerat arcu, in lacinia libero sapien a orci.
            Phasellus ex arcu, euismod vel quam et, pretium bibendum arcu. Etiam id mi sapien.
            Etiam orci urna, finibus id ultricies ac, pharetra nec tortor.
            Proin vel convallis odio. Donec mollis eros commodo mi tincidunt maximus a sed dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac rhoncus arcu, in pretium felis. Nunc sodales et dui molestie consequat.#
            Etiam tincidunt eleifend dictum. Sed accumsan magna nec enim congue, id sagittis nunc laoreet. Nulla at purus ullamcorper, laoreet mauris eget, feugiat ante. Vivamus dictum eleifend sapien nec imperdiet.
            Vivamus ac tellus quam. Phasellus volutpat dictum elit, in cursus magna molestie faucibus. Aenean iaculis nulla vel lacus ullamcorper vehicula.
            </section>
     </Card>
      </Paper>
    </>
  );
};

export default SettingsPage;
