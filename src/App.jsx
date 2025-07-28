// import { useState } from 'react';
// import './App.css';
// import Home from './components/Home';

// function App() {
//   const [home, setHome] = useState(0);

//   return (
//     <div className="flex flex-col justify-center min-h-screen text-white">
//       <div className="bg" />
//       {home === 0 ? <div className='flex justify-center text-xl font-bold mb-5'>Выбери</div> : <Home home={home} setHome={setHome} />}
//       <div className='flex flex-col items-center gap-3'>
//         {home === 0 && (
//           <button className="w-72 h-14 bg-white bg-opacity-20 rounded-lg text-xl font-bold" onClick={() => setHome(1)}>
//             Еда
//           </button>
//         )}
//         {home === 0 && (
//           <button className="w-72 h-14 bg-white bg-opacity-20 rounded-lg text-xl font-bold" onClick={() => setHome(2)}>
//             Напитки
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Home from './components/Home';

function App() {
  const [home, setHome] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleButtonClick = (homeValue) => {
    setIsAnimating(true);
    setTimeout(() => {
      setHome(homeValue);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="flex flex-col justify-center min-h-screen text-white overflow-hidden relative">
      <div className="bg fixed inset-0 -z-10" />
      
      <AnimatePresence mode="wait">
        {home === 0 ? (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center h-screen"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className='text-xl font-bold mb-5'
            >
              Выбери
            </motion.div>
            
            <div className='flex flex-col items-center gap-3'>
              <motion.button
                className={`w-72 h-14 bg-white bg-opacity-20 rounded-lg text-xl font-bold ${
                  isAnimating ? 'scale-90 opacity-0' : 'scale-100 opacity-100 hover:scale-105'
                } transition-all duration-300`}
                onClick={() => handleButtonClick(1)}
                disabled={isAnimating}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Еда
              </motion.button>
              
              <motion.button
                className={`w-72 h-14 bg-white bg-opacity-20 rounded-lg text-xl font-bold ${
                  isAnimating ? 'scale-90 opacity-0' : 'scale-100 opacity-100 hover:scale-105'
                } transition-all duration-300`}
                onClick={() => handleButtonClick(2)}
                disabled={isAnimating}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Напитки
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Home home={home} setHome={setHome} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;