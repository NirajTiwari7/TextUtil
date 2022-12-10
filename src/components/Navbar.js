import React from "react";

// IMPORTING PORTYPES [
// --- // agar mai chahta ho ki title ka value sirf string hi raha agar mai number dal ta ho toh error da [ TOH MUJHE NAVBAR.JS MAI PROTYPES KO INMPORT KARNA HOGA AUR CODE LIKHNA HOGA] ]

import PropTypes from "prop-types";


// ++++*------ [ BEFORE USING PROPS YOU HAVE TO WRITE PROPS INSIDE THE BRAKET OF NAVABAR LIKE THIS  export default function Navbar(props) ]
export default function Navbar(props) {
  const alert = (type , message ) => {
    {props.setalert(type , message)}
  }
  return (
    <>
      {/*  ==  HTML KA ANDAR MAI CURLY BRACKET LAGA KA JAVASCRIPT LIKH SAKTA HO  [** APP.JS KA CODE DEKHO ]*/}

      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active navlink-Warning "
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
             
              <li className="nav-item">
                <a className="nav-link" href="/About">
                  {props.abouttext}
                </a>
              </li>
            </ul>
            <div className="d-flex">

              {/** onclick ko FUNCTION chahiye hota hai functiuon call nahi is liya ekfunction bana diya */}
              
              <div className="bg-primary rounder mx-2" style={{height:'30px' , width:'30px' , cursor:'pointer'}}  onClick={()=>{props.toggleMode('primary')}} > </div>

              <div className="bg-danger rounder mx-2" style={{height:'30px' , width:'30px' , cursor:'pointer'}}  onClick={()=>{props.toggleMode('danger')}} > </div>

              <div className="bg-success rounder mx-2" style={{height:'30px' , width:'30px' , cursor:'pointer'}}  onClick={()=>{props.toggleMode('success')}} > </div>

              <div className="bg-warning rounder mx-2" style={{height:'30px' , width:'30px' , cursor:'pointer'}}  onClick={()=>{props.toggleMode('warning')}} > </div>

              <div className="bg-light rounder mx-2" style={{height:'30px' , width:'30px' , cursor:'pointer' , border: '2px solid'}}  onClick={()=>{props.toggleMode('light')}}  > </div>

              <div className="bg-dark rounder mx-2" style={{height:'30px' , width:'30px' , cursor:'pointer'  , border: '2px solid white'}}  onClick={()=>{props.toggleMode('dark')}} > </div>

              </div>
            {/*
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> 
            */}
            {/*
              <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={()=>{props.toggleMode(null)}}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable Dark Mode
              </label>
            </div>
          */}
          </div>
        </div>
      </nav>
    </>
  );
}
/*
Navbar.propTypes = {
    title: PropTypes.string,
    abouttext: PropTypes.string  
};
*/
// if the title is not given it will throw an error because i have used required
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abouttext: PropTypes.string.isRequired,
};

// if there is no title and abouttext default will be shown  [ reqired will also not throw an error because there is a default ]
Navbar.defaultProps = {
  title: "Set title here",
  abouttext: "About text here",
};
