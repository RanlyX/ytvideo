import React,{ Component } from "react";
// import "./ytvideo.css"
import ReactPlayer from 'react-player'
export default class YTvideo extends React.Component {
    state = { title:"",
              info:"",
              channel:""
            }
  
    getVidInfo() {
        const {
            id,
        } = this.props.config;
        require('dotenv').config();
        let apikey = process.env.REACT_APP_APIKEY
        // let url = "https://www.googleapis.com/youtube/v3/videos?id="+id+"&part=contentDetails&key="+apikey;
        let url = "https://www.googleapis.com/youtube/v3/videos?id="+id+"&part=snippet&key="+apikey;
        return fetch(url)
        .then( response => response.json())
        .then( response => {
            console.log(response.items)
            if(response.items.length > 0)
                this.setState({title: response.items[0].snippet.title, info: response.items[0].snippet.description, channel: response.items[0].snippet.channelTitle});
        });
    }

    componentDidMount() {
        this.getVidInfo();
   }
  
  render() {
    const {
        title,
        info,
        channel
    } = this.state;
    const {
        id,
    } = this.props.config;
    // console.log(data);
    return <div>
        <h2 className="py-3">{title}</h2>
        <div className="player-wrapper">
        <ReactPlayer className='react-player'
          url={"https://www.youtube.com/watch?v="+id}
          playing
          width='100%'
        //   height='100%'
          controls
          config={{
            file: {
              forceHLS: true,
            }
          }}
        />
        <p>{channel}</p>
        <pre>{info}</pre>
        </div>
    </div>
  }
  }