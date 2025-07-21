import React, { useRef, useEffect } from 'react';
import { menu } from '../database/database';
import { drinks } from '../database/database';
import { IoIosArrowBack } from "react-icons/io";

const Header = ({ activeCategory, setActiveCategory, home, setHome }) => {
  const categoriesRef = useRef(null);
  const categoryItemsRef = useRef({});

  useEffect(() => {
    if (activeCategory && categoryItemsRef.current[activeCategory]) {
      const container = categoriesRef.current;
      const category = categoryItemsRef.current[activeCategory];
      
      container.scrollTo({
        left: category.offsetLeft - 5,
        behavior: 'smooth'
      });
    }
  }, [activeCategory]);

  const scrollToCategory = (categoryName) => {
    setActiveCategory(categoryName);
    const element = document.getElementById(`category-${categoryName}`);
    if (element) {
      const headerHeight = 138; // h-32 = 8rem = 128px
      window.scrollTo({
        top: element.offsetTop - headerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="w-full h-36 bg-black bg-opacity-30 backdrop-blur-sm fixed z-10 flex flex-col justify-center items-center">
      <div className='flex items-center justify-center absolute top-4 left-4 bg-gray-200 bg-opacity-10 rounded-full w-12 h-12' onClick={() => setHome(0)}><IoIosArrowBack className='-ml-1 size-7'/></div>
      <div className="w-full max-w-screen-xl px-4">
        <h1 className="font-black text-5xl text-center">RAF</h1>
        <h2 className="text-xl font-light tracking-wider text-center">Menu</h2>
        
        <div className="w-full relative mt-2">
          <div 
            ref={categoriesRef}
            className="flex overflow-x-auto scrollbar-hide pb-2 gap-3"
            style={{ scrollBehavior: 'smooth' }}
          >
            {Object.entries(home === 1 ? menu : drinks).map(([categoryName]) => (
              <button
                ref={el => categoryItemsRef.current[categoryName] = el}
                key={categoryName}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === categoryName
                    ? 'bg-white bg-opacity-20'
                    : 'hover:bg-opacity-20'
                }`}
                onClick={() => scrollToCategory(categoryName)}
              >
                {categoryName}
              </button>
            ))}
          </div>
          
          {/* Градиенты по краям */}
          <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-6 bg-gradient-to-l to-transparent pointer-events-none" />
        </div>
      </div>
    </header>
  );
};

export default Header;