import { useEffect, useState } from 'react';
import { fetchFind } from 'services/Api';
import css from './Movies.module.css';
import MovieCard from '../components/MovieCard/MovieCard';
import Error from 'components/Error';
import { useLocation, useSearchParams } from 'react-router-dom';
import Gallery from 'components/Gallery/Gallery';
import GalleryItem from 'components/GalleryItem/GalleryItem';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [request, setRequest] = useState(searchParams.get('req') ?? '');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const location = useLocation();

  const handleInput = e => {
    const { value } = e.currentTarget;
    setRequest(value);
    // setSearchParams({ req: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setRequest('');
    setSearchParams({ req: request });
  };

  useEffect(() => {
    const request = searchParams.get('req');
    if (request === null) {
      return;
    }

    fetchFind(request)
      .then(resp => resp.json())
      .then(resp => setMovies(resp.results))
      .catch(err => setError(err));

    setRequest('');
  }, [searchParams]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className={css.input}
            type="text"
            onChange={handleInput}
            value={request}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <Gallery>
        {movies.length > 0 &&
          (movies.map(item => (
            <GalleryItem key={item.id}>
              <MovieCard item={item} backUrl={location} />
            </GalleryItem>
          )) || <Error error={error} />)}
      </Gallery>
    </>
  );
}
