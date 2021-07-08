import React, { useState } from "react";
import axios from "axios";
import { keys } from "keys.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// core components
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
// styles
import styles from "assets/jss/material-kit-react/views/componentsSections/loginStyle.js";

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

  console.log("name ", nameValue);

  const resetInputs = () => {
    setNameValue("");
    setEmailValue("");
    setMessageValue("");
  };

  const handleSubmit = async (e) => {
    // persist needed for e.target.reset(). prevents react from clearing event pool.
    e.persist();
    e.preventDefault();
    setLoadingState(true);

    const callback = (value) => {
      setLoadingState(false);
      if (value === "error") {
        alert("Error sending email, please try again later.");
      }
      resetInputs();
    };

    try {
      const response = await axios({
        method: "POST",
        url: "https://llnaae68vk.execute-api.us-east-1.amazonaws.com/prod",
        data: { name: nameValue, email: emailValue, message: messageValue },
        headers: {
          "Content-Type": "application/json",
          "x-api-key": keys.portfolioSiteAPI,
        },
      });
      if (response.data) {
        callback();
      }
    } catch (error) {
      console.log("error: ", error);
      callback("error");
    }
  };

  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit} className={classes.form}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
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
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
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
              }}
            />
          </GridItem>
          <GridItem xs={12}>
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
              }}
            />
          </GridItem>
          <div style={{ position: "relative" }}>
            <Button
              simple
              type="submit"
              color="primary"
              className={classes.button}
              disabled={loadingState}
            >
              SEND MESSAGE
            </Button>
            {loadingState ? (
              <CircularProgress
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "-12px",
                  marginLeft: "-12px",
                  color: "#9c27b0",
                }}
                size={24}
                color="primary"
              />
            ) : (
              ""
            )}
          </div>
        </GridContainer>
      </form>
    );
  };
  return <div>{renderForm()}</div>;
};

export default Contact;
