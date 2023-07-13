import { useState } from 'react';
import { fetchFind } from 'services/Api';

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
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" onChange={handleInput} value={value} />
        </label>
        <button type="submit">Search</button>
          </form>
          {movies.length > 0 && movies.map(item => )}
    </div>
  );
}
