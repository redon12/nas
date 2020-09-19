import React from 'react';


function seeAllUsers(props){
    return (
        <div>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-lg-6"}>
                        <div className={"card rounded m-3"}>
                            <div className={"card-header"}><span className={"h4"}>Rebecca Williams</span></div>
                        
                            <div className={"card-body"}>
                            <button className={"btn m-1 btn-info"}>make Admin</button>
                            <button className={"btn m-1 btn-info"}>make Doctor</button>
                            <button className={"btn m-1 btn-info"}>Delete User</button>
                            </div>
                        </div>
                        <div className={"card m-3"}>
                            <div className={"card-header"}><span className={"h4"}>John gullible</span></div>
                        
                            <div className={"card-body"}>
                            <button className={"btn m-1 btn-info"}>make Admin</button>
                            <button className={"btn m-1 btn-info"}>make Doctor</button>
                            <button className={"btn m-1 btn-info"}>Delete User</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default seeAllUsers;
