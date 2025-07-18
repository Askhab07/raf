import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductBlock from './components/ProductBlock';
import { useState } from 'react';

function App() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="min-h-full text-white">
      <div className="bg" />
      <Header
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ProductBlock setActiveCategory={setActiveCategory} />
      <Footer />
    </div>
  );
}

export default App;