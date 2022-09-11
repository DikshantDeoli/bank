import React, { Component } from 'react';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import { FormGroup, Input } from '@mui/material';
import { FormHelperText } from '@mui/material';
import './NewAccount.css'

export default class NewAccount extends Component {
    constructor(props) {
        super(props)

        this.Dropdown = this.Dropdown.bind(this);
    }



    Dropdown = ({ options, onChange }) => {
        return (
            <label>
                <select onChange={onChange}
                    className="selectOptionsNewAccount"
                >
                    {options.map((option) => (
                        <option >{option.type}</option>
                    ))}
                </select>
            </label>
        );
    }

    render() {
        const options = [

            {
                "id": "1",
                "type": "Saving Account"
            },
            {
                "id": "2",
                "type": "Current Account"
            }
        ];
        return (
            <>
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
                            New Account
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
                                <InputLabel htmlFor="my-input">Customer Id</InputLabel>
                                <Input id="my-input" type='number' aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">Provide Customer Id</FormHelperText>
                            </FormControl>
                            <FormControl
                                sx={{
                                    marginBottom: "0.8rem"

                                }}>
                                <this.Dropdown
                                    className="selectOptionsNewAccount"
                                    options={options}
                                    onChange={this.handleChange}

                                />
                            </FormControl>
                            <FormControl sx={{

                                marginBottom: "0.8rem"

                            }}>
                                <InputLabel htmlFor="my-input">Initial Deposit</InputLabel>
                                <Input id="my-input" type='number' aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">Provide Initial Deposit Amount: 10,000</FormHelperText>
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
            </>
        )
    }
}
