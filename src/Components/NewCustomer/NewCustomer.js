import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './NewCustomer.css'

export default class NewCustomer extends Component {
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

        const options = [

            {
                "id": "1",
                "name": "Mumbai",
                "state": "Maharashtra"
            },
            {
                "id": "2",
                "name": "Delhi",
                "state": "Delhi"
            },
            {
                "id": "3",
                "name": "Bengaluru",
                "state": "Karnataka"
            },
            {
                "id": "4",
                "name": "Ahmedabad",
                "state": "Gujarat"
            },
            {
                "id": "5",
                "name": "Hyderabad",
                "state": "Telangana"
            },
            {
                "id": "6",
                "name": "Chennai",
                "state": "Tamil Nadu"
            },
            {
                "id": "7",
                "name": "Kolkata",
                "state": "West Bengal"
            },
            {
                "id": "8",
                "name": "Pune",
                "state": "Maharashtra"
            },
            {
                "id": "9",
                "name": "Jaipur",
                "state": "Rajasthan"
            },
            {
                "id": "10",
                "name": "Surat",
                "state": "Gujarat"
            }
        ];

        return (
            <>
                <div className='basicDetailsContainer'>
                    <div className='heading-newCustomer'>
                        <h4 className='heading-newCustomerText'>
                            Basic Details
                        </h4>
                    </div>
                    <div className='input-newCustomer'>
                        {/* <div className='customerName'>
                            
                        </div> */}


                        <ul className='detailsList'>
                            <li className='customerName'>
                                <div className='leftpart'>
                                    <p className='customerNameText'>

                                        Customer Name:
                                    </p>
                                </div>
                                <div className='rightpart'>
                                    <input type='text' className='detailsListInput' required />
                                </div>
                            </li>
                            <li className='customerGender'>
                                <div className='leftpart'>

                                    <p className='customerGenderText'>
                                        Gender:
                                    </p>
                                </div>
                                <div className='rightpart'>
                                    <select onChange={this.handleChange} className="selectOptions">
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </li>
                            <li className='dateofbirth'>
                                <div className='leftpart'>
                                    <p className='customerDateOfBirth'>
                                        Date of Birth:
                                    </p></div>
                                <div className='rightpart'>
                                    <DatePicker
                                        className='datepicker'
                                        selected={this.state.startDate} onChange={
                                            (date) => this.setState({
                                                startDate: date
                                            })} /></div>
                            </li>
                            <li className='customerAddress'>
                                <div className='leftpart'>
                                    <p className='customerAddress'>
                                        Address:
                                    </p></div>
                                <div className='rightpart'>
                                    <input type='text' className='detailsListInput' required /></div>
                            </li>
                            <li className='customerCity'>
                                <div className='leftpart'>
                                    <p className='customerCityText'>
                                        City:
                                    </p></div>
                                <div className='rightpart'>
                                    <this.Dropdown
                                        className="selectOptions"
                                        options={options}
                                        onChange={this.handleChange}
                                    /></div>
                            </li>
                            <li className='customerState'>
                                <div className='leftpart'>
                                    <p className='customerStateText'>
                                        State:
                                    </p></div>
                                <div className='rightpart'>
                                    <this.Dropdown

                                        options={options}
                                        onChange={this.handleChange}
                                    /></div>
                            </li>
                            <li className='customerPIN'>
                                <div className='leftpart'>
                                    <p className='customerPINText'>
                                        PIN:
                                    </p></div>
                                <div className='rightpart'>
                                    <input
                                        className='detailsListInput'
                                        type="text"
                                        required
                                    /></div>
                            </li>
                            <li className='customerPhone'>
                                <div className='leftpart'>
                                    <p className='customerPhoneText'>
                                        Telephone Number:
                                    </p></div>
                                <div className='rightpart'>
                                    <input
                                        className='detailsListInput'
                                        type="text"
                                        required
                                    /></div>
                            </li>
                            <li className='customerEmailId'>
                                <div className='leftpart'>
                                    <p className='customerEmailIdText'>
                                        Email Id:
                                    </p>
                                </div>
                                <div className='rightpart'>
                                    <input
                                        className='detailsListInput'
                                        type="text"
                                        required
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </>
        )
    }
}
