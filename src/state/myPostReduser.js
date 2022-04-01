import {profileApi} from "../api/api";


const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_USERS_STATUS = 'SET_USERS_STATUS';
const CRAETE_POST = 'CRAETE_POST';

let defaultState = {
    postData: [
        {id: 1, massenges: "It first post ", like: "   15"},
        {id: 2, massenges: "It  pst ", like: "   9"},
        {id: 3, massenges: "It  post ", like: "   8"},
        {id: 4, massenges: "It  post ", like: "   12"}
    ],
    profile: null,
    status : ''
}

const myPostReduser = (state = defaultState, action) => {
    switch (action.type) {
        case  "CRAETE_POST":
            let objPostData = {
                ib: 5,
                massenges: action.text,
                like: 0
            };
            return {
                ...state,
                postData: [...state.postData, objPostData],
            }
        case 'SET_USERS_PROFILE' :
            return {
                ...state, profile: action.profile
            }
        case 'SET_USERS_STATUS' :
            return {
                ...state, status: action.status
            }
        default:
            return state;

    }
}

export const craetePost = (text) => ({type: CRAETE_POST, text })
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile})
export const setUsersStatus = (status) => ({type: SET_USERS_STATUS, status})
//export const setUsersStatus = (status) => ({type: UPDATE_USERS_STATUS, status})
export default myPostReduser;

export const getUsersProfile = (userId) => async (dispatch) => {
        const data = await profileApi.getUsersProfile(userId)
            dispatch(setUsersProfile(data))
    }

export const getStatusUsersProfile = (userId) => async (dispatch) => {
        const data = await profileApi.getStatusUsersProfile(userId)
                dispatch(setUsersStatus(data))
}

export const updateStatusUserProfile = (status) => async(dispatch) => {
    const response = await profileApi.updateStatusUserProfile(status)
            if(response.data.resultCode === 0){
                dispatch(setUsersStatus(status))
            }
}

export const setTextMyPost = (text) => (dispatch) => {
            dispatch(craetePost(text))
    }
