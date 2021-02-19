import React from 'react';
import { Link } from 'react-router-dom';



function Footer(props){

    return(
        <div>
            <div className={"container"}>
                <div className={"p-2 m-3"}>&copy;Copyright 2021 Natural Science, Madonna University</div>
                <div className={"p-2 m-3"}>Powered by <Link to={"www.calyfra.com"}>Virae</Link></div>
            </div>

        </div>
    )
}

export default Footer;