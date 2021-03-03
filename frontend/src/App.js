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
    <Route path={"/signin"} exact={true}  component={opage}/>
    <Route path={"/register"}   component={signUpPage}/>
    <Route path={"/userpanel"}   component={UserPanel}/>
    <Route path={"/logout"}   component={LogOut}/>
    <Route path={"/admin"}   component={AdminPanel}/>
    <Route path={"/createnewpost"}   component={CreateNewPost}/>
    <Route path={"/#/showcontestants"}   component={ShowContestantsPage}/>
    <Route path={"/votepage"}   component={VotePage}/>
    <Route path={"/contestcreation"}   component={ContestReg}/>
    <Route path={"/regcontestant"}   component={RegContestant}/>
    <Route path={"/profile"}   component={Profile}/>
    <Route path={"/forgottenpassword"}   component={ForgottenPassword}/>
    <Route path={"/recoverycode"}   component={RecoveryCode}/>
    <Route path={"/recoverypassword"}   component={RecoveryPasswordChange}/>
    <Route path={"/seeallmessages"} component = {SeeAllMessages} />
    <Route path={"/authorization"} component = {Authorization} />
    <Route path={"/seetotalcontestants"} component = {SeeTotalContestants} />
    <Route path={"/approvepage"} component = {ApprovePage} />


    





    



    
    <Route path={"/contactus"}   component={ContactUsPage}/>
    </div>

    
    
        
    )
    }
export default App