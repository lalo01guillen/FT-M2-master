import React from 'react';
import Card from "./Card";
import c from './Cards.module.css';
export default function Cards({cities, onClose}) {

  if(cities.length > 0){
  
    return <div className={c.mainContiner}>
    {cities.map((items) => <Card 
  key={items.id} 
  id={items.id}
  max={items.max}
  min={items.min}
  name={items.name}
  img={items.img}
  onClose={onClose} 
  />)}
    </div>
  }else{
    return <div className={c.mainContiner}><h1>Search a city</h1></div>
  }
  
};