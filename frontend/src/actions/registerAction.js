import Axios from "axios"
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL } from "../constants"

export const registerAction = (regInfo)=> async(dispatch) =>{
    dispatch({type:REGISTER_REQUEST, payload:{}})
    try{
        console.log(regInfo.pwd)
        const data = await Axios.post("/users/register", {
            fname:regInfo.fname,
            lname:regInfo.lname,
            contestantemail:regInfo.contestantemail,
            contestantfaculty:regInfo.contestantfaculty,
            contestantphone:regInfo.contestantphone,
            contestantlevel:regInfo.contestantlevel,
            contestantdept:regInfo.contestantdept,
            contestantDOB:regInfo.contestantDOB,
            pwd:regInfo.pwd,
            repwd:regInfo.repwd
            
        })
        dispatch({type:REGISTER_SUCCESS, payload:data})
    }catch(error){
        console.log("An error Occured")
        console.log(error)
        dispatch({type:REGISTER_FAIL, payload:error.response?error.response.data.message:error.response})
    }
}
