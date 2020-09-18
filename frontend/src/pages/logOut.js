import React, { useEffect } from "react";
import Cookie from 'js-cookie';
import {useDispatch, useSelector} from 'react-redux';
import { logOutAction } from "../actions/signedOutAction";
function LogOut(props){
        const isLoggedOut = useSelector(state=>state.loggeddOut)
        const dispatch = useDispatch()
        useEffect(()=>{
            dispatch(logOutAction())
            return ()=>{

            }
        },[dispatch(logOutAction)])

        return isLoggedOut?<h1>{props.history.push('/')}</h1>:null
}


export default LogOut;