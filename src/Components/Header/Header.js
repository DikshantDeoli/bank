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

                        <div id='btnFeature'>

                            Feature

                        </div>

                        <div className='header-element' id='btnAbout'>
                            About
                        </div>
                        <div id='btnContact'>
                            Contact
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
