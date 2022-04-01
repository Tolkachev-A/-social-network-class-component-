import {Formik, Form, Field} from 'formik';
import {connect} from "react-redux";
import {authLoginUser} from "../../state/authReduser";
import {FormCreateInput} from "../../FormControl/FormControl";
import {validationSchemaLogin} from "../../FormControl/ValidationSchema";
import {Navigate} from "react-router-dom";
import style from "../../FormControl/FormControl.module.css"


const Login = (props) => {
    const handleSubmit = (data, {setStatus}) => {
        let {email, password, rememberMe} = data
        props.authLoginUser(email, password, rememberMe, setStatus)
    }
    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }
    return <div>
        <h1>Logins</h1>
        <LoginForm handleSubmit={handleSubmit}/>
    </div>

}

const LoginForm = (props) => {


    return <div>
        <Formik initialValues={{email: '', password: '', rememberMe: false}}
                onSubmit={props.handleSubmit}
                validationSchema={validationSchemaLogin}

        >
            {({values, handleSubmit, setStatus, errors, status}) => (

                <Form handleSubmit={setStatus}>
                    <div>
                        <Field type="email"
                               name="email"
                               placeholder='Email'
                               component={FormCreateInput}
                        />
                    </div>
                    <div>
                        <Field type="password"
                               name="password"
                               placeholder='Password'
                               component={FormCreateInput}
                        />
                    </div>
                    <div>
                        <Field name="rememberMe"
                               type={"checkbox"}
                               checked={values.rememberMe}/> Remember Me
                    </div>
                    <div>
                        <button name={"button"}
                                disabled={!(!errors.password && !errors.email)}
                                type={"submit"}>Login
                        </button>
                        {status && status.message && (
                            <div className={style.errors}>{status.message}</div>
                        )}
                    </div>
                </Form>
            )}

        </Formik>
    </div>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.login.isAuth
    }
}


export const LoginContainer = connect(mapStateToProps,
    {
        authLoginUser
    })(Login);