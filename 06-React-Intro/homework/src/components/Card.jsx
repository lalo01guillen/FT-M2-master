import React from 'react';
import c from './Card.module.css'
export default function Card({min,max,name,img,id,onClose}) {
  // acá va tu código
  return <div className={c.card}>
    el minimo es: {min}
    <br></br>
    el maximo es: {max}
    <br></br>
    el nombre es: {name}
    <br></br>
    la imagen es: <img src={img} alt="img"></img>
    <br></br>
    <button onClick={()=>onClose(id)}>Cerrar</button>
    <br></br>
    </div>
};