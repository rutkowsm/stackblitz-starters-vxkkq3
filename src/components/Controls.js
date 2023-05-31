import React from 'react';

function Controls({ sortPhotos, shufflePhotos }) {
  return (
    <div className="controls">
      <button onClick={() => sortPhotos('title')}>Sortuj według regionu</button>
      <button onClick={() => sortPhotos('date')}>
        Sortuj według daty dodania
      </button>
      <button onClick={shufflePhotos}>Sortuj losowo</button>
    </div>
  );
}

export default Controls;
