import Axios from "axios"
import { DISPLAY_CONTEST_REGISTER_REQUEST, DISPLAY_CONTEST_REGISTER_SUCCESS, DISPLAY_CONTEST_REGISTER_FAIL } from "../constants"

export const contestRegAction = ()=> async(dispatch) =>{
    dispatch({type:DISPLAY_CONTEST_REGISTER_REQUEST, payload:{}})
    try{
        const data = await Axios.get("/users/fetchcontests")

        // console.log("code ran inside action")
        // console.log(data)
        dispatch({type:DISPLAY_CONTEST_REGISTER_SUCCESS, payload:data})
    }catch(error){
        dispatch({type:DISPLAY_CONTEST_REGISTER_FAIL, payload:error.response.data.message})
    }
}