import Error from 'components/Error';
import Gallery from 'components/Gallery/Gallery';
import GalleryItem from 'components/GalleryItem/GalleryItem';
import MovieCard from 'components/MovieCard/MovieCard';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrending } from 'services/Api';

export default function Home(params) {
  const [answerApi, setAnswerApi] = useState([]);
  const [error, setError] = useState();
  const location = useLocation();

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
      <Gallery>
        {answerApi.map(item => (
          <GalleryItem key={item.id}>
            <MovieCard item={item} backUrl={location} />
          </GalleryItem>
        )) || <Error error={error} />}
      </Gallery>
    </>
  );
}
