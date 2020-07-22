import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const About = () => {
  const professional = {
    skills: "JavaScript, React, Redux, JQuery, NodeJS, Git, SQL, HTML, SASS",
    details:
      "Professional and self-motivated with experience in web development, web design, software development, debugging, IT consulting, account management and project management. Excellent communication skills, critical thinking, time management and attention to detail.",
  };

  const personal = {
    skills: "Father, Husband, Gamer, Sports, Beer, Easygoing, Awesome",
    details: "personal details",
  };

  const [aboutSelect, setAbout] = useState("professional");

  const handleClick = (e) => {
    if (e.target.innerText === "PROFESSIONAL") {
      setAbout("professional");
    }
    if (e.target.innerText === "PERSONAL") {
      setAbout("personal");
    }
  };

  return (
    <Paper
      elevation={3}
      style={{
        maxWidth: "700px",
        //textAlign: "center",
        padding: "20px",
        display: "inline-block",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            //style={{ textAlign: "left" }}
            variant="h5"
            component="h2"
            gutterBottom
          >
            About me
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Avatar
            style={{
              display: "inline-block",
              height: "120px",
              width: "120px",
              verticalAlign: "middle",
            }}
            alt="Joey"
            src="/images/me.jpg"
          />
          <div style={{ display: "inline-block", verticalAlign: "middle" }}>
            <Button
              id="professional"
              color={aboutSelect === "professional" ? "primary" : "secondary"}
              onClick={handleClick}
              style={{ width: "150px", margin: "10px", display: "block" }}
              variant="outlined"
            >
              Professional
            </Button>
            <Button
              id="personal"
              color={aboutSelect === "personal" ? "primary" : "secondary"}
              onClick={handleClick}
              style={{ width: "150px", margin: "10px", display: "block" }}
              variant="outlined"
            >
              Personal
            </Button>
          </div>
        </Grid>
        <Grid item lg={12}>
          <Typography variant="body1" component="p" gutterBottom>
            <strong>
              {aboutSelect === "professional"
                ? professional.skills
                : personal.skills}
            </strong>
          </Typography>
        </Grid>
        <Grid item lg={12}>
          <Typography variant="body1" component="p" gutterBottom>
            {aboutSelect === "professional"
              ? professional.details
              : personal.details}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default About;
