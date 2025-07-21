import React from 'react';
import DrinkCard from './DrinkCard';

const DrinkList = ({ drinks, category }) => {
  return (
    <div className="my-auto flex flex-wrap gap-3">
      {drinks.map((drink) => (
        <DrinkCard key={drink.id} product={drink} category={category} />
      ))}
    </div>
  );
};

export default DrinkList;
