import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import CodeIcon from "@material-ui/icons/Code";
import MailIcon from "@material-ui/icons/Mail";
import WebIcon from "@material-ui/icons/Web";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

// my components
import Contact from "../Components/Contact";
import Projects from "../Components/Projects";
import ProjectsCarousel from "../Components/ProjectsCarousel";

import profile from "assets/img/faces/me.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Snackbar from "@material-ui/core/Snackbar";
// core components
import Clearfix from "components/Clearfix/Clearfix.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const [snackBarOpen, setSnackBarStatus] = useState(false);

  const handleOpen = () => {
    setSnackBarStatus(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackBarStatus(false);
  };

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
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
        style={{ height: "100%" }}
        className={classNames(classes.main, classes.mainRaised)}
      >
        <div>
          <div className={classes.container}>
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
                An artist of considerable range, Chet Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.{" "}
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
                          style={{ marginTop: "10px" }}
                          justify="center"
                        >
                          <GridItem xs={12} md={6}>
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
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
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
