import React from 'react';

function LabTestBookPage (props){
    return <div>
        <div className="container">
            <div className={"row justify-content-center"}>
                <div className={"col-lg-6 col-sm-12 p-3  m-5 border shadow"}>
                    <center><h2 className={"h2 text-info"}>Book A Health Insurance!</h2></center>
                    <form>

                        <fieldset className={"form-group"}>
                            
                            <select className={"form-control"}> 
                            <option >Select Test Type</option>
                                <option value ={"Urine & Stool test"}>Urine & Stool Test</option>
                                <option value ={"Blood Test"}>Blood Test</option>
                                <option value ={"X-Ray test"}>X-Ray Test</option>
                                <option value ={"DNA Test"}>DNA Test</option>
                            </select>
                           
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