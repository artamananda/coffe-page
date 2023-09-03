import React from 'react';
import Hero from '../components/Hero/Hero';
import Advantage from '../components/Advantage/Advantage';
import Products from '../components/Products/Products';
import Testimonial from '../components/Testimonial/Testimonial';
import FrequentlyAskedQuestion from '../components/FrequentlyAskedQuestion/FrequentlyAskedQuestion';
import BuyProduct from '../components/BuyProduct/BuyProduct';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <div>
      <Hero />
      <Advantage />
      <Products />
      <Testimonial />
      <FrequentlyAskedQuestion />
      <BuyProduct />
      <Footer />
    </div>
  );
}

export default Home;
