
import React from "react";
import './style.css';

function Input( {placeholder}){

    return (
        <div className="input">
           
               
              
           <input type='text' placeholder={placeholder}/>
        </div>
    );

}
export default Input;