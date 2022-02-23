import {AuthAPI} from "../../api/api";

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
                ...action.payload
            }

        default:
            return state;
    }
}

export const getAuthUserData = () => {
    return (dispatch) => {
        AuthAPI.authMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            });
    }
}
export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        AuthAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                }
            });
    }
}
export const logOut = () => {
    return (dispatch) => {
        AuthAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            });
    }
}

export const setAuthUserData = (UserId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {UserId, email, login, isAuth}
})
export default authReducer;