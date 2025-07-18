import React from 'react';

const Categories = ({ categories, onSelect }) => {
  return (
    <div className="pt-36 pb-10 px-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {categories.map((category) => (
        <div
          key={category}
          onClick={() => onSelect(category)}
          className="p-6 bg-white bg-opacity-10 rounded-lg shadow-md flex items-center justify-center cursor-pointer hover:bg-opacity-20 transition-colors h-32"
        >
          <span className="text-lg font-medium text-center">{category}</span>
        </div>
      ))}
    </div>
  );
};

export default Categories;