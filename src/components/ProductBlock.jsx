import { menu } from '../database/database';
import ProductList from './ProductList';

const ProductBlock = () => {
  return (
    <div className='py-24 relative flex flex-col gap-5'>
      {Object.entries(menu).map(([categoryName, products]) => (
        <div className='flex flex-col gap-5 px-3' key={categoryName}>
          <h1 className="font-bold text-3xl">{categoryName}</h1>
          <ProductList products={products} />
        </div>
      ))}
    </div>
  );
};

export default ProductBlock;
