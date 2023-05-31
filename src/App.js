import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PhotoList from './components/PhotoList';
import Controls from './components/Controls';
import './style.css';

const initialPhotos = [
  {
    id: uuidv4(),
    title: 'Toskania',
    date: '2020-02-12',
    url: 'https://florencja.pl/wp-content/uploads/2020/09/castiglione-della-pescaia-old-town-and-sea-on-background-mar_shutterstock_1829795192.jpg',
    rating: 0,
    ratingsCount: 0,
    upvotes: 0,
    downvotes: 0,
  },
  {
    id: uuidv4(),
    title: 'Abruzja',
    date: '2019-04-23',
    url: 'https://travelitalia.pl/wp-content/uploads/2020/12/abruzja1.jpg',
    rating: 0,
    ratingsCount: 0,
    upvotes: 0,
    downvotes: 0,
  },
  {
    id: uuidv4(),
    title: 'Umbria',
    date: '2017-11-20',
    url: 'https://www.travellingking.com/wp-content/uploads/2019/03/Panorama-of-Assisi-Province-of-Perugia-Umbria-Region-1000x667.jpg',
    rating: 0,
    ratingsCount: 0,
    upvotes: 0,
    downvotes: 0,
  },
  {
    id: uuidv4(),
    title: 'Apulia',
    date: '2020-05-17',
    url: 'https://travelitalia.pl/wp-content/uploads/2021/07/wonderful-quaint-village-of-polignano-a-mare-apulia-italy_shutterstock_231227089-scaled.jpg',
    rating: 0,
    ratingsCount: 0,
    upvotes: 0,
    downvotes: 0,
  },
  {
    id: uuidv4(),
    title: 'Marche',
    date: '2023-03-12',
    url: 'https://www.gazzettaitalia.pl/wp-content/uploads/2020/07/Marche_08-Monti-sibillini-Ussita-1.jpg',
    rating: 0,
    ratingsCount: 0,
    upvotes: 0,
    downvotes: 0,
  },
  {
    id: uuidv4(),
    title: 'Kampania',
    date: '2019-07-30',
    url: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2022/01/tom-podmore-amalfi-coast-campania.jpg',
    rating: 0,
    ratingsCount: 0,
    upvotes: 0,
    downvotes: 0,
  },
  {
    id: uuidv4(),
    title: 'Basilikata',
    date: '2018-05-22',
    url: 'https://www.winetourism.com/files/2020/07/Depositphotos_64007531_l-2015-min.jpg',
    rating: 0,
    ratingsCount: 0,
    upvotes: 0,
    downvotes: 0,
  },
  {
    id: uuidv4(),
    title: 'Kalabria',
    date: '2020-03-21',
    url: 'https://cor.europa.eu/en/PublishingImages/Tropea%20Village%20Calabria%20pic.jpg',
    rating: 0,
    ratingsCount: 0,
    upvotes: 0,
    downvotes: 0,
  },
  {
    id: uuidv4(),
    title: 'Molise',
    date: '2022-03-11',
    url: 'https://travelitalia.pl/wp-content/uploads/2021/07/_shutterstock_1213551655-scaled.jpg',
    rating: 0,
    ratingsCount: 0,
    upvotes: 0,
    downvotes: 0,
  },
  {
    id: uuidv4(),
    title: 'Liguria',
    date: '2022-04-24',
    url: 'https://travelitalia.pl/wp-content/uploads/2021/08/famous-bay-with-colorful-mediterranean-buildings-and-spectac_shutterstock_1289399197-scaled.jpg',
    rating: 0,
    ratingsCount: 0,
    upvotes: 0,
    downvotes: 0,
  },

  // ... więcej zdjęć w formacie JSON
];

function App() {
  const [photos, setPhotos] = useState(initialPhotos);

  useEffect(() => {
    const storedPhotos = localStorage.getItem('photos');
    if (storedPhotos) {
      setPhotos(JSON.parse(storedPhotos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('photos', JSON.stringify(photos));
  }, [photos]);

  const deletePhoto = (id) => {
    setPhotos(photos.filter((photo) => photo.id !== id));
  };

  const sortPhotos = (criteria) => {
    const sortedPhotos = [...photos].sort((a, b) => {
      if (criteria === 'title') {
        return a.title.localeCompare(b.title);
      } else {
        return new Date(a.date) - new Date(b.date);
      }
    });

    setPhotos(sortedPhotos);
  };

  const shufflePhotos = () => {
    const shuffledPhotos = [...photos];
    for (let i = shuffledPhotos.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledPhotos[i], shuffledPhotos[j]] = [
        shuffledPhotos[j],
        shuffledPhotos[i],
      ];
    }

    setPhotos(shuffledPhotos);
  };

  const ratePhoto = (id, rating) => {
    setPhotos(
      photos.map((photo) =>
        photo.id === id
          ? {
              ...photo,
              rating: photo.rating + rating,
              ratingsCount: photo.ratingsCount + 1,
            }
          : photo
      )
    );
  };

  const upvotePhoto = (id) => {
    setPhotos(
      photos.map((photo) =>
        photo.id === id ? { ...photo, upvotes: photo.upvotes + 1 } : photo
      )
    );
  };

  const downvotePhoto = (id) => {
    setPhotos(
      photos.map((photo) =>
        photo.id === id ? { ...photo, downvotes: photo.downvotes + 1 } : photo
      )
    );
  };

  return (
    <div className="App">
      <h1>Photo Gallery</h1>
      <Controls sortPhotos={sortPhotos} shufflePhotos={shufflePhotos} />
      <PhotoList
        photos={photos}
        deletePhoto={deletePhoto}
        ratePhoto={ratePhoto}
        upvotePhoto={upvotePhoto}
        downvotePhoto={downvotePhoto}
      />
    </div>
  );
}

export default App;
