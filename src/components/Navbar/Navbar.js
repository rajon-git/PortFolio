import React, { useContext, useState } from 'react';
import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';
import { MdPhone } from 'react-icons/md';
import { FaUser, FaFolderOpen } from 'react-icons/fa';
import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { ThemeContext } from '../../contexts/ThemeContext';

function Navbar() {
    const { theme, setHandleDrawer } = useContext(ThemeContext);
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        setHandleDrawer();
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setHandleDrawer();
    };

    const useStyles = styled(() => ({
        navMenu : {
            fontSize: '2.5rem',
            color: theme.secondary,
            cursor: 'pointer',
            transition: 'color 0.3s',
            "&:hover": {
                color: theme.primary,
            }
        },
        MuiDrawer: {
            padding:'0em 1.8em',
            width:'14em',
            fontFamily:' Poppins',
            fontStyle:' normal',
            fontWeight:' normal',
            fontSize:' 24px',
            background: theme.primary2,
            overflow: 'hidden',
            borderTopRightRadius: '40px',
            borderBottomRightRadius: '40px'
        },
        closebtnIcon: {
            fontSize: '1.85rem',
            cursor: 'pointer',
            color: theme.primary,
            position: 'absolute',
            right: 20,
            top: 20
        },
        drawerItem: {
            background: theme.primary,
            margin: '2rem auto',
            borderRadius: '78.8418px',
            width: '70%',
            height: '54px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        drawerLinks: {
            fontFamily: "Poppins",
            color: theme.primary2,
            fontSize: '1.3rem',
            fontWeight: 700,
        },
        drawerIcon: {
            color: theme.primary2,
            fontSize: '1.6rem',
        }
    }));

    const classes = useStyles();


    return (
        <div className="navbar">
      <div className="navbar--container">
        <h1 style={{ color: theme.primary2 }}>Jane Doe</h1>
        <IoMenuSharp className={classes.navMenu} onClick={handleDrawerOpen} />
      </div>
      <Modal
        variant="temporary"
        onBackdropClick={handleDrawerClose}
        onEscapeKeyDown={handleDrawerClose}
        anchor="left"
        open={open}
        classes={{ paper: classes.MuiDrawer }}
        className="drawer"
        disableScrollLock={true}
      >
        <div className="div-closebtn">
          <FaTimes onClick={handleDrawerClose} className={classes.closebtnIcon} />
        </div>
        <br />
        <div onClick={handleDrawerClose}>
          <div className="navLink--container">
                        <NavLink to="/" smooth={true} spy="true" duration={2000}>
                            <div className={classes.drawerItem}>
                                <IoHomeSharp className={classes.drawerIcon}/>
                                <span className={classes.drawerLinks}>Home</span>
                            </div>
                        </NavLink>

                        <NavLink to="/#about" smooth={true} spy="true" duration={2000}>
                            <div className={classes.drawerItem}>
                                <FaUser className={classes.drawerIcon}/>
                                <span className={classes.drawerLinks}>About</span>
                            </div>
                        </NavLink>

                        <NavLink to="/#resume" smooth={true} spy="true" duration={2000}>
                            <div className={classes.drawerItem}>
                                <HiDocumentText className={classes.drawerIcon}/>
                                <span className={classes.drawerLinks}>Resume</span>
                            </div>
                        </NavLink>

                        <NavLink to="/#services" smooth={true} spy="true" duration={2000}>
                            <div className={classes.drawerItem}>
                                <BsFillGearFill className={classes.drawerIcon}/>
                                <span className={classes.drawerLinks}>Services</span>
                            </div>
                        </NavLink>

                        <NavLink to="/#blog" smooth={true} spy="true" duration={2000}>
                            <div className={classes.drawerItem}>
                                <FaFolderOpen className={classes.drawerIcon}/>
                                <span className={classes.drawerLinks}>Blog</span>
                            </div>
                        </NavLink>

                        <NavLink to="/#contact" smooth={true} spy="true" duration={2000}>
                            <div className={classes.drawerItem}>
                                <MdPhone className={classes.drawerIcon}/>
                                <span className={classes.drawerLinks}>Contact</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Navbar