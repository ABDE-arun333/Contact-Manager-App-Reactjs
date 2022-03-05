import React from "react";
import profile from "../images/profile.jpeg";
import {Link} from "react-router-dom";
const ContactDetails =(props)=>{
    console.log(props);
const {name,email}=props.location.state.contact;
    
    return(
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={profile} alt="profile"/>

                </div>
                <div className="content">
                    <div className="header">
                        {name}
                    </div>
                    <div className="discription">{email}</div>
                </div>
            </div>
           <div className="ui card centered ">
            <Link to="/">   <button style={{width:"100%"}} className="ui button blue " >back to contact list</button></Link>
               </div>
        </div>
    );

}
export default ContactDetails;