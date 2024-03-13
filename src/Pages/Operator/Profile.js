import React from 'react'
import './profile.css'
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import Link from '@mui/material/Link';
import { Avatar, Badge, Button } from '@mui/material'
import { Grid } from '@mui/material'
import { Breadcrumbs, Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import BusinessIcon from '@mui/icons-material/Business';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import BadgeIcon from '@mui/icons-material/Badge';
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import Box from '@mui/material/Box';

import avatar from '../../assets/Operator/avatar.png'
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import ellipse8 from '../../assets/LandOwners/Ellipse 8.png'
import eventCharts from '../../assets/LandOwners/EventCharts.png'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import cropsicon from '../../assets/LandOwners/crops-icon.png'
import sourgham from '../../assets/Operator/sourgham.png'
import finger_millet from '../../assets/Operator/finger_millet.png'
import Banner from '../../assets/Operator/Banner.png'

export default function Profile() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        color: theme.palette.text.secondary,
    }));

    return (
        <>
            <Header />
            <Sidebar />
            <Box sx={{ marginLeft: '290px' }}>
                <Grid container>
                    <Grid xs={10}>
                        <Breadcrumbs sx={{
                            textDecoration: 'none'
                        }}
                            separator={<NavigateNextIcon fontSize="small" />}
                            aria-label="breadcrumb">

                            <Link underline='hover' color='inherit' href="/operator">Operator</Link>
                            <Link underline='hover' color='inherit' href="/operator/profile">Profile</Link>

                        </Breadcrumbs>
                        <div className='title'>
                            <Typography variant='p' className='title'>Profile</Typography>
                        </div>
                    </Grid>
                    <Grid xs={2}>
                        <div className='add-button'>
                            <Button variant='' className='add-button'>Add Land Parcel</Button>
                        </div>
                    </Grid>

                </Grid>

                <Grid container sx={{ mt: 3 }} className='cards3'>
                    <Grid xs={4.5} sx={{ mb: 5 }}>
                        <Item sx={{ boxShadow: '0px 0px 12px 0px #0000001F', paddingBottom: 2 }}>
                            <div className='profile-grid'>
                                <Badge color='success' badgeContent=" " size="large"
                                    className='badge'
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}></Badge><Avatar className='avatar'><img src={avatar}></img></Avatar>
                                <Typography variant='p' className='name'>Kethavath Laxmanna</Typography>
                                <Typography variant='p' className='id'>KFP/MT/01</Typography>
                                <Grid container sx={{ mt: 3, textAlign: 'center' }}>
                                    <Grid xs={4} className='n'>
                                        <b><Typography variant='p'>14</Typography></b>
                                    </Grid>
                                    <Grid xs={4} className='n'>
                                        <b><Typography variant='p'>8</Typography></b>
                                    </Grid>
                                    <Grid xs={4} className='n'>
                                        <b><Typography variant='p'>8</Typography></b>
                                    </Grid>
                                </Grid>

                                <Grid container sx={{ textAlign: 'center' }}>
                                    <Grid xs={4} className='t'>
                                        <Typography variant='p'>Acres</Typography>
                                    </Grid>
                                    <Grid xs={4} className='t'>
                                        <Typography variant='p'>Landparcels</Typography>
                                    </Grid>
                                    <Grid xs={4} className='t'>
                                        <Typography variant='p'>Crops</Typography>
                                    </Grid>

                                </Grid>
                            </div>
                            <hr style={{ margin: '20px' }} />

                            <div className='contact'>

                                <Typography className='title' variant='p'>Contact</Typography>
                                <div className='address-details'>
                                    <Button sx={{ color: 'black' }}><BusinessIcon /></Button>
                                    <div>
                                        <Typography variant='p' sx={{ fontWeight: 'bold', fontSize: '15px' }}>Address</Typography><br />
                                        <Typography variant='p'>H.no: 54b/TS, Main street, Megya Thanda, Rangareddy, Hyderabad,  Telangana -<br /> 500008</Typography>
                                    </div>
                                </div>
                                <div className='contact-details'>
                                    <Button sx={{ color: 'black' }}><SmartphoneIcon /></Button>
                                    <div>
                                        <Typography variant='p' sx={{ fontWeight: 'bold', fontSize: '15px' }}>Contact</Typography><br />
                                        <Typography variant='p'>+91 888 999 8989</Typography>
                                    </div>
                                </div>
                                <div className='email-details'>
                                    <Button sx={{ color: 'black' }}><AlternateEmailIcon /></Button>
                                    <div>
                                        <Typography variant='p' sx={{ fontWeight: 'bold', fontSize: '15px' }}>Mail</Typography><br />
                                        <Typography variant='p'>kethavathlaxmanna@gmail.com</Typography>
                                    </div>
                                </div>
                            </div>
                            <hr style={{ margin: '20px' }} />

                            <div className='documents'>
                                <Typography variant='p' className='title'>Documents</Typography>
                                <div className='aadhar'>
                                    <Button sx={{ color: 'black' }}><BadgeIcon /></Button>
                                    <div>
                                        <Typography variant='p' sx={{ fontWeight: 'bold', fontSize: '15px' }}>Aadhar</Typography><br />
                                        <Typography variant='p'>847064392663</Typography>
                                    </div>
                                </div>
                            </div>
                            <hr style={{ margin: '20px' }} />

                            <div className='prof-details'>
                                <Typography variant='p' className='title'>Details</Typography>
                                <div className='fathername'>
                                    <Typography variant='p'>Father's name</Typography>
                                    <b><Typography variant='p'>K. Lakshmanna</Typography></b>

                                </div>
                                <div className='familysize'>
                                    <Typography variant='p'>Family size</Typography>
                                    <b><Typography variant='p'>6</Typography></b>

                                </div>
                                <div className='farming'>
                                    <Typography variant='p'>Total ex. in farming</Typography>
                                    <b><Typography variant='p'>5 years</Typography></b>

                                </div>
                                <div className='organic-farming'>
                                    <Typography variant='p'>Ex. in organic farming</Typography>
                                    <b><Typography variant='p'>6 years</Typography></b>

                                </div>
                            </div>
                        </Item>

                    </Grid>

                    <Grid xs={2.3}>
                        <Paper className="five-cards">
                            <div className='metrics-card'>
                                <Grid container>
                                    <Grid xs={3.5}>
                                        <GroupRoundedIcon className='group-icon' fontSize='large'></GroupRoundedIcon>
                                    </Grid>
                                    <Grid xs={8.5} >
                                        <Typography className='five-card-label' variant='p'>Land Parcels</Typography>
                                        <br></br>
                                        <Typography className='five-card-number' variant='p'>359</Typography>
                                    </Grid>
                                </Grid>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid xs={2.3}>
                        <Paper className="five-cards">
                            <div className='metrics-card'>
                                <Grid container>
                                    <Grid xs={3.5}>
                                        <img className="crops-icon" src={cropsicon} alt="logo"></img>
                                    </Grid>
                                    <Grid xs={5.5} >
                                        <Typography className='five-card-label' variant='p'>Crops</Typography>
                                        <br></br>
                                        <Typography className='five-card-number' variant='p'>359</Typography>

                                    </Grid>
                                    <Grid xs={3} >
                                        <img className="ellipse8" src={ellipse8} alt="logo"></img>
                                    </Grid>
                                </Grid>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid xs={2.3}>
                        <Paper className="five-cards">
                            <div className='metrics-card'>
                                <Grid container>
                                    <Grid xs={3.5}>
                                        <CalendarMonthIcon className='calendar-icon' fontSize='large'></CalendarMonthIcon>
                                    </Grid>
                                    <Grid xs={5.5}>
                                        <Typography className='five-card-label' variant='p'>Events</Typography>
                                        <br></br>
                                        <Typography className='five-card-number' variant='p'>86</Typography>
                                    </Grid>
                                    <Grid xs={3} >
                                        <img className="eventCharts" src={eventCharts} alt="logo"></img>
                                    </Grid>

                                </Grid>
                            </div>
                        </Paper>
                    </Grid>



                    <div className='landparcels-cards'>
                        <div className='landparcel'><Typography variant='p'>Land Parcels</Typography></div>
                        <Grid container>

                            <Grid xs={6}>
                                <Link href='/operator/profile/landparcel' style={{ textDecoration: 'none' }}>
                                    <div className="grid-upper-profile">
                                        <img src={Banner}></img>
                                    </div >
                                    <Item className='grid-lower-profile' sx={{ boxShadow: '0px 0px 12px 0px #0000001F' }}>
                                        <div>
                                            <div style={{ display: 'grid', justifyContent: 'center' }}>

                                                <b><Typography variant='p'>Chennaiah polam - Sy.no:33/95</Typography></b>
                                                <Typography variant='p'>Megya Thanda, Rangareddy, Hyderabad</Typography>
                                            </div>
                                            <Grid container sx={{ textAlign: 'center', mt: 3 }}>
                                                <Grid xs={4}>
                                                    <Typography variant='p' className='n'><b>14</b></Typography>
                                                </Grid>
                                                <Grid xs={4}>
                                                    <Typography variant='p' className='n'><b>8</b></Typography>
                                                </Grid>
                                                <Grid xs={4}>
                                                    <Typography variant='p' className='n'><b>8</b></Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container sx={{ textAlign: 'center' }}>
                                                <Grid xs={4}>
                                                    <Typography variant='p' className='t'>Acres</Typography>
                                                </Grid>
                                                <Grid xs={4}>
                                                    <Typography variant='p' className='t'>Area Owned</Typography>
                                                </Grid>
                                                <Grid xs={4}>
                                                    <Typography variant='p' className='t'>Area Leased</Typography>
                                                </Grid>

                                            </Grid>

                                            <Grid container>
                                                <Grid xs={12}>
                                                    <Item className='crops-operators'>
                                                        <Avatar><img src={sourgham}></img></Avatar>
                                                        <div style={{ display: 'grid' }}>
                                                            <Typography variant='p'><b>Sourgham</b></Typography>
                                                            <Typography variant='p' className='text'>Corner Field</Typography>
                                                        </div>
                                                        <Typography variant='p' className='no-of-events'>12 events</Typography>
                                                    </Item>

                                                </Grid>
                                                <Grid xs={12}>
                                                    <Item className='crops-operators'>
                                                        <Avatar><img src={finger_millet}></img></Avatar>
                                                        <div style={{ display: 'grid' }}>
                                                            <Typography variant='p'><b>Finger Millet</b></Typography>
                                                            <Typography variant='p' className='text'>Lake Edge Field</Typography>
                                                        </div>
                                                        <Typography variant='p' className='no-of-events'>20 events</Typography>
                                                    </Item>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Item>
                                </Link>
                            </Grid>



                            <Grid xs={6}>
                                <Link href='/operator/profile/landparcel' style={{ textDecoration: 'none' }}>
                                    <div className="grid-upper-profile">
                                        <img src={Banner}></img>
                                    </div >
                                    <Item className='grid-lower-profile' sx={{ boxShadow: '0px 0px 12px 0px #0000001F' }}>
                                        <div>
                                            <div style={{ display: 'grid', justifyContent: 'center' }}>

                                                <b><Typography variant='p'>Chennaiah polam - Sy.no:33/95</Typography></b>
                                                <Typography variant='p'>Megya Thanda, Rangareddy, Hyderabad</Typography>
                                            </div>
                                            <Grid container sx={{ textAlign: 'center', mt: 3 }}>
                                                <Grid xs={4}>
                                                    <Typography variant='p' className='n'><b>14</b></Typography>
                                                </Grid>
                                                <Grid xs={4}>
                                                    <Typography variant='p' className='n'><b>8</b></Typography>
                                                </Grid>
                                                <Grid xs={4}>
                                                    <Typography variant='p' className='n'><b>8</b></Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container sx={{ textAlign: 'center' }}>
                                                <Grid xs={4}>
                                                    <Typography variant='p' className='t'>Acres</Typography>
                                                </Grid>
                                                <Grid xs={4}>
                                                    <Typography variant='p' className='t'>Area Owned</Typography>
                                                </Grid>
                                                <Grid xs={4}>
                                                    <Typography variant='p' className='t'>Area Leased</Typography>
                                                </Grid>

                                            </Grid>

                                            <Grid container>
                                                <Grid xs={12}>
                                                    <Item className='crops-operators'>
                                                        <Avatar><img src={sourgham}></img></Avatar>
                                                        <div style={{ display: 'grid' }}>
                                                            <Typography variant='p'><b>Sourgham</b></Typography>
                                                            <Typography variant='p' className='text'>Corner Field</Typography>
                                                        </div>
                                                        <Typography variant='p' className='no-of-events'>12 events</Typography>
                                                    </Item>

                                                </Grid>
                                                <Grid xs={12}>
                                                    <Item className='crops-operators'>
                                                        <Avatar><img src={finger_millet}></img></Avatar>
                                                        <div style={{ display: 'grid' }}>
                                                            <Typography variant='p'><b>Finger Millet</b></Typography>
                                                            <Typography variant='p' className='text'>Lake Edge Field</Typography>
                                                        </div>
                                                        <Typography variant='p' className='no-of-events'>20 events</Typography>
                                                    </Item>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Item>
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Box >
        </>
    )
}
