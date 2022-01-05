const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, How are you ?', likesCount: 18},
        {id: 2, message: "Good and You ?", likesCount: 31},
        {id: 3, message: "You are Best of the Best ?", likesCount: 1}
    ],
    newPostText: 'you can get this job'
};

const profileReducer =
    (state = initialState, action) => {
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: 5,
                    message: state.newPostText,
                    likesCount: 0
                };
                state.postsData.push(newPost);
                state.newPostText = '';
                return state;
            case UPDATE_NEW_POST_TEXT:
                state.newPostText = action.newText;
                return state;
            default:
                return state;
        }
    }

export const addPostActionCreator = () => ({type: ADD_POST});
export const UpdateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;