import React from 'react';

function SeeDocuments (props){
    return <div>      
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-lg-6"}>
            
        <ul className={"list-group"}>
            <li className={"list-group-item"}>
            <div className={"card"}>
                    <div className={"card-header"}>date created:12 oct,2020</div>
                    <div className={'card-body'}>
                    <span className={"fas fa-file-medical m-1 text-info"}> </span>

                        Nnamdi kanu medical Report
                    </div>
                </div>
            </li>
            <li className={"list-group-item"}>
                <div className={"card"}>
                <span className={"fas fa-file-medical m-1 text-info"}> </span>
                    <div className={"card-header"}>date created:12 oct,2020</div>
                    <div className={'card-body'}>
                        <span className={"fas fa-file-medical text-info  m-1"}></span><span className={"text-info"}>
                            President Buhari medical Report
                        </span>
                    </div>
                </div>
            </li>
        </ul>
        </div>
        </div>
        </div>
    </div>
}
export default SeeDocuments