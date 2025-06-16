import { useParams, useNavigate } from 'react-router';
import { useProductDetailQuery } from '../../app/services/productApi';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import Button from '../../components/Button';

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, error } = useProductDetailQuery(String(id));

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
              className="w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 border-2 rounded-2xl border-border shadow-lg shadow-text"
              src={data.image}
              alt={`image for the product ${data.title}`}
            />
            <div className="border-2 border-text p-4 md:w-8/12 lg:w-5/12 shadow-lg flex flex-col gap-4 md:text-lg ">
              <h2>{data.title}</h2>
              <div>
                <span className="font-bold">Category: </span>
                <span>{data.category}</span>
              </div>
              <div>
                <span className="font-bold">Price: </span>
                <span>{data.price} €</span>
              </div>
              <div>
                <span className="font-bold">Description: </span>
                {data.description}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ProductDetail;
