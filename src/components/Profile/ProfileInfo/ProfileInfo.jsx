import style from "./ProfileInfo.module.css";
import React from "react";
import Loading from "../../../Сommon/Loading/Loading";
import usersImg from "../../../img/user.png"
import ProfileStatus from "./ProfileStatus/ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Loading/>
    }
    return <div className={style.content}>
        <div className={style.img}>
        </div>
        <div>
            <div className={style.profilePfoto}>
                <img src={props.profile.photos.large
                    ? props.profile.photos.large
                    : usersImg}/>
            </div>
            <div className={style.name}>
                <span>{props.profile.fullName}</span>
            </div>
            <div>
                <ProfileStatus status={props.status}
                               updateStatusUserProfile={props.updateStatusUserProfile}/>
            </div>
            <div className={style.job}>
                {props.profile.lookingForAJob ? 'нужна работа ' : 'не нужна работа'}
            </div>
        </div>


    </div>
}

export default ProfileInfo;