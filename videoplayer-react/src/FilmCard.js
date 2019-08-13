import React from 'react';
import './FilmCard.css';

function FilmCard(props) {
  console.log(props);
  return (
    <div className="FilmCard">
      <img src={props.filmImg} />
      <p>{props.filmName}</p>
    </div>
  );
}

export default FilmCard;