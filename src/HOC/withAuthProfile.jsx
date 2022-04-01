
import {connect} from "react-redux";
import { Navigate} from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        isAuth: state.login.isAuth
    }
}
let withAuthProfile = (Component) => {
    let RedirectComponent = (props) => {
         if(!props.isAuth){
             return <Navigate  to="/login" />
         }
        return <Component {...props} />
    }

   let RedirectComponentConnect = connect(mapStateToProps)(RedirectComponent);
    return RedirectComponentConnect
}
export default withAuthProfile;