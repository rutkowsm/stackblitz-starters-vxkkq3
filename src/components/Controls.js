import React from 'react';

function Controls({ sortPhotos, shufflePhotos }) {
  return (
    <div className="controls">
      <button onClick={() => sortPhotos('title')}>Sortuj według tytułu</button>
      <button onClick={() => sortPhotos('date')}>Sortuj według daty</button>
      <button onClick={shufflePhotos}>Przetasuj zdjęcia</button>
    </div>
  );
}

export default Controls;
