let store = {  // store - OOP
    _state: {
        profilePage: {
            postsData: [
                {id:1, message: 'Hi, How are you ?', likesCount: 18},
                {id:2, message: "Good and You ?", likesCount: 31},
                {id:3, message: "You are Best of the Best ?", likesCount: 1}
            ],
            newPostText: 'you can get this job'
        },
        dialogsPage: {
            dialogsData: [
                {id:1, name: 'Gera'},
                {id:2, name: 'Volt'},
                {id:3, name: 'Ell'},
                {id:4, name: 'Kit'},
                {id:5, name: 'Fill'}
            ],
            messagesData: [
                {id:1, message: 'Hi, Gera'},
                {id:2, message: "What's up"},
                {id:3, message: "Good, i crazy love strawberry"}
            ]
        },
        sidebarPage: {
            sideNavData: [
                {id:1, nlink: 'Profile'},
                {id:2, nlink: 'Dialogs'},
                {id:3, nlink: 'Catalog'},
                {id:4, nlink: 'Settings'}
            ],
            sideFriendsData: [
                {id:1, name: 'Gera'},
                {id:2, name: 'Volt'},
                {id:3, name: 'Ell'}
            ]
        }
    }, // Store это обьект
    getState() {
      return this._state; // к свойству обращаться нужно через this.
    },
    //===========  МЕТОДЫ ниже ======// Метод это функция которая пренадлежит обьекту
    _callSubscriber()  {
        console.log('state changed');
    },
    addPost()  {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText)  {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer; // паттерн Observer  работает по принципу слушателя AddEventListener
    },
}
export { store };
window.store = store;
