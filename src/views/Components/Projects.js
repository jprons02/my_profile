import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import {
  cardTitle,
  cardLink,
  cardSubtitle,
} from "assets/jss/material-kit-react.js";

const styles = {
  cardTitle,
  cardLink,
  cardSubtitle,
};

const useStyles = makeStyles(styles);

const Projects = () => {
  const classes = useStyles();
  return (
    <Card
      style={{
        display: "inline-block",
        width: "20rem",
        margin: "15px",
        textAlign: "left",
      }}
    >
      <CardBody>
        <h4 className={classes.cardTitle}>Card Title</h4>
        <h6 className={classes.cardSubtitle}>Card Subtitle</h6>
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a
          href="#pablo"
          className={classes.cardLink}
          onClick={(e) => e.preventDefault()}
        >
          Card link
        </a>
        <a
          href="#pablo"
          className={classes.cardLink}
          onClick={(e) => e.preventDefault()}
        >
          Another link
        </a>
      </CardBody>
    </Card>
  );
};

export default Projects;
