import style from "./Header.module.css";
import {NavLink} from "react-router-dom";
import Loading from "../../Сommon/Loading/Loading";
import React from "react";
import {authLoguotUser} from "../../state/authReduser";

const Header = (props) => {
    return <header className={style.header}>
        <img alt='d'
             scr='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/1024px-EBay_logo.svg.png://v.od.ua/uploads/92/logo.png'>
        </img>
        <div className={style.name_login}>
            {props.isAuthUserDate.isLoading ? <Loading/>
                : <> {props.isAuthUserDate.login
                    ? <NavLink to={`/profile/${props.isAuthUserDate.userId}`}>
                         {props.isAuthUserDate.login} <button onClick={props.authLoguotUser}>Log uot</button>
                      </NavLink>
                    : <NavLink to={'/login'}><>Login</> </NavLink>}

                </>}
        </div>
    </header>
}
export default Header;