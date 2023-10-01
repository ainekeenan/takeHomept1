import React from "react";
import { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import "./App.css"

import File from "./pages/cat";
import { NamedExport } from "./pages/dog";
import Form from "./pages/form";
import Name from "./pages/name"
//import { use } from "../../api/routes";

const App = () => {

  const [index, setIndex] = useState(0);
  const [data, setData] = useState("");
  const [papi, setPublic] = useState("");

  
  function handleClick () {
    setIndex(index + 2);
}
   

    useEffect(() => {
      //fetch("https://cat-fact.herokuapp.com/facts")
      fetch("http://localhost:9000/testAPI")
    .then(response => response.json() )
    .then(json => {setData(json)})
    .catch(error => console.error(error))
    }, []
    );

    useEffect(() => {
      //fetch("https://cat-fact.herokuapp.com/facts")
      fetch("http://localhost:9000/publicAPI")
    .then(response => response.json() )
    .then(json => {setPublic(json)})
    .catch(error => console.error(error))
    }, []
    );
  

    //    {data ? <pre>{JSON.stringify(data,null,2)} </pre>: "Loading ...</p"}
   return(
   <div>
    <File />
    <NamedExport />
    <Form index= {index} handleClick = {handleClick}/>
    <Form index= {index} handleClick = {handleClick}/>
    <Name /> 
    {data ? <pre>{JSON.stringify(data.message, null, 2)}</pre> : "Loading..."}
    {data ? <pre>{JSON.stringify(papi, null, 2)}</pre> : "Loading..."}
    </div> );
};

export default App;
