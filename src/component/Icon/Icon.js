import React from 'react';

import './style.css';

function Icon({imUrl}){
    return(

     <div className='Icon-contrainer'>
         <img className="icon-img" src={imUrl} alt='img'/>
     </div>





    );
}
export default Icon;