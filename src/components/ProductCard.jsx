import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div 
      className="relative w-full aspect-[2/3] cursor-pointer perspective-1000"
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d ${
        flipped ? 'rotate-y-180' : ''
      }`}>
        {/* Лицевая сторона */}
        <div className="absolute inset-0 backface-hidden bg-black bg-opacity-75 rounded-xl overflow-hidden flex flex-col">
          <div className="relative h-[55%] flex-shrink-0 overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover brightness-110"
              src={product.image}
              alt={product.name}
              loading="lazy"
            />
          </div>
          <div className="p-2 sm:p-3 flex flex-col gap-1 sm:gap-2 flex-grow justify-between">
            <h2 className="font-medium text-white text-[clamp(12px,3.5vw,16px)] leading-tight line-clamp-2">
              {product.name}
            </h2>
            <div className="flex flex-col gap-2 sm:gap-2 justify-between items-center">
              <span className="flex items-center justify-center w-full bg-white bg-opacity-10 text-white px-2 sm:px-3 py-1 rounded-lg text-[clamp(12px,3.5vw,16px)]">
                {product.price}₽
              </span>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <span key={i} className="w-1 h-1 bg-white rounded-full" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Обратная сторона */}
        <div className="absolute inset-0 backface-hidden bg-white bg-opacity-10 backdrop-blur-sm rounded-xl rotate-y-180 p-3 sm:p-4 overflow-y-auto flex flex-col">
          <h3 className="font-bold text-white text-[clamp(14px,4vw,18px)] mb-2">
            Ингредиенты:
          </h3>
          <ul className="list-disc pl-5 text-[clamp(12px,3.2vw,14px)] space-y-1">
            {Array.isArray(product.ingredients) ? (
              product.ingredients.map((ing, idx) => (
                <li key={idx} className="first-letter:capitalize text-white">
                  {ing}
                </li>
              ))
            ) : (
              <li className="text-white">{product.ingredients}</li>
            )}
          </ul>
          <div className="flex justify-center gap-1 mt-auto pt-2">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="w-1 h-1 bg-white rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;