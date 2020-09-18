import React, { useState, Component } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { render } from 'ejs';
import { loggedReducer } from '../reducers/signReducer';




class signInPage extends Component{
    constructor(props){
      super(props)
      this.state = {password:'', email:''}
      
    }
    render() {
        // djdj
      const {loading, error, userInfo} = this.grab;
      
    return <div>
        
        
    
      <div className={"container"}>
        <div className={"row justify-content-center"}>
          <div className={"col-lg-4 col-sm-12 border m-5 shadow rounded p-3"}>
          <center> <h1 className={'text-muted m-2'}> Sign In!</h1></center>
            <form onSubmit={this.submitHandler} method="post">
            <fieldset className={"form-group"}>
              <input onChange={(e)=>this.setState({password:e.target.value})} type={"email"} id={"email"} name={"email"} className={"form-control"} placeholder={"Email"}/>
              <small className={"text-muted"}>
                Type in your Email
              </small>
            </fieldset>

            <fieldset className={"form-group"}>
              <input onChange={(e)=>this.setState({password:e.target.value})} type={"password"} name={"pwd"} id={"pwd"} className={"form-control"} placeholder={"Password"}/>
              <small className={"text-muted"}>
                Type in your Password
              </small>
            </fieldset>
            <center> <button type = {"submit"} className={"btn btn-info m-4"}>Log In</button></center>
            </form>
          </div>
        </div>
      </div>
    </div>
        
    }
    grab(){
      const loggedIn = useSelector(state=>state.loggedIn)
      console.log(loggedIn)
      return loggedIn
    }
    submitHandler(e){
      const dispatch = useDispatch()
      e.preventDefault()
      dispatch(this.state.email, this.state.password)
    }
    }
export default signInPage