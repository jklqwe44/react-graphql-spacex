import React from "react";
import spacexLogo from '../../assets/spacex_logo.png';
import spacexLogoX from '../../assets/spacex_logo_2.png';
import './Loading.scss';

const Loading = () => {
  return (
    <div className="loading" >
      <div className="content">
        <img className="spacex-logo" src={spacexLogo} alt='loading logo'/>
        <img className="spacex-icon" src={spacexLogoX} alt='loading logo 2'/>
      </div>
    </div>
  )
}

export default Loading;
