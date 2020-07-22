import React from "react";
import { Typography } from "@material-ui/core";
import Card from "./CardComponent";
import WebIcon from "@material-ui/icons/Web";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import VideoModalComponent from "./VideoModalComponent";
import Paper from "@material-ui/core/Paper";

const Projects = (props) => {
  const projectsArray = [
    //MAPA web app
    {
      avatar: () => <WebIcon />,
      title: "Work utility web app",
      subHeader: "Last updated: July 14, 2020",
      cardContent1: () => {
        return <VideoModalComponent videoPath="/videos/app_mapa.mov" />;
      },
      github: "https://github.com/jprons02/mapa",
      summary: function () {
        return (
          <React.Fragment>
            <Typography variant="body2" color="textSecondary" component="p">
              MERN stack web app with various utility tools. Using Redux for
              some state management and Semantic UI React for styling.
            </Typography>
          </React.Fragment>
        );
      },
      details: () => {
        return (
          <React.Fragment>
            <Typography paragraph>
              <strong>Add users</strong>
              <br />
              MongoDB to store usernames and passwords. Bcrypt is used to
              encrypt/decrypt passwords and send/retrieve them to/from the
              database.
            </Typography>
            <Typography paragraph>
              <strong>Google Analytics</strong>
              <br />
              Google analytics views embedded from Google Sheets graphs. Select
              the website and analytics type to view the report.
            </Typography>
            <Typography paragraph>
              <strong>Jackpot</strong>
              <br />
              Enter in the requested jackpot number. This will update text on
              two different websites, three total pages. Using axios to POST
              from the front end to the express API and then POST again to a
              custom wordpress endpoint which then updates a record in the
              wordpress database.
            </Typography>
            <Typography paragraph>
              <strong>Upload</strong>
              <br />
              Uploads a file to Dropbox using their API. Using axios to POST a
              file from front end to the express API and then to the Dropbox
              API.
            </Typography>
            <Typography paragraph>
              <strong>Delete</strong>
              <br />
              Deletes a file from Dropbox using their API. Using axios to POST a
              filepath from front end to the express API and then to the Dropbox
              API.
            </Typography>
            <Typography paragraph>
              <strong>MediaList</strong>
              <br />
              Displays a sorted list of files from Dropbox using their API.
              Sends an axios GET request to the express API which sends a POST
              request to the Dropbox API.
            </Typography>
          </React.Fragment>
        );
      },
    },
    //Drum Machine
    {
      avatar: () => <WebIcon />,
      title: "Drum machine",
      subHeader: "Last updated: February 20, 2020",
      cardContent1: () => {
        return <VideoModalComponent videoPath="/videos/drum_machine.mov" />;
      },
      github: "https://github.com/jprons02/drum_machine",
      summary: function () {
        return (
          <React.Fragment>
            <Typography variant="body2" color="textSecondary" component="p">
              React w/ Redux. Simple drum sample sounds on key or click.
            </Typography>
          </React.Fragment>
        );
      },
      details: function () {
        return (
          <React.Fragment>
            <Typography paragraph>
              Click or press respective key to play sounds. Functionality is on
              when power button (top right) is toggled on. Bank buttons hold
              different sound values for each "drumpad".
            </Typography>
          </React.Fragment>
        );
      },
    },
  ];

  const renderCards = () => {
    return projectsArray.map((project) => {
      return (
        <Card
          cardStyle={{ margin: "20px", display: "inline-block" }}
          avatar={project.avatar()}
          hasFavorite={true}
          key={project.title}
          title={project.title}
          subHeader={project.subHeader}
          cardContent1={project.cardContent1()}
          videoPath={project.videoPath}
          github={project.github}
          summary={project.summary()}
          details={project.details()}
        />
      );
    });
  };

  return (
    <Paper
      elevation={3}
      style={{ maxWidth: "900px", padding: "20px", display: "inline-block" }}
    >
      <div id="projectsDiv">
        <Typography variant="h5" component="h2" gutterBottom>
          Web app projects.
        </Typography>
        {renderCards()}
      </div>
    </Paper>
  );
};

export default Projects;
