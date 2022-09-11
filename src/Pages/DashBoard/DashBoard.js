import React, { Component } from 'react'
// import Header from '../../Components/Header/Header'
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
        this.state = {
            whichViewToShow: "",
            loader: false
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
        return (
            <>
                <MHeader />
                <SideBar
                    viewSetter={this.viewSetter}
                />
                <div className='mainContainer'>
                    {this.viewGetter(this.state.whichViewToShow)}
                </div>
            </>
        )
    }
}
