import React,{ Component } from "react";
import "./videoContainer.css"
import { Link } from 'react-router-dom';

export default class VideoContainer extends Component{
    constructor(props) {
        super(props);
      
        this.state = {
            video: [],
            token: ""
        };
        this.VideoList = this.VideoList.bind(this);
      }
      
    //   fullVideoList(mydata) {
    //     const {
    //         video,
    //         token
    //     } = this.state;
    //     ;
    //   }

      VideoList() {
        require('dotenv').config();
        const {
            video,
            token
        } = this.state;
        let apikey = process.env.REACT_APP_APIKEY
        let url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=200&playlistId=PLPv96SVEnDc0Ja1b64FXjNpJ4ujJkL1pi&key="+apikey+"&pageToken="
        // fetch(url+token)
        //   .then(resp => resp.json())
        //   .then((resp) => {
        //     console.log(resp); 
        //     console.log(url);
        //     this.setState({token: resp.pageNextToken});
        //     this.setState({video: video.concat(resp.items)});
            
        //   });
        let vList = [];
        fetch(url+token)
        .then( response => response.json())
        .then( response => {
            console.log(response)
            // this.setState({token= response.nextPageToken;
            console.log(token)
            vList = response.items;
            // console.log(url+token)
            return fetch(url+response.nextPageToken)
        })
        .then( response => response.json())
        .then( mydata => this.setState({video: vList.concat(mydata.items)}));

          
      }
      
      componentDidMount() {
        this.VideoList();
      }
      
      render() {
        const {
            pageCurr,
        } = this.props.config;
        return (
          <div className="panel-list">
            {this.state.video.map((item, i) =>{
            console.log(item);
            if(i<pageCurr*12&&i>=(pageCurr-1)*12)
            return(
                // <a href={"https://www.youtube.com/watch?v="+item.snippet.resourceId.videoId}>
                <Link to={{     
                    pathname: '/player/youtube',
                    state:item.snippet.resourceId.videoId
                   }}>
                <div className="video" title={item.snippet.description}>
                <img src={item.snippet.thumbnails.medium.url} />
                <p className="v-title">{item.snippet.title}</p>
                </div>
                </Link>
                // </a>
            )   
            })}
          </div>
        )
      }
}