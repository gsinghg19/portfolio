import ncNewsCard from "../FrontendProject/Nc-NewsProjectCard.jsx";
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
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import Divider from "@mui/material/Divider";
import OpenInBrowserRoundedIcon from "@mui/icons-material/OpenInBrowserRounded";
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

export default function NewsCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 800 }} elevation="5">
      <CardHeader title="Nc News Project" />
      <CardMedia
        component="img"
        height="450"
        image="https://github.com/gsinghg19/portfolio/blob/main/src/media_components/frontendImage.png?raw=true"
        alt="frontend project screen image"
      />
      <CardContent>
        <Typography align="left" variant="body2" color="text.secondary">
          A frontend project using react and axios to present news sources from
          my backend api project{" "}
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
            Hello and welcome to my frontend project using my Northcoders
            backend api project to show you Northcoders news articles.
            Northcoders News is a social news aggregation, web content rating,
            and discussion website. Northcoders News has articles which are
            divided into topics. Each article has user curated ratings and can
            be up or down voted using the API. Users can also add comments about
            an article. I have Pulled together all the front-end skills,
            technologies and best practices I have learnt. Making asynchronous
            API calls to my own server. Using HTTP request types to interact
            with my backend, and HTTP response codes to update my UI
            accordingly.
          </Typography>
          <Typography align="left">Future improvements:</Typography>
          <Typography paragraph align="left">
            <li>Improve and update styling aspect of site</li>
            <li>Add functioning userlogin with oath token system</li>
            <li>Future improvements 3</li>
            <li>Future improvements 4</li>
            <Divider />
          </Typography>
          <Typography align="left">
            <IconButton
              aria-label="link"
              href="https://isnt-gsinghg19-awesome.netlify.app/"
            >
              <OpenInBrowserRoundedIcon />
            </IconButton>
            <IconButton
              aria-label="github page"
              href="https://github.com/gsinghg19/fe-nc-news-project.git"
            >
              <GitHubIcon />
            </IconButton>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
