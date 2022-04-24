import React from "react";
import './style.css';

function Header({imgURL}){
    return(

    
         <header> 
             <img className="logo-img" src={imgURL} alt="img"/>

             <div className='mnue'>
                 <p>Home</p>
                 <p>Home</p>
                 <p>Home</p>
             </div>
            
         </header>
        
    


    );

}
export default Header;