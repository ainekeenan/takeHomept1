import React from "react";
import { useState } from "react";

const Name = () => {
    const [info, setInfo] = useState({firstName: "", lastName: "" , email: "example@gmail.com"});
    const [submit, setSubmit] = useState(false);

    function handleClick () {
        setSubmit(!submit);
    }
    return(
        <div>
            <label> First Name: <input value= {info.firstName} onChange={e => setInfo( {...info, firstName : e.target.value })} /> </label>
            <label> Last Name : <input value = {info.lastName} onChange = {e => setInfo({...info, lastName: e.target.value})} /></label>
            <label> Email: <input value= {info.email} onChange = {e => setInfo({...info, email: e.target.value})} />  </label>
            <p> </p> 

            <button onClick={handleClick}>Submit</button>
             {submit && <p> <p> Check your information below :</p>
            <p> First Name: {info.firstName} </p>
            <p> Last Name: {info.lastName} </p>
            <p> Email: {info.email}</p> </p>}
        </div>
    );
};

export default Name;