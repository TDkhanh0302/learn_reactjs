import React from 'react';
import PropTypes from 'prop-types';

Statistics.propTypes = {};

function Statistics(props) {
  return (
    <div className="statistics">
      <h4 className="statistics__title">You need to hire</h4>
      <a href="#" className="statistics__view">
        View all
      </a>

      <div className="statistics__list">
        <div className="statistics__box">
          <span className="statistics__num">2</span>
          <span className="statistics__position">Project manager</span>
          <span className="statistics__amount">10 condidates</span>

          <div className="single-chart">
            <svg viewBox="0 0 36 36" className="circular-chart orange">
              <path
                className="circle-bg"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="circle"
                strokeDasharray="75, 100"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="percentage">
                75%
              </text>
            </svg>
          </div>
        </div>

        <div className="statistics__box">
          <span className="statistics__num">1</span>
          <span className="statistics__position">Senior UI/UX Designer</span>
          <span className="statistics__amount">3 condidates</span>

          <div className="single-chart">
            <svg viewBox="0 0 36 36" className="circular-chart grey">
              <path
                className="circle-bg"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="circle"
                strokeDasharray="0, 100"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="percentage">
                0%
              </text>
            </svg>
          </div>
        </div>

        <div className="statistics__box">
          <span className="statistics__num">3</span>
          <span className="statistics__position">Content manager</span>
          <span className="statistics__amount">7 condidates</span>

          <div className="single-chart">
            <svg viewBox="0 0 36 36" className="circular-chart green">
              <path
                className="circle-bg"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="circle"
                strokeDasharray="50, 100"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="percentage">
                50%
              </text>
            </svg>
          </div>
        </div>

        <div className="statistics__box">
          <span className="statistics__num">8</span>
          <span className="statistics__position">JavaScript Developer</span>
          <span className="statistics__amount">21 condidates</span>

          <div className="single-chart">
            <svg viewBox="0 0 36 36" className="circular-chart green">
              <path
                className="circle-bg"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="circle"
                strokeDasharray="65, 100"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="percentage">
                65%
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
