import { useState } from 'react';
import './App.css';
import Home from './components/Home';

function App() {
  const [home, setHome] = useState(0);

  return (
    <div className="flex flex-col justify-center min-h-screen text-white">
      <div className="bg" />
      {home === 0 ? <div className='flex justify-center text-xl font-bold mb-5'>Выбери</div> : <Home home={home} setHome={setHome} />}
      <div className='flex flex-col items-center gap-3'>
        {home === 0 && (
          <button className="w-72 h-14 bg-white bg-opacity-20 rounded-lg text-xl font-bold" onClick={() => setHome(1)}>
            Еда
          </button>
        )}
        {home === 0 && (
          <button className="w-72 h-14 bg-white bg-opacity-20 rounded-lg text-xl font-bold" onClick={() => setHome(2)}>
            Напитки
          </button>
        )}
      </div>
    </div>
  );
}

export default App;