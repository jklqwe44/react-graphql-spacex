import React, { useState } from "react";
import spacexLogo from '../../assets/spacex_logo.png'; 
import searchSVG from '../../assets/svg/search.svg'; 
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

  const handleRefresh = () => {
    setValue('');
    onSearch('');
  }

  return (
    <div className="search" >
      <img className="spacex-logo" src={spacexLogo} onClick={handleRefresh} alt='refresh button'/>
      <div className="content">
        <input 
          value={value}
          placeholder="mission name"
          onKeyDown={handleKeyDown}
          onChange={e => setValue(e.target.value)}
        />
        <div className="button" onClick={handleClick}>
          <img src={searchSVG} alt='search icon'/>
        </div>
      </div>
    </div>
  )
}

export default Search;
