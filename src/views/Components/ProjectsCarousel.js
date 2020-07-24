import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";

import ProjectsCard from "./ProjectsCard";

//videos
import mapaVideo from "assets/video/app_mapa.mov";
import drumMachineVideo from "assets/video/drum_machine.mov";
import portfolioWebsite from "assets/video/portfolio_website.mov";

export default function SectionCarousel() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const projectsArray = [
    {
      title: "Utility Web App",
      subTitle:
        "React, Redux, NodeJS, Express, MongoDB, Axios, Dropbox API, Semantic UI React",
      summary: "MERN stack web app with various utility tools.",
      videoSource: mapaVideo,
      githubUrl: "https://github.com/jprons02/mapa",
      deployedLink: "",
      hasSound: false,
    },
    {
      title: "Drum Machine",
      subTitle: "React, Redux, Bootstrap",
      summary:
        "Simple drum machine. Click or press the respective keyboard characters to play sounds.",
      videoSource: drumMachineVideo,
      githubUrl: "https://github.com/jprons02/drum_machine",
      deployedLink: "",
      hasSound: true,
    },
    {
      title: "Portfolio",
      subTitle: "React, Material Kit React",
      summary: "My portfolio website - you're looking right at it!",
      videoSource: portfolioWebsite,
      githubUrl: "https://github.com/jprons02/my_profile",
      deployedLink: "",
      hasSound: false,
    },
  ];

  const renderCarouselContent = () => {
    return projectsArray.map((project) => {
      return (
        <div key={project.title}>
          <ProjectsCard
            title={project.title}
            subTitle={project.subTitle}
            summary={project.summary}
            videoSource={project.videoSource}
            githubUrl={project.githubUrl}
            deployedLink={project.deployedLink}
            hasSound={project.hasSound}
          />
        </div>
      );
    });
  };

  return (
    <div style={{ maxWidth: "750px", margin: "auto" }}>
      <Carousel {...settings}>{renderCarouselContent()}</Carousel>
    </div>
  );
}
