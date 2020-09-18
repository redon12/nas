import React from 'react';

function LabTestBookPage (props){
    return <div>
        <div className="container">
            <div className={"row justify-content-center"}>
                <div className={"col-lg-6 col-sm-12 p-3  m-5 border shadow"}>
                    <center><h2 className={"h2 text-info"}>Book A Lab Test!</h2></center>
                    <form>
                    <h6 className={"text-info h5"}>Select A Lab:</h6>
                    <div className={"form-group scrollIt"}>
                            
                                <div className={"media jade border border-bottom-0 border-left-0 m-1 p-2"}>
                                    <span className={"fab fa-firefox align-self-start mr-1 text-info d-flex h3"}></span>
                                    <div className={"media-body"}>
                                        <span className={"h4 text-info "}>New Era Hospital</span>
                                        <p>Address: 30 Funtua Street</p>
                                        <p>City: Kafanchan</p>
                                        <p>State: Kaduna</p>
                                    </div>
                                </div>

                                <div className={"media border jade border-bottom-0 border-left-0 m-1 p-2"}>
                                    <span className={"fab fa-firefox mr-1 align-self-start text-info d-flex h3"}></span>
                                    <div className={"media-body"}>
                                        <span className={"h4 text-info "}>Frank Laboratories</span>
                                        <p>Address: 20a Ogbomosho Street</p>
                                        <p>City: Kafanchan</p>
                                        <p>State: Kaduna</p>
                                    </div>
                                </div>

                                <div className={"media border jade border-bottom-0 border-left-0 m-1 p-2"}>
                                    <span className={"fab fa-firefox mr-1 align-self-start text-info d-flex h3"}></span>
                                    <div className={"media-body"}>
                                        <span className={"h4 text-info "}>Patrick Yakowa Hospital Lab</span>
                                        <p>Address: 20a Ogbomosho Street</p>
                                        <p>City: Kafanchan</p>
                                        <p>State: Kaduna</p>
                                    </div>
                                </div>

                            </div>
                        <fieldset className={"form-group"}>
                            
                            <select className={"form-control"}> 
                            <option >Select Test Type</option>
                                <option value ={"Urine & Stool test"}>Urine & Stool Test</option>
                                <option value ={"Blood Test"}>Blood Test</option>
                                <option value ={"X-Ray test"}>X-Ray Test</option>
                                <option value ={"DNA Test"}>DNA Test</option>
                            </select>
                            <ul className={"list-group"}>
                                <li className={"list-group-item list-group-item-action"}>General</li>
                                <li className={"list-group-item list-group-item-action"}>Malaria</li>
                                <li className={"list-group-item list-group-item-action"}>Typhoid</li>
                                <li className={"list-group-item list-group-item-action"}>Hepatitis</li>
                            </ul>
                            </fieldset>
                            <div>
                            <center> <h1 className={'h3 text-info'}>Summary Of Test Booked</h1></center>
                            <div className={"row border border-bottom-0"}>
                           
                                <div className={"col-lg-6"}>
                                    <span className={"text-info d-block"}>Name of Hospital:</span> New Era Hospital Laboratory
                                    <span className={"text-info d-block"}>Address:</span> 20D Funtua Street
                                    <span className={"text-info d-block"}>City:</span> Kafanchan
                                    <span className={"text-info d-block"}>State:</span> Kaduna State
                                    <span className={"text-info d-block"}>Country:</span> Nnigeria

                                </div>
                                <div className={"col-lg-6"}>
                                <span className={"text-info d-block"}>Test Type:</span> Urine & Stool Test
                                    <span className={"text-info d-block"}>Variety:</span> General Test
                                   
                                    
                                    
                                    
                                    
                                    
                                    
                                </div>
                                
                            </div>
                            <center><button className={"btn btn-outline-info"}>Finalize Booking</button></center>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}
export default LabTestBookPage