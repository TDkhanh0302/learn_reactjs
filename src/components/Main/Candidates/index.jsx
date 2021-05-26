import { realtimeDB } from 'App';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import Filter from '../Filter';

Candidates.propTypes = {};

function Candidates(props) {
  const candidates = [];

  const [candidateList, setCandidateList] = useState(candidates);

  const getCandidateData = () => {
    realtimeDB.ref('candidates/').on('value', (snapshot) => {
      const state = snapshot.val();
      setCandidateList(state);
    });
  };

  const writeCandidateData = (candidateList) => {
    realtimeDB.ref('candidates/').set(candidateList);
  };

  useEffect(() => {
    getCandidateData();
  }, []);

  const removeCandidate = (candidate) => {
    const developers = [...candidateList];
    const newState = developers.filter((data) => {
      return data.id !== candidate.id;
    });
    setCandidateList(newState);
    writeCandidateData(newState);
  };

  const idInput = useRef(null);
  const nameInput = useRef(null);
  const positionInput = useRef(null);
  const calendarInput = useRef(null);

  const [titleButton, setTitleButton] = useState('Add');

  const handleEditButtonClick = (candidate) => {
    idInput.current.value = candidate.id;
    nameInput.current.value = candidate.name;
    positionInput.current.value = candidate.position;
    calendarInput.current.value = candidate.calendar;
    setTitleButton('Save');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let id = idInput.current.value;
    let name = nameInput.current.value;
    let position = positionInput.current.value;
    let calendar = calendarInput.current.value;
    const candidates = [...candidateList];

    if (id && name && position && calendar && !!candidates.length) {
      const index = id;
      candidates[index].name = name;
      candidates[index].position = position;
      candidates[index].calendar = calendar;

      setCandidateList(candidates);
      writeCandidateData(candidates);
    } else if (name && position && calendar) {
      const id = candidates.length;
      candidates.push({ id, name, position, calendar });
      setCandidateList(candidates);
      writeCandidateData(candidates);
    }

    idInput.current.value = '';
    nameInput.current.value = '';
    positionInput.current.value = '';
    calendarInput.current.value = '';
    setTitleButton('Add');
  };

  const handleFavoriteClick = (idx) => {
    const newCandidateList = [...candidateList];

    newCandidateList[idx] = {
      ...newCandidateList[idx],
      favorite: newCandidateList[idx].favorite === 'yes' ? 'no' : 'yes',
    };

    setCandidateList(newCandidateList);
    writeCandidateData(newCandidateList);
  };

  const handleInputChange = (result) => {
    setCandidateList(result);
  };

  return (
    <>
      <Filter candidateList={candidateList} onInputChange={handleInputChange} />

      <div className="candidates__list">
        <h3 className="candidates__title">Add new candidate here</h3>
        <form onSubmit={handleSubmit} className="form-edit">
          <input type="hidden" ref={idInput} />
          <input type="text" ref={nameInput} className="form-edit__input form-edit__input--big" placeholder="Name" />
          <input
            type="text"
            ref={positionInput}
            className="form-edit__input form-edit__input--big"
            placeholder="Position"
          />
          <input
            type="date"
            ref={calendarInput}
            className="form-edit__input form-edit__input--sm"
            placeholder="Calendar"
          />
          <button type="submit" className="btn-submit">
            {titleButton}
          </button>
        </form>

        {candidateList.map((candidate, idx) => (
          <div className="candidates__item" key={candidate.id}>
            <div className="candidates__avt"></div>
            <a href="#">
              <i className="fas fa-ellipsis-v candidates__seting"></i>
            </a>

            <p className="candidates__name">{candidate.name}</p>
            <p className="candidates__position">{candidate.position}</p>

            <div className="candidates__more">
              <a
                className={classNames({
                  candidates__link: true,
                  yes: candidate.favorite === 'yes',
                })}
                onClick={() => handleFavoriteClick(idx)}
                href="#"
              >
                <i className="fas fa-heart"></i>
              </a>
              <a className="candidates__link" href="#">
                <i className="fas fa-calendar-alt"></i>
              </a>
              <a className="candidates__link" href="#">
                <i className="fas fa-comment-dots"></i>
              </a>
            </div>

            <button onClick={() => removeCandidate(candidate)} className="btn-link">
              Delete
            </button>
            <button onClick={() => handleEditButtonClick(candidate)} className="btn-link">
              Edit
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Candidates;
