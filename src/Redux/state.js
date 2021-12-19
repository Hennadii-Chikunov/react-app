// данные с сервера
let state = {
    profilePage: {
        postsData: [
            {id:1, message: 'Hi, How are you ?', likesCount: 18},
            {id:2, message: "Good and You ?", likesCount: 31},
            {id:3, message: "You are Best of the Best ?", likesCount: 1}
        ]
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
}
export { state };