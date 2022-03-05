import React,{useRef} from "react";
import ContactCard from "./ContactCard";
import {Link} from "react-router-dom";


const ContactList = (props) => {
 console.log(props);
const inputEl = useRef("");
  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
const getSearchTerm =()=>{
 props.searchKeyword(inputEl.current.value);

}

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  return(
    <div className="main">
    <div className="ui " style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        
      <h2>contact List</h2>
      
      <Link to ="/add">
      <button className="ui button blue">Add Contact</button>
      </Link>
      </div>
      <div className="ui search">
      <div className="loding">
          
          {props.term.length>0 ?"Searching....":""}
          
          <div className="ui icon input"style={{width:"100%",marginTop:"10px"}}>
            <input 
             ref={inputEl}
            type="text"
             placeholder="Search Contact" 
             className="prompt" 
             value={props.term} 
             onChange={getSearchTerm} 
             />
            <i className="search icon"></i></div>
          </div>
        </div>
       
       
  <div className="ui celled list">{renderContactList.length >0 ? renderContactList: "No contacts available"}</div>
  </div>
  );
};

export default ContactList;
