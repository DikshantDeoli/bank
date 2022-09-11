import React, { Component } from 'react'
import HomeIcons from '../../static/img/homeIcons.svg'
import Ncs from '../../static/img/ncs.svg'
import Ecs from '../../static/img/ecs.svg'
import Dcs from '../../static/img/dcs.svg'
import Acs from '../../static/img/acs.svg'
import EAcs from '../../static/img/eacs.svg'
import Dacs from '../../static/img/dacs.svg'
import Dpcs from '../../static/img/dpcs.svg'
import Wcs from '../../static/img/wcs.svg'
import Ftcs from '../../static/img/ftcs.svg'
import Cpcs from '../../static/img/cpcs.svg'
import Becs from '../../static/img/becs.svg'
import Mscs from '../../static/img/mscs.svg'
import Cscs from '../../static/img/cscs.svg'
import './SideBar.css'

export default class SideBar extends Component {



    render() {
        return (
            <>
                <div className='sideBar scrollbar'>
                    <div className='dashboard_homebtn'>
                        <div className='homeBtnFrame'
                            onClick={
                                () => {
                                    this.props.viewSetter("");
                                }
                            }
                        >
                            <img src={HomeIcons} alt='HomeIcon' />
                            <div className='DashboardText'>
                                DashBoard
                            </div>
                        </div>
                    </div>
                    <div className='main-feature'>
                        <div className='n-cs'>
                            <div
                                className='frame'
                                onClick={
                                    () => {
                                        this.props.viewSetter("New Customer");
                                    }
                                }>
                                <img src={Ncs} alt='' />
                                <div className='frameText'>
                                    New Customer
                                </div>
                            </div>
                        </div>
                        <div className='e-cs '>
                            <div className='frame'
                                onClick={
                                    () => {
                                        this.props.viewSetter("Edit Customer");
                                    }
                                }
                            >
                                <img src={Ecs} alt='' />
                                <div className='frameText'>
                                    Edit Customer
                                </div>
                            </div>
                        </div>
                        <div className='d-cs '>
                            <div className='frame'
                                onClick={
                                    () => {
                                        this.props.viewSetter("Delete Customer");
                                    }
                                }
                            >
                                <img src={Dcs} alt='' />
                                <div className='frameText'>
                                    Delete Customer
                                </div>
                            </div>
                        </div>
                        <div className='na-cs '>
                            <div className='frame'
                                onClick={
                                    () => {
                                        this.props.viewSetter("New Account");
                                    }
                                }
                            >
                                <img src={Acs} alt='' />
                                <div className='frameText'>
                                    New Account
                                </div>
                            </div>
                        </div>
                        <div className='ea-cs '>
                            <div className='frame'
                                onClick={
                                    () => {
                                        this.props.viewSetter("Edit Account");
                                    }
                                }
                            >
                                <img src={EAcs} alt='' />
                                <div className='frameText'>
                                    Edit Account
                                </div>
                            </div>
                        </div>
                        <div className='da-cs '>
                            <div className='frame'
                                onClick={
                                    () => {
                                        this.props.viewSetter("Delete Account");
                                    }
                                }
                            >
                                <img src={Dacs} alt='' />
                                <div className='frameText'>
                                    Delete Account
                                </div>
                            </div>
                        </div>
                        <div className='dp-cs '>
                            <div className='frame'
                                onClick={
                                    () => {
                                        this.props.viewSetter("Deposit");
                                    }
                                }
                            >
                                <img src={Dpcs} alt='' />
                                <div className='frameText'>
                                    Deposit
                                </div>
                            </div>
                        </div>
                        <div className='w-cs '>
                            <div className='frame'
                                onClick={
                                    () => {
                                        this.props.viewSetter("Withdrawal");
                                    }
                                }
                            >
                                <img src={Wcs} alt='' />
                                <div className='frameText'>
                                    Withdraw
                                </div>
                            </div>
                        </div>
                        <div className='ft-cs '>
                            <div className='frame'
                                onClick={
                                    () => {
                                        this.props.viewSetter("Fund tranfer");
                                    }
                                }
                            >
                                <img src={Ftcs} alt='' />
                                <div className='frameText'>
                                    Fund tranfer
                                </div>
                            </div>
                        </div>
                        <div className='cp-cs '>
                            <div className='frame'
                                onClick={
                                    () => {
                                        this.props.viewSetter("Change password");
                                    }
                                }
                            >
                                <img src={Cpcs} alt='' />
                                <div className='frameText'>
                                    Change password
                                </div>
                            </div>
                        </div>
                        <div className='be-cs '>
                            <div className='frame'
                                onClick={
                                    () => {
                                        this.props.viewSetter("Balance Enquiry");
                                    }
                                }
                            >
                                <img src={Becs} alt='' />
                                <div className='frameText'>
                                    Balance Enquiry
                                </div>
                            </div>
                        </div>
                        <div className='ms-cs '>
                            <div className='frame'
                                onClick={
                                    () => {
                                        this.props.viewSetter("Mini Statement");
                                    }
                                }
                            >
                                <img src={Mscs} alt='' />
                                <div className='frameText'>
                                    Mini Statement
                                </div>
                            </div>
                        </div>
                        <div className='cq-cs '>
                            <div className='frame'
                                onClick={
                                    () => {
                                        this.props.viewSetter("Customized Statement");
                                    }
                                }
                            >
                                <img src={Cscs} alt='' />
                                <div className='frameText'>
                                    Customized Statement
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
