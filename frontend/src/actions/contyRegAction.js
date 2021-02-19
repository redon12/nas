import Axios from "axios"
import { CONTY_REGISTER_REQUEST, CONTY_REGISTER_SUCCESS, CONTY_REGISTER_FAIL } from "../constants"

export const contyRegAction = (contyRegInfo)=> async(dispatch) =>{
    dispatch({type:CONTY_REGISTER_REQUEST, payload:{}})
    try{
        console.log("code ran inside action")
        console.log("data from conty action")
        console.log(contyRegInfo)
        const data = await Axios.post("/users/regcontestant", {
            fname:contyRegInfo.fname,
           lname:contyRegInfo.lname,
           email:contyRegInfo.email,
          dept:contyRegInfo.dept,
         level:contyRegInfo.level,
          faculty:contyRegInfo.faculty,
         DOB:contyRegInfo.DOB,
          phone:contyRegInfo.phone, 
          pics:contyRegInfo.pics,
          contestIn:contyRegInfo.contestIn
            
            
        })
        // console.log(data)
        dispatch({type:CONTY_REGISTER_SUCCESS, payload:data})
    }catch(error){
        dispatch({type:CONTY_REGISTER_FAIL, payload:error.response.data.message})
    }
}