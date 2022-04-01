import * as axios from "axios";

const instans = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'b68e1396-946f-405d-92ed-906f9f26a9d8'
    }

})

export const usersApi = {
    getUsers(currentPage, pageSize) {
        return instans.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => {
            return response.data
        })
    },


    follow(userId) {
        return instans.post(`follow/${userId}`).then((response) => {
            return response.data
        })
    },
    onfollow(userId) {
        return instans.delete(`follow/${userId}`).then((response) => {
            return response.data
        })
    }
}


export const profileApi = {
    getUsersProfile(userId) {
        return instans.get(`profile/${userId}`).then((response) => {
            return response.data
        })
    },

    getStatusUsersProfile(userId) {
        return instans.get(`profile/status/${userId}`).then((response) => {
            return response.data
        })
    },

    updateStatusUserProfile(status) {
        return instans.put('profile/status', {
            status: status
        })
    }
}

export const authApi = {
    authMe() {
        return instans.get('auth/me/').then((response) => {
            return response.data
        })
    },
    Login(email, password, rememberMe = false) {
        return instans.post('/auth/login', {email, password, rememberMe, captcha: false})
    },
    Loguot() {
        return instans.delete('/auth/login')
    }

}



