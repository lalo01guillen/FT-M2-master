import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { getWeather } from './helpers/getWeather';

function App() {
  const [cities, setCities] = useState([]);

  function onClose(id) {
    setCities(oldCities => oldCities.filter(city => city.id !== id));
  }

  const onSearch = async (ciudad) => {
    const data = await getWeather(ciudad)
    //console.log(data);
    if (data !== null) {
      setCities([...cities, data]);
    } else {
      alert("Ciudad no encontrada")
    }
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch}></Nav>
      <hr />
      <div>
        <Cards
          cities={cities}
          onClose={onClose}
        />
      </div>
    </div>
  );
}

export default App;
