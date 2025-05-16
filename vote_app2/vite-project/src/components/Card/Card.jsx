import React from 'react';

export default function Card({ id, description, img, votes, onVote }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} alt={`Smile ${id}`} />
      <div className="card-body">
        <p className="card-text">{description}</p>
        <p>Голосів: {votes}</p>
        <button className="btn btn-primary" onClick={() => onVote(id)}>
          Голосувати
        </button>
      </div>
    </div>
  );
}

