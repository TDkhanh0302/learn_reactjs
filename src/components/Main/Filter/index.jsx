import React, { useRef } from 'react';
import PropTypes from 'prop-types';

Filter.propTypes = {
  candidateList: PropTypes.array.isRequired,
  onInputChange: PropTypes.func,
};

Filter.defaultProps = {
  candidateList: [],
  onInputChange: null,
};

function Filter({ candidateList, onInputChange }) {
  const handleNameInputChange = (evt) => {
    let timeout = 0;
    const searchText = evt.target.value.toUpperCase();

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      const result = candidateList.filter((candidate) => candidate.name.toUpperCase().includes(searchText));
      onInputChange(result);
    }, 3000);
  };

  const handlePositionInputChange = (evt) => {
    let timeout = 0;
    const searchText = evt.target.value.toUpperCase();

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      const result = candidateList.filter((candidate) => candidate.position.toUpperCase().includes(searchText));
      onInputChange(result);
    }, 3000);
  };

  const checkDateInRange = (start, end, date) => {
    return date >= start && date <= end;
  };

  const calendarInput = useRef(null);

  const handleCalendarInputChange = (evt) => {
    let timeout = 0;
    const calendarStart = calendarInput.current.value;
    const calendarEnd = evt.target.value;

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      const result = candidateList.filter((candidate) =>
        checkDateInRange(calendarStart, calendarEnd, candidate.calendar)
      );
      onInputChange(result);
    }, 3000);
  };

  return (
    <div className="filter">
      <h4 className="filter__title">83 Candidates</h4>
      <a href="#" className="filter__clear">
        Clear results
      </a>
      <div className="filter__box">
        <div className="filter__search filter__box-item">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search" onChange={(evt) => handleNameInputChange(evt)} />
        </div>
        <div className="filter__position filter__box-item">
          <input type="text" placeholder="Position" onChange={(evt) => handlePositionInputChange(evt)} />
          <i className="fas fa-user-friends"></i>
        </div>
        <div className="filter__more filter__box-item">
          <input type="date" className="start" ref={calendarInput} />
          <input type="date" className="end" onChange={(evt) => handleCalendarInputChange(evt)} />
        </div>
      </div>
    </div>
  );
}

export default Filter;
