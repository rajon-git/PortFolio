import React, { useContext } from "react";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Landing.css";
import { headerData } from "../../data/headerData";

import twitter from "../../assets/svg/social/twitter.svg";
import github from "../../assets/svg/social/github.svg";
import linkedin from "../../assets/svg/social/linkedin.svg";

const Landing = () => {
  const { theme, drawerOpen } = useContext(ThemeContext);
  // Define your custom styles using the styled function
  const useStyles = styled((theme) => ({
    resumeBtn: {
      color: theme.primary,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      fontSize: "1rem",
      fontWeight: "500",
      height: "50px",
      fontFamily: "Poppins",
      border: `3px solid ${theme.primary}`,
    },
    contactBtn: {
      backgroundColor: theme.primary,
      color: theme.primary2,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      height: "50px",
      fontSize: "1rem",
      fontWeight: "500",
      fontFamily: "Poppins",
      "&:hover": {
        backgroundColor: theme.primary,
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className="landing" >
        <div className="landing--container">
            <div className="landing--container-left" style={{backgroundColor: theme.primary}}>
                <div className="lcl--content">
                    <a href="/" target="_blank" rel="noreferrer">
                        <FaLinkedin className="landing--social" style={{color: theme.primary2}}/>
                    </a>
                    <a href="/" target="_blank" rel="noreferrer">
                        <FaGithub className="landing--social" style={{color: theme.primary2}}/>
                    </a>
                    <a href="/" target="_blank" rel="noreferrer">
                        <FaTwitter className="landing--social" style={{color: theme.primary2}}/>
                    </a>
                </div>
            </div>
            <img src={headerData.image} alt="" className="landing--img" style={{ display: `${drawerOpen ? 'none' : 'block'}`}}/>
            <div className="landing--container-right" style={{backgroundColor: theme.primary2}}>
                <div className="lcr--content" style={{color: theme.secondary}}>
                    <h6>{headerData.title}</h6>
                    <h1>{headerData.name}</h1>
                    <p>{headerData.desciption}</p>

                    <div className="lcr-buttonContainer">
                        <a href={headerData.resumePdf} download="resume">
                            <Button className={classes.resumeBtn}>Download CV</Button>
                        </a>
                        <Button className={classes.contactBtn}>Contact</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Landing