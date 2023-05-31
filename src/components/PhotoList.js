import React from 'react';

function Photo({ photo, deletePhoto, ratePhoto, upvotePhoto, downvotePhoto }) {
  const avgRating = photo.ratingsCount
    ? (photo.rating / photo.ratingsCount).toFixed(1)
    : 0;

  return (
    <div className="photo">
      <h3>{photo.title}</h3>
      <img src={photo.url} alt={photo.title} />
      <p>Data dodania: {photo.date}</p>
      <button onClick={() => deletePhoto(photo.id)}>Usuń</button>
      <div>
        <span>Ocena: {avgRating} </span>
        {[1, 2, 3, 4, 5].map((star) => (
          <button key={star} onClick={() => ratePhoto(photo.id, star)}>
            {star}
          </button>
        ))}
      </div>
      <div>
        <button onClick={() => upvotePhoto(photo.id)}>
          👍 {photo.upvotes}
        </button>
        <button onClick={() => downvotePhoto(photo.id)}>
          👎 {photo.downvotes}
        </button>
      </div>
    </div>
  );
}

function PhotoList({
  photos,
  deletePhoto,
  ratePhoto,
  upvotePhoto,
  downvotePhoto,
}) {
  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <Photo
          key={photo.id}
          photo={photo}
          deletePhoto={deletePhoto}
          ratePhoto={ratePhoto}
          upvotePhoto={upvotePhoto}
          downvotePhoto={downvotePhoto}
        />
      ))}
    </div>
  );
}

export default PhotoList;
