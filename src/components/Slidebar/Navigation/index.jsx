import React from 'react';
import PropTypes from 'prop-types';

Navigation.propTypes = {};

function Navigation(props) {
  return (
    <div>
      <div className="nav">
        <div className="nav__title">Tools</div>
        <ul className="nav__list">
          <li className="nav__item">
            <i className="fab fa-windows nav__item-icon"></i>
            <a href="#" className="nav__link">
              Dashboard
            </a>
          </li>
          <li className="nav__item">
            <i className="fab fa-buffer nav__item-icon"></i>
            <a href="#" className="nav__link">
              Offers
            </a>
          </li>
          <li className="nav__item">
            <i className="fas fa-user-alt nav__item-icon"></i>
            <a href="./candidate-profile.html" className="nav__link">
              People
            </a>
          </li>
          <li className="nav__item">
            <i className="fas fa-chart-bar nav__item-icon"></i>
            <a href="#" className="nav__link">
              Statistics
            </a>
          </li>
          <li className="nav__item">
            <i className="fas fa-file-alt nav__item-icon"></i>
            <a href="#" className="nav__link">
              Documents
            </a>
          </li>
        </ul>
      </div>

      <div className="nav">
        <div className="nav__title">Other</div>
        <ul className="nav__list">
          <li className="nav__item">
            <i className="fas fa-comment-dots nav__item-icon"></i>
            <a href="#" className="nav__link">
              Chat
            </a>
            <div className="chat-notification">5</div>
          </li>
          <li className="nav__item">
            <i className="fas fa-info-circle nav__item-icon"></i>
            <a href="#" className="nav__link">
              Support
            </a>
          </li>
          <li className="nav__item">
            <i className="fas fa-calendar-alt nav__item-icon"></i>
            <a href="#" className="nav__link">
              Calendar
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
