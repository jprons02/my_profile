import React, { useState } from 'react';
// material-ui components
import { makeStyles } from '@material-ui/core/styles';
// core components
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';
import Button from 'components/CustomButtons/Button.js';
import Dialog from '@material-ui/core/Dialog';

import {
  cardTitle,
  cardLink,
  cardSubtitle,
} from 'assets/jss/material-kit-react.js';

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
      alert('This demo will play sound.');
    }
  };

  const renderProjectLink = () => {
    return (
      <div style={{ marginBottom: '-13px' }}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
          href={props.deployedLink}
        >
          <Button style={{ padding: '5px 0 5px 2px' }} simple color="rose">
            Project Link
          </Button>
        </a>
        <p
          style={{ marginLeft: '3px', marginTop: '-6px', fontStyle: 'italic' }}
        >
          {props.password ? `Password: ${props.password}` : ''}
        </p>
      </div>
    );
  };

  const renderCard = () => {
    return (
      <Card
        style={{
          display: 'inline-block',
          width: '20rem',
          margin: '15px',
          textAlign: 'left',
          position: 'relative',
          height: '315px',
        }}
      >
        <CardBody>
          <h4 style={{ marginBottom: '10px' }} className={classes.cardTitle}>
            {props.title}
          </h4>
          <h6 className={classes.cardSubtitle}>{props.subTitle}</h6>
          <p style={{ marginTop: '10px', lineHeight: '1.3' }}>
            {props.summary}
          </p>
        </CardBody>
        <div
          id="footer-elements"
          style={{
            minHeight: '100px',
            paddingTop: '10px',
            paddingBottom: '10px',
            position: 'absolute',
            bottom: '0',
          }}
        >
          <CardFooter
            style={{
              paddingTop: '0',
              paddingBottom: '0',
            }}
            className={classes.textMuted}
          >
            {props.deployedLink !== '' ? (
              renderProjectLink()
            ) : (
              <div style={{ height: '24px' }}></div>
            )}
          </CardFooter>
          <CardFooter className={classes.textMuted}>
            <Button color="rose" onClick={openModal}>
              DEMO VIDEO
            </Button>
            <a href={props.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button color="rose">GITHUB</Button>
            </a>
          </CardFooter>
        </div>
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

//{props.deployedLink !== "" ? renderProjectLink() : ""}
