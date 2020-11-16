import { LOGIN_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "../constants";
import Cookie from "js-cookie";
export const logOutAction = (boo) => async (dispatch) =>{
    await Cookie.remove('userInfo')
    dispatch({type:LOGOUT_REQUEST, payload:boo})
    try{
        dispatch({type:LOGOUT_SUCCESS, payload:boo})
    }
    catch(error){
        dispatch({type:LOGOUT_SUCCESS, payload:boo})
    }
    
    
}