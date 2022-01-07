import {FriendsBlock} from "../FriendsBlock";
import {StoreContext} from "../../../StoreContext";

const FriendsBlockContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().sidebarPage;
                return <FriendsBlock sidebarPage={state}/>
            }
            }
        </StoreContext.Consumer>
    )
}

export {FriendsBlockContainer};