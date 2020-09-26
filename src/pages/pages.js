// /src/pages.js

import React from 'react';
import Pagination from "../pagination/pagination.js";
import './pages.css'
import ReactPlayer from 'react-player'
import YTvideo from "../pages/ytvideo.js";
import {useLocation} from "react-router-dom";

/**
 * These are root pages
 */
const Index = () => {
  return <div className="Container">
         <h2 className="py-3">Index</h2>
         
         <Pagination config = {{
            totalPage: 100%12 ? parseInt(100/12)+1 :parseInt(100/12),
         }}></Pagination>
         </div>;
};

const Favorite = () => {
  return <h2 className="py-3">Favorite</h2>;
};

const getVideoData = (id) => {
    
}

const Player = () => {
    let location = useLocation();
  return <div className="Container">
        <YTvideo config = {{
            id: location.state,
         }}></YTvideo>
    </div>;
    
};

const M3U8 = () => {
    
    return <div className="Container">
          
          <h2 className="py-3">Player</h2>
          
          <ReactPlayer className='react-player'
            //这里是由上级页面传过来的视频地址
          //   url="https://bitdasha.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"
            url="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
            playing
            width='100%'
            height='100%'
            controls
            config={{
              file: {
                forceHLS: true,
              }
            }}
          />
          
     
      
          {/* <video id="my-video" class="video-js" controls preload="auto" width="640" height="264" data-setup="{}">  */}
          {/* <source src="https://bitdasha.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8" type="video/m3u8"></source> */}
          {/* <source src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" type="video/m3u8"></source> */}
          {/* </video>  */}
          {/* <video id="current-video" class="video-js vjs-default-skin vjs-big-play-centered" controls></video> */}
              
      </div>;
      
  };

export { Index, Favorite, Player, M3U8 };