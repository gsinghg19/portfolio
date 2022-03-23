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
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
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

export default function BackendProject() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 800 }} elevation="5">
      <CardHeader title="Nc-News API Backend Project" />
      <CardMedia
        component="img"
        height="450"
        image="https://image.shutterstock.com/image-vector/api-application-programming-interface-concept-600w-1628097205.jpg"
        alt="Backend coding generic image"
      />
      <CardContent>
        <Typography align="left" variant="body2" color="text.secondary">
          A summary of Backend project will go here.
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
            A Northcoders News API for the purpose of accessing application data
            programmatically. The intention here is to mimic the building of a
            real world backend service (such as reddit) which should provide
            this information to the front end architecture.
          </Typography>
          <Typography align="left">Future improvements:</Typography>
          <Typography paragraph align="left">
            <Divider />
          </Typography>
          <Typography align="left">
            <IconButton
              aria-label="github page"
              href="https://github.com/gsinghg19/be_nc_news.git"
            >
              <GitHubIcon />
            </IconButton>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
