import DrinksBlock from './DrinksBlock';
import Footer from './Footer';
import Header from './Header';
import ProductBlock from './ProductBlock';
import { useState } from 'react';

const Home = ({home, setHome}) => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="min-h-full text-white">
      <div className="bg" />
      <Header
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        home={home}
        setHome={setHome}
      />
        {home === 1 && <ProductBlock setActiveCategory={setActiveCategory} />}
        {home === 2 && <DrinksBlock setActiveCategory={setActiveCategory} />}
      <Footer />
    </div>
  );
}

export default Home;
