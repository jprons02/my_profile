import React from "react";
import { Typography } from "@material-ui/core";
import ContactFormModal from "./ContactFormModal";
import Card from "./CardComponent";
import Button from "@material-ui/core/Button";

const Home = () => {
  const aboutCard = {
    key: "joey",
    title: "Joseph Ronselli",
    subHeader: "Web Developer",
    github: "https://github.com/jprons02",
    button1: () => {
      return <ContactFormModal />;
    },
    summary: () => {
      return (
        <Typography variant="body2" color="textSecondary" component="p">
          Primarily using JavaScript and specializing in ReactJS. Also
          experienced in PHP, SQL, Wordpress.
        </Typography>
      );
    },
  };

  const buttonStyles = {
    background: "none",
    outline: 0,
    margin: "10px",
  };

  return (
    <div>
      <Typography
        style={{ marginTop: "20px", marginBottom: "25px" }}
        variant="h3"
        component="h1"
        gutterBottom
      >
        Hi, I'm Joey. I make web applications.
      </Typography>
    </div>
  );
};

export default Home;
