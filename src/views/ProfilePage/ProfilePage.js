import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import CodeIcon from "@material-ui/icons/Code";
import MailIcon from "@material-ui/icons/Mail";
import WebIcon from "@material-ui/icons/Web";
import Check from "@material-ui/icons/Check";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Snackbar from "@material-ui/core/Snackbar";
import Clearfix from "components/Clearfix/Clearfix.js";
// my components
import Contact from "../Components/Contact";
import ProjectsCarousel from "../Components/ProjectsCarousel";
import Skills from "../Components/Skills";
// my face!
import profile from "assets/img/faces/me.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const mediaMatch = window.matchMedia("(min-width: 600px)");
  const [snackBarOpen, setSnackBarStatus] = useState(false);
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });

  const mobileStyles = {
    profileOuter: (isMobile) => ({
      height: "100%",
      width: "95%",
      margin: "auto",
    }),
    profileInner: (isMobile) => ({ paddingLeft: "5px", paddingRight: "5px" }),
    skillsIconSize: (isMobile) => ({ fontSize: "30px" }),
  };

  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const handleOpen = () => {
    setSnackBarStatus(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackBarStatus(false);
  };

  return (
    <div>
      <div style={{ textAlign: "left" }}>
        <Snackbar
          anchorOrigin={{
            //options are "top", "right", "bottom", "left", "center"
            vertical: "bottom",
            horizontal: "center",
          }}
          open={snackBarOpen}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <div style={{ width: "80vw" }}>
            <SnackbarContent
              message={
                <span>
                  <b>Your message has been sent successfully!</b>
                </span>
              }
              close
              color="success"
              icon={Check}
            />
            <Clearfix />
          </div>
        </Snackbar>
      </div>
      <Header
        color="transparent"
        brand="Joseph Ronselli"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div
        style={({ height: "100%" }, mobileStyles.profileOuter(matches))}
        className={classNames(classes.main, classes.mainRaised)}
      >
        <div>
          <div
            style={mobileStyles.profileInner(matches)}
            className={classes.container}
          >
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Joseph Ronselli</h3>
                    <h6>WEB DEVELOPER</h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Professional and self-motivated with experience in full stack
                web development - building web apps from concept to deployment.
                Excellent communication skills, critical thinking, time
                management and attention to detail.
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Web Apps",
                      tabIcon: WebIcon,
                      tabContent: (
                        <GridContainer
                          justify="center"
                          style={{ marginTop: "10px", paddingBottom: "50px" }}
                        >
                          <GridItem>
                            <ProjectsCarousel />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Skills",
                      tabIcon: CodeIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={10} lg={8}>
                            <Skills matches={matches} />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Contact",
                      tabIcon: MailIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={10} sm={8} md={6}>
                            <Contact
                              snackOpen={handleOpen}
                              snackClose={handleClose}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
