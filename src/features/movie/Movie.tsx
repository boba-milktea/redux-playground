import Form from '../../components/Form';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import MovieList from './MovieList';
import { useMovieListQuery } from '../../app/services/movieApi';
import { useState } from 'react';

const Movie = () => {
  const [value, setValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('stich');
  const { data, error, isLoading } = useMovieListQuery(searchTerm);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchTerm(value);
    setValue('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} onChange={handleChange} value={value} />
      {error ? (
        <Error>Oh no, there was an error!</Error>
      ) : isLoading ? (
        <Loader />
      ) : data ? (
        <ul className="grid-card" aria-live="polite">
          <h2 className="sr-only">Movie Search Result</h2>
          {data.results.map((movie) => (
            <MovieList key={movie.id} movie={movie} />
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Movie;
