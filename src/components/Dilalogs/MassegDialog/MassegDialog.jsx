import s from "./../Dialogs.module.css"


const MassegDialog = (props) => {
    return (
        <div className={s.masseg}>
            {props.masseg}
        </div>
    )
}



export default MassegDialog;