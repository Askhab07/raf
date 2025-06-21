import { useEffect } from 'react';
import { menu } from '../database/database';
import ProductList from './ProductList';

const ProductBlock = ({ setActiveCategory }) => {
  useEffect(() => {
    const categoryElements = Object.keys(menu).map(categoryName => 
      document.getElementById(`category-${categoryName}`)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        // Сортируем по положению на странице (сверху вниз)
        const sortedEntries = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (sortedEntries.length > 0) {
          const topEntry = sortedEntries[0];
          const category = topEntry.target.id.replace('category-', '');
          setActiveCategory(category);
        }
      },
      { 
        root: null,
        rootMargin: '-128px 0px -50% 0px', // Компенсируем высоту header
        threshold: 0.1
      }
    );

    categoryElements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveCategory]);

  return (
    <div className='py-36 relative flex flex-col gap-5'>
      {Object.entries(menu).map(([categoryName, products]) => (
        <div 
          id={`category-${categoryName}`}
          className='flex flex-col gap-5 px-3'
          key={categoryName}
        >
          <h1 className="font-bold text-3xl">{categoryName}</h1>
          <ProductList products={products} />
        </div>
      ))}
    </div>
  );
};

export default ProductBlock;