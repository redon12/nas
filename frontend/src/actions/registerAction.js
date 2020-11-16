import Axios from "axios"
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL } from "../constants"

export const registerAction = (regInfo)=> async(dispatch) =>{
    dispatch({type:REGISTER_REQUEST, payload:{}})
    try{
        const data = await Axios.post("/users/register", {
            fname:regInfo.fname,
            lname:regInfo.lname,
            email:regInfo.email,
            pwd:regInfo.pwd,
            repwd:regInfo.repwd
            
        })
        dispatch({type:REGISTER_SUCCESS, payload:data})
    }catch(error){
        dispatch({type:REGISTER_FAIL, payload:error.response.data.message})
    }
}