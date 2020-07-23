import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import CircularProgress from "@material-ui/core/CircularProgress";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
// core components
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
// styles
import styles from "assets/jss/material-kit-react/views/componentsSections/loginStyle.js";
// email service
import emailjs from "emailjs-com";
import keys from "../../config/keys";

const useStyles = makeStyles(styles);

const Contact = (props) => {
  const classes = useStyles();

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [loadingState, setLoadingState] = useState(false);

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

  const handleSubmit = async (e) => {
    // persist needed for e.target.reset(). prevents react from clearing event pool.
    e.persist();
    e.preventDefault();

    setLoadingState(true);

    var templateParams = {
      name: nameValue,
      email: emailValue,
      message: messageValue,
    };

    emailjs
      .send(keys.serviceID, keys.templateID, templateParams, keys.userID)
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          if (response.status === 200) {
            e.target.reset();
            props.snackOpen();
            setLoadingState(false);
          }
        },
        function (error) {
          console.log("FAILED...", error);
          alert("Message not sent!");
          setLoadingState(false);
        }
      );
  };

  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit} className={classes.form}>
        <CustomInput
          labelText="Name"
          id="name"
          value={nameValue}
          formControlProps={{
            fullWidth: true,
          }}
          inputProps={{
            onChange: handleInputChange,
            type: "text",
            endAdornment: (
              <InputAdornment position="end">
                <People className={classes.inputIconsColor} />
              </InputAdornment>
            ),
          }}
        />
        <CustomInput
          onChange={handleInputChange}
          value={emailValue}
          labelText="Email"
          id="email"
          formControlProps={{
            fullWidth: true,
          }}
          inputProps={{
            onChange: handleInputChange,
            type: "email",
            endAdornment: (
              <InputAdornment position="end">
                <Email className={classes.inputIconsColor} />
              </InputAdornment>
            ),
          }}
        />
        <CustomInput
          onChange={handleInputChange}
          value={messageValue}
          labelText="Your Message"
          id="message"
          formControlProps={{
            fullWidth: true,
            className: classes.textArea,
          }}
          inputProps={{
            onChange: handleInputChange,
            multiline: true,
            rows: 3,
          }}
        />
        <Button simple type="submit" color="primary" className={classes.button}>
          SEND MESSAGE
        </Button>
      </form>
    );
  };

  return (
    <div>
      {loadingState ? (
        <CircularProgress style={{ color: "#9c27b0", marginTop: "50px" }} />
      ) : (
        renderForm()
      )}
    </div>
  );
};

export default Contact;
