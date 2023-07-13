import { useEffect, useState } from 'react';
import { fetchFind } from 'services/Api';
import MovieCard from '../components/MovieCard';
import Error from 'components/Error';
import { useLocation, useSearchParams } from 'react-router-dom';

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" onChange={handleInput} value={request} />
        </label>
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.length > 0 &&
          (movies.map(item => (
            <li key={item.id}>
              <MovieCard item={item} backUrl={location} />
            </li>
          )) || <Error error={error} />)}
      </ul>
    </div>
  );
}
