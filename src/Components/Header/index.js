import React, { useState } from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Drawer from '@mui/material/Drawer';
import BusinessIcon from '@mui/icons-material/Business';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import Box from '@mui/material/Box';
import { Avatar, Button, Typography, Grid } from '@mui/material';
import Badge from '@mui/material/Badge';
import person from '../../assets/Header/person.png';
import corner_field from '../../assets/Header/corner_field.png'
import operator_approved from '../../assets/Header/operator_approved.png'
import operator_processing from '../../assets/Header/operator_processing.png'
import desha from '../../assets/Header/desha.png'
import lake_edge from '../../assets/Header/lake_edge.png'
import './style.css';
import { Link } from 'react-router-dom';

export default function Header() {
    const [notificationDrawerOpen, setNotificationDrawerOpen] = useState(false);
    const [profileDrawerOpen, setProfileDrawerOpen] = useState(false);


    const toggleNotificationDrawer = () => {
        setNotificationDrawerOpen(!notificationDrawerOpen);
    };

    const closeNotificationDrawer = () => {
        setNotificationDrawerOpen(false);
    };


    const toggleProfileDrawer = () => {
        setProfileDrawerOpen(!profileDrawerOpen);
    };

    const closeProfileDrawer = () => {
        setProfileDrawerOpen(false);
    };

    const notificationDrawer = (
        <Box
            sx={{ width: 350, marginTop: '60px', padding: '20px' }}
            role="presentation"
            onClick={closeNotificationDrawer}
            onKeyDown={closeNotificationDrawer}>


            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div className='notification' style={{ display: "flex" }}>
                    <Typography variant='h5'>Notifications</Typography><br />
                    <Button sx={{ color: 'gray', ml: 22 }} onClick={closeNotificationDrawer}><CloseIcon /></Button>
                </div>
                <br></br>
                <Grid container spacing={2}>
                    <Link to='/events/2' style={{ textDecoration: "none" }}>
                        <Grid xs={12}>
                            <div className='notify-div'>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Avatar sx={{ background: 'none' }}><img src={corner_field} className='photo' alt="img"></img></Avatar>
                                    <div>
                                        <Typography variant='body1' className='title'>Corner field: Sorghum photos</Typography>
                                        <Typography variant='body2' className='text'>04 Jun, 2022 | 04:00 PM</Typography>
                                    </div>
                                    <Button sx={{ color: 'black' }}><PhotoLibraryIcon /></Button>
                                </div>
                            </div>
                        </Grid>
                    </Link>
                    <Link to='/events/2' style={{ textDecoration: "none" }}>
                        <Grid xs={12}>
                            <div className='notify-div'>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Avatar sx={{ background: 'none' }}><img src={lake_edge} className='photo' alt="img"></img></Avatar>
                                    <div>
                                        <Typography variant='body1' className='title'>Lake edge field: Finger Millet photos</Typography>
                                        <Typography variant='body2' className='text'>04 Jun, 2022 | 04:00 PM</Typography>
                                    </div>
                                    <Button sx={{ color: 'black' }}><PhotoLibraryIcon /></Button>
                                </div>
                            </div>
                        </Grid>
                    </Link>
                    <Grid xs={12}>
                        <div className='notify-div'>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Avatar sx={{ background: 'none' }}><img src={operator_approved} className='photo' alt="img"></img></Avatar>
                                <div>
                                    <Typography variant='body1' className='title'>Operator onboard approved</Typography>
                                    <Typography variant='body2' className='text'>04 Jun, 2022 | 04:00 PM</Typography>
                                </div>
                                <Button sx={{ color: 'green' }}><CheckCircleOutlineIcon /></Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={12}>
                        <div className='notify-div'>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Avatar sx={{ background: 'none' }}><img src={desha} className='photo' alt="img"></img></Avatar>
                                <div>
                                    <Typography variant='body1' className='title'>Desha Thirupataiah onboarding</Typography>
                                    <Typography variant='body2' className='text'>04 Jun, 2022 | 04:00 PM</Typography>
                                </div>
                                <Button sx={{ color: 'red' }}><ErrorOutlineIcon /></Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={12}>
                        <div className='notify-div'>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Avatar sx={{ background: 'none' }}><img src={operator_processing} alt="img" className='photo'></img></Avatar>
                                <div style={{ justifyContent: 'center' }}>
                                    <Typography variant='body1' className='title'>Operator onboarding processing</Typography>
                                    <Typography variant='body2' className='text'>04 Jun, 2022 | 04:00 PM</Typography>
                                </div>
                                <Button sx={{ color: 'orange' }}><HourglassTopIcon /></Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Box>
    );

    const profileDrawer = (

        <Box
            sx={{ width: 300, marginTop: '55px', padding: '20px' }}
            role="presentation"
            onClick={closeProfileDrawer}
            onKeyDown={closeProfileDrawer}>

            <Button sx={{ color: 'gray', ml: 32 }} onClick={closeProfileDrawer}><CloseIcon /></Button>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img className="contact-img" src={person} alt="img"></img>
                <div className='user-in-drawer'>
                    <Typography className='user-name' variant='p'>Subbarayudu KV</Typography><br />
                    <Typography className='agent' variant='p'>Agent</Typography>
                </div>

            </div>
            <hr />
            <div>
                <Typography className='contact' variant='p'>Contact</Typography>
                <div className='address-details' style={{ display: "flex" }}>

                    <BusinessIcon className='business-icon' />
                    <div >
                        <Typography variant='p' sx={{ fontWeight: 600, fontSize: '16px' }}>Address</Typography>
                        <br />
                        <Typography variant='p' sx={{ color: "#79787A", fontSize: "14px" }}>H.no: 54b/TS, Main street, Megya Thanda, Rangareddy, Hyderabad,  Telangana - 500008</Typography>
                    </div>

                </div>
                <br></br>
                <div className='contact-details' style={{ display: "flex" }}>
                    <SmartphoneIcon className='phone-icon' />
                    <div>
                        <Typography variant='p' sx={{ fontWeight: 600, fontSize: '16px' }}>Contact</Typography><br />
                        <Typography variant='p' sx={{ color: "#79787A", fontSize: "14px" }}>+91 888 999 8989</Typography>
                    </div>
                </div>
                <br></br>
                <div className='email-details' style={{ display: "flex" }}>
                    <AlternateEmailIcon className='mail-icon' />
                    <div>
                        <Typography variant='p' sx={{ fontWeight: 600, fontSize: '16px' }}>Mail</Typography><br />
                        <Typography variant='p' sx={{ color: "#79787A", fontSize: "14px" }}>kethavathlaxmanna@gmail.com</Typography>
                    </div>
                </div>
            </div>
            <hr />

            <div className='actions' >
                <Typography variant='p' className='contact'>Actions</Typography>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <div className='logout-details' style={{ display: "flex" }}>
                        <LogoutIcon className='logout-icon' />
                        <div>
                            <Typography variant='p' sx={{ fontWeight: 'bold', fontSize: '15px' }}>Logout</Typography><br />
                            <Typography variant='p'>847064392663</Typography>
                        </div>
                        <ArrowForwardIosIcon fontSize="small" sx={{ ml: 15 }} />
                    </div>
                </Link>
            </div>

        </Box>
    );

    return (
        <>
            <div className='header'>
                <div className='elements'>
                    <div className='content'>
                        <div className='left-icons'>
                            <Button sx={{ color: 'gray' }}><ArrowBackIosIcon /></Button>
                        </div>
                        <div className='right-icons'>
                            <div className='notification' onClick={toggleNotificationDrawer}>
                                {notificationDrawerOpen ?
                                    (<Button sx={{ backgroundColor: 'green', color: "white", borderRadius: '80px', height: '40px' }}>
                                        <NotificationsNoneIcon className='notification-icon' />
                                    </Button>)
                                    : (<Button sx={{ color: 'black', borderRadius: '50px', height: '40px' }}>
                                        <Badge color='success' variant="dot">
                                            <NotificationsNoneIcon badge className='notification-icon' />
                                        </Badge>
                                    </Button>)
                                }
                            </div>
                            <Drawer
                                anchor="right"
                                open={notificationDrawerOpen}
                                onClose={toggleNotificationDrawer}
                                sx={{ zIndex: 199 }}
                            >
                                {notificationDrawer}
                            </Drawer>


                            <div style={{ display: 'flex', cursor: 'pointer' }} onClick={toggleProfileDrawer}>
                                <Avatar sx={{ ml: 2, border: profileDrawerOpen ? '2px solid green' : 'none' }}><img className='header-img' src={person} alt="Person" /></Avatar>
                                <div className='user'>
                                    <Typography className='user-name' variant='p'>Subbarayudu KV</Typography><br />
                                    <Typography className='agent' variant='p'>Agent</Typography>
                                </div>
                            </div>
                            <Drawer
                                anchor="right"
                                open={profileDrawerOpen}
                                onClose={toggleProfileDrawer}
                                sx={{ zIndex: 199 }}
                            >
                                {profileDrawer}
                            </Drawer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
