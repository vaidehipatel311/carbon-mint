import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import Header from '../../Components/Header';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import './style.css'
import { Button, Avatar, Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import WindowIcon from '@mui/icons-material/Window';
import ListIcon from '@mui/icons-material/List';
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
import * as action from '../../Services/LandOwners/actions';
import { connect } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import vector from '../../assets/LandOwners/Vector.png';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Sidebar from '../../Components/Sidebar';
import corner_field from '../../assets/LandOwners/Vector.png'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import axios from '../../Utils/axios';
import * as urls from '../../Config/urls';


function LandOwners({ fetchLandOwners }) {

    const [landOwners, setlandOwners] = useState([]);
    const [onboarding, setonboarding] = useState([]);
    const [showTable, setshowtable] = useState(true);


    useEffect(() => {
        fetchLandOwners()
            .then((data) => {
                const approved = data.filter((p) => p.status === "Approved");
                setlandOwners(approved);
                console.log(landOwners);
                const pending = data.filter((p) => p.status === "Pending");
                setonboarding(pending);
            })
            .catch(err => console.log(err))

    }, [landOwners]);

    const handleGrid = () => { setshowtable(false); console.log("handle") }

    const handleTable = () => { setshowtable(true); console.log("handle") }

    const handleDelete = async (id) => {
        try {
            const updatedLandOwners = [...landOwners];
            setlandOwners(updatedLandOwners);
            await axios.delete(urls.landOwnersUrl + `/${id}`);
            fetchLandOwners();

        } catch (error) {
            console.error('Error deleting item from cart:', error);
        }
    };


    const generateLandOwners = () => {
        return landOwners.map((owners, index) => (
            <TableBody>
                <TableRow className='tr'>

                    <TableCell align='center' sx={{ borderRight: '1px solid #d7d7d7' }}>

                        <Link to={'/landowners' + `/${owners.id}`} style={{ textDecoration: "none", color: "black", display: "flex" }}>
                            <Avatar sx={{ background: 'none' }}><img src={corner_field} className='photo' alt="avatar"></img></Avatar>
                            <div style={{ fontWeight: "bold", marginLeft: "15px", marginTop: "10px" }}>{owners.name}</div>
                        </Link>
                    </TableCell>

                    <TableCell align='center' sx={{ color: "rgb(62, 205, 62)", borderRight: '1px solid #d7d7d7' }}>{owners.ownerID}</TableCell>
                    <TableCell align='center' sx={{ borderRight: '1px solid #d7d7d7' }}>{owners.passbook_refno}</TableCell>
                    <TableCell align='center' sx={{ borderRight: '1px solid #d7d7d7' }}>{owners.contact_number_1}</TableCell>
                    <TableCell align='center' sx={{ borderRight: '1px solid #d7d7d7' }}>{owners.village}</TableCell>
                    <TableCell align='center' sx={{ borderRight: '1px solid #d7d7d7' }}><button className="grid-button" >{owners.crops[0]}</button><button className="grid-button" >{owners.crops[1]}</button></TableCell>
                    <TableCell align='center' sx={{ borderRight: '1px solid #d7d7d7' }}>
                        <Link to={'/landowners/add-landowner' + `/${owners.id}`} style={{ textDecoration: "none", color: "black" }}><EditIcon /></Link>
                        <DeleteIcon onClick={() => { handleDelete(owners.id) }} /></TableCell>

                </TableRow>
            </TableBody >
        ));
    }
    const generateOnBoarding = () => {
        return onboarding.map((owners, index) => (
            <TableBody>
                <TableRow className='tr'>

                    <TableCell align='center' sx={{ borderRight: '1px solid #d7d7d7' }} >
                        <div style={{ display: "flex" }}>
                            <Avatar sx={{ background: 'none' }}><img src={corner_field} className='photo' alt="avatar"></img></Avatar>
                            <div style={{ fontWeight: "bold", marginLeft: "15px", marginTop: "10px" }}>{owners.name}</div>
                        </div>
                    </TableCell>
                    <TableCell align='center' sx={{ color: "rgb(62, 205, 62)", borderRight: '1px solid #d7d7d7' }}>{owners.ownerID}</TableCell>
                    <TableCell align='center' sx={{ borderRight: '1px solid #d7d7d7' }}>{owners.aadhar_no}</TableCell>
                    <TableCell align='center' sx={{ borderRight: '1px solid #d7d7d7' }}>{owners.contact_number_1}</TableCell>
                    <TableCell align='center' sx={{ borderRight: '1px solid #d7d7d7' }}>{owners.village}</TableCell>
                    <TableCell align='center' sx={{ borderRight: '1px solid #d7d7d7' }}><button className="status-button" >{owners.status}</button></TableCell>

                    <TableCell align='center' sx={{ borderRight: '1px solid #d7d7d7' }}><Link to={'/landowners' + `/${owners.id}`} style={{ textDecoration: "none", color: "black" }}><RemoveRedEyeIcon /> </Link></TableCell>



                </TableRow>
            </TableBody >
        ));
    }

    const generateGridItems = () => {

        return landOwners.map((owner, index) => (

            <Grid xs={3} key={owner.id} className='grid-items'>
                <Link to={'/landowners' + `/${owner.id}`} style={{ textDecoration: "none", color: "black" }}>
                    <Paper className="grid-item-cards" sx={{ backgroundColor: "#DCDFE5" }}>
                        <Grid item>
                            <div style={{ width: "200px", height: "30px" }}>
                                <Typography variant="p" className='typo1' >
                                    {owner.ownerID}
                                </Typography>
                                <MoreVertIcon />
                            </div>
                        </Grid>
                        <Grid item sx={{ pl: 8 }}>
                            <img src={vector} alt="vector" className="vector" ></img>
                        </Grid>
                        <Typography variant="body1" fontFamily={'sans-serif'} fontWeight="bold" sx={{ pt: 1, pl: 2 }}>
                            {owner.name}
                        </Typography>
                        <Typography variant="body2" fontFamily={'sans-serif'} sx={{ pt: 1, pl: 6 }}>
                            {owner.contact_number_1}
                        </Typography>
                        <br></br>
                        <div style={{ paddingLeft: "50px" }}>
                            <button className="grid-button">
                                {owner.crops.length} crops
                            </button>
                            <button className="grid-button" >...</button>
                        </div>
                    </Paper>
                </Link>
                <br></br>
            </Grid >

        ));
    };

    const generateGridItemsOnboarding = () => {

        return onboarding.map((owner, index) => (

            <Grid xs={3} key={owner.id} className='grid-items'>
                <Link to={'/landowners' + `/${owner.id}`} style={{ textDecoration: "none", color: "black" }}>
                    <Paper className="grid-item-cards" sx={{ backgroundColor: "#DCDFE5" }}>
                        <Grid item>
                            <div style={{ width: "200px", height: "30px" }}>
                                <Typography variant="p" className='typo1' >
                                    {owner.ownerID}
                                </Typography>
                                <MoreVertIcon />
                            </div>
                        </Grid>
                        <Grid item sx={{ pl: 8 }}>
                            <img src={vector} alt="vector" className="vector" ></img>
                        </Grid>
                        <Typography variant="body1" fontFamily={'sans-serif'} fontWeight="bold" sx={{ pt: 1, pl: 2 }}>
                            {owner.name}
                        </Typography>
                        <Typography variant="body2" fontFamily={'sans-serif'} sx={{ pt: 1, pl: 6 }}>
                            {owner.contact_number_1}
                        </Typography>
                        <br></br>
                        <div style={{ paddingLeft: "50px" }}>
                            <button className="grid-button">
                                {owner.crops.length} crops
                            </button>
                            <button className="grid-button" >...</button>
                        </div>
                    </Paper>
                </Link>
                <br></br>
            </Grid >

        ));
    };


    return (
        <>
            <Header></Header>
            <Sidebar></Sidebar>
            <Box sx={{ paddingLeft: "290px" }}>
                <Grid container>
                    <Grid item xs={6.5}>
                        <Typography variant='p' className="title">Land Owners</Typography>
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
                    <Grid item xs={0.5}>
                        <WindowIcon className='grid-icon' fontSize='medium' onClick={() => { handleGrid() }} sx={{ color: showTable ? 'black' : 'lightgreen' }}></WindowIcon>
                    </Grid>
                    <Grid item xs={0.5}>
                        <ListIcon className='list-icon' fontSize='medium' onClick={() => { handleTable() }} sx={{ color: showTable ? 'lightgreen' : 'black' }}></ListIcon>
                    </Grid>
                    <Grid item xs={2}>
                        <Link to='/landowners/add-landowner/0' style={{ textDecoration: "none", color: "black" }}>
                            <div className='add-button'>
                                <Button className='add-button' size="medium" variant="">Add Land Owner</Button>
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
                                        <img className="event-card-chart" src={eventCharts} alt="logo"></img>
                                    </Grid>

                                </Grid>
                            </div>
                        </Paper>
                    </Grid>

                </Grid >
                <br></br>
                {showTable ? (
                    <>
                        <Grid container>
                            <TableContainer>
                                <Table className='table' >
                                    <TableBody >
                                        <TableRow className='th'>
                                            <TableCell className='tc' align='center'>Land Owners</TableCell>
                                            <TableCell align='center'>ID</TableCell>
                                            <TableCell align='center'>PassBook Ref No.</TableCell>
                                            <TableCell align='center'>Contact No</TableCell>
                                            <TableCell align='center'>Village</TableCell>
                                            <TableCell align='center'>Crops</TableCell>
                                            <TableCell align='center'>Actions</TableCell>
                                        </TableRow>
                                    </TableBody>

                                    {generateLandOwners()}

                                </Table>
                            </TableContainer>
                            <Grid container sx={{ mt: 3 }} >
                                <Grid xs={9} className='total-events'>
                                    <Typography sx={{ color: 'gray' }}>{landOwners.length} Land Owners</Typography>
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
                                            <TableCell align='center'>Onboarding Land Owners</TableCell>
                                            <TableCell align='center'>ID</TableCell>
                                            <TableCell align='center'>Aadhar Card</TableCell>
                                            <TableCell align='center'>Contact No</TableCell>
                                            <TableCell align='center'>Village</TableCell>
                                            <TableCell align='center'>Status</TableCell>
                                            <TableCell align='center'>Actions</TableCell>
                                        </TableRow>
                                    </TableBody>

                                    {generateOnBoarding()}

                                </Table>
                            </TableContainer>
                            <Grid container sx={{ mt: 3 }} >
                                <Grid xs={9} className='total-events'>
                                    <Typography sx={{ color: 'gray' }}>{onboarding.length} Onboarding Land Owners</Typography>
                                </Grid>
                                <Grid xs={3} className='pagination'>
                                    <Stack spacing={2}>
                                        <Pagination count={3} variant="outlined" />

                                    </Stack>
                                </Grid>
                            </Grid>
                        </Grid></>) : (<><Box >
                            <Grid container >
                                <Grid item xs={12}>
                                    <Typography fontSize="20px" fontWeight="bold" sx={{ mb: 2 }}>Land Owners</Typography>
                                </Grid>

                                {generateGridItems()}

                                <Grid item xs={12}>
                                    <Typography fontSize="20px" fontWeight="bold" sx={{ mb: 2 }}>Onboarding Land Owners</Typography>
                                </Grid>

                                {generateGridItemsOnboarding()}
                            </Grid>
                        </Box></ >)
                }

            </Box >


        </>
    )
}

const mapStateToProps = (state) => {
    return {
        landOwners: state.landowners.landowners,
    };
};

const mapDispatchToProps = {
    fetchLandOwners: () => action.fetchLandOwners(),
}

export default connect(mapStateToProps, mapDispatchToProps)(LandOwners);


