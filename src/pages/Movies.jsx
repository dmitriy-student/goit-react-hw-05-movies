import { useState } from 'react';
import { fetchFind } from 'services/Api';
import MovieCard from '../components/MovieCard';

export default function Movies() {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const handleInput = e => {
    const { value } = e.currentTarget;
    setValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) {
      return;
    }

    fetchFind(value)
      .then(resp => resp.json())
      .then(resp => setMovies(resp.results))
      .catch(err => setError(err));

    setValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" onChange={handleInput} value={value} />
        </label>
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.length > 0 &&
          movies.map(item => (
            <li key={item.id}>
              <MovieCard item={item} />
            </li>
          ))}
      </ul>
    </div>
  );
}
