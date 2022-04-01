import React, {useEffect, useState} from "react";

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    const notActiveEgitMode = (e) => {
        props.updateStatusUserProfile(e.currentTarget.value)
        setEditMode(false)
    }
    const activeEgitMode = () => {
        setEditMode(true)
    }
    const changesStatus = (e) => {
        setStatus(e.currentTarget.value)
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return <div>
        <div>
            {editMode ? <input autoFocus={true} onBlur={notActiveEgitMode}
                               text={'text'} value={status}
                               onChange={changesStatus}/>
                : <span onDoubleClick={activeEgitMode}> {props.status || "нет статуса"} </span>}

        </div>
    </div>

}
export default ProfileStatus