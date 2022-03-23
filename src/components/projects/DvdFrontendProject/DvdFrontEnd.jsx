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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import GitHubIcon from "@mui/icons-material/GitHub";
import Divider from "@mui/material/Divider";
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

export default function DvdFrontEndCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 800 }} elevation="5">
      <CardHeader title="Geeq Meet" />
      <CardMedia
        component="img"
        height="440"
        image="https://github.com/gsinghg19/portfolio/blob/main/src/media_components/dvdFrontEnd_screenshot.png?raw=true"
        alt="Dvd frontend project screen image"
      />
      <CardContent>
        <Typography align="left" variant="body2" color="text.secondary">
          A summary of the dvd frontend list project.
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
            A bit more detail for the Dvd frontend project.
          </Typography>
          <Typography align="left">Future improvements:</Typography>
          <Typography paragraph align="left">
            <li>Future developments 1</li>
            <li>Future developments 2</li>
            <li>Future developments 3</li>
            <li>Future developments 4</li>
            <Divider />
          </Typography>
          <Typography align="left">
            <IconButton
              aria-label="github page"
              href="https://github.com/gsinghg19/frontend-practice.git"
            >
              <GitHubIcon />
            </IconButton>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
