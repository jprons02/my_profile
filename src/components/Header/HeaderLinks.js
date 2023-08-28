/*eslint-disable*/
import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';

import { FaFileAlt } from 'react-icons/fa';

// core components
import Button from 'components/CustomButtons/Button.js';

import styles from 'assets/jss/material-kit-react/components/headerLinksStyle.js';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const marginRight = { marginRight: '6px' };
  const resumeLink =
    'https://drive.google.com/file/d/1qioaK-_aXcocvXOAb1V8t7LGzDXtTiaN/view?usp=sharing';

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="linkedin"
          title="Follow me on LinkedIn"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://www.linkedin.com/in/joseph-ronselli/"
            target="_blank"
            rel="noopener noreferrer"
            color="transparent"
            className={classes.navLink}
          >
            <i
              style={marginRight}
              className={classes.socialIcons + ' fab fa-linkedin'}
            />{' '}
            LinkedIn
          </Button>
        </Tooltip>
      </ListItem>
      {/*
      <ListItem className={classes.listItem}>
        <Tooltip
          id="facebook"
          title="Follow me on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/joey.ronselli"
            rel="noopener noreferrer"
            target="_blank"
            className={classes.navLink}
          >
            <i
              style={marginRight}
              className={classes.socialIcons + " fab fa-facebook"}
            />{" "}
            Facebook
          </Button>
        </Tooltip>
      </ListItem>
      */}
      <ListItem className={classes.listItem}>
        <Tooltip
          id="github"
          title="Follow me on github"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://github.com/jprons02"
            rel="noopener noreferrer"
            target="_blank"
            className={classes.navLink}
          >
            <i
              style={marginRight}
              className={classes.socialIcons + ' fab fa-github'}
            />{' '}
            GitHub
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.navLink}
        >
          <FaFileAlt /> Resume
        </Button>
      </ListItem>
    </List>
  );
}
