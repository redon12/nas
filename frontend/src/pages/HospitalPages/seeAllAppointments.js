import React from 'react';

function AllAppointments (props){
    return <div>      
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-lg-6"}>
            
        <ul className={"list-group"}>
            <li className={"list-group-item"}>
                <div className={"card"}>
                    <div className={"card-header"}>phone Number:08028783466, email:norbertmbafrank@gmail.com</div>
                <p className={""}><span className={"h6 text-info"}> Patients Name:</span>
                <span className={""}>Frank Norbert Mba</span></p>
                <p className={""}><span className={"h6 text-info"}>Patients concern:</span> <span className={""}>i am just feelin one kind headache and everything feels
                hazy and so fallen apart , i feel like my stomach is about to overturn</span></p>
                <p className={""}><span className={"h6 text-info"}>Patients phone Number:</span> <span className={""}>08028783466</span></p>
                <p className={""}><span className={"h6 text-info"}>Patients scheduled Appointment date:</span> 7 oct, 2020, time:12:00pm</p>
                <button className={"btn btn-info m-1"}>change scheduled date and time</button>
                <button className={"btn btn-info m-1"}> Accept Appointment</button>
                </div>
            </li>
            <li className={"list-group-item"}>
                <div className={"card"}>
                    <div className={"card-header"}>phone Number:07023451276gccccccc, email:helen@gmail.com</div>
                <p className={""}><span className={"h6 text-info"}> Patients Name:</span>
                <span className={""}>Helen Jane</span></p>
                <p className={""}><span className={"h6 text-info"}>Patients concern:</span> <span className={""}>i am just feelin one kind headache and everything feels
                hazy and so fallen apart , i feel like my head is about to overturn</span></p>
                <p className={""}><span className={"h6 text-info"}>Patients phone Number:</span> <span className={""}>08028783466</span></p>
                <p className={""}><span className={"h6 text-info"}>Patients scheduled Appointment date:</span> 7 oct, 2020, time:12:00pm</p>
                <button className={"btn btn-info m-1"}>change scheduled date and time</button>
                <button className={"btn btn-info m-1"}> Accept Appointment</button>
                </div>
            </li>
        </ul>
        </div>
        </div>
        </div>
    </div>
}
export default AllAppointments