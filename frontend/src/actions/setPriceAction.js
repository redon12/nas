import { SET_PRICE_REQUEST, SET_PRICE_SUCCESS, SET_PRICE_FAIL } from "../constants"
import Cookie from 'js-cookie';
import axios from 'axios';
export const setPriceAction = (price, numVote) => async (dispatch)=>{
    dispatch({type:SET_PRICE_REQUEST, payload:{price, numVote}})

    try{
        const data = await Number(price * numVote)
        dispatch({type:SET_PRICE_SUCCESS, payload:data})
    
    
    }catch(error){
        console.log(JSON.stringify(error))
    dispatch({type:SET_PRICE_FAIL, payload:error})
    
    }
}