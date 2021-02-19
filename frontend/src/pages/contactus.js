import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../components/navbar';


function ContactUsPage(props){

    return(
        <div>
            <NavBar/>
            <div className={"container"}>
                <div className={"row justify-content-center"}>
                    <div className={"col-lg-6"}>
                        <form>
                        <div className={"card my-5"}>
                            <div className={"card-header text-success display-4"}>
                               <center className={""}> Contact Us</center>
                            </div>

                            <div className={"card-body"}>
                                <fieldset className={'form-group'}>
                                    <input placeholder={"Your Name"} className={"form-control"} />
                                </fieldset>

                                <fieldset className={'form-group'}>
                                    <input placeholder={"Your Email"} className={"form-control"} />
                                </fieldset>

                                <fieldset className={'form-group'}>
                                    <textarea placeholder={"Your Message"} className={"form-control"} />
                                </fieldset>

                                <fieldset className={"form-group"}>
                                    <Link type={"submit"} className={"btn btn-lg btn-info"}>Submit</Link>
                                </fieldset>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsPage;