import React, { useState } from "react";
import './Search.scss';

const Search = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      onSearch(value);
    }
  }

  const handleClick = () => {
    onSearch(value);
  }

  return (
    <div className="search" >
      <img className="spacex-logo" src='/spacex_logo.png'/>
      <img className="spacex-logo-right" src='/spacex_logo_2.png'/>
      <div className="content">
        <input 
          value={value}
          placeholder="mission name"
          onKeyDown={handleKeyDown}
          onChange={e => setValue(e.target.value)}
        />
        <div className="button" onClick={handleClick}>
          <img src='/svg/search.svg'/>
        </div>
      </div>
    </div>
  )
}

export default Search;