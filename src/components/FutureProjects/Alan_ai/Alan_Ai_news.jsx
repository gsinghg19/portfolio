import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "animate.css";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function AlanAi_Card() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 800 }} elevation="5">
      <CardHeader title="Alan Voice Ai News Aggregator App" />
      <CardMedia
        component="img"
        height="370"
        image="https://i0.wp.com/synqqblog.wpcomstaging.com/wp-content/uploads/2020/09/Futuristic-image-1-Copy.png?fit=3184%2C1878&ssl=1"
        alt="Alan Ai screen image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          A project using the Alan Voice Ai app to aggregate news sites and
          atrticles with the voice assistant.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph align="left">
            Alan Ai app has the uniqiue feature of choosing articles by news
            source or top article by country using just your voice. This project
            involves Alan Ai and the newsAPi, with react.
          </Typography>
          <Typography align="left">Future improvements:</Typography>
          <Typography paragraph align="left">
            <li>Future improvements 1</li>
            <li>Future improvements 2</li>
            <li>Future improvements 3</li>
            <li>Future improvements 4</li>
          </Typography>
          <Typography align="left">
            <a href="">Link to demo</a>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
