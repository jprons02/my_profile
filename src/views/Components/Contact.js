import React, { useState } from "react";
import axios from "axios";
import emailjs from "emailjs-com";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import SendIcon from "@material-ui/icons/Send";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/loginStyle.js";

import keys from "../../config/keys";

const useStyles = makeStyles(styles);

const Contact = () => {
  const classes = useStyles();

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

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
    e.persist();
    e.preventDefault();

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
            alert("Message sent successfully!");
            e.target.reset();
          }
        },
        function (error) {
          console.log("FAILED...", error);
          alert("Message not sent!");
        }
      );
  };

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

export default Contact;
