import type { ProductType } from '../../types/productTypes';
import noImage from '../../assets/no-image-2.png';
import { Link } from 'react-router';

const ProductList = ({ product }: { product: ProductType }) => {
  return (
    <li>
      <Link to={`${product.id}`}>
        <img
          src={product.image ? product.image : noImage}
          alt={`Image for ${product?.title}`}
          className="h-60 w-80 object-contain rounded-2xl shadow-2xl border-2 border-border"
        />

        <h2 className="py-2">{product?.title}</h2>
        <div>
          <span className="font-bold">Category: </span>
          <span>{product.category}</span>
        </div>
        <div>
          <span className="font-bold">Price: </span>
          <span>{product.price} €</span>
        </div>
      </Link>
    </li>
  );
};

export default ProductList;
