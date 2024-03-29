import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFindReviews } from 'services/Api';
import Error from 'components/Error';

export default function Reviews() {
  const [reviewes, setReviewes] = useState([]);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchFindReviews(movieId)
      .then(resp => resp.json())
      .then(resp => setReviewes(resp.results))
      .catch(err => setError(err));
  }, [movieId]);

  return (
    <div>
      {reviewes.map(item => (
        <div key={item.id}>
          <p>Author: {item.author}</p>
          <p>Reviewe: {item.content}</p>
        </div>
      )) || <Error error={error} />}
    </div>
  );
}
