import React, { Component } from 'react';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import { FormGroup, Input } from '@mui/material';
import { FormHelperText } from '@mui/material';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './CustomizedStatement.css'

export default class CustomizedStatement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: new Date(),

        }

        this.handleChange = this.handleChange.bind(this);
        this.Dropdown = this.Dropdown.bind(this);
    }

    handleChange = (event) => {

    };



    Dropdown = ({ options, onChange }) => {
        return (
            <label>

                <select onChange={onChange}
                    className="selectOptions"
                >
                    {options.map((option) => (
                        <option >{option.name}</option>
                    ))}
                </select>
            </label>
        );
    }
    render() {
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
                        width: '250px',
                        maxWidth: 500,
                        marginBottom: '10px',
                        marginTop: '5px'
                    }}>
                        <Typography variant="h5" gutterBottom>
                            Customized Statement
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
                                <InputLabel htmlFor="my-input">Account No.</InputLabel>
                                <Input id="my-input" type='number' aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">Provide Account Number: XXXX-XXX-1234 </FormHelperText>
                            </FormControl>

                            <FormControl sx={{
                                marginBottom: "0.8rem",
                            }}>
                                <Box
                                    sx={
                                        {
                                            display: 'flex',
                                            flexDirection: 'row'
                                        }
                                    }
                                >

                                    <Box>

                                        <div className='leftpart'>
                                            <p className='customerDateOfBirth'>
                                                From Date:
                                            </p></div>
                                        <div className='rightpart'>
                                            <DatePicker
                                                className='datepicker'
                                                selected={this.state.startDate} onChange={
                                                    (date) => this.setState({
                                                        startDate: date
                                                    })} /></div>
                                    </Box>
                                    <Box sx={
                                        {
                                            width: '100px'
                                        }
                                    }
                                    >
                                        <div className='leftpart'>
                                            <p className='customerDateOfBirth'>
                                                To Date:
                                            </p></div>
                                        <div className='rightpart'>
                                            <DatePicker
                                                className='datepicker'
                                                selected={this.state.startDate} onChange={
                                                    (date) => this.setState({
                                                        startDate: date
                                                    })} /></div>
                                    </Box>
                                </Box>
                            </FormControl>
                            <FormControl>


                            </FormControl>
                            <FormControl sx={{

                                marginBottom: "0.8rem"

                            }}>
                                <InputLabel htmlFor="my-input">Amount Lower Limit</InputLabel>
                                <Input id="my-input" type='number' aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">Provide Account Limit: 10,000 </FormHelperText>
                            </FormControl>
                            <FormControl sx={{

                                marginBottom: "0.8rem"

                            }}>
                                <InputLabel htmlFor="my-input">Number Of Transaction</InputLabel>
                                <Input id="my-input" type='number' aria-describedby="my-helper-text" />
                                <FormHelperText id="my-helper-text">Provide Number Of Transaction: 20 </FormHelperText>
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
