import React from 'react';
import PropTypes from 'prop-types';
import Statistics from './Statistics';
import Filter from './Filter';
import Candidates from './Candidates';

Main.propTypes = {};

function Main(props) {
  return (
    <div className="main">
      <Statistics />
      <Candidates />
    </div>
  );
}

export default Main;
