import type { MovieType } from '../../types/movieTypes';
import noImage from '../../assets/no-image.png'
import { Link } from 'react-router';
const MovieList = ({ movie }: { movie: MovieType }) => {
  return (
    <li>
      <Link to={`${movie.id}`}>
        <img
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
              : noImage
          }
          alt={`Image for ${movie?.title}`}
          className="rounded-2xl shadow-2xl border-2 border-border"
        />

        <h2 className="py-2">{movie?.title}</h2>
        <p className="mb-2">
          <span className="font-bold">Rating:</span>{' '}
          {Math.round(movie?.vote_average * 100) / 100}
        </p>
      </Link>
    </li>
  );
};

export default MovieList;
