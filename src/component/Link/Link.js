import React from 'react';
import './style.css'
function Link({linkUrl,text}){
    return(
     <div className ='link'>

         <a href={linkUrl}> { text} </a>
     </div>


    );
}
export default Link;