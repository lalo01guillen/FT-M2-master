import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
     
      <input type="submit" value="Agregar" />
      <Link to="/cards">
        <span>go watch cards</span>
      </Link>
      
    </form>
  );
}
