import style from './Users.module.css'
import React from 'react'
import usersImg from '../../../img/user.png'
import {NavLink} from "react-router-dom";


let User = ({u, ...props}) => {

    return <div>
        <div className={style.userBlock}>
            <div className={style.fotoBlock}>
                <div className={style.foto}>
                    <NavLink to={`/profile/${u.id}`}>
                        <img src={u.photos.small ? u.photos.small : usersImg} alt=''/>
                    </NavLink>

                </div>
                <div className={style.buttonBlock}>
                    {u.followed ? <button disabled={props.isBtnDisablet.some(id => id === u.id)}
                                          onClick={() => {
                                              props.onFollow(u.id)
                                          }}>follow</button>
                        : <button disabled={props.isBtnDisablet.some(id => id === u.id)}
                                  onClick={() => {
                                      props.follow(u.id)
                                  }}>onfollow</button>}

                </div>
            </div>
            <div className={style.userInfo}>
                <div className={style.name}>
                    {u.name}
                </div>
                <div className={style.status}>
                    {u.status}
                </div>
                <div className={style.country}>
                    {"u.country"},
                </div>
                <div className={style.city}>
                    {"u.city"}
                </div>
            </div>
        </div>

    </div>

}

export default User;