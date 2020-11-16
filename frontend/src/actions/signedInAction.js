import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from "../constants"
import Cookie from 'js-cookie';
import axios from 'axios';
export const loggeddIn = (email, pwd) => async (dispatch)=>{
    dispatch({type:LOGIN_REQUEST, payload:{email, pwd}})

    try{
    const data = await axios.post("/users/signin", {email, pwd})
    dispatch({type:LOGIN_SUCCESS, payload:data})
    
    Cookie.set("userInfo", JSON.stringify(data))
    }catch(error){
        console.log(JSON.stringify(error.response.data))
    dispatch({type:LOGIN_FAIL, payload:error.response.data.message})
    
    }
}