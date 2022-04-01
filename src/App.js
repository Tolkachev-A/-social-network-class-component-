import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import New from "./components/New/New";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import React, { Suspense, lazy } from 'react';
import NavbarContainer from "./components/Navbar/NavbarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {LoginContainer} from "./components/Login/Login";
import Loading from "./Сommon/Loading/Loading";
import {connect} from "react-redux";
import {appInitialization} from "./state/appReduser";
const DialogsContainer = lazy(() => import("./components/Dilalogs/DialogsContainer"));
const UsersContainer = lazy(() => import("./components/UsersContainer/UsersContainer"));



class App extends React.Component {
    componentDidMount() {
        this.props.appInitialization()
    }


    render() {
        // if (!this.props.initialization) {
        //     return <Loading/>
        // }

        return (<HashRouter >
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavbarContainer/>
                <div className="app-wrapper-content">
                    <Suspense fallback={<div>Загрузка...</div>}>
                    <Routes>
                            <Route path='profile' element={<ProfileContainer/>}/>
                            <Route path='profile/:userId' element={<ProfileContainer/>}/>
                            <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                            <Route path='/new' element={<New/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/login' element={<LoginContainer/>}/>
                    </Routes>
                    </Suspense>
                </div>
            </div>
        </HashRouter>);
    }
}

const mapStateToProps = (state) => {
    return {
        initialization: state.app.initialization
    }
}

export default connect(mapStateToProps, {appInitialization})(App);
