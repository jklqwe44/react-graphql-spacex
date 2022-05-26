import React from "react";
import './Loading.scss';

const Loading = () => {
  return (
    <div className="loading" >
      <div className="content">
        <img className="spacex-logo" src='spacex_logo.png'/>
        <img className="spacex-icon" src='spacex_logo_2.png'/>
      </div>
    </div>
  )
}

export default Loading;
