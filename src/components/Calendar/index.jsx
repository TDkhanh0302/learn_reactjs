import React from 'react';

Calendar.propTypes = {};

function Calendar(props) {
  const datas = [
    {
      id: 0,
      date: '02 February',
      item: {
        itemID: 0,
        hours: '09:00',
        position: 'UX Design',
        work: 'Tech interview',
      },
      item: {
        itemID: 1,
        hours: '09:00',
        position: 'UX Design',
        work: 'Tech interview',
      },
    },
    {
      id: 1,
      date: '11 February',
      item: {
        itemID: 2,
        hours: '09:00',
        position: 'QA Engineer',
        work: 'Send test task',
      },
      item: {
        itemID: 3,
        hours: '11:00',
        position: 'Backend Developer',
        work: 'Meeting',
      },
    },
  ];
  return (
    <div className="calendar">
      <h4 className="calendar__title">Calendar</h4>
      <div className="calendar__icon">
        <i className="fas fa-calendar-alt"></i>
      </div>

      {datas.map((data) => (
        <div key={data.id} className="timeline">
          <span className="timeline__date">{data.date}</span>
          <i className="fas fa-ellipsis-v timeline__seting"></i>

          <div key={data.item.itemID} className="timeline__item">
            <span className="timeline__hours">{data.item.hours}</span>
            <div className="dash"></div>
            <span className="timeline__job-position">{data.item.position}</span>
            <span className="timeline__work">{data.item.work}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Calendar;
