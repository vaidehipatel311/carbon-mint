import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import Header from '../../Components/Header';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import './style.css'
import { Button, Avatar, Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
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
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import * as action from '../../Services/Operator/actions';
import * as daction from '../../Services/Onboarding/actions';
import { connect } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Sidebar from '../../Components/Sidebar';
import corner_field from '../../assets/LandOwners/Vector.png'
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


function Operator({ fetchOperator, fetchOnboarding }) {

    const [operators, setOperators] = useState([]);
    const [onboarding, setonboarding] = useState([]);

    useEffect(() => {
        fetchOperator()
            .then((data) => {
                setOperators(data);
            })
            .catch(err => console.log(err))

        fetchOnboarding()
            .then((data) => {
                setonboarding(data);
            })
            .catch(err => console.log(err))

    }, []);




    const generateOperators = () => {
        return operators.slice(0, 5).map((owners, index) => (
            <TableBody>
                <TableRow className='tr'>
                    <Link to='/operator/profile' style={{ textDecoration: "none", color: "black" }}>
                        <TableCell align='center' sx={{ borderRight: '1px solid #d7d7d7', display: "flex" }}>
                            <Avatar sx={{ background: 'none' }}><img src={corner_field} className='photo' alt="corner-field"></img></Avatar><div style={{ fontWeight: "bold", marginLeft: "15px", marginTop: "10px" }}>{owners.name}</div>
                        </TableCell>
                    </Link>

                    <TableCell align='center' sx={{ color: "rgb(62, 205, 62)", borderRight: '1px solid #d7d7d7' }}>{owners.ownerID}</TableCell>
                    <TableCell align='center' sx={{ borderRight: '1px solid #d7d7d7' }}>{owners.passbook_refno}</TableCell>
                    <TableCell align='center' sx={{ borderRight: '1px solid #d7d7d7' }}>{owners.contact_number_1}</TableCell>
                    <TableCell align='center' sx={{ borderRight: '1px solid #d7d7d7' }}>{owners.village}</TableCell>
                    <TableCell align='center' sx={{ borderRight: '1px solid #d7d7d7' }}><button className="grid-button" >{owners.crops[0]}</button><button className="grid-button" >{owners.crops[1]}</button></TableCell>
                    <TableCell align='center' sx={{ borderRight: '1px solid #d7d7d7' }}><EditIcon /><DeleteIcon /></TableCell>

                </TableRow>
            </TableBody>
        ));
    }
    const generateOnBoarding = () => {
        return onboarding.map((owners, index) => (
            <TableBody>
                <TableRow className='tr'>
                    <TableCell align='center' sx={{ borderRight: '1px solid #d7d7d7', display: "flex" }}>
                        <Avatar sx={{ background: 'none' }}><img src={corner_field} className='photo' alt="corner-field"></img></Avatar>
                        <div style={{ fontWeight: "bold", marginLeft: "15px", marginTop: "10px" }}>{owners.name}</div>
                    </TableCell>
                    <TableCell align='center' sx={{ color: "rgb(62, 205, 62)", borderRight: '1px solid #d7d7d7' }}>{owners.ownerId}</TableCell>
                    <TableCell align='center' sx={{ borderRight: '1px solid #d7d7d7' }}>{owners.aadhar}</TableCell>
                    <TableCell align='center' sx={{ borderRight: '1px solid #d7d7d7' }}>{owners.contactno}</TableCell>
                    <TableCell align='center' sx={{ borderRight: '1px solid #d7d7d7' }}>{owners.village}</TableCell>
                    <TableCell align='center' sx={{ borderRight: '1px solid #d7d7d7' }}><button className="status-button" >{owners.status}</button></TableCell>
                    <TableCell align='center' sx={{ borderRight: '1px solid #d7d7d7' }}><RemoveRedEyeIcon /></TableCell>


                </TableRow>
            </TableBody>
        ));
    }

    return (
        <>
            <Header></Header>
            <Sidebar></Sidebar>
            <Box sx={{ paddingLeft: "290px" }}>

                <Grid container>
                    <Grid item xs={7.5}>
                        <Typography variant='p' className="title">Operators</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <SearchIcon className='searchIcon'></SearchIcon>
                        <input type="text" placeholder="Search.." className='searchBar'></input>
                    </Grid>
                    <Grid item xs={0.5}>
                        <div className='filter-icon'>
                            <Badge color='success' variant="dot">
                                <FilterAltIcon fontSize='medium'></FilterAltIcon>
                            </Badge>
                        </div>
                    </Grid>

                    <Grid item xs={2}>
                        <Link to='/operator/add-operator' style={{ textDecoration: "none", color: "black" }}>
                            <div className='add-button'>
                                <Button className='add-button' size="medium" variant="">Add Operator</Button>
                            </div>
                        </Link>
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
                                        <img className="eventCharts" src={eventCharts} alt="logo"></img>
                                    </Grid>

                                </Grid>
                            </div>
                        </Paper>
                    </Grid>

                </Grid >
                <br></br>

                <Grid container>
                    <TableContainer>
                        <Table className='table' >
                            <TableBody >
                                <TableRow className='th'>
                                    <TableCell className='tc' align='center' sx={{ borderRight: '1px solid #5b5656' }}>Operators</TableCell>
                                    <TableCell align='center' sx={{ borderRight: '1px solid #5b5656' }}>ID</TableCell>
                                    <TableCell align='center' sx={{ borderRight: '1px solid #5b5656' }}>PassBook Ref No.</TableCell>
                                    <TableCell align='center' sx={{ borderRight: '1px solid #5b5656' }}>Contact No</TableCell>
                                    <TableCell align='center' sx={{ borderRight: '1px solid #5b5656' }}>Village</TableCell>
                                    <TableCell align='center' sx={{ borderRight: '1px solid #5b5656' }}>Crops</TableCell>
                                    <TableCell align='center' sx={{ borderRight: '1px solid #5b5656' }}>Actions</TableCell>
                                </TableRow>
                            </TableBody>

                            {generateOperators()}

                        </Table>
                    </TableContainer>
                    <Grid container sx={{ mt: 3 }} >
                        <Grid xs={9} className='total-events'>
                            <Typography sx={{ color: 'gray' }}>96 Operators</Typography>
                        </Grid>
                        <Grid xs={3} className='pagination'>
                            <Stack spacing={2}>
                                <Pagination count={3} variant="outlined" />

                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
                <br></br>
                <Grid container>
                    <TableContainer>
                        <Table className='table'>
                            <TableBody >
                                <TableRow className='th'>
                                    <TableCell align='center' sx={{ borderRight: '1px solid #5b5656' }}>Onboarding Land Owners</TableCell>
                                    <TableCell align='center' sx={{ borderRight: '1px solid #5b5656' }}>ID</TableCell>
                                    <TableCell align='center' sx={{ borderRight: '1px solid #5b5656' }}>Aadhar Card</TableCell>
                                    <TableCell align='center' sx={{ borderRight: '1px solid #5b5656' }}>Contact No</TableCell>
                                    <TableCell align='center' sx={{ borderRight: '1px solid #5b5656' }}>Village</TableCell>
                                    <TableCell align='center' sx={{ borderRight: '1px solid #5b5656' }}>Status</TableCell>
                                    <TableCell align='center' sx={{ borderRight: '1px solid #5b5656' }}>Actions</TableCell>
                                </TableRow>
                            </TableBody>

                            {generateOnBoarding()}

                        </Table>
                    </TableContainer>
                    <Grid container sx={{ mt: 3 }} >
                        <Grid xs={9} className='total-events'>
                            {/* <Typography sx={{ color: 'gray' }}>128 Events</Typography> */}
                        </Grid>
                        <Grid xs={3} className='pagination'>
                            <Stack spacing={2}>
                                <Pagination count={3} variant="outlined" />

                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>




            </Box >

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        landOwners: state.landowners.landowners,
        onboarding: state.onboarding.onboarding,
    };
};

const mapDispatchToProps = {
    fetchOperator: () => action.fetchOperator(),
    fetchOnboarding: () => daction.fetchOnboarding()
}

export default connect(mapStateToProps, mapDispatchToProps)(Operator);


