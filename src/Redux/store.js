// CONST НУЖНЫ ЧТОБЫ НЕ ИСПОЛЬЗОВАТЬ СТРОКИ, УМЕНШИТЬ ВЕРОЯТНОСТЬ ОШИБИТСЯ
import profileReducer from "./Reducers/profile-reducer";
import dialogsReducer from "./Reducers/dialogs-reducer";
import sidebarReducer from "./Reducers/sidebar-reducer";

let store = {  // store - OOP
    // все что с нижним подчеркиванием это приватные методы
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, How are you ?', likesCount: 18},
                {id: 2, message: "Good and You ?", likesCount: 31},
                {id: 3, message: "You are Best of the Best ?", likesCount: 1}
            ],
            newPostText: 'you can get this job'
        },
        dialogsPage: {
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
                {id: 4, message: "Yeah"},
                {id: 5, message: "Its Perfect"},

            ],
            newMessageBody: ''
        },
        sidebarPage: {
            sideNavData: [
                {id: 1, nlink: 'Profile'},
                {id: 2, nlink: 'Dialogs'},
                {id: 3, nlink: 'Catalog'},
                {id: 4, nlink: 'Settings'}
            ],
            sideFriendsData: [
                {id: 1, name: 'Gera'},
                {id: 2, name: 'Volt'},
                {id: 3, name: 'Ell'}
            ]
        }
    }, // Store это обьект'
    _callSubscriber() {
        console.log('state changed');
    }, //===========  МЕТОДЫ ниже ======// Метод это функция которая пренадлежит обьекту

    getState() {
        return this._state; // к свойству обращаться нужно через this.
    },
    subscribe(observer) {
        this._callSubscriber = observer; // паттерн Observer  работает по принципу слушателя AddEventListener
    },
    // action это обьект , у него должен быть обязательно type: 'ADD-POST'
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

        this._callSubscriber(this._state) // отвечает за перериросвку всей страницы
    }
}

export {store};
window.store = store;
