import React, { useEffect } from "react";
import { Jumbotron } from "reactstrap";

const Hire=()=>{
useEffect(()=>{
    document.title="Hire";
},[]);


    return(
        <div>
            <Jumbotron className="text-center">
                <h1>
                    Hire smart!hire with computer world
                </h1>
                <p>computerworld has built a gigantic network of people from all over the globe,
                 through various online and offline courses.<br />
                  We are offering IT companies to hire talented engineers with us at no cost of acquisition.
                   Kindly fill up this form, our team will get in touch with you regarding the same</p>

            </Jumbotron>
        </div>


    );
}
export default Hire;