import React, { Component } from 'react'
import Header from '../../Components/Header/Header'
import SVG from '../../static/img/blob.svg'
import MainImage from '../../static/img/main-image.svg'
import './Login.css'


export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        console.log(this.state.email)
        console.log(this.state.password)
        this.setState({
            email: '',
            password: ''
        })
    }


    render() {
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
                        <button type='submit' className='btn-hover color-5' onClick={this.handleChange}>
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
