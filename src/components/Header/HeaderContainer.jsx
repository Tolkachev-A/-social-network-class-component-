import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authLoginProfile, authLoguotUser, isLoading, setAuthSetUser} from "../../state/authReduser";




class HeaderComponent extends React.Component {



    render() {
        return <>
            <Header {...this.props}/>
        </>

    }

}

const mapStateToProps = (state) => {
    return {
        isAuthUserDate: state.login,

    }
}

const HeaderContainer = connect(mapStateToProps, {setAuthSetUser,isLoading,
    authLoginProfile,authLoguotUser })(HeaderComponent);
export default HeaderContainer