import { useEffect } from 'react';
import { drinks } from '../database/database';
import DrinkList from './DrinkList';

const DrinksBlock = ({ setActiveCategory }) => {
  useEffect(() => {
    const categoryElements = Object.keys(drinks).map(categoryName => 
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
    <div className='pt-36 pb-10 relative flex flex-col gap-5'>
      {Object.entries(drinks).map(([categoryName, drinks]) => (
        <div 
          id={`category-${categoryName}`}
          className='flex flex-col justify-between gap-5 px-3'
          key={categoryName}
        >
          <h1 className="font-bold text-3xl">{categoryName}</h1>
          <DrinkList drinks={drinks} category={categoryName} />
        </div>
      ))}
    </div>
  );
};

export default DrinksBlock;