import React from "react";
import ReactPlayer from 'react-player';
import dayjs from 'dayjs'
import spacexLogoX from '../../assets/spacex_logo_2.png'; 
import dateSVG from '../../assets/svg/date.svg';
import mapSVG from '../../assets/svg/map.svg';
import './VideoList.scss';

const VideoList = ({ data = [] }) => {
  const handleImgError = e => {
    e.currentTarget.onerror = null;
    e.currentTarget.src=spacexLogoX;
  }
  return (
    <div className="video-list">
      {data.map(item => (
          <div key={item.id} className="video-item">
            <div className="label">
              <img 
                className="label-icon"
                src={item.links.mission_patch_small || spacexLogoX}
                alt='mission patch icon'
                onError={handleImgError}
              />
              <div className="label-text">
                <div className="title" title={item.mission_name}>
                  {item.mission_name}
                </div>
                <div className="sub-title">
                  <div className="date" title={dayjs(item.launch_date_local).format('YYYY-MM-DD HH:mm:ss')}>
                    <img src={dateSVG} alt='date icon'/>
                    <span>{dayjs(item.launch_date_local).format('YYYY-MM-DD')}</span>
                  </div>
                  <div className="site-name"title={item.launch_site.site_name_long}>
                    <img src={mapSVG} alt='map icon'/>
                    <span>
                      {item.launch_site.site_name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="player-wrapper">
              <ReactPlayer 
                className="react-player"
                controls
                url={item.links.video_link}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default VideoList;
