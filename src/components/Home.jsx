// import DrinksBlock from './DrinksBlock';
// import Footer from './Footer';
// import Header from './Header';
// import ProductBlock from './ProductBlock';
// import { useState } from 'react';

// const Home = ({home, setHome}) => {
//   const [activeCategory, setActiveCategory] = useState(null);

//   return (
//     <div className="min-h-screen text-white">
//       <div className="bg" />
//       <Header
//         activeCategory={activeCategory}
//         setActiveCategory={setActiveCategory}
//         home={home}
//         setHome={setHome}
//       />
//         {home === 1 && <ProductBlock setActiveCategory={setActiveCategory} />}
//         {home === 2 && <DrinksBlock setActiveCategory={setActiveCategory} />}
//       <Footer />
//     </div>
//   );
// }

// export default Home;
import DrinksBlock from './DrinksBlock';
import Footer from './Footer';
import Header from './Header';
import ProductBlock from './ProductBlock';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Home = ({ home, setHome }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000); // Приветствие показывается 2 секунды
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-full text-white relative overflow-hidden">
      <div className="bg fixed inset-0 -z-10" />
      
      {/* Анимация приветствия */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50"
          >
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: 'spring',
                stiffness: 100,
                damping: 10
              }}
              className="text-4xl font-bold"
            >
              Добро пожаловать!
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      <Header
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        home={home}
        setHome={setHome}
      />

      {/* Плавный переход между категориями */}
      <AnimatePresence mode="wait">
        <motion.div
          key={home}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {home === 1 && <ProductBlock setActiveCategory={setActiveCategory} />}
          {home === 2 && <DrinksBlock setActiveCategory={setActiveCategory} />}
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Home;