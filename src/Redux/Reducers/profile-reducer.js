import {instance, usersAPI} from "../../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, How are you ?', likesCount: 18},
        {id: 2, message: "Good and You ?", likesCount: 31},
        {id: 3, message: "You are Best of the Best ?", likesCount: 1}
    ],
    newPostText: 'you can get this job',
    profile: null
};

const profileReducer =
    (state = initialState, action) => {
        switch (action.type) {
            case ADD_POST: {
                let newPost = {
                    id: 5,
                    message: state.newPostText,
                    likesCount: 0
                };
                return {
                    ...state,
                    postsData: [...state.postsData, newPost],
                    newPostText: ''
                };
            }
            case
            UPDATE_NEW_POST_TEXT: {
                return {
                    ...state,
                    newPostText: action.newText
                };
            }
            case SET_USER_PROFILE: {
                return {...state, profile: action.profile}
            }
            default:
                return state;
        }
    }

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const UpdateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const userProfile = (userId) => {
    return (dispatch) => {
        usersAPI.userProfileApi(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}

export default profileReducer;