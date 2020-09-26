import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import './nav.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="horizontal">
          <li className="">
             <Link className="navbar-brand" to="/">
            <img src={logo} alt="react-router-breadcrumb" width="30" height="30" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Index
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/favorite">
              Favorite
            </Link>
          </li>
          <div className=" dropdown">
              <li className="nav-item">
                
                <Link className="nav-link" to="/player">
                Player
                </Link>
            </li>
          <div className="dropdown-content">
          <li className="nav-item">
          <span>
          <Link className="" to="/player/youtube">
                YouTube
              </Link>
          </span>
         
            </li>
            <li className="nav-item">
                <span>
                <Link className="" to="/player/m3u8">
                M3U8
              </Link>
                </span>
              
              </li>
            </div></div>
          
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };