let initialState = {
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
};

const sidebarReducer = (state = initialState, action) => {

    return state;
}
export default sidebarReducer;