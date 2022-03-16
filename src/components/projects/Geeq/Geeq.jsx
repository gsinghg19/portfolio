import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "animate.css";

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

export default function GeeqCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 800 }} elevation="5">
      <CardHeader title="Geeq Meet" />
      <CardMedia
        component="img"
        height="300"
        image="https://user-images.githubusercontent.com/91670399/154870872-f0c8dda4-620b-4a97-b92f-3f2d1044dce5.png"
        alt="Geeq screen image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Geeq Meet is an app that takes the hassle out of getting together.
          Discover a new restaurant, find a cafe for a work meeting or just
          minimize everyone’s journey to the park! Geeq Meet allows you to join
          your friends list, chat about whatever you want and choose meeting
          points for all!
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
            Geeq Meet has the unique function of choosing a destination based on
            the type of place, which is equi-distance for each user. So each
            user will travel the same distance to a meeting point (e.g in the
            middle). This uses an algorithm which takes the current-user
            latitude and longitude coordinates to calculate the global average
            position between everyone. This App is developed using Expo, React
            Native, Firebase and Google Map API.
          </Typography>
          <Typography align="left">Future improvements:</Typography>
          <Typography paragraph align="left">
            <li>Real time updating of user location</li>
            <li> Random place option</li>
            <li>Fully implement transport type</li>
            <li>
              Explore possibility of meeting point weighting based on user
              transport type
            </li>
          </Typography>
          <Typography align="left">
            <a href="https://user-images.githubusercontent.com/91670399/154871123-fa652ab6-2462-4d7d-8198-d772c02193df.mp4">
              Link to demo
            </a>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
