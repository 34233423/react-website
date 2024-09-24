
import React from 'react';
import Nav from '../Nav';
import Rem from '../Rem';
import Slider from '../Slider';
import Welpage from '../Welpage';
import Footer from './Footer';


function Home() {

  return (
    <div className="A">
      <Welpage />
      <Nav />
      <Rem />
      <Slider />
      
      <Footer />
    </div>
  );
}

export default Home;
