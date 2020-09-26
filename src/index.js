import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import "./pagination/pagination.css";
import Pagination from "./pagination/pagination.js";
import VideoContainer from "./videoContainer/videoContainer.js";


const content=()=> {
  return(
    <div>
    <VideoContainer></VideoContainer>

        <Pagination config = {{
            totalPage:50,
        }}></Pagination>
      </div>
  );
}


ReactDOM.render(
  // <React.StrictMode>
  //   {/* <App /> */}
  //   {/* <h1>Hello world!</h1> */}
  //   {/* {content()} */}
    
  // </React.StrictMode>,
  <BrowserRouter>
    <Switch>
      <App />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
