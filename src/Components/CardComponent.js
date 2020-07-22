import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import WebIcon from "@material-ui/icons/Web";
import VideoModalComponent from "./VideoModalComponent";
import GitHubIcon from "@material-ui/icons/GitHub";
import ContactFormModal from "./ContactFormModal";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const CardComponent = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [favoriteColor, setColor] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavoriteClick = () => {
    setColor(!favoriteColor);
  };

  const renderFavorite = () => {
    if (props.hasFavorite) {
      return (
        <IconButton onClick={handleFavoriteClick} aria-label="add to favorites">
          <FavoriteIcon color={favoriteColor ? "secondary" : "inherit"} />
        </IconButton>
      );
    } else return "";
  };

  const renderDetails = () => {
    if (props.details !== undefined) {
      return (
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      );
    }
  };

  return (
    <Card style={props.cardStyle} className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" style={{ backgroundColor: red[500] }}>
            {props.avatar}
          </Avatar>
        }
        title={props.title}
        subheader={props.subHeader}
      />
      <CardContent style={{ backgroundColor: "#e6e6e6", textAlign: "center" }}>
        {props.cardContent1}
      </CardContent>
      <CardContent style={{ minHeight: "100px" }}>{props.summary}</CardContent>
      <CardActions disableSpacing>
        {renderFavorite()}
        <IconButton href={props.github} target="_blank">
          <GitHubIcon color="inherit" />
        </IconButton>
        {renderDetails()}
        {props.button1 !== undefined ? props.button1 : ""}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>{props.details}</CardContent>
      </Collapse>
    </Card>
  );
};

export default CardComponent;
