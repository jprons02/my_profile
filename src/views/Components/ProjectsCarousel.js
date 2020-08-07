import React from "react";
// react component for creating beautiful carousel
//import Carousel from "react-slick";
import Slider from "react-slick";

import ProjectsCard from "./ProjectsCard";

//videos
import mapaVideo from "assets/video/app_mapa.mp4";
import drumMachineVideo from "assets/video/drum_machine.mp4";
import portfolioWebsite from "assets/video/portfolio_website.mp4";
import quoteGenVideo from "assets/video/sbtb_quote.mp4";
import markdownVideo from "assets/video/markdown.mp4";
import wikipediaVideo from "assets/video/wikipedia.mp4";

export default function SectionCarousel(props) {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 0,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  const projectsArray = [
    {
      title: "Utility Web App",
      subTitle:
        "React, Redux, NodeJS, Express, MongoDB, Dropbox API, Semantic UI React",
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
      deployedLink: "https://jpr-drum-machine.herokuapp.com/",
      hasSound: false,
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
    {
      title: "Random Quote Generator (SBTB)",
      subTitle: "JQuery, Bootstrap",
      summary: "Simple quote gen on click. Saved by the Bell theme!",
      videoSource: quoteGenVideo,
      githubUrl: "https://github.com/jprons02/sbtb_random_quotes",
      deployedLink: "https://random-quote-gen-sbtb.herokuapp.com/index.html",
      hasSound: false,
    },
    {
      title: "Markdown Previewer",
      subTitle: "React, Bootstrap",
      summary: "Preview your markdown as you type in the editor.",
      videoSource: markdownVideo,
      githubUrl: "https://github.com/jprons02/markdown_preview",
      deployedLink: "https://jpr-markdown-previewer.herokuapp.com/",
      hasSound: false,
    },
    {
      title: "Wikipedia Search",
      subTitle: "Wikipedia API, JQuery, Bootstrap",
      summary: "Wikipedia search viewer.",
      videoSource: wikipediaVideo,
      githubUrl: "https://github.com/jprons02/jpr-wikipedia-viewer",
      deployedLink: "https://jpr-wikipedia-viewer.herokuapp.com/index.html",
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
    <div style={{ margin: "auto" }}>
      <Slider {...settings}>{renderCarouselContent()}</Slider>
    </div>
  );
}
