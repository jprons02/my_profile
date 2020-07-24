import React, { useState } from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import Dialog from "@material-ui/core/Dialog";

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

const ProjectsCard = (props) => {
  const classes = useStyles();

  const [modal, setModal] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    soundWarningAlert();

    setModal(true);
  };

  const soundWarningAlert = () => {
    if (props.hasSound) {
      alert("This demo will play sound.");
    }
  };

  const renderCard = () => {
    return (
      <Card
        style={{
          display: "inline-block",
          width: "20rem",
          margin: "15px",
          textAlign: "left",
        }}
      >
        <CardBody style={{ height: "185px" }}>
          <h4 style={{ marginBottom: "10px" }} className={classes.cardTitle}>
            {props.title}
          </h4>
          <h6 className={classes.cardSubtitle}>{props.subTitle}</h6>
          <p style={{ marginTop: "10px" }}>{props.summary}</p>
        </CardBody>
        <CardFooter className={classes.textMuted}>
          <Button color="rose" onClick={openModal}>
            PLAY DEMO
          </Button>
          <a href={props.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button color="rose">GITHUB</Button>
          </a>
        </CardFooter>
      </Card>
    );
  };

  return (
    <div>
      <Dialog
        maxWidth={false}
        classes={{
          root: classes.center,
          paper: classes.modal,
        }}
        open={modal}
        onClose={() => setModal(false)}
        aria-labelledby="simple-dialog-title"
      >
        <video
          width="100%"
          controls
          src={props.videoSource}
          poster=""
          autoPlay={true}
        >
          Sorry, your browser doesn't support embedded videos, but don't worry,
          you can <a href={props.videoSource}>download it</a>
          and watch it with your favorite video player!
        </video>
      </Dialog>
      {renderCard()}
    </div>
  );
};

export default ProjectsCard;

/*
from other github portfolio branch.
<Dialog
maxWidth={false}
onClose={() => setOpen1(false)}
aria-labelledby="simple-dialog-title"
open={open1}
>
<video
  width="100%"
  controls
  src={props.videoPath}
  poster=""
  autoPlay={true}
>
  Sorry, your browser doesn't support embedded videos, but don't worry,
  you can <a href={props.videoPath}>download it</a>
  and watch it with your favorite video player!
</video>
</Dialog>
*/

/* 
ORIGINAL

      <Dialog
        maxWidth={false}
        classes={{
          root: classes.center,
          paper: classes.modal,
        }}
        open={modal}
        keepMounted
        onClose={() => setModal(false)}
        aria-labelledby="modal-slide-title"
        aria-describedby="modal-slide-description"
      >
        <video
          width="100%"
          controls
          src={props.videoSource}
          poster=""
          autoPlay={true}
        >
          Sorry, your browser doesn't support embedded videos, but don't worry,
          you can <a href={props.videoSource}>download it</a>
          and watch it with your favorite video player!
        </video>
      </Dialog>
*/
