import React from 'react';

function HospitalAppointmentPage (props){
    return <div>
        <div className="container">
            <div className={"row justify-content-center"}>
                <div className={"col-lg-6 col-sm-12 p-3  m-5 border shadow"}>
                    <center><h2 className={"h2 text-info "}>Book A Hospital Appointment</h2></center>
                    <form>
                    <span className={"h4"}>BioData</span>
                    <fieldset className={"form-group"}>
                        <input value={''} className={"form-control"} placeholder={"Name"}/>
                        <small className={"text-muted"}>First Name</small>
                    </fieldset>

                    <fieldset className={"form-group"}>
                        <input value={''} className={"form-control"} placeholder={"Type in Your Address"}/>
                        <small className={"text-muted"}>Address</small>
                    </fieldset>

                    <fieldset className={"form-group"}>
                    <label>State</label>
                        <select className={"form-control"}>
                            <option>Kaduna</option>
                            <option>Jos</option>
                            <option>Nassarawa</option>
                            <option>Lagod</option>
                            <option>Abuja</option>
                        </select>
                    </fieldset>

                    <fieldset className={"form-group"}>
                    <label>Whats your Ethnicity?</label>
                        <select className={"form-control"}>
                            <option>Igbo</option>
                            <option>Hausa</option>
                            <option>Yoruba</option>
                            <option>Fulani</option>
                            <option>Igala</option>
                        </select>
                    </fieldset>

                    <fieldset className={"form-group"}>
                    <label className={"h6 d-block"}>Gender</label>
                        <input type={"radio"} value={""} className={"ml-3 mr-1 form-radio-control"} placeholder={"Type in Your Address"}/>
                        <label>Male</label>
                        <input type={"radio"} value={""} className={"ml-3 mr-1 form-radio-control"} placeholder={"Type in Your Address"}/>
                        <label>Female</label>
                        <input type={"radio"} value={""} className={"ml-3 mr-1 form-radio-control"} placeholder={"Type in Your Address"}/>
                        <label>other</label>
                    </fieldset>

                    <fieldset className={"form-group"}>
                        <input type={"date"} value={''} className={"form-control"} placeholder={"Your Date of Birth"}/>
                        <small className={"text-muted"}>Date of Birth</small>
                    </fieldset>

                    <fieldset className={"form-group"}>
                        <input type={"file"} className={"form-control-file text-info"} />
                        <small className={"text-muted"}>Upload A pics</small>
                    </fieldset>
                    <div className={"input-group"}>
                        <select className={"input-group-addon border"}>
                        <option>+234</option>
                            
                        </select>
                        <input type={"text"} className={"form-control text-info"} placeholder={"Phone Number"}/>
                        
                    </div>

                    <center><h3 className={"h3 m-2 text-info"}>Appointment Details</h3></center>
                    <div className={"border p-1"}>
                    <fieldset className={"form-group"}>
                    <label>Whats your purpose of Appointment?</label>
                        
                        <textarea placeholder={"Type in purpose of Appointment!"} rows={5} className={"form-control"}>

                        </textarea>
                    </fieldset>

                    <fieldset className={"form-group"}>
                    <label>Choose A Doctor</label>
                    <div className={"input-group"}>
                    <input placeholder={"Search"} className={"form-control"} type={"text"}/><button className={"btn btn-info input-button-addon"}>Search</button>
                    </div>
                     </fieldset>
                     
                     <div className={"card"}>
                     <div className={"card-header justify-content-center"}><h3 className={"h6"}>Available Doctors</h3></div>
                     <div className={"card-body"}>
                         <div className={"media border p-2 mb-2"}>
                         <span className={"h3 text-info m-3 fas fa-user"}></span>
                             <div className={"media-body"}>
                                 <span className={"d-block"}>Resident Doctor Frank Norbert Mba</span>
                                 <span className={"text-info"}>Bingham Hospital</span>
                             </div>
                         </div>

                         <div className={"media border p-2 mb-2"}>
                         <span className={"h3 text-info m-3 fas fa-user"}></span>
                             <div className={"media-body"}>
                                 <span className={"d-block"}>Resident Dr. Shallom </span>
                                 <span className={"text-info"}> Jos university Hospital</span>
                             </div>
                         </div>
                     </div>

                     </div>
                     </div>
                     <center><button className={"btn btn-info m-2"}>Book Appointment</button></center>
                    </form>
                </div>
            </div>
        </div>
    </div>
}
export default HospitalAppointmentPage