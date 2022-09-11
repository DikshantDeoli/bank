import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
// import { Redirect } from "react-router-dom";
import axios from 'axios';
import Header from '../../Components/Header/Header'
import SVG from '../../static/img/blob.svg'
import MainImage from '../../static/img/main-image.svg'
import './Login.css'


export default class Login extends Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("email");

        let LoggedIn = true;
        if (token == null) {
            LoggedIn = false;
        }

        console.log(LoggedIn)
        this.state = {
            user: [],
            email: '',
            password: '',
            LoggedIn
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        axios
            .get('http://localhost:8080/user')
            .then(res => {
                let user = res.data;
                this.setState({
                    user: user
                })
            })
            .catch((err) => {
                console.log(err);
            });
    }




    handleSubmit = () => {
        const checkArr = this.state.user;
        let restaurant = checkArr.filter(element => {
            return element.email === this.state.email && element.password === this.state.password;
        });

        // console.log(typeof restaurant)
        if (Object.keys(restaurant).length === 0) {
            console.log(restaurant)

        } else {
            console.log('logined in')
            localStorage.setItem("name", restaurant[0].name)
            localStorage.setItem("role", restaurant[0].role)
            localStorage.setItem("email", restaurant[0].email)
            localStorage.setItem("LoggedIn", true)
            this.setState({
                LoggedIn: true
            })
        }


        this.handleChange();

    }






    handleChange = () => {

        this.setState({
            email: '',
            password: ''
        })

    }


    render() {
        if (this.state.LoggedIn) {

            return <Navigate to="/dashboard" replace={true} />
        }
        return (
            <div className='container'>
                <Header />
                <img src={SVG} alt='' id='SVGimg' />
                <img src={MainImage} alt='' id='MainImage' />
                <div className='rectangle'>
                    <div className='title-Header'>
                        <div className='top-header'>
                            <p className='titleValue'>
                                Welcome To
                                <span className='secondTitleValue'>

                                    ксарыянт
                                </span>
                            </p>
                        </div>
                        <div className='lower-header'>
                            <p className='lowerTitleValue'>
                                Log in to access your account
                            </p>
                        </div>
                    </div>
                </div>

                <div className='sign-up'>
                    <div className='text-input-1'>
                        <div className='text-input'>
                            <div className='text-block'>
                                <div>
                                    <input
                                        type="email"
                                        name='email'
                                        placeholder='Email'
                                        className='emailInput'
                                        value={this.state.email}
                                        required
                                        onChange={
                                            (e) => {
                                                this.setState({
                                                    email: e.target.value
                                                })

                                            }
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='text-input'>
                            <div className='text-block'>
                                <div>
                                    <input
                                        type="password"
                                        name='password'
                                        placeholder='Password'
                                        className='passwordInput'
                                        value={this.state.password}
                                        required
                                        onChange={
                                            (e) => {
                                                this.setState({
                                                    password: e.target.value
                                                })
                                            }
                                        } />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='btnLogin'>
                        <button type='submit' className='btn-hover color-5' onClick={this.handleSubmit}>
                            Login
                        </button>
                    </div>
                    <div className='cannotLogin'>
                        <p>
                            Can't Login?
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
