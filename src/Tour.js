import React, { useState } from 'react';

const Tour = ({tour,handleRemove}) => {
  const {id,name,info,price,image}=tour;
  const [readmore,setReadmore]=useState(false);



  return <article className='single-tour'>
  <img src={image} alt={name}/>
    <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'> $ {price}</h4>
      </div >
      <p>{
      readmore? info:`${info.substring(0,200)}....`
      
      }</p>

      <button
       onClick={()=>setReadmore(!readmore)}>{readmore ? 'show less':'readmore'}
       </button>
      <button onClick={()=>handleRemove(id)} className='delete-btn'>Not Interested</button>
  </footer>

  </article>
};

export default Tour;
