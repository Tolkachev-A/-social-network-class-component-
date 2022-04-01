import {authApi} from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA';
const IS_LOADING = 'IS_LOADING'
//const IS_AUTH = 'IS_AUTH'

let initialState = {
    userId: null,
    login: null,
    email: null,
    isLoading: false,
    isAuth: false
}

const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case  'SET_USER_DATA' :
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth
            }
        case 'IS_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }
        // case 'IS_AUTH':
        //     return {
        //         ...state,
        //         isAuth: action.isAuth
        //     }

        default:
            return state;
    }
}

export const setAuthSetUser = (userId, login, email,isAuth) => ({type: SET_USER_DATA, data: {userId, login, email},isAuth})
export const isLoading = (isLoading) => ({type: IS_LOADING, isLoading})


export default authReduser;

export const authLoginProfile = () => (dispath) => {
    return authApi.authMe()
            .then((data) => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispath(setAuthSetUser(id, login, email,true));
                }
            })
    }


export const authLoginUser = (email, password, rememberMe, setStatus) => {
    return (dispath) => {
        authApi.Login(email, password, rememberMe).then((data) => {
            if (data.data.resultCode === 0){
                dispath(authLoginProfile())
            }
            else if (data.data.resultCode !== 0){
                setStatus({message: data.data.messages[0]})
            }
        })
    }
}
export const authLoguotUser = () => async (dispath) => {debugger

        await authApi.Loguot()
            dispath(setAuthSetUser(null, null, null,false))


}