import s from "./MyPost.module.css"
import React from "react";
import {Form, Formik, Field} from "formik";
import {FormCreateTexterare} from "../../../FormControl/FormControl";
import {validationSchema} from "../../../FormControl/ValidationSchema";


const MyPost = (props) => {

    return <div>
        <div className={s.profileBlock}><h3>My post</h3>
            <FormPost {...props}/>

        </div>
    </div>

}

const FormPost = (props) => {
    return <div>
        <Formik initialValues={{text: ''}}
                onSubmit={(data) => {
                    props.setTextMyPost(data.text)
                }}
                validationSchema={validationSchema}>
            {() => (
                <Form>
                    <Field name="text"
                           component={FormCreateTexterare}/>
                    <div>
                        <button type="submit">ADD</button>
                    </div>
                </Form>
            )}

        </Formik>
    </div>

}

export default MyPost;