const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Gera'},
        {id: 2, name: 'Volt'},
        {id: 3, name: 'Ell'},
        {id: 4, name: 'Kit'},
        {id: 5, name: 'Fill'}
    ],
    messagesData: [
        {id: 1, message: 'Hi, Gera'},
        {id: 2, message: "What's up"},
        {id: 3, message: "Good, i crazy love strawberry"},
        {id: 4, message: "Yeah"}
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {id: 6, message: body}]
            };
        default:
            return state;
    }
    return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;