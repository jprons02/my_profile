import React, { useState } from "react";
import emailjs from "emailjs-com";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import SendIcon from "@material-ui/icons/Send";
import keys from "../config/keys";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    //maxWidth: "500px",
    //margin: "auto",
  },
  button: {
    margin: theme.spacing(1),
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: "absolute",
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const Contact = (props) => {
  const classes = useStyles();

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [open, setOpen] = React.useState(false);
  const [isLoading, setLoadingStatus] = useState(false);

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  const handleInputChange = (e) => {
    if (e.target.id === "name") {
      setNameValue(e.target.value);
    }
    if (e.target.id === "email") {
      setEmailValue(e.target.value);
    }
    if (e.target.id === "message") {
      setMessageValue(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingStatus(true);

    const templateParams = {
      name: nameValue,
      email: emailValue,
      message: messageValue,
    };

    //https://www.emailjs.com/docs/sdk/send/
    emailjs
      .send(keys.serviceID, keys.templateID, templateParams, keys.userID)
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          if (response.status === 200) {
            setLoadingStatus(false);
            //show success alert
            setOpen(true);
          }
          setLoadingStatus(false);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );

    clearInputs();
    console.log("handleSubmit fired!");
  };

  const clearInputs = () => {
    setNameValue("");
    setEmailValue("");
    setMessageValue("");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const renderContactForm = () => {
    return (
      <div style={{ marginTop: "10px" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Email sent successfully!
          </Alert>
        </Snackbar>

        <form onSubmit={handleSubmit} className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="name"
                type="text"
                onChange={handleInputChange}
                value={nameValue}
                required
                fullWidth
                label="Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="email"
                type="email"
                onChange={handleInputChange}
                value={emailValue}
                required
                fullWidth
                label="Email"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="message"
                type="text"
                onChange={handleInputChange}
                value={messageValue}
                required
                fullWidth
                label="Message"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                multiline
              />
            </Grid>
            <Grid
              style={{
                textAlign: "right",
                paddingLeft: 0,
                paddingRight: 0,
              }}
              item
              xs={12}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<SendIcon style={{ fontSize: 18 }} />}
              >
                SEND
              </Button>
            </Grid>
            {isLoading && (
              <CircularProgress size={50} className={classes.buttonProgress} />
            )}
          </Grid>
        </form>
      </div>
    );
  };

  return (
    <Paper
      elevation={3}
      style={{ maxWidth: "700px", padding: "20px", display: "inline-block" }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        Send me a message!
      </Typography>
      {renderContactForm()}
    </Paper>
  );
};

export default Contact;
