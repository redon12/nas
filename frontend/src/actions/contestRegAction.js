import Axios from "axios"
import { CONTEST_REGISTER_REQUEST, CONTEST_REGISTER_SUCCESS, CONTEST_REGISTER_FAIL } from "../constants"

export const contestRegAction = (contestRegInfo)=> async(dispatch) =>{
    dispatch({type:CONTEST_REGISTER_REQUEST, payload:{}})
    try{
        console.log("code ran inside action")
        const formData = new FormData()
        formData.append("file", contestRegInfo.cimage)
        formData.append("cvoteprice", contestRegInfo.cvoteprice)
        formData.append("cdeadline", contestRegInfo.cdeadline)
        formData.append("cname", contestRegInfo.cname)

        const data = await Axios.post("/users/registercontest", formData)
        // console.log(data)
        dispatch({type:CONTEST_REGISTER_SUCCESS, payload:data})
    }catch(error){
        dispatch({type:CONTEST_REGISTER_FAIL, payload:error.response.data.message})
    }
}