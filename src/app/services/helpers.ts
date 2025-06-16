import type { ProductType } from '../../types/productTypes';

export const filteredCategory = (data: ProductType[]) => {
  return Array.from(new Set(data.flatMap((product) => product.category)));
};
