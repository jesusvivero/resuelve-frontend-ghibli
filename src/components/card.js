import React from 'react';

export default function Card({ movie }) {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={movie.image} alt={movie.title} className="card-img-top" width="100" />
        <div className="card-body">
          <h4>{movie.title} ({movie.release_date})</h4>
          <p>{movie.description}</p>
        </div>
      </div>
    </div>
  );
}
