import React from 'react'
import Header from '../../Components/Header'
import Sidebar from '../../Components/Sidebar'
import './landparcel.css'
import Link from '@mui/material/Link';
import { Button } from '@mui/material'
import { Grid } from '@mui/material'
import { Breadcrumbs, Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import Box from '@mui/material/Box';

import maps from '../../assets/Operator/maps.png'
import Banner from '../../assets/Operator/Banner.png'
import Banner_crops_2 from '../../assets/Operator/Banner_crops_2.png'


export default function landparcel() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        color: theme.palette.text.secondary,
    }));
    return (
        <>
            <Header />
            <Sidebar />
            <Box sx={{ margin: '0px 20px 50px 300px' }}>

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

                        </Breadcrumbs>
                        <br></br>
                        <Typography variant='p' className='title'>Chennaiah Polam</Typography>
                    </Grid>
                    <Grid xs={2}>
                        <div className='add-button'>
                            <Button variant='' className='add-button'
                            >Add Crop</Button></div>
                    </Grid>
                </Grid>

                <Grid container sx={{ mt: 3 }}>
                    <Grid xs={4.5} sx={{ mb: 5 }}>
                        <Item sx={{ boxShadow: '0px 0px 12px 0px #0000001F', paddingBottom: 2 }}>
                            <div className='chennaiah-polam-details'>
                                <img src={Banner} alt="banner"></img>
                                <Typography variant='p' className='name'>Chennaiah Polam</Typography>
                                <Typography variant='p' className='address'>H.no: 54b/TS, Megya Thanda, Rangareddy, Hyderabad,  Telangana - 500008</Typography>
                                <Grid container sx={{ mt: 3, textAlign: 'center' }}>
                                    <Grid xs={4}>
                                        <Typography variant='p' className='n'><b>5.6</b></Typography>
                                    </Grid>
                                    <Grid xs={4}>
                                        <Typography variant='p' className='n'><b>3.4</b></Typography>
                                    </Grid>
                                    <Grid xs={4}>
                                        <Typography variant='p' className='n'><b>1.2</b></Typography>
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
                            </div>
                            <hr style={{ margin: '20px' }} />

                            <div className='details'>
                                <Typography variant='p' className='title'>Details</Typography>
                                <div className='content'>
                                    <Typography variant='p'>Survey number</Typography>
                                    <b><Typography variant='p'>33/95, 34/95</Typography></b>

                                </div>
                                <div className='content'>
                                    <Typography variant='p'>Neighboring Farm</Typography>
                                    <b><Typography variant='p'>North</Typography></b>

                                </div>
                                <div className='content'>
                                    <Typography variant='p'>Distance from the nearest service road</Typography>
                                    <b><Typography variant='p'>5km</Typography></b>

                                </div>
                                <div className='content'>
                                    <Typography variant='p'>Land under cultivation</Typography>
                                    <b><Typography variant='p'>Crops</Typography></b>

                                </div>
                                <div className='content'>
                                    <Typography variant='p'>Cropping systems</Typography>
                                    <b><Typography variant='p'>Monocropping</Typography></b>

                                </div>
                                <div className='content'>
                                    <Typography variant='p'>Farming system</Typography>
                                    <b><Typography variant='p'>Cropping</Typography></b>

                                </div>
                                <div className='content'>
                                    <Typography variant='p'>Infrastructure</Typography>
                                    <b><Typography variant='p'>Buildings</Typography></b>

                                </div>
                                <div className='content'>
                                    <Typography variant='p'>Water resources</Typography>
                                    <b><Typography variant='p'>Borewell</Typography></b>

                                </div>

                            </div>
                        </Item>

                    </Grid>
                    <Grid xs={7.5}>
                        <Grid xs={12}>
                            <div sx={{ boxShadow: '0px 0px 12px 0px #0000001F', paddingBottom: 2, ml: 2 }}>
                                <img src={maps} style={{ width: '100%' }} alt="maps"></img>

                            </div>
                        </Grid>
                        <Grid xs={12}>
                            <div className='crops-heading' ><Typography variant='p' >Crops</Typography></div>
                            <br></br>

                            <Grid container>

                                <Grid xs={6}>
                                    <Link href='/operator/profile/landparcel/crops' style={{ textDecoration: 'none' }}>
                                        <div className="crops-grid-upper">
                                            <img src={Banner_crops_2} alt="banner2"></img>

                                        </div >
                                        <Item className='crops-grid-lower' sx={{ boxShadow: '0px 0px 12px 0px #0000001F' }}>
                                            <div style={{ display: 'grid', justifyContent: 'center' }}>
                                                <b><Typography variant='p'>Corner Field Sourgham</Typography></b>
                                                <Typography variant='p'>Irrigation in process</Typography>
                                            </div>

                                            <Grid container sx={{ mt: 3, textAlign: 'center' }}>
                                                <Grid xs={4}>
                                                    <Typography variant='p' className='n'><b>2.4</b></Typography>
                                                </Grid>
                                                <Grid xs={4}>
                                                    <Typography variant='p' className='n'><b>1</b></Typography>
                                                </Grid>
                                                <Grid xs={4}>
                                                    <Typography variant='p' className='n'><b>1.4</b></Typography>
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
                                        </Item>
                                    </Link>
                                </Grid>

                                {/* <Grid xs={6}>
                                    <Link href='/operator/profile/landparcel/crops' style={{ textDecoration: 'none' }}>
                                        <div className="crops-grid-upper">
                                            <img src={Banner_crops_2} alt="banner2"></img>

                                        </div >
                                        <Item className='crops-grid-lower' sx={{ boxShadow: '0px 0px 12px 0px #0000001F' }}>
                                            <div style={{ display: 'grid', justifyContent: 'center' }}>
                                                <b><Typography variant='p'>Lake edge field: Finger Millet</Typography></b>
                                                <Typography variant='p'>Seeds & Seedling completed</Typography>
                                            </div>
                                            <Grid container sx={{ mt: 3, textAlign: 'center' }}>
                                                <Grid xs={4}>
                                                    <Typography variant='p' className='n'><b>2.4</b></Typography>
                                                </Grid>
                                                <Grid xs={4}>
                                                    <Typography variant='p' className='n'><b>1</b></Typography>
                                                </Grid>
                                                <Grid xs={4}>
                                                    <Typography variant='p' className='n'><b>1.4</b></Typography>
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


                                        </Item>
                                    </Link>
                                </Grid> */}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
