import Error from 'components/Error';
import MovieCard from 'components/MovieCard';
import { useState, useEffect } from 'react';
import { fetchTrending } from 'services/Api';

export default function Home(params) {
  const [answerApi, setAnswerApi] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    fetchTrending()
      .then(resp => resp.json())
      .then(resp => setAnswerApi(resp.results))
      .catch(err => setError(err));
  }, []);
  //   console.log('answerApi :>> ', answerApi);
  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {answerApi.map(item => (
          <li key={item.id}>
            <MovieCard item={item} />
          </li>
        )) || <Error error={error} />}
      </ul>
    </>
  );
}
