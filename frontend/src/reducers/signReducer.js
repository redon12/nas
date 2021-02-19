import { SIGNED_OUT, SIGNED_IN, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_REQUEST,REGISTER_REQUEST,REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_LAB_REQUEST,
    REGISTER_LAB_SUCCESS,
    REGISTER_LAB_FAIL,
    POST_REQUEST,
    POST_SUCCESS,
    POST_FAIL,
    CONTEST_REGISTER_REQUEST,
    CONTEST_REGISTER_SUCCESS,
    CONTEST_REGISTER_FAIL,
    DISPLAY_CONTEST_REGISTER_REQUEST,
    DISPLAY_CONTEST_REGISTER_SUCCESS,
    DISPLAY_CONTEST_REGISTER_FAIL,
    CONTY_REGISTER_REQUEST,
    CONTY_REGISTER_SUCCESS,
    CONTY_REGISTER_FAIL,
    SET_PRICE_REQUEST,
    SET_PRICE_SUCCESS,
    SET_PRICE_FAIL} from "../constants";



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

export const submitPostReducer = (state={}, action)=>{
    switch(action.type){
        case POST_REQUEST:
            return {loading:true}
        case POST_SUCCESS:
            return {loading:false, postInfo:action.payload}
        case POST_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}

export const regContestReducer = (state={}, action)=>{
    switch(action.type){
        case CONTEST_REGISTER_REQUEST:
            return {loading:true}
        case CONTEST_REGISTER_SUCCESS:
            return {loading:false, regInfo:action.payload}
        case CONTEST_REGISTER_FAIL:
            return {loading:false, error:action.payload}
        default:return state
    }
}

export const displayContestReducer = (state={}, action)=>{
    switch(action.type){
        case DISPLAY_CONTEST_REGISTER_REQUEST:
            return {loading:true}
        case DISPLAY_CONTEST_REGISTER_SUCCESS:
            return {loading:false, displayInfo:action.payload}
        case DISPLAY_CONTEST_REGISTER_FAIL:
            return {loading:false, error:action.payload}
        default:return state
    }
}

export const contyRegReducer = (state={}, action)=>{
    switch(action.type){
        case CONTY_REGISTER_REQUEST:
            return {loading:true}
        case CONTY_REGISTER_SUCCESS:
            return {loading:false, contyInfo:action.payload}
        case CONTY_REGISTER_FAIL:
            return {loading:false, error:action.payload}
        default:return state
    }
}

export const priceReducer = (state={}, action)=>{
    switch(action.type){
        case SET_PRICE_REQUEST:
            return {loading:true}
        case SET_PRICE_SUCCESS:
            return {loading:false, priceInfo:action.payload}
        case SET_PRICE_FAIL:
            return {loading:false, error:action.payload}
        default:return state
    }
}
