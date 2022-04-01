import {connect} from "react-redux";
import Navbar from "./Navbar";


const mapStateToProps = (state) => {
    return {
        frendsName: state.sitebar.sitebar.frendsName
    }
}
const mapDispatchToProps = () => {
    return {}
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)
export default NavbarContainer;