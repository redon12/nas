import {CombineReduccers} from 'react-redux';
import { combineReducers } from 'redux';
import { signReducer, loggedReducer, loggedOutReducer, registerReducer } from './signReducer';


const allReducer = combineReducers({
    sign : signReducer,
    loggedIn:loggedReducer,
    loggeddOut: loggedOutReducer,
    register:registerReducer
})

export default allReducer;