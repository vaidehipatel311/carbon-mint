import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Header from '../../Components/Header';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import './events.css'
import { Button, MenuItem, TextField } from '@mui/material';
import { connect } from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { addEvent, fetchAddedEvents, editEvent } from '../../Services/Events/actions';
import Sidebar from '../../Components/Sidebar';

function AddEvent({ addEvent, fetchAddedEvents, editEvent }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [isDraft, setisDraft] = useState(false);
    const [draftdata, setDraftData] = useState([]);

    const formik = useFormik({
        initialValues: {
            event_group: '',
            event_name: '',
            date: '',
            time: '',
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
            scarcification: '',
            soaking_hot_water: '',
            soaking_chemicals: '',
            soaking_cool_water: '',
            wetting_drying: '',
            others: '',
            evidence: ""
        },
        onSubmit: (values) => {
            if (id != '0') {
                formik.setValues({
                    ...formik.values,
                    ...values
                });
                editEvent(id, values)
                navigate('/operator/profile/landparcel/crops', { state: { showAlert: true } });
            }
            else {
                formik.values.time = Date();
                addEvent(values)
                navigate('/operator/profile/landparcel/crops', { state: { showAlert: true } });
            }
        }
    });

    useEffect(() => {
        fetchAddedEvents()
            .then((data) => {
                const filteredEvent = data.find(p => p.id === parseInt(id, 10))
                setDraftData(filteredEvent);
                formik.setValues({
                    ...formik.values,
                    ...filteredEvent
                });
            })
            .catch(err => console.log(err)); handleDraftForm();

    }, [id]);


    const handleFileChange = (event) => {
        const files = event.target.files;
        const fileArray = [];
        Array.from(files).forEach(file => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                const base64data = reader.result;
                fileArray.push(base64data);
                if (fileArray.length === files.length) {
                    setSelectedFiles(prevFiles => [...prevFiles, ...fileArray]);
                    formik.setFieldValue('evidence', [...selectedFiles, ...fileArray]);
                }
            };
        });
    };


    const handleDeleteFile = (index) => {
        const updatedFiles = selectedFiles.filter((_, i) => i !== index);
        setSelectedFiles(updatedFiles);
    };

    const handleDraftForm = () => {
        if (id != 0) {
            formik.values.event_group = draftdata.event_group;
            formik.values.event_name = draftdata.event_name;
            setisDraft(true);
        }

    };
    const handleDiscard = () => {

    }

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


    return (
        <>
            <Header></Header>
            <Sidebar></Sidebar>
            <Box sx={{ paddingLeft: "290px" }}>
                <Typography fontWeight="bold" fontSize="20px">Add new Event</Typography>
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
                                    name='event_group'
                                    onChange={formik.handleChange}
                                    value={isDraft ? draftdata.event_group : formik.values.event_group}
                                    disabled={isDraft ? true : false}
                                >
                                    <MenuItem value='Seed and Seedlings'>Seed and Seedlings</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid xs={5}>
                                <TextField
                                    sx={{ width: '400px' }}
                                    size='small'
                                    type='text'
                                    select
                                    label='Event Name'
                                    name='event_name'
                                    onChange={formik.handleChange}
                                    disabled={isDraft ? true : false}
                                    value={isDraft ? draftdata.event_name : formik.values.event_name}
                                >
                                    <MenuItem value='Seed'>Seed</MenuItem>
                                </TextField>
                            </Grid>
                        </Grid>
                    </div>
                    {formik.values.event_group && formik.values.event_name ? (
                        <Grid container spacing={2} >
                            <Grid xs={6} >
                                <Box className='textfields' sx={{ pr: "10px", paddingBottom: 2 }}>
                                    <TextField
                                        size='small'
                                        type='text'
                                        select
                                        fullWidth
                                        name='seedlings'
                                        onChange={formik.handleChange}
                                        label='Source of Seedlings'
                                        sx={{ mt: "15px" }}
                                        defaultValue={isDraft ? draftdata.seedlings : ""}>
                                        <MenuItem value='On Farm Nursery' >On Farm Nursery</MenuItem>
                                    </TextField>

                                    <TextField
                                        size='small'
                                        type='text'
                                        select
                                        fullWidth
                                        label='Type of Nursery'
                                        name='nursery'
                                        onChange={formik.handleChange} defaultValue={isDraft ? draftdata.nursery : ""}>
                                        <MenuItem value='Wet nursery'>Wet nursery</MenuItem>
                                    </TextField>

                                    <TextField
                                        size='small'
                                        type='text'
                                        select
                                        fullWidth
                                        label='Type of Nursery bed'
                                        name='nursery_bed'
                                        onChange={formik.handleChange}
                                        defaultValue={isDraft ? draftdata.nursery_bed : ""} >
                                        <MenuItem value='Raised Bed'>Raised Bed</MenuItem>
                                    </TextField>

                                    <TextField
                                        size='small'
                                        type='text'
                                        select
                                        fullWidth
                                        label='Type of in house (Framed structures)nursery'
                                        name='house'
                                        onChange={formik.handleChange} defaultValue={isDraft ? draftdata.house : ""}>
                                        <MenuItem value='Open nursery'>Open nursery</MenuItem>
                                    </TextField>

                                    <TextField
                                        size='small'
                                        type='text'
                                        select
                                        fullWidth
                                        label='Soil Treatment methods'
                                        name='soil_treatment'
                                        onChange={formik.handleChange} defaultValue={isDraft ? draftdata.soil_treatment : ""}>
                                        <MenuItem value='Soil treatment by chemicals'>Soil treatment by chemicals</MenuItem>
                                    </TextField>

                                    <TextField
                                        size='small'
                                        type='text'
                                        select
                                        label='Chemicals applied'
                                        name='chemicals'
                                        onChange={formik.handleChange} defaultValue={isDraft ? draftdata.chemicals : ""}>
                                        <MenuItem value='Chlorpyriphos'>Chlorpyriphos</MenuItem>
                                    </TextField>

                                    <TextField
                                        size='small'
                                        type='text'
                                        select
                                        label='Quantity applied (gm or ml)'
                                        name='quantity'
                                        onChange={formik.handleChange} defaultValue={isDraft ? draftdata.quantity : ""}>
                                        <MenuItem value='200'>200</MenuItem>
                                        <MenuItem value='300'>300</MenuItem>
                                        <MenuItem value='400'>400</MenuItem>
                                        <MenuItem value='500'>500</MenuItem>
                                    </TextField>

                                    <Typography variant='p' sx={{ mr: 42 }} fontWeight='bold'>Pre sowing seed Treatment</Typography>

                                    <Grid container>
                                        <Grid xs={6}>
                                            <FormGroup>
                                                <FormControlLabel
                                                    control={<Checkbox
                                                        color='success'
                                                        onChange={(e) => {
                                                            formik.setFieldValue('scarcification', e.target.checked);
                                                        }}
                                                        defaultChecked={isDraft ? draftdata.scarcification : ''}
                                                    />}
                                                    label="Scarification"
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox
                                                        color='success'
                                                        onChange={(e) => {
                                                            formik.setFieldValue('soaking_hot_water', e.target.checked);
                                                        }}
                                                        defaultChecked={isDraft ? draftdata.soaking_hot_water : ''}
                                                    />}
                                                    label="Soaking in hot water"
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox
                                                        color='success'
                                                        onChange={(e) => {
                                                            formik.setFieldValue('soaking_chemicals', e.target.checked);
                                                        }}
                                                        defaultChecked={isDraft ? draftdata.soaking_chemicals : ''}
                                                    />}
                                                    label="Soaking in chemicals"
                                                />
                                            </FormGroup>
                                        </Grid>
                                        <Grid xs={6}>
                                            <FormGroup>
                                                <FormControlLabel
                                                    control={<Checkbox
                                                        color='success'
                                                        onChange={(e) => {
                                                            formik.setFieldValue('soaking_cool_water', e.target.checked);
                                                        }}
                                                        defaultChecked={isDraft ? draftdata.soaking_cool_water : ''}
                                                    />}
                                                    label="Soaking in cool water"
                                                />
                                                <FormControlLabel

                                                    control={<Checkbox
                                                        color='success'
                                                        onChange={(e) => {
                                                            formik.setFieldValue('wetting_drying', e.target.checked);
                                                        }}
                                                        defaultChecked={isDraft ? draftdata.wetting_drying : ''}
                                                    />}
                                                    label="Wetting and drying"
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox
                                                        color='success'
                                                        onChange={(e) => {
                                                            formik.setFieldValue('others', e.target.checked);
                                                        }}
                                                        defaultChecked={isDraft ? draftdata.others : ''}
                                                    />}
                                                    label="Others"
                                                />
                                            </FormGroup>
                                        </Grid>
                                    </Grid>

                                    <TextField
                                        size='small'
                                        type='text'
                                        label='Variety/Hybrid name'
                                        name='variety'
                                        onChange={formik.handleChange} defaultValue={isDraft ? draftdata.variety : ""} />

                                    <TextField
                                        size='small'
                                        type='number'
                                        label='Crop Duration (Days)'
                                        name='crop_duration'
                                        onChange={formik.handleChange} defaultValue={isDraft ? draftdata.crop_duration : ""} />

                                    <TextField
                                        size='small'
                                        type='number'
                                        label='Seed rate (Kg/cent)'
                                        name='seed_rate'
                                        onChange={formik.handleChange} defaultValue={isDraft ? draftdata.seed_rate : ""} />

                                    <TextField
                                        size='small'
                                        select
                                        type='text'
                                        label='Method of sowing'
                                        name='sowing_method'
                                        onChange={formik.handleChange} defaultValue={isDraft ? draftdata.sowing_method : ""} >
                                        <MenuItem value='Sowing in pro-trays'>Sowing in pro-trays</MenuItem>
                                    </TextField>

                                    <TextField
                                        size='small'
                                        type='text'
                                        label='Method of irrigation'
                                        name='irrigation_method'
                                        onChange={formik.handleChange} defaultValue={isDraft ? draftdata.irrigation_method : ""} />

                                    <TextField
                                        size='small'
                                        type='text'
                                        select
                                        label='Intercultural operations in nursery'
                                        name='intercultural_operations'
                                        onChange={formik.handleChange} defaultValue={isDraft ? draftdata.intercultural_operations : ""}>
                                        <MenuItem value='Gap filling'>Gap filling</MenuItem>
                                    </TextField>

                                    <TextField
                                        size='small'
                                        type='text'
                                        label='Recommended compitent authority'
                                        name='recommended_competent'
                                        onChange={formik.handleChange} defaultValue={isDraft ? draftdata.recommended_competent : ""}
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
                                    >
                                        Upload file
                                        <VisuallyHiddenInput type="file" multiple onChange={handleFileChange} name="evidence"
                                        />
                                    </Button>

                                    <Typography sx={{ marginLeft: "20px" }} display={isDraft ? "none" : ""}> {selectedFiles.length} Files selected </Typography>
                                    <Grid xs={12} >
                                        {selectedFiles.map((file, index) => (
                                            <>
                                                <img
                                                    key={index}
                                                    src={file}
                                                    alt={`Preview ${index}`}
                                                    style={{ width: '100px', height: '100px', marginRight: '40px', marginLeft: "40px" }}
                                                />
                                                <CloseIcon className='ev-close-img' onClick={() => handleDeleteFile(index)} />
                                            </>

                                        ))}

                                        {isDraft && draftdata && draftdata.evidence && draftdata.evidence.length > 0 && (
                                            <>
                                                {(() => {
                                                    const imageElements = [];
                                                    for (let index = 0; index < draftdata.evidence.length; index++) {
                                                        const imagePath = draftdata.evidence[index];
                                                        const imageElement = (
                                                            <>
                                                                <img
                                                                    src={imagePath}
                                                                    alt={`Draft Image ${index}`}
                                                                    style={{ width: '100px', height: '100px', marginRight: '40px', marginLeft: "40px" }}
                                                                /></>
                                                        );
                                                        imageElements.push(imageElement);
                                                    }
                                                    return imageElements;
                                                })()}

                                            </>)}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                        :
                        (<>

                        </>)}

                </div >
                <div style={{ position: "relative", marginLeft: "1010px", marginBottom: "20px" }}>

                    <Button variant='outlined' className='three-buttons' sx={{ mr: 1, color: "#2B9348", border: "2px solid #2B9348" }} onClick={() => handleDiscard()}>Discard</Button>

                    {/* <Button variant='contained' className='three-buttons' sx={{ mr: 1, backgroundColor: '#8CD867', color: "black", border: "2px solid #2B9348" }} onClick={() => handleDraftForm()}>Add to Draft</Button> */}

                    {/* <Button variant='contained' className='three-buttons' sx={{ backgroundColor: '#8CD867', color: "black", border: "2px solid #2B9348", display: submitbutton ? 'none' : "", }}
                        onClick={() => handleEventForm()}>Create a new event</Button> */}

                    <Button variant='contained' className='three-buttons' sx={{ backgroundColor: '#8CD867', color: "black", border: "2px solid #2B9348" }} onClick={formik.handleSubmit} >Submit</Button>
                </div>
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
    addEvent: (formik) => addEvent(formik),
    fetchAddedEvents: () => fetchAddedEvents(),
    editEvent: (id, formik) => editEvent(id, formik),

}

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);