import { useEffect, useState } from 'react';
import {
  Link,
  useParams,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { fetchFindDetails } from 'services/Api';
import imgPlaceholderBig from '../images/placeholder-300x450.png';
import Error from 'components/Error';

export default function MovieDetails() {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState('');
  const [srcImg, setSrcImg] = useState('');
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handleMoveBack = () => {
    if (location.state) {
      navigate(location.state.from);
      return;
    }

    navigate('/');
  };

  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchFindDetails(movieId)
      .then(resp => resp.json())
      .then(resp => setMovie(resp))
      .catch(err => setError(err));
  }, [movieId]);

  useEffect(() => {
    if (!movie.poster_path) {
      setSrcImg(imgPlaceholderBig);
    } else {
      setSrcImg(`https://image.tmdb.org/t/p/w300${movie.poster_path}`);
    }
  }, [movie.poster_path]);

  return (
    <>
      {/* <Link to={location.state.from}>Back to previos page</Link> */}
      <button onClick={() => handleMoveBack()}>Go back</button>
      {(
        <div>
          <div>
            <img src={srcImg} alt={movie.title} />
            <div>
              <h2>{movie.title}</h2>
              <p></p>
              <p>Overview</p>
              <p>{movie.overview}</p>
              <p>Genres</p>
              <p></p>
            </div>
          </div>
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to={'cast'}>Cast</Link>
              </li>
              <li>
                <Link to={'reviews'}>Reviews</Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      ) || <Error error={error} />}
    </>
  );
}
