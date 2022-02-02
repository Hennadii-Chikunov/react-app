import * as axios from "axios";
import {userProfile} from "../Redux/Reducers/profile-reducer";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "14c8cc8b-0e0c-4aae-bb08-b45baf1990e2"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    authMe() {
        return instance.get(`auth/me`)
    },
    userProfileApi(userId) {
        return instance.get(`profile/${userId}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
}