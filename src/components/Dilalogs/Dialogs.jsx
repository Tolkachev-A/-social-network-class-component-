import s from "./Dialogs.module.css"
import React from "react";
import NameDialogs from "./NameDialogs/NameDialogs";
import MassegDialog from "./MassegDialog/MassegDialog";
import {Formik, Form, Field} from "formik";
import { FormCreateTexterare} from "../../FormControl/FormControl";
import {validationSchema} from "../../FormControl/ValidationSchema";


const Dialogs = (props) => {
    let nameDataElements = props.nameData.map(d => <NameDialogs name={d.name} id={d.id}/>)
    let massegDataElements = props.massegData.map(m => <MassegDialog masseg={m.masseg} id={m.id}/>)

    let onSubmitDialogs = (data) => {
        props.createDialogReduser(data.text)

    }


    return (
        <div>
            <div className={s.dialogs}>
                <ul className={s.dialog}>
                    {nameDataElements}
                </ul>
                <div className={s.masseges}>
                    {massegDataElements}
                    <FormDialogs onSubmitDialogs={onSubmitDialogs}/>
                </div>
            </div>
        </div>
    )
}

const FormDialogs = (props) => {
    return <div>
        <Formik onSubmit={props.onSubmitDialogs}
                initialValues={{text: ''}}
                validationSchema={validationSchema}
        >
            {() => (
                <Form>
                    <Field name="text"
                           component={FormCreateTexterare}
                    />
                    <div>
                        <button type="submit"> ADD</button>
                    </div>
                </Form>
            )}

        </Formik>

    </div>
}

export default Dialogs;