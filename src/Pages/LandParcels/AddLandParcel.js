import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header'
import Sidebar from '../../Components/Sidebar'
import Box from '@mui/material/Box'
import '../Operator/addoperator.css'
import { Link, useParams } from 'react-router-dom';
import { Button, MenuItem, TextField } from '@mui/material'
import { Grid } from '@mui/material'
import { Breadcrumbs, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { useFormik } from 'formik';
import { addLandParcel, fetchLandParcels, editParcel } from '../../Services/LandParcels/actions'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const validate = (values) => {
    const errors = {};


    // if (!values.name || !values.contact_number_1 || !values.village || !values.crops) {
    //     errors.name = 'Required';
    //     errors.contact_number_1 = 'Required';
    //     errors.village = 'Required';
    //     errors.crops = 'Required';
    // }
    // else if (values.contact_number_1.length !== 10) {
    //     errors.contact_number_1 = 'Must be 10 digits'
    // }
    // return errors;
};

function AddLandParcel({ addLandParcel, fetchLandParcels, editParcel }) {
    const { id } = useParams();
    const [isDraft, setisDraft] = useState(false);
    const [draftdata, setDraftData] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        fetchLandParcels()
            .then((data) => {
                const filteredEvent = data.find(p => p.id === parseInt(id, 10))
                setDraftData(filteredEvent);
                console.log(draftdata);
                formik.setValues({
                    ...formik.values,
                    ...filteredEvent
                });
            })
            .catch(err => console.log(err));
        handleDraftForm();

    }, [id]);

    const handleDraftForm = () => {
        if (id != 0) {
            setisDraft(true);
        }

    };


    const formik = useFormik({
        initialValues: {

            SyNo: '',
            name: '',
            acres: '',
            house_no: '',
            street_name: '',
            village: '',
            district: '',
            state: '',
            country: '',
            postal_code: '',
            contact_number_1: '',
            area_owned: '',
            area_leased: '',
            neighbouring_farm: '',
            farming_system: '',
            infrastructure: '',
            water_resources: '',
            crops: '',
            status: 'Pending'
        },
        validate,
        onSubmit: (values) => {
            if (id != '0') {
                formik.setValues({
                    ...formik.values,
                    ...values
                });
                editParcel(id, values)
                navigate('/landparcels', { state: { showAlert: true } });
            }
            else {
                addLandParcel(values);
                navigate('/landparcels')
            }
        },
    });

    return (
        <>
            <Header />
            <Sidebar />
            <Box sx={{ paddingLeft: "290px" }}>
                <div className='path'>
                    <Breadcrumbs sx={{
                        textDecoration: 'none'
                    }}
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb">

                        <Link to="/landparcels">
                            Land Parcel
                        </Link>

                    </Breadcrumbs>
                    <div className='create-operator-title'>
                        <Typography variant='p'>Add Land Parcel</Typography>
                    </div>
                </div>

                <Grid container spacing={2} sx={{ mt: 3, maxWidth: 1200 }}>
                    <Grid xs={6}>
                        <div className='first-part'>
                            <div className='operator-name'>
                                <Typography variant='p' fontWeight='bold'>Land Parcel Details</Typography>
                                <TextField
                                    type="text"
                                    label=" Land Parcel Name"
                                    name="name"
                                    required
                                    value={formik.values.name}
                                    defaultValue={isDraft ? draftdata.name : ""}
                                    onChange={formik.handleChange}
                                    error={formik.errors.name ? true : false}
                                />

                                <div style={{ gap: '10px', display: 'flex' }}>
                                    <TextField
                                        type='text'
                                        required
                                        fullWidth
                                        label='Survey Number'
                                        name='SyNo'
                                        value={formik.values.SyNo}
                                        defaultValue={isDraft ? draftdata.SyNo : ""}
                                        onChange={formik.handleChange}
                                    />

                                    <TextField
                                        type='text'
                                        required
                                        fullWidth
                                        label='Acres(in acres)'
                                        name='acres'
                                        value={formik.values.acres}
                                        defaultValue={isDraft ? draftdata.acres : ""}
                                        onChange={formik.handleChange} />


                                </div>
                                <div style={{ gap: '10px', display: 'flex' }}>


                                    <TextField
                                        type='text'
                                        label='Area Owned'
                                        required
                                        fullWidth
                                        name='area_owned'
                                        value={formik.values.area_owned}
                                        defaultValue={isDraft ? draftdata.area_owned : ""}
                                        onChange={formik.handleChange}
                                    />

                                    <TextField
                                        type='text'
                                        fullWidth
                                        label='Area Leased'
                                        required
                                        name='area_leased'
                                        value={formik.values.area_leased}
                                        defaultValue={isDraft ? draftdata.area_leased : ""}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                                <TextField
                                    type='text'
                                    label='Crops'
                                    name='crops'
                                    required
                                    value={formik.values.crops}
                                    defaultValue={isDraft ? draftdata.crops : ""}
                                    onChange={formik.handleChange}
                                    error={formik.errors.crops ? true : false} />
                            </div>

                            <div className='address-contact-details'>
                                <Typography variant='p' fontWeight='bold'>Address & Contact Details of Owner</Typography>
                                <TextField
                                    type='text'
                                    label='Contact number'
                                    name='contact_number_1'
                                    value={formik.values.contact_number_1}
                                    defaultValue={isDraft ? draftdata.contact_number_1 : ""}
                                    onChange={formik.handleChange}
                                    required
                                    error={formik.errors.contact_number_1 ? true : false}
                                    helperText={formik.errors.contact_number_1}
                                />

                                <TextField
                                    type='text'
                                    required
                                    label='Address'
                                    name='house_no'
                                    value={formik.values.house_no}
                                    defaultValue={isDraft ? draftdata.house_no : ""}
                                    onChange={formik.handleChange}
                                >
                                </TextField>


                                <div style={{ gap: '10px', display: 'flex' }}>
                                    <TextField
                                        type='text'
                                        fullWidth
                                        label='Village'
                                        name='village'
                                        value={formik.values.village}
                                        defaultValue={isDraft ? draftdata.village : ""}
                                        onChange={formik.handleChange}
                                        required
                                        error={formik.errors.village ? true : false}
                                    />
                                    <TextField
                                        fullWidth
                                        required
                                        type='text'
                                        select
                                        label='District'
                                        name='district'
                                        value={formik.values.district}
                                        defaultChecked={isDraft ? draftdata.district : ""}
                                        onChange={formik.handleChange}
                                    >
                                        <MenuItem value='Hyderabad'>Hyderabad</MenuItem>
                                        <MenuItem value='Ahmedabad'>Ahmedabad</MenuItem>
                                    </TextField>

                                </div>
                                <div style={{ gap: '10px', display: 'flex' }}>
                                    <TextField
                                        fullWidth
                                        required
                                        type='text'
                                        select
                                        label='State'
                                        name='state'
                                        value={formik.values.state}
                                        defaultValue={isDraft ? draftdata.state : ""}
                                        onChange={formik.handleChange}
                                    >
                                        <MenuItem value='Telangana'>Telangana</MenuItem>
                                        <MenuItem value='Gujarat'>Gujarat</MenuItem>
                                    </TextField>
                                    <TextField
                                        fullWidth
                                        required
                                        type='text'
                                        select
                                        label='Country'
                                        name='country'
                                        value={formik.values.country}
                                        defaultValue={isDraft ? draftdata.country : ""}
                                        onChange={formik.handleChange}
                                    >
                                        <MenuItem value='India'>India</MenuItem>
                                        <MenuItem value='U.S.A'>U.S.A</MenuItem>
                                    </TextField>
                                </div>


                            </div>

                        </div>
                    </Grid>
                    <Grid xs={6}>
                        <div className='second-part'>
                            <div className='farming-experience' style={{ marginTop: "0px" }}>
                                <Typography variant='p' fontWeight='bold'>Additional Details</Typography>
                                <TextField
                                    type='text'
                                    label='Neighbouring Farm'
                                    name='neighbouring_farm'
                                    select
                                    value={formik.values.neighbouring_farm}
                                    defaultValue={isDraft ? draftdata.neighbouring_farm : ""}
                                    onChange={formik.handleChange} >
                                    <MenuItem value='North'>North</MenuItem>
                                    <MenuItem value='South'>South</MenuItem>
                                    <MenuItem value='East'>East</MenuItem>
                                    <MenuItem value='West'>West</MenuItem>
                                </TextField>
                                <TextField
                                    type='text'
                                    label='Farming System'
                                    name='farming_system'
                                    value={formik.values.farming_system}
                                    defaultValue={isDraft ? draftdata.farming_system : ""}
                                    onChange={formik.handleChange} >
                                    <MenuItem value='Cropping'>Cropping</MenuItem>
                                    <MenuItem value='Organic'>Organic</MenuItem>
                                </TextField>
                                <TextField
                                    type='text'
                                    label='Infrastructure'
                                    name='infrastructure'
                                    required
                                    value={formik.values.infrastructure}
                                    defaultValue={isDraft ? draftdata.infrastructure : ""}
                                    onChange={formik.handleChange}
                                />

                                <TextField
                                    type='text'
                                    required
                                    select
                                    label='Water Resources'
                                    name='water_resources'
                                    value={formik.values.water_resources}
                                    defaultValue={isDraft ? draftdata.water_resources : ""}
                                    onChange={formik.handleChange} >
                                    <MenuItem value='BoreWell'>BoreWell</MenuItem>
                                    <MenuItem value='River'>River</MenuItem>
                                </TextField>

                            </div>


                            <div className='submit-cancel-btn' style={{ marginTop: "280px" }}>
                                <Button variant='outlined' sx={{ ml: 15, mr: 1, height: "30px", color: "#2B9348", border: "2px solid #2B9348" }}>Cancel</Button>
                                <Link to='/landparcels' style={{ textDecoration: 'none' }}>
                                    <Button variant='' className='three-buttons' sx={{ backgroundColor: '#8CD867', color: "black", border: "2px solid #2B9348" }} onClick={formik.handleSubmit}>Submit</Button>
                                </Link>

                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box >
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        // onboarding: state.onboarding.onboarding,
    };
};

const mapDispatchToProps = {
    addLandParcel: (formik) => addLandParcel(formik),
    fetchLandParcels: () => fetchLandParcels(),
    editParcel: (id, formik) => editParcel(id, formik),

}

export default connect(mapStateToProps, mapDispatchToProps)(AddLandParcel)