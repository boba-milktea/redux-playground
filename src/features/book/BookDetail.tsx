import { useParams, useNavigate } from 'react-router';
import { useBookDetailQuery } from '../../app/services/bookApi';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import noImage2 from '../../assets/no-image-2.png';
import Button from '../../components/Button';

const BookDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, error } = useBookDetailQuery(String(id));

  return (
    <div className="flex flex-col items-center">
      {error ? (
        <Error>Oh no, there was an error</Error>
      ) : isLoading ? (
        <Loader />
      ) : data ? (
        <>
          <Button style="link" onClick={() => navigate(-1)}>
            &larr; Go Back
          </Button>
          <div className="flex-card" aria-live="polite">
            <img
              src={
                data.covers[0]
                  ? `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`
                  : noImage2
              }
              alt={`Image for ${data.title}`}
              className="w-10/12 md:w-8/12 lg:w-6/12 xl:w-3/12 border-2 rounded-2xl border-border shadow-lg shadow-text"
            />
            <div className="border-2 border-text p-4 md:w-8/12 lg:w-5/12 shadow-lg flex flex-col gap-4 md:text-lg">
              <h2>{data.title}</h2>
              <div>
                <span className="font-bold">Description: </span>
                {data.description?.value
                  ? data.description.value
                  : 'No Description'}
              </div>
              <div>
                <span className="font-bold">Subjects: </span>
                <span>
                  {data.subjects && data.subjects.length > 1
                    ? data.subjects.join(', ')
                    : data.subjects && data.subjects[0]}
                </span>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default BookDetail;
