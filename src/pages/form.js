import React from "react";

const Form = ( {index, handleClick} ) => {

    return(
        <div>
            <button onClick={handleClick}>Clicked {index} times</button>
        </div>

    );
};

export default Form;