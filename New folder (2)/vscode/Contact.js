import React, { useEffect } from "react";

const Contact=()=>{
    useEffect(()=>{
        document.title="contact us";
    },[]);

    return(
        <div>
            <h1>Contact Us</h1>
        <p>Address:<br />
    
        Computerworld<br />
    
        Anandpuri 25-a,patna
        Est boring canal road patna near manorama appartment
        </p>
        
        </div>
    );
    
}
export default Contact;