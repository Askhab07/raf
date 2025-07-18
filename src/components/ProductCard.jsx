import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => setFlipped(!flipped);

  return (
    <div
      className={`flip-card ${flipped ? 'flipped' : ''} w-[169px] sm:w-[176px] md:w-[187px] h-64 md:h-72`}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="w-[169px] sm:w-[176px] md:w-[187px] md:h-72 flip-card-inner">
        <div className="flip-card-front text-white">
          <img
            className="w-[169px] brightness-110 sm:w-[176px] md:w-[187px] h-36 md:h-40 rounded-t-xl object-cover"
            src={product.image}
            alt={product.name}
          />
          <div className="bg-black bg-opacity-75 rounded-b-xl flex flex-col px-2 pt-1 pb-2 h-28 justify-between">
            <h2 className="text-sm md:text-base font-medium">{product.name}</h2>
            <div className='flex flex-col gap-2'>
              <h2 className="md:text-lg bg-white bg-opacity-10 rounded-lg flex items-center justify-center">
                {product.price}₽
              </h2>
              <div className="flex justify-center gap-1">
                <span className="bg-white w-1 h-1 rounded-full"></span>
                <span className="bg-white w-1 h-1 rounded-full"></span>
                <span className="bg-white w-1 h-1 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
        {/* BACK */}
        <div className="flip-card-back rounded-xl min-h-64 bg-white bg-opacity-10 backdrop-blur-sm flex flex-col items-center justify-between px-4 pt-4 pb-2 blur-0">
          <div>
            <h2 className="text-lg font-bold mb-2">Ингредиенты:</h2>
            <ul className="list-disc list-inside text-sm">
              {Array.isArray(product.ingredients) ? (
                product.ingredients.map((ing, idx) => <li className='first-letter:capitalize' key={idx}>{ing}</li>)
              ) : (
                <li>{product.ingredients}</li>
              )}
            </ul>
          </div>
          <div className="flex justify-center gap-1">
            <span className="bg-white w-1 h-1 rounded-full"></span>
            <span className="bg-white w-1 h-1 rounded-full"></span>
            <span className="bg-white w-1 h-1 rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;