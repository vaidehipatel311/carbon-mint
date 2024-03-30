import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import Sidebar from '../../Components/Sidebar'
import Box from '@mui/material/Box'
import './style.css'
import SearchIcon from '@mui/icons-material/Search';

import Paper from '@mui/material/Paper';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import ellipse8 from '../../assets/LandOwners/Ellipse 8.png'
import eventCharts from '../../assets/LandOwners/EventCharts.png'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LandscapeIcon from '@mui/icons-material/Landscape';
import cropsicon from '../../assets/LandOwners/crops-icon.png'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { connect } from 'react-redux';

import corner_field from '../../assets/LandOwners/Vector.png'
import { Avatar, Grid, Typography } from '@mui/material'
import operator_chart from '../../assets/DashBoard/operator_chart.png'
import event_chart from '../../assets/DashBoard/event_chart.png'
import crops_chart from '../../assets/DashBoard/crops_chart.png'
import yield_chart from '../../assets/DashBoard/yield_chart.png'
import india from '../../assets/DashBoard/india.png'
import india_dotted from '../../assets/DashBoard/india_dotted.png'
import person_location from '../../assets/DashBoard/person_location.png'
import TableHead from '@mui/material/TableHead';
import PreviewIcon from '@mui/icons-material/Preview';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useLocation } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { fetchLandOwners } from '../../Services/LandOwners/actions'

function DashBoard({ fetchLandOwners }) {

    const [onboarding, setOnboarding] = useState([]);
    const location = useLocation();
    const [openAlert, setOpenAlert] = useState(false);

    useEffect(() => {
        fetchLandOwners()
            .then((data) => {
                console.log(data);
                const pending = data.filter((p) => p.status === 'Pending')
                setOnboarding(pending);
            })
            .catch(error => {
                console.error('Error fetching dashboard data:', error);
            });

        if (location.state && location.state.showAlert) {
            setOpenAlert(true);
        }

    }, [location, onboarding]);

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false);
    };

    const generateTablerows = () => {
        return onboarding.slice(0, 5).map((data) => (
            <TableBody>
                <TableRow sx={{ fontSize: '10px' }}>
                    <TableCell component="th" scope="row" sx={{ display: 'flex', marginTop: '2px', borderRight: '1px solid #d7d7d7' }}>
                        <Avatar sx={{ background: 'none' }}><img src={corner_field} className='person-icon' alt="avatar"></img></Avatar>
                        <Typography variant='p' sx={{ marginTop: '10px' }}>{data.name}</Typography>
                    </TableCell>
                    <TableCell sx={{ borderRight: '1px solid #d7d7d7' }}>{data.type}</TableCell>
                    <TableCell sx={{ borderRight: '1px solid #d7d7d7' }}>{data.status}</TableCell>
                    <TableCell sx={{ borderRight: '1px solid #d7d7d7' }}><PreviewIcon /></TableCell>
                </TableRow>

            </TableBody>
        ));
    }

    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>
            <Box sx={{ paddingLeft: "290px", paddingRight: "15px" }}>
                <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
                    <Alert sx={{ ml: 70, mt: -10 }} onClose={handleCloseAlert} severity="success">
                        Submitted the Field Preparation event details successfully
                    </Alert>
                </Snackbar>
                <Grid container>
                    <Grid item xs={10}>
                        <Typography variant='p' className="title">Agent View</Typography>
                    </Grid>
                    <Grid item xs={2} justifyContent='flex-end'>
                        <SearchIcon className='searchIcon'></SearchIcon>
                        <input type="text" placeholder="Search.." className='searchBar'></input>
                    </Grid>
                </Grid>
                <br></br>
                <Grid container sx={{ gap: "48px" }} >

                    <Grid item xs={2} >
                        <Paper className="five-cards">
                            <div className='metrics-card'>
                                <Grid container>
                                    <Grid xs={3.5}>
                                        <GroupRoundedIcon className='group-icon' fontSize='large'></GroupRoundedIcon>
                                    </Grid>
                                    <Grid xs={8.5} >
                                        <Typography className='five-card-label' variant='p'>Land Owners</Typography>
                                        <br></br>
                                        <Typography className='five-card-number' variant='p'>359</Typography>
                                    </Grid>
                                </Grid>
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={2}>
                        <Paper className="five-cards" >
                            <div className='metrics-card'>
                                <Grid container>
                                    <Grid xs={3.5}>
                                        <LandscapeIcon className='land-icon' fontSize='large'></LandscapeIcon>
                                    </Grid>
                                    <Grid xs={8.5} >
                                        <Typography className='five-card-label' variant='p'>No. Acres</Typography>
                                        <br></br>
                                        <Typography className='five-card-number' variant='p'>20583</Typography>
                                    </Grid>
                                </Grid>
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={2}>
                        <Paper className="five-cards" >
                            <div className='metrics-card'>
                                <Grid container>
                                    <Grid xs={3.5}>
                                        <img className="leased-icon" src={cropsicon} alt="logo"></img>
                                    </Grid>
                                    <Grid xs={8.5}>
                                        <Typography className='five-card-label' variant='p'>Leased (Acrs)</Typography>
                                        <br></br>
                                        <Typography className='five-card-number' variant='p'>489</Typography>
                                    </Grid>

                                </Grid>
                            </div>
                        </Paper>
                    </Grid>


                    <Grid item xs={2}>
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


                    <Grid item xs={2}>
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
                                        <img className="event-card-chart" src={eventCharts} alt="logo"></img>
                                    </Grid>

                                </Grid>
                            </div>
                        </Paper>
                    </Grid>

                </Grid >
                <br></br>
                <Grid container spacing={1} sx={{ marginBottom: "50px", marginTop: "20px" }}>
                    <Grid item xs={4.5}>
                        <div className='operator-grid' style={{ boxShadow: '0px 0px 12px 0px #3834341f', padding: '10px' }} >
                            <Typography variant='p' className='d-card-title'>Operator</Typography>
                            <select className='operator-dropdown'>
                                <option>India</option>
                                <option>U.S.A</option>
                                <option>China</option>
                                <option>Russia</option>
                                <option>Australia</option>
                            </select>
                            <Typography className='date' variant='p'>July, 2022</Typography>
                            <br></br>
                            <img src={operator_chart} className='chart-img' alt="operator-chart"></img>
                            <div style={{ display: 'flex', marginLeft: '90px', fontSize: '12px', marginTop: '50px' }}>
                                <li style={{ color: 'green' }}></li>Active-operators
                                <li style={{ color: '#8CD867', marginLeft: '30px' }}></li>Events Activity
                            </div>

                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className='event-grid' style={{ boxShadow: '0px 0px 12px 0px #3834341f', padding: '10px' }}>

                            <Typography variant='p' className='d-card-title'>Events</Typography>
                            <select className='events-dropdown'>
                                <option>Hyderabad</option>
                                <option>Gujarat</option>
                                <option>Rajasthan</option>
                                <option>Kerela</option>
                                <option>Maharashtra</option>
                            </select>

                            <img src={event_chart} className='chart-img' alt="event-chart"></img>
                            <div style={{ display: 'flex', marginLeft: '110px', fontSize: '12px', marginTop: '30px' }}>
                                <li style={{ color: 'green' }}></li>Events
                                <li style={{ color: '#FFC9B9', marginLeft: '30px' }}></li>Archive
                            </div>


                        </div>
                    </Grid>
                    <Grid item xs={3.5}>
                        <div className='crops-grid' style={{ boxShadow: '0px 0px 12px 0px #3834341f', padding: '10px' }}>
                            <Typography variant='p' className='d-card-title'>Crops</Typography>
                            <select className='crops-dropdown'>
                                <option>Hyderabad</option>
                                <option>Gujarat</option>
                                <option>Rajasthan</option>
                                <option>Kerela</option>
                                <option>Maharashtra</option>
                            </select>
                            <select className='crops-dropdown'>
                                <option>All</option>
                                <option>Hyderabad</option>
                                <option>Gujarat</option>
                                <option>Rajasthan</option>
                                <option>Kerela</option>
                                <option>Maharashtra</option>
                            </select>
                            <div style={{ display: 'flex', fontSize: '12px' }}>
                                <Grid item xs={12}>
                                    <img src={crops_chart} className='chart-img' alt="crops-chart" style={{ marginTop: "80px", marginLeft: "30px" }}></img>
                                </Grid>
                                <Grid item xs={12}>
                                    <div className='lists'>
                                        <li style={{ color: '#8CD867', marginLeft: '10px' }}><p style={{ color: 'black', position: 'relative', display: 'inline' }}>Sorgham</p></li>
                                        <li style={{ color: '#ED7D3A', marginLeft: '10px' }}><p style={{ color: 'black', position: 'relative', display: 'inline' }}>Finger Millet</p></li>
                                        <li style={{ color: '#EFEFF0', marginLeft: '10px' }}><p style={{ color: 'black', position: 'relative', display: 'inline' }}>Others</p></li>
                                    </div>
                                </Grid>
                            </div>
                        </div>
                    </Grid>
                </Grid>


                <Grid container spacing={1} sx={{ marginBottom: "50px", }}>
                    <Grid item xs={3.5}>
                        <div className='upcoming-grid' style={{ boxShadow: '0px 0px 12px 0px #3834341f', padding: '10px' }}>
                            <Typography variant='p' className='d-card-title'>Up Coming</Typography>
                            <Typography className='date' variant='p'>July, 2022</Typography>
                            <div className='days'>
                                <Typography variant='p'>Mon</Typography>
                                <Typography variant='p' color='black'><b>Tue</b></Typography>
                                <Typography variant='p'>Wed</Typography>
                                <Typography variant='p'>Thu</Typography>
                                <Typography variant='p'>Fri</Typography>
                                <Typography variant='p'>Sat</Typography>
                                <Typography variant='p'>Sun</Typography>
                            </div>

                            <div className='numbers' >
                                <Typography variant='p' className='num-background'>10</Typography>
                                <Typography variant='p' className='num-background'>11</Typography>
                                <Typography variant='p' sx={{
                                    height: '34px',
                                    padding: '20px 5px 20px 5px',
                                    borderRadius: '8px',
                                    background: '#2B9348'
                                }}>12</Typography>
                                <Typography variant='p' className='num-background'>13</Typography>
                                <Typography variant='p' className='num-background'>14</Typography>
                                <Typography variant='p' sx={{
                                    height: '34px',
                                    padding: '20px 5px 20px 5px',
                                    borderRadius: '8px',
                                    background: 'rgba(140, 216, 103, 1)'
                                }}>15</Typography>
                                <Typography variant='p' className='num-background'>16</Typography>

                            </div>
                            <div>
                                <li style={{ color: '#8CD867', marginLeft: '10px', marginTop: "50px" }}>
                                    <p className='upcoming-event'>Event Name Here </p>
                                    <p className='upcoming-datetime'>Wed 12, 10:30am</p>
                                </li>
                                <li style={{ color: '#8CD867', marginLeft: '10px' }}>
                                    <p className='upcoming-event'>Event Name Here </p>
                                    <p className='upcoming-datetime'>Wed 15, 10:30am</p>
                                </li>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={5}>
                        <div className='yield-grid' style={{ boxShadow: '0px 0px 12px 0px #3834341f', padding: '10px' }}>
                            <Typography variant='p' className='d-card-title'>Yield</Typography>
                            <select className='yield-dropdown'>
                                <option>Hyderabad</option>
                                <option>Gujarat</option>
                                <option>Rajasthan</option>
                                <option>Kerela</option>
                                <option>Maharashtra</option>
                            </select><br />

                            <img src={yield_chart} className='chart-img' alt="yield-chart"></img>
                        </div>
                    </Grid>

                    <Grid item xs={3.5}>
                        <div className='status-grid' style={{ boxShadow: '0px 0px 12px 0px #3834341f', padding: '10px' }}>
                            <Typography variant='p' className='d-card-title'>Status</Typography>
                            <select className='status-dropdown'>
                                <option>Operators</option>
                                <option>Gujarat</option>
                                <option>Rajasthan</option>
                                <option>Kerela</option>
                                <option>Maharashtra</option>
                            </select>
                            <select className='status-dropdown'>
                                <option>India</option>
                                <option>U.S.A</option>
                                <option>China</option>
                                <option>Russia</option>
                                <option>Australia</option>
                            </select>
                            <div style={{ display: 'flex', fontSize: '12px' }}>
                                <img src={india} className='india-img' alt="india"></img>
                                <img src={india_dotted} className='india-dotted-img' alt="india"></img>
                                <img src={person_location} className='person-location-img' alt="india" ></img>
                                <div className='lists'>
                                    <li style={{ color: '#8CD867', marginTop: '50px', position: 'relative' }}>
                                        <p style={{ color: 'black', position: 'relative', display: 'inline' }}>Active</p></li>
                                    <li style={{ color: '#ED7D3A', position: 'relative' }}>
                                        <p style={{ color: 'black', position: 'relative', display: 'inline' }}>Inactive</p></li>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>


                <Grid container spacing={1} sx={{ paddingBottom: "50px" }}>
                    <Grid item xs={4.5}>
                        <div className='onboarding-grid'>
                            <div style={{ boxShadow: '0px 0px 12px 0px #3834341f' }}>
                                <Table sx={{ maxWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow sx={{ background: 'rgba(249, 249, 249, 1)' }}>
                                            <TableCell sx={{ fontWeight: "bold", paddingLeft: "40px", borderRight: '1px solid #d7d7d7' }} >Onboarding</TableCell>
                                            <TableCell sx={{ fontWeight: "bold", borderRight: '1px solid #d7d7d7' }}>Type</TableCell>
                                            <TableCell sx={{ fontWeight: "bold", borderRight: '1px solid #d7d7d7' }}>Status</TableCell>
                                            <TableCell sx={{ fontWeight: "bold", borderRight: '1px solid #d7d7d7' }}>View</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    {generateTablerows()}

                                </Table>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={4}>
                        <div className='events-lists-grid' >
                            <Grid container sx={{ boxShadow: '0px 0px 12px 0px #3834341f', padding: "10px" }}>
                                <Grid item xs={9} >
                                    <div >
                                        <Typography className='d-card-title' variant='p'>Events</Typography><br />
                                        <Typography className='content' variant='p'>Megya Thanda, Hyderabad</Typography>
                                        <Typography className='content' variant='p'>Warangal, Hyderabad</Typography>
                                        <Typography className='content' variant='p'>Megya Thanda, West Godavari</Typography>
                                        <Typography className='content' variant='p'>Vankamarry, Karnool</Typography>
                                        <Typography className='content' variant='p'>Megya Thanda, Vijayawada</Typography>
                                        <Typography className='content' variant='p'>Kollur, Andhrapradesh</Typography>
                                        <Typography className='content' variant='p'>Nagamma thanda, Rangareddy</Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={3} >
                                    <div className='view' >
                                        <Typography variant='p' fontWeight="bold">View All</Typography><br />
                                        <Typography className='content' variant='p'>298</Typography>
                                        <Typography className='content' variant='p'>473</Typography>
                                        <Typography className='content' variant='p'>120</Typography>
                                        <Typography className='content' variant='p'>498</Typography>
                                        <Typography className='content' variant='p'>65</Typography>
                                        <Typography className='content' variant='p'>287</Typography>
                                        <Typography className='content' variant='p'>39</Typography>
                                    </div>
                                </Grid>
                            </Grid>


                        </div>

                    </Grid>
                    <Grid item xs={3.5} >
                        <div className='todo-grid' style={{ boxShadow: '0px 0px 12px 0px #3834341f', padding: "10px" }}>
                            <Typography className='title' variant='p'>Todo</Typography>
                            <Typography variant='p' sx={{ color: 'rgb(52, 156, 52)', float: 'right' }}>View All</Typography>
                            <br></br>
                            <div className='checkbox'>
                                <FormGroup >
                                    <FormControlLabel defaultChecked control={<Checkbox defaultChecked />} label="Finish the Operator onboarding" />
                                    <FormControlLabel defaultChecked control={<Checkbox />} label="Attend the event in Kolluru" />
                                    <FormControlLabel control={<Checkbox />} label="Submit the events to blackbchain" />
                                    <FormControlLabel defaultChecked control={<Checkbox />} label="Label" />
                                    <FormControlLabel control={<Checkbox />} label="Label" />
                                    <FormControlLabel control={<Checkbox />} label="Label" />
                                </FormGroup>

                            </div>
                        </div>

                    </Grid>

                </Grid>
            </Box >

        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        // onboarding: state.onboarding.onboarding
    }
}

const mapDispatchToProps = {
    fetchLandOwners: () => fetchLandOwners()
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)