import React from 'react';


function seeAllmessages(props){
    return (
        <div>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-lg-6"}>
                        <div className={"card rounded m-3"}>
                            <div className={"card-header"}><span className={"h4"}>Rebecca Williams</span></div>
                        
                            <div className={"card-body"}>
                                sir my account is having a glitch how do i fix it?
                            </div>
                        </div>
                        <div className={"card m-3"}>
                            <div className={"card-header"}><span className={"h4"}>John gullible</span></div>
                        
                            <div className={"card-body"}>
                                The patient request button is not working
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default seeAllmessages;
