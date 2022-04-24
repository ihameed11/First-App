
import React from 'react';
import './style.css';

function Card({imageUrl,body}){
    return(
      <div className="Card-container">

    <div className='image-container'>
    <img src={imageUrl} className="card-img" alt='card' />
    </div>
    <div className="text-container">

        <h6> {body} </h6>
    </div>








      </div>


    );
}
export default Card;