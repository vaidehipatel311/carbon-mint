import React, { useEffect, useState } from 'react';
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography';
import Header from '../../Components/Header';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import './events.css'
import { Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CallIcon from '@mui/icons-material/Call';
import Sidebar from '../../Components/Sidebar';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEvents } from '../../Services/Events/actions';


function EventDescription({ fetchEvents }) {
    const { id } = useParams();
    const [event, setEvent] = useState([]);


    useEffect(() => {
        fetchEvents()
            .then((data) => {
                const filteredEvent = data.find(p => p.id === parseInt(id, 10))
                const a = filteredEvent
                setEvent(a);
            })
            .catch(err => console.log(err));

    }, []);

    return (
        <>
            <Header></Header>
            <Sidebar></Sidebar>
            <Box sx={{ paddingLeft: "290px" }}>
                <Grid container>
                    <Grid xs={9}>
                        <div className='links'>
                            <Grid>
                                <Breadcrumbs
                                    separator={<NavigateNextIcon fontSize="small" />}
                                    aria-label="breadcrumb">
                                    <Link underline='hover' color='inherit' href="/operator/profile">
                                        {event.owner}
                                    </Link>
                                    <Link underline='hover' color='inherit' href="/operator/profile/landparcel">
                                        {event.landparcel}
                                    </Link>
                                    <Link underline='hover' color='inherit' href="/operator/profile/landparcel/crops">
                                        {event.crops}
                                    </Link>
                                </Breadcrumbs>
                            </Grid>

                            <div className='profile-title'>
                                <Typography variant='p'>{event.field} : {event.name} Photos</Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={3}>
                        <div className='call-icon'>
                            <CallIcon />
                            <Typography variant='p'>Operator: <b>{event.contact}</b></Typography>
                        </div>

                    </Grid>
                </Grid>

                <Grid container sx={{ mt: 2 }}>
                    <Grid item xs={8} className='event-images'>
                        <Typography variant='p' fontWeight='bold' sx={{ marginRight: "640px" }}>Event images</Typography>
                        <div style={{ marginTop: '10px', display: "flex", gap: "10px" }}>

                            <img src={event.img1} alt="img"></img>

                            <img src={event.img2} alt="img"></img>
                            <img src={event.img3} alt="img"></img>
                            <img src={event.img4} alt="img"></img>
                        </div>

                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='p' fontWeight='bold'>Notes</Typography>
                        <div className='notes'>
                            <Typography variant='p'>{event.notes}</Typography>
                        </div>
                    </Grid>
                </Grid>
            </Box >

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        events: state.events.events
    };
};

const mapDispatchToProps = {

    fetchEvents: () => fetchEvents(),
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDescription);