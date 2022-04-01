import {authApi} from "../api/api";
import {authLoginProfile} from "./authReduser";


const INITIALIZATION = 'INITIALIZATION';


let initialState = {
    initialization: false,
    isLoading: false,
    isAuth: false
}

const appReduser = (state = initialState, action) => {
    switch (action.type) {
        case  INITIALIZATION :
            return {
                ...state,
                initialization: action.initialization
            }
        default:
            return state;
    }
}

export const isAppInitialization = (initialization) => ({type: INITIALIZATION, initialization})
//export const isAuth = (isAuth) => ({type: IS_AUTH, isAuth})

export default appReduser;

export const appInitialization = () => {
    return (dispath) => {
        let promise = dispath(authLoginProfile());
        promise.then(() => {
            dispath(isAppInitialization(true))
        })
    }
}

