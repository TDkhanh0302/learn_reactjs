import React from 'react';
import Admin from './Admin';
import logo from '../../img/logo.jpg';
import Navigation from './Navigation';

SlideBar.propTypes = {};

function SlideBar(props) {
  return (
    <div className="slidebar">
      <img className="logo" src={logo} alt="logo"></img>

      <Navigation />
      <Admin />
    </div>
  );
}

export default SlideBar;
