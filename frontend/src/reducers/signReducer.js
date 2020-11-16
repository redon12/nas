import { SIGNED_OUT, SIGNED_IN, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_REQUEST,REGISTER_REQUEST,REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_LAB_REQUEST,
    REGISTER_LAB_SUCCESS,
    REGISTER_LAB_FAIL} from "../constants";



export const loggedInReducer = (state={}, action) =>{
    switch(action.type){
        case LOGIN_REQUEST:
            return {loading:true}

        case LOGIN_SUCCESS:
            return {loading:false, userInfo:action.payload}
        case LOGIN_FAIL:
            console.log(action.payload)
            return {loading:false, error:action.payload}
        default:
            return state
    }
}

export const loggedOutReducer = (state=false, action)=>{
    switch(action.type){
        case LOGOUT_REQUEST:
            
            return {load:!state}
        case LOGOUT_SUCCESS:
            return {load:action.payload}
        default:
            return state
    }
}

export const registerReducer = (state={}, action)=>{
    switch(action.type){
        case REGISTER_REQUEST:
            return {loading:true}
        case REGISTER_SUCCESS:
            return {loading:false, regInfo:action.payload}
        case REGISTER_FAIL:
            return {loading:false, error:action.payload}
        default:return state
    }
}
