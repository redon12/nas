import axios from 'axios'
import { POST_FAIL, POST_REQUEST, POST_SUCCESS } from '../constants'
export const SubmitPostAction = (title, post) => async(dispatch)=>{
    dispatch({type:POST_REQUEST})

    try{
        const data = await axios.post("/users/freshpost",{title, post} )
        dispatch({type:POST_SUCCESS, payload:data})
    }

    catch(error){
        dispatch({type:POST_FAIL, payload:error})
    }

}