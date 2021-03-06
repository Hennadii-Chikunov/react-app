import {instance, usersAPI} from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}

export const auth = () => {
    return (dispatch) => {
        usersAPI.authMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    }
}

export const setAuthUserData = (UserId, email, login) => ({type: SET_USER_DATA, data: {UserId, email, login}})
export default authReducer;