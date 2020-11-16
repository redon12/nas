import React from 'react';
import {Route} from 'react-router-dom';
import signUpPage from './pages/signup';
import "./index.css";
import userPanel from './pages/user_panel';
import blog from './pages/blog';
import opage from './pages/signInn';
import { loggedReducer } from './reducers/signReducer';
import { loggeddIn } from './actions/signedInAction';
import LogOut from './pages/logOut';
import { PromiseProvider } from 'mongoose';
import AdminPanel from './pages/adminPanel';
import ContactUsPage from './pages/contactus';
import CreateNewPost from './pages/createNewPost';





const App = (props)=>{
    // useEffect(()=>{
    //     dispatch(logOutAction(false))

    //         return function cleanup(){
               
    //         }
    //     return ()=>{

    //     }
    // },[])
    
    
        // console.log(isLoggedOut)
    
    return (
        // djdj
       
    <div>
        
        
       
    
    <Route path={"/"}  exact={true} component={blog}/>
    <Route path={"/signin"} exact={true}  component={opage}/>
    <Route path={"/register"}   component={signUpPage}/>
    <Route path={"/userpanel"}   component={userPanel}/>
    <Route path={"/logout"}   component={LogOut}/>
    <Route path={"/admin"}   component={AdminPanel}/>
    <Route path={"/createnewpost"}   component={CreateNewPost}/>

    
    <Route path={"/contactus"}   component={ContactUsPage}/>
    </div>

    
    
        
    )
    }
export default App