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
                {id: 3, message: "Good, i crazy love strawberry"}
            ]
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
    }
}

export {store};
window.store = store;
