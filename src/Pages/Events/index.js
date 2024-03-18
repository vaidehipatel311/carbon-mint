import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography';
import Header from '../../Components/Header';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import './events.css'
import { Button, Menu, MenuItem, Badge, TextField, Breadcrumbs } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Paper from '@mui/material/Paper';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import ellipse8 from '../../assets/LandOwners/Ellipse 8.png'
import eventCharts from '../../assets/LandOwners/EventCharts.png'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LandscapeIcon from '@mui/icons-material/Landscape';
import cropsicon from '../../assets/LandOwners/crops-icon.png'
import { connect } from 'react-redux';
import vector from '../../assets/LandOwners/Vector.png';
import Sidebar from '../../Components/Sidebar';
import vectorgroup from '../../assets/Events/vector-group.png'
import img1 from '../../assets/Events/Image1.png'
import img2 from '../../assets/Events/Image2.png'
import img3 from '../../assets/Events/Image3.png'
import img4 from '../../assets/Events/Image4.png'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CallIcon from '@mui/icons-material/Call';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { addEvent, fetchAddedEvents, fetchEvents } from '../../Services/Events/actions';

function Events({ fetchEvents, addEvent, fetchAddedEvents }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);
    const [addedevents, setaddedEvents] = useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [eventGroup, setEventGroup] = useState('');
    const [eventName, setEventName] = useState('');
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [formVisible, setformVisible] = useState(false);
    const [submitbutton, setsubmitbutton] = useState(false);
    const [filterValue, setFiltervalue] = useState('');
    const [showFilterValue, setshowFilterValue] = useState(false);
    const [isDraft, setisDraft] = useState(false);
    const [draftdata, setDraftData] = useState([]);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setshowFilterValue(true)
    };

    useEffect(() => {
        fetchEvents()
            .then((data) => {
                setEvents(data);
            })
            .catch(err => console.log(err));

        fetchAddedEvents()
            .then((data) => {
                setaddedEvents(data);
            })
            .catch(err => console.log(err));

        const filteredEvent = addedevents.find(p => p.id === parseInt(1, 10))
        setDraftData(filteredEvent);
        console.log(draftdata)

    }, []);

    const [formData, setFormData] = useState({
        seedlings: '',
        nursery: '',
        nursery_bed: '',
        house: '',
        soil_treatment: '',
        chemicals: '',
        quantity: '',
        seed_treatment: '',
        variety: '',
        crop_duration: '',
        seed_rate: '',
        sowing_method: '',
        irrigation_method: '',
        intercultural_operations: '',
        recommended_competent: '',
        evidence: []
    });

    const handleChange = (event, key) => {
        setFormData({
            ...formData,
            [key]: event.target.value
        });
    };

    // const handleAdd = () => {
    //     addEvent(formData)
    // };

    const handleAdd = () => {
        if (eventGroup !== "Seed & Seedlings" || eventName !== 'Seed') {
            alert('Please select the field!')
        }
        else {
            addEvent(formData)
            navigate('/dashboard', { state: { showAlert: true } });
        }

    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        setSelectedFiles([...files]);
        console.log(selectedFiles.path);
    };
    const handleDeleteFile = (index) => {
        const updatedFiles = selectedFiles.filter((_, i) => i !== index);
        setSelectedFiles(updatedFiles);
    };
    const handleEventForm = () => {
        setformVisible(true);
        setsubmitbutton(true);
    };
    const handleDraftForm = () => {
        setisDraft(true);
        setEventGroup("Seed & Seedlings");
        setEventName("Seed");
        setformVisible(true);
        setsubmitbutton(true);

    };


    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: "20px",
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        // width: 1,
    });



    const generateGridItems = () => {

        return events.map((event, index) => (

            <Grid xs={4} key={event.id}>
                <Paper className="cards">
                    <div style={{ display: "flex" }} align="center">
                        <Typography variant="p" className='fieldname' >
                            {event.field} :
                        </Typography>
                        <Typography variant="p" className='crop-name' >
                            {event.name}
                        </Typography>
                        <img className='vector-img' src={vectorgroup} alt={vector}></img>
                    </div>

                    <div style={{ display: "flex" }} >

                        <Typography variant="p" className='date' >
                            {event.date} ,
                        </Typography>
                        <Typography variant="p" className='time'>
                            {event.time}
                        </Typography>
                        <br></br>
                    </div>

                </Paper>
            </Grid >

        ));
    };


    return (
        <>
            <Header></Header>
            <Sidebar></Sidebar>

            {id == 1 ? (

                <>
                    <Box sx={{ paddingLeft: "290px" }}>
                        <Grid container>
                            <Grid item xs={9.3}>
                                <Typography variant='p' className="title">Events</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <SearchIcon className='searchIcon'></SearchIcon>
                                <input type="text" placeholder="Search.." className='searchBar'></input>
                            </Grid>
                            <Grid item xs={0.5}>
                                <div className='ev-filter-icon'>
                                    <Badge color='success' variant="dot">
                                        <FilterAltIcon fontSize='medium' onClick={handleClick} />
                                    </Badge>
                                </div>
                            </Grid>
                        </Grid>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}>

                            <Typography type="p" className='filter'>Filter</Typography>

                            <MenuItem >
                                <input type='text' placeholder="Operator" className='textfield' />
                            </MenuItem>

                            <MenuItem>
                                <input type='text' placeholder="Land Parcel" className='textfield' value={filterValue} onChange={((event) => setFiltervalue(event.target.value))} />
                            </MenuItem>

                            <MenuItem>
                                <input type='text' placeholder='Location' className='textfield' />
                            </MenuItem>

                            <MenuItem >
                                <select className='select' placeholder="type of Event" />
                            </MenuItem>

                            <Button variant='outlined' className="buttons" sx={{ ml: "95px", mr: "15px" }}>Clear</Button>
                            <Button variant='contained' className="buttons" onClick={handleClose}>Submit</Button>

                        </Menu >
                        {showFilterValue ? (<Typography>{filterValue}</Typography>) : (<></>)}


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
                        <Typography variant='body1' align='left' fontWeight="bold">Events</Typography>
                        <br></br>
                        <Box>
                            <Grid container>
                                {generateGridItems()}
                            </Grid>
                            <Grid container sx={{ mt: 3 }} >
                                <Grid xs={9} className='total-events'>
                                    <Typography sx={{ color: 'gray' }}>128 Events</Typography>
                                </Grid>
                                <Grid xs={3} className='pagination'>
                                    <Stack spacing={2}>
                                        <Pagination count={3} variant="outlined" />

                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box >
                </>)
                :
                (<>
                    <Box sx={{ paddingLeft: "290px" }}>
                        <Grid container>
                            <Grid xs={9}>
                                <div className='links'>
                                    <Grid>
                                        <Breadcrumbs
                                            separator={<NavigateNextIcon fontSize="small" />}
                                            aria-label="breadcrumb">
                                            <Link underline='hover' color='inherit' href="/operator/profile">
                                                Kethavath Laxmanna
                                            </Link>
                                            <Link underline='hover' color='inherit' href="/operator/profile/landparcel">
                                                Chennaiah Polam
                                            </Link>
                                            <Link underline='hover' color='inherit' href="/operator/profile/landparcel/crops">
                                                Sorghum
                                            </Link>
                                            <Link underline='hover' color='inherit' href="/events/2">
                                                Events
                                            </Link>
                                        </Breadcrumbs>
                                    </Grid>

                                    <div className='profile-title'>
                                        <Typography variant='p'>Corner Field : Sourgham Photos</Typography>
                                    </div>
                                </div>
                            </Grid>
                            <Grid xs={3}>
                                <div className='call-icon'>
                                    <CallIcon />
                                    <Typography variant='p'>Operator: <b>+91 999 888 9898</b></Typography>
                                </div>

                            </Grid>
                        </Grid>

                        <Grid container sx={{ mt: 2 }}>
                            <Grid item xs={8} className='event-images'>
                                <Typography variant='p' fontWeight='bold' sx={{ marginRight: "640px" }}>Event images</Typography>
                                <div style={{ marginTop: '10px', display: "flex", gap: "10px" }}>

                                    <img src={img1} alt="img"></img>
                                    <img src={img2} alt="img"></img>
                                    <img src={img3} alt="img"></img>
                                    <img src={img4} alt="img"></img>
                                </div>

                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant='p' fontWeight='bold'>Notes</Typography>
                                <div className='notes'>
                                    <Typography variant='p'>I want to present my clients the Figma files first, so it would be great if you add those as well, more manual downloads.</Typography>
                                </div>
                            </Grid>
                        </Grid>
                        {formVisible ?
                            (
                                <div className='event-form'>
                                    <div className='formheader' >
                                        <Grid container>
                                            <Grid xs={2}>
                                                <Typography variant='p' className='event-selection'>Crop Event Selection</Typography>

                                            </Grid>
                                            <Grid xs={5} >
                                                <TextField
                                                    sx={{ width: '400px' }}
                                                    size='small'
                                                    type='text'
                                                    select
                                                    label='Event Group'
                                                    onChange={(e) => setEventGroup(e.target.value)}
                                                    disabled={isDraft ? true : false}
                                                    defaultValue={isDraft ? "Seed & Seedlings" : ""}>
                                                    <MenuItem value='Seed & Seedlings'>Seed & Seedlings</MenuItem>
                                                </TextField>
                                            </Grid>
                                            <Grid xs={5}>
                                                <TextField
                                                    sx={{ width: '400px' }}
                                                    size='small'
                                                    type='text'
                                                    select
                                                    label='Event Name'
                                                    onChange={(e) => setEventName(e.target.value)}
                                                    disabled={isDraft ? true : false}
                                                    defaultValue={isDraft ? "Seed" : ""}>
                                                    <MenuItem value='Seed'>Seed</MenuItem>
                                                </TextField>
                                            </Grid>
                                        </Grid>
                                    </div>
                                    {eventGroup && eventName ? (
                                        <Grid container spacing={2} >
                                            <Grid xs={6} >
                                                <Box className='textfields' sx={{ pr: "10px", paddingBottom: 2 }}>
                                                    <TextField
                                                        size='small'
                                                        type='text'
                                                        select
                                                        fullWidth
                                                        // value={formData.seedlings}
                                                        onChange={(e) => handleChange(e, 'seedlings')}
                                                        label='Source of Seedlings'
                                                        sx={{ mt: "15px" }}
                                                        defaultValue={isDraft ? "On farm nursery" : ""}>
                                                        <MenuItem value='On farm nursery' >On farm nursery</MenuItem>
                                                    </TextField>

                                                    <TextField
                                                        size='small'
                                                        type='text'
                                                        select
                                                        fullWidth
                                                        label='Type of Nursery'
                                                        // value={formData.nursery}
                                                        onChange={(e) => handleChange(e, 'nursery')}
                                                        defaultValue={isDraft ? "Wet nursery" : ""}>
                                                        <MenuItem value='Wet nursery'>Wet nursery</MenuItem>
                                                    </TextField>

                                                    <TextField
                                                        size='small'
                                                        type='text'
                                                        select
                                                        fullWidth
                                                        label='Type of Nursery bed'
                                                        // value={formData.nursery_bed}
                                                        onChange={(e) => handleChange(e, 'nursery_bed')}
                                                        defaultValue={isDraft ? "Raised bed" : ""} >
                                                        <MenuItem value='Raised bed'>Raised bed</MenuItem>
                                                    </TextField>

                                                    <TextField
                                                        size='small'
                                                        type='text'
                                                        select
                                                        fullWidth
                                                        label='Type of in house (Framed structures)nursery'
                                                        // value={formData.house}
                                                        onChange={(e) => handleChange(e, 'house')}
                                                        defaultValue={isDraft ? "Open nursery" : ""}>
                                                        <MenuItem value='Open nursery'>Open nursery</MenuItem>
                                                    </TextField>

                                                    <TextField
                                                        size='small'
                                                        type='text'
                                                        select
                                                        fullWidth
                                                        label='Soil Treatment methods'
                                                        // value={formData.soil_treatment}
                                                        onChange={(e) => handleChange(e, 'soil_treatment')}
                                                        defaultValue={isDraft ? "Soil treatment by chemicals" : ""}>
                                                        <MenuItem value='Soil treatment by chemicals'>Soil treatment by chemicals</MenuItem>
                                                    </TextField>

                                                    <TextField
                                                        size='small'
                                                        type='text'
                                                        select
                                                        label='Chemicals applied'
                                                        // value={formData.chemicals}
                                                        onChange={(e) => handleChange(e, 'chemicals')}
                                                        defaultValue={isDraft ? "Chlorpyriphos" : ""}>
                                                        <MenuItem value='Chlorpyriphos'>Chlorpyriphos</MenuItem>
                                                    </TextField>

                                                    <TextField
                                                        size='small'
                                                        type='text'
                                                        select
                                                        label='Quantity applied (gm or ml)'
                                                        // value={formData.quantity}
                                                        onChange={(e) => handleChange(e, 'quantity')}
                                                        defaultValue={isDraft ? "300" : ""}>
                                                        <MenuItem value='200'>200</MenuItem>
                                                        <MenuItem value='300'>300</MenuItem>
                                                        <MenuItem value='400'>400</MenuItem>
                                                        <MenuItem value='500'>500</MenuItem>
                                                    </TextField>

                                                    <Typography variant='p' sx={{ mr: 42 }} fontWeight='bold'>Pre sowing seed Treatment</Typography>

                                                    <Grid container>
                                                        <Grid xs={6}>
                                                            <FormGroup>
                                                                <FormControlLabel control={<Checkbox />} label="Scarification" />
                                                                <FormControlLabel control={<Checkbox color='success' defaultChecked />} label="Soaking in hot water" />
                                                                <FormControlLabel control={<Checkbox color='success' defaultChecked />} label="Soaking in chemicals" />
                                                            </FormGroup>
                                                        </Grid>
                                                        <Grid xs={6}>
                                                            <FormGroup>
                                                                <FormControlLabel control={<Checkbox color='success' defaultChecked />} label="Soaking in cool water" />
                                                                <FormControlLabel control={<Checkbox />} label="wetting and drying " />
                                                                <FormControlLabel control={<Checkbox />} label="Others" />
                                                            </FormGroup>

                                                        </Grid>
                                                    </Grid>

                                                    <TextField
                                                        size='small'
                                                        type='text'
                                                        label='Variety/Hybrid name'
                                                        // value={formData.variety}
                                                        onChange={(e) => handleChange(e, 'variety')}
                                                        defaultValue={isDraft ? "Hybrid" : ""} />

                                                    <TextField
                                                        size='small'
                                                        type='number'
                                                        label='Crop Duration (Days)'
                                                        // value={formData.crop_duration}
                                                        onChange={(e) => handleChange(e, 'crop_duration')}
                                                        defaultValue={isDraft ? "90" : ""} />

                                                    <TextField
                                                        size='small'
                                                        type='number'
                                                        label='Seed rate (Kg/cent)'
                                                        // value={formData.seed_rate}
                                                        onChange={(e) => handleChange(e, 'seed_rate')}
                                                        defaultValue={isDraft ? "15" : ""} />

                                                    <TextField
                                                        size='small'
                                                        select
                                                        type='text'
                                                        label='Method of sowing'
                                                        // value={formData.sowing_method}
                                                        onChange={(e) => handleChange(e, 'sowing_method')}
                                                        defaultValue={isDraft ? "Sowing in pro-trays" : ""} >
                                                        <MenuItem value='Sowing in pro-trays'>Sowing in pro-trays</MenuItem>
                                                    </TextField>

                                                    <TextField
                                                        size='small'
                                                        type='text'
                                                        label='Method of irrigation'
                                                        // value={formData.irrigation_method}
                                                        onChange={(e) => handleChange(e, 'irrigation_method')}
                                                        defaultValue={isDraft ? "Flooding" : ""} />

                                                    <TextField
                                                        size='small'
                                                        type='text'
                                                        select
                                                        label='Intercultural operations in nursery'
                                                        // value={formData.intercultural_operations}
                                                        onChange={(e) => handleChange(e, 'intercultural_operations')}
                                                        defaultValue={isDraft ? "Gap filling" : ""}>
                                                        <MenuItem value='Gap filling'>Gap filling</MenuItem>
                                                    </TextField>

                                                    <TextField
                                                        size='small'
                                                        type='text'
                                                        label='Recommended compitent authority'
                                                        // value={formData.recommended_competent}
                                                        onChange={(e) => handleChange(e, 'recommended_competent')}
                                                        defaultValue={isDraft ? "Chlorpyriphos" : ""}
                                                    />


                                                </Box>
                                            </Grid>


                                            <Grid item xs={6} >
                                                <Typography variant='p' sx={{ marginLeft: "40px", marginTop: "50px" }} fontWeight='bold'>Evidence</Typography>
                                                <Grid container>

                                                    <Button
                                                        component="label"
                                                        role={undefined}
                                                        variant="contained"
                                                        tabIndex={-1}
                                                        startIcon={<CloudUploadIcon />}
                                                        size="small"
                                                        sx={{ width: "150px", marginBottom: "10px", backgroundColor: '#8CD867', color: "black", border: "2px solid #2B9348", marginLeft: "40px" }}
                                                        value={formData.evidence}
                                                        onChange={(e) => handleChange(e, 'evidence')}
                                                    >
                                                        Upload file
                                                        <VisuallyHiddenInput type="file" multiple onChange={handleFileChange} />
                                                    </Button>

                                                    <Typography sx={{ marginLeft: "20px" }} display={isDraft ? "none" : ""}> {selectedFiles.length} Files selected </Typography>
                                                    <Grid xs={10} >
                                                        {selectedFiles.map((file, index) => (
                                                            <>
                                                                <img
                                                                    key={index}
                                                                    src={URL.createObjectURL(file)}
                                                                    alt={`Preview ${index}`}
                                                                    style={{ width: '100px', height: '100px', marginRight: '40px', marginLeft: "40px" }}
                                                                />
                                                                <CloseIcon className='ev-close-img' onClick={() => handleDeleteFile(index)} />
                                                            </>

                                                        ))}

                                                        {isDraft ? (<>
                                                            <img
                                                                src={img1}
                                                                alt={img1}
                                                                style={{ width: '100px', height: '100px', marginRight: '40px', marginLeft: "40px" }}
                                                            />

                                                            <img
                                                                src={img2}
                                                                alt={img2}
                                                                style={{ width: '100px', height: '100px', marginRight: '40px', }}
                                                            />

                                                        </>) : (<></>)}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    )
                                        :
                                        (<>

                                        </>)}

                                </div >) : (<></>)
                        }
                        <div style={{ position: "relative", marginTop: formVisible ? "0px" : "330px", marginLeft: !formVisible ? "740px" : "855px", marginBottom: "20px" }}>

                            <Button variant='outlined' className='three-buttons' sx={{ mr: 1, color: "#2B9348", border: "2px solid #2B9348" }} onClick={() => { setformVisible(false); setsubmitbutton(false); setisDraft(false); setEventGroup(""); setEventName("") }}>Discard</Button>

                            <Button variant='contained' className='three-buttons' sx={{ mr: 1, backgroundColor: '#8CD867', color: "black", border: "2px solid #2B9348" }} onClick={() => handleDraftForm()}>Add to Draft</Button>

                            <Button variant='contained' className='three-buttons' sx={{ backgroundColor: '#8CD867', color: "black", border: "2px solid #2B9348", display: submitbutton ? 'none' : "", }}
                                onClick={() => handleEventForm()}>Create a new event</Button>

                            {submitbutton ? (<><Button variant='contained' className='three-buttons' sx={{ backgroundColor: '#8CD867', color: "black", border: "2px solid #2B9348", display: !formVisible ? "none" : "" }} onClick={handleAdd}>Submit</Button></>) : (<></>)}
                        </div>
                    </Box>
                </>)
            }

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
    addEvent: (formData) => addEvent(formData),
    fetchAddedEvents: () => fetchAddedEvents(),
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);