import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import myDialogReduser from './myDialogReduser';
import myPostReduser from './myPostReduser';
import sitebarReduser from './sitebarReduser';
import usersReduser from './usersReduser';
import authReduser from "./authReduser";
import thunk from "redux-thunk";
import appReduser from "./appReduser";


let redusers = combineReducers({
    dialogsPage: myDialogReduser,
    myPostPage:myPostReduser,
    sitebar : sitebarReduser,
    users: usersReduser,
    login: authReduser,
    app: appReduser
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers,  composeEnhancers(applyMiddleware(thunk)));
// let store = createStore(redusers,applyMiddleware(thunk));

window.store=store;

export default store;