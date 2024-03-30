import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header'
import Sidebar from '../../Components/Sidebar'
import './crops.css'
import Link from '@mui/material/Link';
import { Button } from '@mui/material'
import { Grid } from '@mui/material'
import { Typography } from '@mui/material'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import DoneIcon from '@mui/icons-material/Done';
import Box from '@mui/material/Box';
import { useLocation } from 'react-router-dom';
import field_area_map from '../../assets/Operator/field_area_map.png'
import Banner_crops_2 from '../../assets/Operator/Banner_crops_2.png'
import irrigation from '../../assets/Operator/irrigation.png'
import { fetchAddedEvents } from '../../Services/Events/actions';
import { connect } from 'react-redux';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

function Crops({ fetchAddedEvents }) {

    const [addedevents, setaddedEvents] = useState([]);
    const location = useLocation();
    const [openAlert, setOpenAlert] = useState(false);

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        color: theme.palette.text.secondary,
    }));

    useEffect(() => {
        fetchAddedEvents()
            .then((data) => {
                setaddedEvents(data);
                // const filteredEvent = addedevents.find(p => p.id === parseInt(id, 10))
                // setDraftData(filteredEvent);
            })
            .catch(err => console.log(err));

        if (location.state && location.state.showAlert) {
            setOpenAlert(true);
        }

    }, []);

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false);
    };

    const generateGridEvents = () => {
        return addedevents.map((event, index) => (

            <Grid xs={6}>
                <Link href={'/events/add-event' + `/${event.id}`} style={{ textDecoration: "none", color: "black" }}>
                    <Item className='seed' sx={{ background: '#ebeaea1f' }}>
                        <div style={{ display: 'grid' }}>
                            <Typography variant='p' sx={{ fontWeight: 'bold' }}>{event.event_group}</Typography>
                            <Typography variant='p'>Submited on {event.time}</Typography>
                        </div>
                        <DoneIcon sx={{ color: 'green' }} className='doneicon' />
                    </Item>
                </Link>
            </Grid>
        ));
    }
    return (
        <>
            <Header />
            <Sidebar />
            <Box sx={{ margin: '0px 20px 50px 300px' }}>
                <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleCloseAlert}>
                    <Alert sx={{ ml: 70, mt: -10 }} onClose={handleCloseAlert} severity="success">
                        Submitted the Field Preparation event details successfully
                    </Alert>
                </Snackbar>
                <Grid container>
                    <Grid xs={10}>
                        <Breadcrumbs sx={{
                            textDecoration: 'none'
                        }}
                            separator={<NavigateNextIcon fontSize="small" />}
                            aria-label="breadcrumb">

                            <Link underline='hover' color='inherit' href="/operator">Operator</Link>
                            <Link underline='hover' color='inherit' href="/operator/profile">Profile</Link>
                            <Link underline='hover' color='inherit' href="/operator/profile/landparcel">Landparcel</Link>
                            <Link underline='hover' color='inherit' href="/operator/profile/landparcel/crops">Crops</Link>

                        </Breadcrumbs>
                        <br></br>
                        <div className='title'>
                            <Typography variant='p'>Chennaiah Polam</Typography>
                        </div>
                    </Grid>
                    <Grid xs={2}>
                        <Link href='/events/add-event/0' style={{ textDecoration: "none", color: "black" }}>
                            <div className='add-button'>
                                <Button variant='' className='add-button'>Add Event</Button>
                            </div>
                        </Link>
                    </Grid>
                </Grid>


                <Grid container sx={{ mt: 3 }}>
                    <Grid xs={4.5} sx={{ mb: 5 }}>
                        <Item sx={{ boxShadow: '0px 0px 12px 0px #0000001F', paddingBottom: 2 }}>
                            <div className='sourgham-details'>

                                <img src={Banner_crops_2} alt="banner2"></img>
                                <Typography variant='p' className='name'>Sourgham</Typography>
                                <Typography variant='p' className='address'>Chennaiah Polam Corner Field</Typography>
                                <Grid container sx={{ mt: 3, textAlign: 'center' }}>
                                    <Grid xs={4}>
                                        <Typography variant='p' className='n'><b>2.4</b></Typography>
                                    </Grid>
                                    <Grid xs={4}>
                                        <div>
                                            <Typography variant='p' className='n'><b>1</b></Typography>
                                        </div>
                                    </Grid>
                                    <Grid xs={4}>
                                        <div>
                                            <Typography variant='p' className='n'><b>2w/6m</b></Typography>
                                        </div>
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
                                        <Typography variant='p' className='t'>Crop age</Typography>
                                    </Grid>

                                </Grid>
                            </div>
                            <hr style={{ margin: '20px' }} />

                            <div className='details'>
                                <Typography variant='p' className='title'>Details</Typography>

                                <div className='content'>
                                    <Typography variant='p'>Cropping systems</Typography>
                                    <b><Typography variant='p'>Monocropping</Typography></b>

                                </div>
                                <div className='content'>
                                    <Typography variant='p'>Water resources</Typography>
                                    <b><Typography variant='p'>Borewell</Typography></b>

                                </div>
                                <div className='content'>
                                    <Typography variant='p'>Water Sample Test</Typography>
                                    <b><Typography variant='p'>Ph.2983</Typography></b>

                                </div>

                            </div>
                        </Item>

                    </Grid>
                    <Grid xs={7.5}>
                        <Grid xs={12}>
                            <div sx={{ boxShadow: '0px 0px 12px 0px #0000001F', paddingBottom: 2, ml: 2 }}>
                                <img src={field_area_map} alt="field-area" style={{ width: '100%' }}></img>
                            </div>
                        </Grid>
                        <Grid xs={12}>
                            <div className='crops-heading'><Typography variant='p'>Draft</Typography></div>

                            <Grid container>
                                <Grid xs={6}>
                                    <Item className='irrigation'>
                                        <div style={{ display: 'grid' }}>
                                            <b><Typography variant='p'>Irrigation</Typography></b>
                                            <Typography variant='p'>Last updated on 24/04/2022, 4:30pm</Typography>
                                        </div>
                                        <img src={irrigation} alt="irrigation"></img>
                                    </Item>
                                </Grid>
                            </Grid>

                            <div className='submitted-events-title'><Typography variant='p'>Submitted Events</Typography></div>

                            <Grid container>
                                {generateGridEvents()}
                            </Grid>
                        </Grid>
                    </Grid>


                </Grid>
            </Box>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        events: state.events.events
    };
};

const mapDispatchToProps = {
    fetchAddedEvents: () => fetchAddedEvents(),
}

export default connect(mapStateToProps, mapDispatchToProps)(Crops);
