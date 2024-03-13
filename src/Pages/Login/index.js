import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import finalLogo from '../../assets/Login/Final Logo.png'
import googleicon from '../../assets/Login/Socail Links.png'
import graphicSide from '../../assets/Login/image 50.png'
import { Button, TextField } from '@mui/material';
import './style.css';
import { connect } from 'react-redux'
import * as action from '../../Services/Login/actions';
import { Link } from 'react-router-dom';

function Login({ addUser }) {

    const [showOtp, setShowOtp] = useState(false);
    const [phoneNo, setPhoneNo] = useState('');
    const [otp, setOtp] = useState('');
    const [phoneNoError, setPhoneNoError] = useState('');

    const handleClick = () => {
        if (phoneNo.length !== 10) {
            setPhoneNoError('Please enter a valid phone number');
            return;
        }
        else {
            const otp = (Math.floor(Math.random() * 1000000) + 1)
            setOtp(otp)
            addUser(phoneNo, otp)
            setShowOtp(true);
        }

    }
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Grid container >
                    <Grid item xs={6}>
                        <div >
                            <img className="graphicSide" src={graphicSide} alt="logo"></img>
                        </div>

                    </Grid>
                    <Grid item xs={6}>

                        <div className='form' style={{ marginTop: "235px", width: "436px", marginLeft: "200px", gap: "48px" }}>
                            <div className='logo' >
                                <img className="finalLogo" src={finalLogo} alt="logo"></img>
                            </div>
                            <div style={{ gap: "40px" }}>
                                <div align="left" >
                                    <Typography className="signintext" variant="p">Sign In</Typography>
                                </div>
                                {showOtp ?
                                    (<div style={{ gap: "16px" }} align="center">
                                        <div >
                                            <TextField type='text' value={phoneNo} sx={{ width: "436px", marginTop: "16px" }} label='Phone number'></TextField>
                                        </div>
                                        <div >
                                            <TextField type='text' value={otp} sx={{ width: "436px", marginTop: "16px" }} label='OTP'></TextField>
                                        </div>

                                        <Link to="/dashboard">
                                            <div className='button' onClick={() => { handleClick() }}>
                                                <Button variant="filled" >Sign In</Button>
                                            </div>
                                        </Link>
                                    </div>)
                                    :
                                    (<div style={{ gap: "16px" }} align="center">
                                        <div >
                                            <TextField type='text' value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} sx={{ width: "436px", marginTop: "16px" }} label='Phone number'></TextField>
                                        </div>
                                        {phoneNoError && <Typography color="error">{phoneNoError}</Typography>}
                                        <div className='button' onClick={() => { handleClick() }}>
                                            <Button variant="filled"  >Send OTP</Button>
                                        </div>
                                    </div>)}
                                <br></br>
                                <div style={{ gap: "24px" }}>
                                    <Typography className="otheracc" variant='p' >or sign in with other accounts?</Typography>
                                    <div>
                                        <img className="googleicon" src={googleicon} alt="logo"></img>
                                    </div>
                                </div>
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
        login: state.login.users
    }
}

const mapDispatchToProps = {
    addUser: (phoneNo, otp) => action.addUser(phoneNo, otp)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)


