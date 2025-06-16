import { useState } from 'react';
import { useBookListQuery } from '../../app/services/bookApi';
import Form from '../../components/Form';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import BookList from './BookList';

const Book = () => {
  const [value, setValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('happy');
  const { data, error, isLoading } = useBookListQuery(searchTerm);
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
        <ul className="grid-card justify-items-center" aria-live="polite">
          <h2 className="sr-only">Movie Search Result</h2>
          {data.docs.map((book) => (
            <BookList key={book.key} book={book} />
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Book;
