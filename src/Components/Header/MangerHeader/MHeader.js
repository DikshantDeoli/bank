import React, { Component } from 'react'
import Logo from '../../../static/img/xoriant.webp';
import SearchIcons from '../../../static/img/searchIcons.svg';
import Bell from '../../../static/img/bell.svg';
import Msg from '../../../static/img/message.svg';
import Pro from '../../../static/img/profile.svg';
import './MHeader.css';

export default class MHeader extends Component {
    render() {
        return (
            <>
                <div className='header-container-manger'>
                    <div className="logo">
                        <img src={Logo} alt='' />
                    </div>

                    <div className='navbar'>
                        <div className='search-bar'>
                            <div className='text'>
                                <input type='text' placeholder='search' className='search-input' />
                            </div>
                            <img src={SearchIcons} alt='' />
                        </div>
                        <div className='search-bar-menu'>
                            <div className='msg'>
                                <img src={Msg} alt='' />

                            </div>
                            <div className='bell'>
                                <img src={Bell} alt='' />
                            </div>
                            <div className='profile'>
                                <img src={Pro} alt='' />

                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}
