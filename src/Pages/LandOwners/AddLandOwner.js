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
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { useFormik } from 'formik';
import aadhar_img from '../../assets/Operator/aadhar_img.png'
import { addLandOwner, fetchLandOwners, editOwner } from '../../Services/LandOwners/actions'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const validate = (values) => {
    const errors = {};

    // if (!values.name && !values.contact_number_1 && !values.village && !values.aadhar_no && !values.passbook_refno
    //     && !values.crops) {
    //     errors.name = 'Required';
    //     errors.contact_number_1 = 'Required';
    //     errors.village = 'Required';
    //     errors.aadhar_no = 'Required';
    //     errors.passbook_refno = 'Required';
    //     errors.crops = 'Required';
    // }
    // else if (values.contact_number_1.length !== 10) {
    //     errors.contact_number_1 = 'Must be 10 digits'
    // }
    // return errors;
};

function AddLandOwner({ addLandOwner, fetchLandOwners, editOwner }) {
    const { id } = useParams();
    const [selectedFileaadhar, setSelectedFileaadhar] = useState([]);
    const [selectedFilePanCard, setSelectedFilePanCard] = useState([]);
    const [selectedFileLeasedDoc, setSelectedFileLeasedDoc] = useState([]);
    const [isDraft, setisDraft] = useState(false);
    const [draftdata, setDraftData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchLandOwners()
            .then((data) => {
                const filteredEvent = data.find(p => p.id === parseInt(id, 10))
                setDraftData(filteredEvent);
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
            uniqueID: null,
            uniqueIDFileName: '',

            name: '',
            father_name: '',
            ownerID: 'KFP/MT/03',
            contact_number_1: '',
            house_no: '',
            village: '',
            district: '',
            state: '',
            country: '',
            postal_code: '',
            email_id: '',
            aadhar_no: '',
            unique_id: '',
            passbook_refno: '',
            total_farming_exp_year: '',
            organic_farming_exp_year: '',
            landparcels: '',
            area: '',
            acres: '',
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
                editOwner(id, values)
                navigate('/landowners', { state: { showAlert: true } });
            }
            else {
                const uniqueIDBase64 = formik.values.uniqueID ? btoa(formik.values.uniqueID) : null;
                const pancardFileIDBase64 = formik.values.pancardFile ? btoa(formik.values.pancardFile) : null;
                const leasedFileIDBase64 = formik.values.leasedFile ? btoa(formik.values.leasedFile) : null;

                formik.values.unique_id = uniqueIDBase64;
                formik.values.panCard_id = pancardFileIDBase64;
                formik.values.leased_doc_id = leasedFileIDBase64;
                addLandOwner(values);
                navigate('/landowners')
            }
        },
    });

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: "20px",
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
    });

    const handleDeleteFile = (index, fileType) => {
        const updatedFilesaadhar = selectedFileaadhar.filter((_, i) => i !== index);
        setSelectedFileaadhar(updatedFilesaadhar);

        const updatedFilesPanCard = selectedFilePanCard.filter((_, i) => i !== index);
        setSelectedFilePanCard(updatedFilesPanCard);

        const updatedFilesLeasedDoc = selectedFileLeasedDoc.filter((_, i) => i !== index);
        setSelectedFileLeasedDoc(updatedFilesLeasedDoc);

        if (fileType === 'aadhar') {
            setSelectedFileaadhar([]);
            formik.values.uniqueID = null;
            formik.values.uniqueIDFileName = 'No File Chosen'

        } else if (fileType === 'pancard') {
            setSelectedFilePanCard([]);
            formik.values.pancardFile = null;
            formik.values.pancardFileName = 'No File Chosen'

        } else if (fileType === 'leased') {
            setSelectedFileLeasedDoc([]);
            formik.values.leasedFile = null;
            formik.values.leasedFileName = 'No File Chosen';

        }
    };
    const handleFileChangeAadhar = (event, key) => {
        const file = event.target.files[0];
        setSelectedFileaadhar([file]);
        formik.values.uniqueID = file;
        formik.values.uniqueIDFileName = file.name

    };

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

                        <Link to="/landowners">
                            Land Owners
                        </Link>

                    </Breadcrumbs>
                    <div className='create-operator-title'>
                        <Typography variant='p'>Add Land Owner</Typography>
                    </div>
                </div>

                <Grid container spacing={2} sx={{ mt: 3, maxWidth: 1200 }}>
                    <Grid xs={6}>
                        <div className='first-part'>
                            <div className='operator-name'>
                                <Typography variant='p' fontWeight='bold'>Land Owner Details</Typography>
                                <TextField
                                    type="text"
                                    label=" Owner Name"
                                    name="name"
                                    required
                                    value={formik.values.name}
                                    defaultValue={isDraft ? draftdata.name : ""}
                                    onChange={formik.handleChange}
                                    helperText='First name + Last name'
                                    error={formik.errors.name ? true : false}
                                />


                                <TextField
                                    type='text'
                                    label='Father name'
                                    required
                                    name='father_name'
                                    defaultValue={isDraft ? draftdata.father_name : ""}
                                    value={formik.values.father_name}
                                    onChange={formik.handleChange}
                                />
                                <TextField
                                    type='text'
                                    label='ID'
                                    name='ownerID'
                                    defaultValue={isDraft ? draftdata.ownerID : ""}
                                    value={formik.values.ownerID}
                                    onChange={formik.handleChange}
                                />
                            </div>

                            <div className='address-contact-details'>
                                <Typography variant='p' fontWeight='bold'>Address & Contact Details</Typography>
                                <TextField
                                    type='text'
                                    label='Contact number'
                                    name='contact_number_1'
                                    value={formik.values.contact_number_1}
                                    onChange={formik.handleChange}
                                    required
                                    error={formik.errors.contact_number_1 ? true : false}
                                    helperText={formik.errors.contact_number_1}
                                    defaultValue={isDraft ? draftdata.contact_number_1 : ""}

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
                                        defaultValue={isDraft ? draftdata.district : ""}
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
                                        value={formik.values.country} defaultValue={isDraft ? draftdata.country : ""}
                                        onChange={formik.handleChange}
                                    >
                                        <MenuItem value='India'>India</MenuItem>
                                        <MenuItem value='U.S.A'>U.S.A</MenuItem>
                                    </TextField>

                                </div>
                                <div style={{ gap: '10px', display: 'flex' }}>
                                    <TextField
                                        type='text'
                                        label='Postal Code'
                                        required
                                        fullWidth
                                        name='postal_code'
                                        value={formik.values.postal_code} defaultValue={isDraft ? draftdata.postal_code : ""}
                                        onChange={formik.handleChange}
                                    />
                                    <TextField
                                        type='text'
                                        label='Email ID'
                                        required
                                        fullWidth
                                        name='email_id'
                                        value={formik.values.email_id} defaultValue={isDraft ? draftdata.email_id : ""}
                                        onChange={formik.handleChange}
                                    /></div>
                            </div>

                        </div>
                    </Grid>
                    <Grid xs={6}>
                        <div className='second-part'>
                            <div className='pancard'>
                                <Typography variant='p'>Unique ID (Aadhar card) *</Typography>
                                <TextField
                                    type='text'
                                    label='Aadhar number'
                                    name='aadhar_no'
                                    required
                                    value={formik.values.aadhar_no} defaultValue={isDraft ? draftdata.aadhar_no : ""}
                                    onChange={formik.handleChange}
                                    error={formik.errors.aadhar_no ? true : false}
                                />
                                <Grid container sx={{ gap: '20px' }}>
                                    <Button
                                        component="label"
                                        role={undefined}
                                        variant="contained"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon />}
                                        size="small"
                                        // className='three-buttons'
                                        sx={{ mr: 1, mb: 1, height: "40px", backgroundColor: '#8CD867', color: "black", border: "2px solid #2B9348" }}
                                    >
                                        Choose file
                                        <VisuallyHiddenInput type="file" multiple onChange={(event) => handleFileChangeAadhar(event, 'uniqueID')} />
                                    </Button>
                                    <Typography sx={{ mt: 1 }}>{formik.values.uniqueID ? (formik.values.uniqueID.name) : "No file chosen"}</Typography>
                                    {(
                                        <>
                                            {selectedFileaadhar.map((file, index) => (
                                                <>
                                                    <img
                                                        key={1}
                                                        src={aadhar_img}
                                                        alt={`Preview ${1}`}
                                                        style={{ width: '50px', height: '50px', marginRight: '10px' }}
                                                    />
                                                    <CloseIcon className='close-img' onClick={() => handleDeleteFile(1, 'aadhar')} />
                                                </>
                                            ))}
                                        </>
                                    )}
                                </Grid>
                            </div>
                            <div className='pancard'>
                                <TextField
                                    fullWidth
                                    type='text'
                                    label='Pass Book ref. no'
                                    name='passbook_refno'
                                    required
                                    value={formik.values.passbook_refno} defaultValue={isDraft ? draftdata.passbook_refno : ""}
                                    onChange={formik.handleChange}
                                    error={formik.errors.passbook_refno ? true : false} />

                            </div>
                            <div className='farming-experience'>
                                <Typography variant='p' fontWeight='bold'>Farming Experience</Typography>
                                <TextField
                                    type='text'
                                    label='Total farming experience in year'
                                    name='total_farming_exp_year'
                                    value={formik.values.total_farming_exp_year}
                                    defaultValue={isDraft ? draftdata.total_farming_exp_year : ""}
                                    onChange={formik.handleChange} />
                                <TextField
                                    type='text'
                                    label='Organic farming experience in year'
                                    name='organic_farming_exp_year'
                                    value={formik.values.organic_farming_exp_year}
                                    defaultValue={isDraft ? draftdata.organic_farming_exp_year : ""}
                                    onChange={formik.handleChange} />
                            </div>

                            <div className='land-information'>
                                <Typography variant='p' fontWeight='bold'>Land Information</Typography>
                                <TextField
                                    type='text'
                                    label='Landparcels'
                                    name='landparcels'
                                    required
                                    value={formik.values.landparcels}
                                    defaultValue={isDraft ? draftdata.landparcels : ""}
                                    onChange={formik.handleChange}
                                    error={formik.errors.landparcels ? true : false} />
                                <TextField
                                    type='text'
                                    label='Crops'
                                    name='crops'
                                    required
                                    value={formik.values.crops}
                                    defaultValue={isDraft ? draftdata.crops : ""}
                                    onChange={formik.handleChange}
                                    error={formik.errors.crops ? true : false} />
                                <TextField
                                    type='text'
                                    required
                                    label='Acres(in acres)'
                                    name='acres'
                                    value={formik.values.acres}
                                    defaultValue={isDraft ? draftdata.acres : ""}
                                    onChange={formik.handleChange} />
                            </div>

                            <div className='submit-cancel-btn'>
                                <Button variant='outlined' sx={{ ml: 15, mr: 1, height: "30px", color: "#2B9348", border: "2px solid #2B9348" }}>Cancel</Button>
                                <Link to='/landowners' style={{ textDecoration: 'none' }}>
                                    <Button variant='' className='three-buttons' sx={{ backgroundColor: '#8CD867', color: "black", border: "2px solid #2B9348" }} onClick={formik.handleSubmit} error={validate}>Submit</Button>
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
    };
};

const mapDispatchToProps = {
    addLandOwner: (formik) => addLandOwner(formik),
    fetchLandOwners: () => fetchLandOwners(),
    editOwner: (id, formik) => editOwner(id, formik),

}

export default connect(mapStateToProps, mapDispatchToProps)(AddLandOwner)

