import React, { useState, useContext } from 'react'
import { IoIosArrowDropupCircle } from "react-icons/io";
import { styled } from "@mui/system";

import { ThemeContext } from '../../contexts/ThemeContext';
import './BackToTop.css'

function BackToTop() {

    const [visible, setVisible] = useState(false)

    const { theme } = useContext(ThemeContext);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        } 
        else if (scrolled <= 300){
            setVisible(false)
        }
    };
      
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };
      
    window.addEventListener('scroll', toggleVisible);


    const useStyles = styled(() => ({
        icon: {
            fontSize: '2.6rem',
            color: theme.tertiary
        }
    }));

    const classes = useStyles();


    return (
        <div style={{display: visible ? 'inline' : 'none'}} className="backToTop">
            <button onClick={scrollToTop}>
                <IoIosArrowDropupCircle className={classes.icon}/>
            </button>
        </div>
    )
}

export default BackToTop