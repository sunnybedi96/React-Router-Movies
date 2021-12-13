import React from 'react';

export default function SavedList(props) {
  const history = useHistory();

  const setHome = () => {
    history.push('/')
  }
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div className="home-button">Home</div>
      <button className="home-button" onClick={setHome}>Home</button>
    </div>
  );
}
