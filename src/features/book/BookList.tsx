import { Link } from 'react-router';
import type { BookType } from '../../types/bookTypes';
import noImage from '../../assets/no-image.png';

const BookList = ({ book }: { book: BookType }) => {
  const id = book.key.slice(7);

  return (
    <li className="w-10/12">
      <Link to={id}>
        <img
          src={
            book.cover_i
              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
              : noImage
          }
          alt={`Image for ${book?.title}`}
          className="h-60 w-80 object-contain rounded-2xl shadow-2xl border-2 border-border"
        />
        <h2 className="py-2">{book?.title}</h2>
        <p className="mb-2">
          <span className="font-bold">Published Year: </span>
          {book.first_publish_year}
        </p>
        <p className="mb-2">
          <span className="font-bold">Auther(s): </span>
          {book.author_name?.length > 1
            ? book.author_name.join(', ')
            : book.author_name[0]}
        </p>
      </Link>
    </li>
  );
};

export default BookList;
