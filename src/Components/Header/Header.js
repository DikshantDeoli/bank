import React, { Component } from 'react';
import Logo from '../../static/img/xoriant.webp';
import './Header.css';


export default class Header extends Component {
    render() {
        return (
            <>
                <div className='header-container'>
                    <div className="logo">
                        <img src={Logo} alt='' />
                    </div>

                    <div className='center-header-element'>

                        <div>
                            Feature
                        </div>

                        <div className='header-element'>
                            About
                        </div>
                        <div>
                            Contact
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
