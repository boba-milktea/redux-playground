import { useProductListQuery } from '../../app/services/productApi';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import { filteredCategory } from '../../app/services/helpers';
import { useState } from 'react';
import type { ProductType } from '../../types/productTypes';
import ProductList from './ProductList';

const Product = () => {
  const { data, error, isLoading } = useProductListQuery();
  const [products, setProducts] = useState<ProductType[] | undefined>(data);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (data) {
      setProducts(
        data.filter((product) => product.category === e.target.value)
      );
      if (e.target.value === 'all') setProducts(data);
    }
  };

  return (
    <>
      {error ? (
        <Error>Oh no, there was an error!</Error>
      ) : isLoading ? (
        <Loader />
      ) : data ? (
        <div className="flex flex-col justify-center align-center">
          <select
            className="w-11/12 lg:w-5/12 mx-auto p-2 border-4 border-text rounded-2xl font-body"
            onChange={handleChange}
            name="category"
            id="category"
          >
            <option value="all">ALL</option>
            {filteredCategory(data).map((cat, i) => (
              <option key={i} value={`${cat}`}>
                {`${cat.toUpperCase()}`}
              </option>
            ))}
          </select>
          <ul className="grid-card" aria-live="polite">
            <h2 className="sr-only">Products</h2>
            {products
              ? products.map((product) => (
                  <ProductList key={product.id} product={product} />
                ))
              : data.map((product) => (
                  <ProductList key={product.id} product={product} />
                ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Product;
