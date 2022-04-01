import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Sitebar from "./Sitebar/Sitebar";


const Navbar = (props) => {
    const sitebarname = props.frendsName.map( f => <Sitebar name={f.frendsName} /> )
    return (
        <nav className={s.nav}>
            <ul>
                <li className={s.link}>
                    <NavLink to="/profile"
                             className={navData => navData.isActive ? s.active : s.link}>Profile</NavLink>
                </li>
                <li className={s.link}>
                    <NavLink to="/dialogs"
                             className={navData => navData.isActive ? s.active : s.link}>Messanges</NavLink>
                </li>
                <li className={s.link}>
                    <NavLink to="/new"
                             className={navData => navData.isActive ? s.active : s.link}>News</NavLink>
                </li>
                <li className={s.link}>
                    <NavLink to="/music"
                             className={navData => navData.isActive ? s.active : s.link}>Music</NavLink>
                </li>
                <li className={s.link}>
                    <NavLink to="/settings"
                             className={navData => navData.isActive ? s.active : s.link}>Settings</NavLink>
                </li><li className={s.link}>
                    <NavLink to="/users"
                             className={navData => navData.isActive ? s.active : s.link}>Users</NavLink>
                </li>
            </ul>
            <h3>Frends</h3>
            <div className={s.frends}>

                {sitebarname}
            </div>

        </nav>


    )
}
export default Navbar;