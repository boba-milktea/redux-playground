import { useNavigate, useParams } from 'react-router';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import type { GenresType } from '../../types/movieTypes';
import { useMovieDetailQuery } from '../../app/services/movieApi';
import noImage2 from '../../assets/no-image-2.png';
import Button from '../../components/Button';

const MovieDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, error } = useMovieDetailQuery(String(id));

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
              className="w-10/12 md:w-8/12 lg:w-6/12 xl:w-3/12 border-2 rounded-2xl border-border shadow-lg shadow-text"
              src={
                data.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
                  : noImage2
              }
              alt={`image for the movie${data.title}`}
            />
            <div className="border-2 border-text p-4 md:w-8/12 lg:w-5/12 shadow-lg flex flex-col gap-4 md:text-lg ">
              <h2>{data.title}</h2>
              <div>
                <span className="font-bold">Category: </span>
                <span>
                  {data.genres
                    ?.map((genre: GenresType) => genre.name)
                    .join(', ')}
                </span>
              </div>
              <div>
                <span className="font-bold">About the movie:</span>
                <p>{data.overview}</p>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default MovieDetail;
