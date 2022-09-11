import React, { Component } from 'react'
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import { FormGroup, Input } from '@mui/material';
import { FormHelperText } from '@mui/material';
import './ChangePassword.css'

export default class ChangePassword extends Component {
    render() {
        return (
            <Box sx={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // backgroundColor: '#d9d9d98c',
                    height: '530px',
                    border: 1,
                    borderColor: '#d9d9d98c',
                    borderWidth: '0.4rem',
                    borderRadius: '20px'
                }
            }>
                <Box sx={{
                    width: '215px',
                    maxWidth: 500,
                    marginBottom: '10px',
                    marginTop: '5px'
                }}>
                    <Typography variant="h5" gutterBottom>
                        Change Password
                    </Typography>
                </Box>
                <Box sx={{

                    width: '500px',
                    maxWidth: 500

                }}>
                    <FormGroup>
                        <FormControl sx={{

                            marginBottom: "0.8rem"

                        }}>
                            <InputLabel htmlFor="my-input">Old Password</InputLabel>
                            <Input id="my-input" type='password' aria-describedby="my-helper-text" />
                            <FormHelperText id="my-helper-text">Previous Password</FormHelperText>
                        </FormControl>
                        <FormControl
                            sx={{

                                marginBottom: "0.8rem"

                            }}>
                            <InputLabel htmlFor="my-input">New Password</InputLabel>
                            <Input id="my-input" type='password' aria-describedby="my-helper-text" />
                            <FormHelperText id="my-helper-text">New Password Example: i7ovemydog!!</FormHelperText>
                        </FormControl>
                        <FormControl sx={{

                            marginBottom: "0.8rem"

                        }}>
                            <InputLabel htmlFor="my-input">Confirm Password</InputLabel>
                            <Input id="my-input" type='password' aria-describedby="my-helper-text" />
                            <FormHelperText id="my-helper-text">Same as your new password field</FormHelperText>
                        </FormControl>

                        <Box sx=
                            {
                                {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-evenly"

                                }

                            }
                        >

                            <Button variant="outlined" color="error">
                                reset
                            </Button>
                            <Button variant="contained" color="success">
                                Submit
                            </Button>
                        </Box>
                    </FormGroup>
                </Box>
            </Box>
        )
    }
}
