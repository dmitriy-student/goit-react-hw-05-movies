import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFindCredits } from 'services/Api';

export default function Cast() {
  const [reviewes, setReviewes] = useState([]);
  const [error, setError] = useState('');
  const { movieId } = useParams();
  console.log('movieId :>> ', movieId);
  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchFindCredits(movieId)
      .then(resp => resp.json())
      .then(resp => setReviewes(resp.cast))
      .catch(err => setError(err));
  }, [movieId]);
  return (
    <div>
      {reviewes.map(item => (
        <div key={item.cast_id}>
          <img
            src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
            alt={item.name}
          />
          <p>{item.name}</p>
          <p>Character: {item.character}</p>
        </div>
      ))}
    </div>
  );
}
