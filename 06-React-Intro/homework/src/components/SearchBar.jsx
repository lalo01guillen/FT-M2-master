import {useState} from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
    const [value, setValue] = useState("");

    
    const cambiarValor = (evt) => {
      setValue(evt.target.value);
  }
  const search = () =>{
    onSearch(value);
    setValue("");
  }
  return <div>
    <input 
    type="text"
    value={value}
    onChange={cambiarValor}
    >
   
    </input>

    <button onClick={search}>search</button>
  </div>
};