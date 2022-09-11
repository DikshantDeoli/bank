import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import MHeader from '../../Components/Header/MangerHeader/MHeader'
import NewCustomer from '../../Components/NewCustomer/NewCustomer'
import SideBar from '../../Components/SideBar/SideBar'
import FundTransfer from '../../Components/FundTransfer/FundTransfer'
import ChangePassword from '../../Components/ChangePassword/ChangePassword'
import BalanceEnquiry from '../../Components/BalanceEnquiry/BalanceEnquiry'
import MiniStatement from '../../Components/MiniStatement/MiniStatement'
import NewAccount from '../../Components/NewAccount/NewAccount'
import EditAccount from '../../Components/EditAccount/EditAccount'
import EditCustomer from '../../Components/EditCustomer/EditCustomer'
import DeleteCustomer from '../../Components/DeleteCustomer/DeleteCustomer'
import DeleteAccount from '../../Components/DeleteAccount/DeleteAccount'
import Deposit from '../../Components/Deposit/Deposit'

import './DashBoard.css'
import CustomizedStatement from '../../Components/CustomizedStatement/CustomizedStatement'
import Withdraw from '../../Components/Withdraw/Withdraw'

export default class DashBoard extends Component {
    constructor() {
        super();
        const LoggedIn = localStorage.getItem("LoggedIn");
        const role = localStorage.getItem("role");

        this.state = {


            whichViewToShow: "",
            loader: false,
            LoggedIn,
            role
        };
        this.viewSetter = this.viewSetter.bind(this);
        this.viewGetter = this.viewGetter.bind(this);

        // this.pushdata = this.pushdata.bind(this);
    }
    viewSetter(viewObtained) {
        this.setState({ whichViewToShow: viewObtained });
    }


    viewGetter(viewObtained) {
        console.log(viewObtained);
        if (viewObtained === "") {
            return (
                <>
                    <h1>DashBoard </h1>
                </>
            );

        }
        else if (viewObtained === "New Customer") {
            return (
                <>
                    <NewCustomer />
                </>
            );
        }
        else if (viewObtained === "Delete Customer") {
            return (
                <>
                    <DeleteCustomer />
                </>
            );
        }
        else if (viewObtained === "Fund tranfer") {
            return (
                <>
                    <FundTransfer />
                </>
            );
        } else if (viewObtained === "Change password") {
            return (
                <>
                    <ChangePassword />
                </>
            );
        }
        else if (viewObtained === "Balance Enquiry") {
            return (
                <>
                    <BalanceEnquiry />
                </>
            );
        }
        else if (viewObtained === "Mini Statement") {
            return (
                <>
                    <MiniStatement />
                </>
            );
        }
        else if (viewObtained === "Customized Statement") {
            return (
                <>
                    <CustomizedStatement />
                </>
            );
        }
        else if (viewObtained === "New Account") {
            return (
                <>
                    <NewAccount />
                </>
            );
        }
        else if (viewObtained === "Edit Account") {
            return (
                <>
                    <EditAccount />
                </>
            );
        }
        else if (viewObtained === "Delete Account") {
            return (
                <>
                    <DeleteAccount />
                </>
            );
        }
        else if (viewObtained === "Edit Customer") {
            return (
                <>
                    <EditCustomer />
                </>
            );
        }
        else if (viewObtained === "Deposit") {
            return (
                <>
                    <Deposit />
                </>
            );
        }
        else if (viewObtained === "Withdrawal") {
            return (
                <>
                    <Withdraw />
                </>
            );
        }
    }



    render() {
        if (this.state.LoggedIn == null) {

            return <Navigate to="/login" replace={true} />
        }
        return (
            <>
                {
                    this.state.role === 'manager' ?
                        <div>
                            <MHeader />
                            <SideBar
                                viewSetter={this.viewSetter}
                                role={this.state.role}
                            />
                            <div className='mainContainer'>
                                {this.viewGetter(this.state.whichViewToShow)}
                            </div>
                        </div>
                        :
                        <div>
                            <Header />
                            <SideBar
                                viewSetter={this.viewSetter}
                                role={this.state.role}
                            />
                            <div className='mainContainer'>
                                {this.viewGetter(this.state.whichViewToShow)}
                            </div>
                        </div>
                }

            </>
        )
    }
}
