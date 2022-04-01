import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const NameDialogs = (props) => {
    return <li className={s.dialogItem}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </li>
}



export default NameDialogs;