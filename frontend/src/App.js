import React from 'react';
import {Route} from 'react-router-dom';
import signUpPage from './pages/signup';
import "./index.css";
import blog from './pages/blog';
import opage from './pages/signInn';
import LogOut from './pages/logOut';
import { PromiseProvider } from 'mongoose';
import AdminPanel from './pages/adminPanel';
import ContactUsPage from './pages/contactus';
import CreateNewPost from './pages/createNewPost';
import ShowContestantsPage from './pages/showContestants';
import VotePage from './pages/votePage';
import UserPanel from './pages/contestantPanel';
import ContestReg from './pages/contestRegPage';
import RegContestant from './pages/registerContestant';
import Profile from './pages/profile';
import ForgottenPassword from './pages/forgottenPassword';
import RecoveryCode from './pages/recoveryCode';
import RecoveryPasswordChange from './pages/recoveryPasswordChange';
import SeeAllMessages from './pages/seeallmessages';
import Authorization from './pages/authorization';
import SeeTotalContestants from './pages/seeTotalContestants';
import ApprovePage from './pages/approvepage';
require("dotenv").config()






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
    <Route path={"/api/signin"} exact={true}  component={opage}/>
    <Route path={"/api/register"}   component={signUpPage}/>
    <Route path={"/api/userpanel"}   component={UserPanel}/>
    <Route path={"/api/logout"}   component={LogOut}/>
    <Route path={"/api/admin"}   component={AdminPanel}/>
    <Route path={"/api/createnewpost"}   component={CreateNewPost}/>
    <Route path={"/api/showcontestants"}   component={ShowContestantsPage}/>
    <Route path={"/api/votepage/:id"}   component={VotePage}/>
    <Route path={"/api/contestcreation"}   component={ContestReg}/>
    <Route path={"/api/regcontestant"}   component={RegContestant}/>
    <Route path={"/api/profile"}   component={Profile}/>
    <Route path={"/api/forgottenpassword"}   component={ForgottenPassword}/>
    <Route path={"/api/recoverycode"}   component={RecoveryCode}/>
    <Route path={"/api/recoverypassword"}   component={RecoveryPasswordChange}/>
    <Route path={"/api/seeallmessages"} component = {SeeAllMessages} />
    <Route path={"/api/authorization"} component = {Authorization} />
    <Route path={"/api/seetotalcontestants"} component = {SeeTotalContestants} />
    <Route path={"/api/approvepage/:id"} component = {ApprovePage} />


    





    



    
    <Route path={"/contactus"}   component={ContactUsPage}/>
    </div>

    
    
        
    )
    }
export default App