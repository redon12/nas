import  { SIGNED_IN, SIGNED_OUT } from "../constants"
export const loggedIn = ()=>{
    return {
        type:SIGNED_IN
    }
}

export const loggedOut = ()=>{
    return {
        type:SIGNED_OUT
    }
}