import React from "react";
import Typography from "@material-ui/core/Typography";
import {
  FaReact,
  FaNodeJs,
  FaAdobe,
  FaJsSquare,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaDatabase,
  FaAws,
  FaFigma,
} from "react-icons/fa";

const Skills = (props) => {
  const skillsArray = [
    {
      iconName: "React JS",
      icon: () => <FaReact />,
    },
    {
      iconName: "JavaScript",
      icon: () => <FaJsSquare />,
    },
    {
      iconName: "AWS",
      icon: () => <FaAws />,
    },
    {
      iconName: "Node.js",
      icon: () => <FaNodeJs />,
    },
    {
      iconName: "Git",
      icon: () => <FaGitAlt />,
    },
    {
      iconName: "HTML",
      icon: () => <FaHtml5 />,
    },
    {
      iconName: "CSS",
      icon: () => <FaCss3Alt />,
    },
    {
      iconName: "Sass",
      icon: () => <FaSass />,
    },
    {
      iconName: "SQL",
      icon: () => <FaDatabase />,
    },
    {
      iconName: "Photoshop",
      icon: () => <FaAdobe />,
    },
    {
      iconName: "Figma",
      icon: () => <FaFigma />,
    },
  ];

  const renderSkills = () => {
    return skillsArray.map((skill) => {
      return (
        <div
          key={skill.iconName}
          id="icon"
          style={{
            fontSize: props.matches ? "60px" : "40px",
            display: "inline-block",
            margin: "15px 25px",
          }}
        >
          {skill.icon()}
          <Typography component="h3" gutterBottom>
            {skill.iconName}
          </Typography>
        </div>
      );
    });
  };

  return (
    <div
      style={{ marginTop: props.matches ? "5px" : "15px", textAlign: "center" }}
    >
      {renderSkills()}
    </div>
  );
};

export default Skills;
