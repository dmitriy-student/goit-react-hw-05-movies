import { Link } from 'react-router-dom';

export default function MovieCard({ item }) {
  return (
    <div key={item.id}>
      <Link to={`movies/${item.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
          alt=""
        />
        <p>Title: {item.title}</p>
        <p>Release: {item.release_date}</p>
        <p>Vote: {item.vote_average}</p>
      </Link>
    </div>
  );
}
