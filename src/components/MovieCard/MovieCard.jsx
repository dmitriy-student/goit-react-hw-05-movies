import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import imgPlaceholderSmall from '../../images/placeholder-200x300.png';
// import css from './MovieCard.module.css'

export default function MovieCard({ item, backUrl }) {
  const location = useLocation();
  const [srcUrl, setSrcUrl] = useState('');
  const [srcImg, setSrcImg] = useState('');

  useEffect(() => {
    if (location.pathname === '/movies') {
      setSrcUrl(`${item.id}`);
    } else {
      setSrcUrl(`movies/${item.id}`);
    }

    if (!item.poster_path) {
      setSrcImg(imgPlaceholderSmall);
    } else {
      setSrcImg(`https://image.tmdb.org/t/p/w200${item.poster_path}`);
    }
  }, [item.id, item.poster_path, location.pathname]);

  return (
    <div>
      <Link to={srcUrl} state={{ from: backUrl }}>
        <img src={srcImg} alt={item.title} />
        <h2>Movie title: {item.title}</h2>
        <p>Release: {item.release_date}</p>
        <p>Vote: {item.vote_average}</p>
      </Link>
    </div>
  );
}
