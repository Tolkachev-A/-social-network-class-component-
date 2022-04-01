import {usersApi} from "../api/api";
import {newObjectArrey} from "../Сommon/utilyte/newObjectArrey";

const FOLLOW = 'FOLLOW';
const ON_FOLLOW = 'ON_FOLLOW';
const SET_USERS = 'SET_USERS';
const TOTAL_COUNT = 'TOTAL_COUNT';
const CURRENT_PAGE = 'CURRENT_PAGE';
const TOGGEL_IS_LOADING = 'TOGGEL_IS_LOADING';
const TOGGEL_BTN_DISABLET = 'TOGGEL_BTN_DISABLET';


let initialUser = {
    users: [],
    totalCount: 0,
    pageSize: 6,
    currentPage: 1,
    isLoading: false,
    isBtnDisablet: []
}


const usersReduser = (state = initialUser, action) => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: newObjectArrey(state.users, action.userId, 'id', {followed: true})
            }
        case 'ON_FOLLOW':
            return {
                ...state,
                users: newObjectArrey(state.users, action.userId, 'id', {followed: false})
            }
        case 'SET_USERS' :
            return {
                ...state, users: action.users
            }
        case 'CURRENT_PAGE':
            return {
                ...state, currentPage: action.page
            }
        case 'TOTAL_COUNT':
            return {
                ...state, totalCount: action.num
            }
        case 'TOGGEL_IS_LOADING':
            return {
                ...state, isLoading: action.isLoading
            }
        case 'TOGGEL_BTN_DISABLET':
            return {
                ...state,
                isBtnDisablet: action.isLoading
                    ? [...state.isBtnDisablet, action.userId]
                    : state.isBtnDisablet.filter(id => id !== action.userId)
            }
        default:
            return state;

    }
}
export const usersFollow = (userId) => ({type: FOLLOW, userId})
export const usersOnfollow = (userId) => ({type: ON_FOLLOW, userId})
export const setIsUsers = (users) => ({type: SET_USERS, users})
export const currentNamberPage = (page) => ({type: CURRENT_PAGE, page})
export const totalUsersCount = (num) => ({type: TOTAL_COUNT, num})
export const toggeleUsersIsLoading = (isLoading) => ({type: TOGGEL_IS_LOADING, isLoading})
export const toggelUsersBtnDisablet = (isLoading, userId) => ({type: TOGGEL_BTN_DISABLET, isLoading, userId})

export default usersReduser;


export const setUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggeleUsersIsLoading(true));
    dispatch(currentNamberPage(currentPage));
    const data = await usersApi.getUsers(currentPage, pageSize)
    dispatch(toggeleUsersIsLoading(false));
    dispatch(totalUsersCount(data.totalCount));
    dispatch(setIsUsers(data.items))
}

const followOnFollow = async (userId, dispatch, usersFollowOnFollow, Api) => {
    dispatch(toggelUsersBtnDisablet(true, userId));
    let data = await Api(`${userId}`, {})
    if (data.resultCode === 0) {
        dispatch(usersFollowOnFollow(userId));
    }
    dispatch(toggelUsersBtnDisablet(false, userId));
}

export const follow = (userId) => async (dispatch) => {
    // followOnFollow(userId, dispatch, usersFollow, usersApi.follow)
    dispatch(toggelUsersBtnDisablet(true, userId));
    let data = await usersApi.follow(`${userId}`, {})
    if (data.resultCode === 0) {
        dispatch(usersFollow(userId));
    }
    dispatch(toggelUsersBtnDisablet(false, userId));
}


export const onFollow = (userId) => async (dispatch) => {
    followOnFollow(userId, dispatch, usersOnfollow, usersApi.onfollow)
}
