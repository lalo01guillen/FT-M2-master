import React from 'react'
import SearchBar from './SearchBar';

const Nav = ({onSearch}) => {
  return (
    <SearchBar onSearch={onSearch}></SearchBar>
  );
}

export default Nav;
