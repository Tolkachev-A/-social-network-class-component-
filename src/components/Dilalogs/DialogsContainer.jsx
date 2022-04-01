
import React from "react";
import Dialogs from "./Dialogs";
import {createDialogReduser} from "../../state/myDialogReduser";
import {connect} from "react-redux";
import withAuthProfile from "../../HOC/withAuthProfile";
import {compose} from "redux";





 const mapStateToProps = (state) => {debugger
    return{
        nameData:  state.dialogsPage.nameData,
        massegData: state.dialogsPage.massegData,
    }
 }

export default compose(
    connect(mapStateToProps, {createDialogReduser}),
    withAuthProfile,
)(Dialogs);