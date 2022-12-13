import React from "react";
import "./Navbar.css";

import { NavLink, Link } from "react-router-dom";


function Navbar(props) {
  let homeActive = 'active';
  let settingsActive = '';
  if(props.name === "HomePage"){
    homeActive = 'active';
    settingsActive = '';
  }
  else{
    homeActive = '';
    settingsActive = 'active';
  }
  const ShowNav = () => {
    let wrapper = document.querySelector("#wrapper");
    wrapper.classList.toggle('toggled');
  }
  const navLinkStyle = (isActive) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <React.Fragment>
        <aside id="sidebar-wrapper">
            <div className="sidebar-brand">
                <h2>Logo</h2>
            </div>
            <ul className="sidebar-nav">
                <li className={homeActive}>
                    <a href="/"><i className="fa fa-home"></i>Home</a>
                </li>
                <li className={settingsActive}>
                    <a href="/settings"><i className="fa fa-cog"></i>Settings</a>
                </li>                
            </ul>
        </aside>
        <div id="navbar-wrapper">
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a onClick={ShowNav} className="navbar-brand" id="sidebar-toggle"><i className="fa fa-bars"></i></a>
                    </div>
                </div>
            </nav>
        </div>
    </React.Fragment>
  );
}

export default Navbar;
