
import React, { useState, useRef } from "react";
import { gql, useQuery } from "@apollo/client";
import Search from "../Search";
import VideoList from "../VideoList";
import Loading from "../Loading";
import './Main.scss';

const PAGE_SIZE = 12

const GET_LAUNCHES = gql`
query Launches($missionName: String!, $offset: Int) {
  launchesPast(find: {mission_name: $missionName}, limit: ${PAGE_SIZE}, offset: $offset) {
    id
    details
    links {
      video_link
      flickr_images
      mission_patch_small

    }
    mission_name
    launch_date_local
    launch_site {
      site_name
      site_name_long
    }
  }
}
`;

function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [isEnding, setIsEnding] = useState(false);
  const [launches, setLaunches] = useState([]);
  const [page, setPage] = useState(0);
  const listInnerRef = useRef();

  const { error, refetch } = useQuery(GET_LAUNCHES, {
    variables: { missionName: '', offset: 0},
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      if(!data.launchesPast || data.launchesPast.length === 0) {
        setIsEnding(true);
      }
      setIsLoading(false);
      setLaunches(prev => [...prev, ...data.launchesPast]);
    }
  });

  const handleSearch = value => {
    if(!isLoading) {
      setIsEnding(false);
      setIsLoading(true);
      setLaunches([]);
      refetch({ missionName: value, offset: 0 });
      setPage(0);
    }
  }

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight > scrollHeight - 5 && !isLoading && !isEnding) {
        setIsLoading(true);
        refetch({ offset: (page + 1) * PAGE_SIZE });
        setPage(prev => prev + 1);
      }
    }
  };

  if (error) return `Error! ${error}`;

  return (
    <div className="main">
      {isLoading && <Loading />}
      <Search onSearch={handleSearch}/>
      <div 
        className="video-container"
        onScroll={onScroll}
        ref={listInnerRef}
      >
        <VideoList data={launches}/>
      </div>
    </div>
  );
}

export default Main;
