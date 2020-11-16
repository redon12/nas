import {CombineReduccers} from 'react-redux';
import { combineReducers } from 'redux';
import { loggedInReducer, loggedOutReducer, registerLabReducer, registerReducer } from './signReducer';


const allReducer = combineReducers({
    
    loggedIn:loggedInReducer,
    loggeddOut: loggedOutReducer,
    register:registerReducer,
    
})

export default allReducer;