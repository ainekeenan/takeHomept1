import React from "react";
import { useState, useEffect } from "react";




const ApiTest = ({amount}) => {
      

  const [papi, setPublic] = useState("");
    useEffect(() => {
        //fetch("https://cat-fact.herokuapp.com/facts")
        

      const url = `http://localhost:9000/publicAPI`
      fetch(url  )
      .then(response => response.json() )
      .then(json => {setPublic(json)})
      .catch(error => console.error(error))
      } , []
      );
      return (
        <div>
            {papi ? <pre>{JSON.stringify(papi, null, 2)}</pre> : "Loading..."}
             </div>
      );

};

export default ApiTest;