import { LOGOUT_REQUEST } from "../constants";
import Cookie from "js-cookie";
export const logOutAction = () => async (dispatch) =>{
    await Cookie.remove('userInfo')
    dispatch({type:LOGOUT_REQUEST})
    
}