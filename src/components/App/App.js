import React from 'react';
import "./App.scss";
import {Sidebar} from "../Sidebar";
import {Footer} from "../Footer";
import DialogsContainer from "../Dialogs/DialogsContainer";
import {
    Route
} from "react-router-dom";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from './../Profile/ProfileContainer/ProfileContainer';
import HeaderContainer from "./../Header/HeaderContainer";
import LoginContainer from "../LoginContainer/LoginContainer";
import {connect} from "react-redux";
import {initializeApp} from "../../Redux/Reducers/app-reducer";
import {Preloader} from "../common/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="wrapper">
                <HeaderContainer/>
                <Sidebar/>
                <div className='wrapper__content'>
                    <Route exact path="/profile/:userId?" component={ProfileContainer}/>
                    <Route exact path="/dialogs" component={DialogsContainer}/>
                    <Route exact path='/users' component={UsersContainer}/>
                    <Route exact path='/login' component={LoginContainer}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default connect(mapStateToProps, {initializeApp})(App);
