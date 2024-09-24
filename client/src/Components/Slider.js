import React from 'react';
import './Slider.css'; 
import { Link } from "react-router-dom";
import imgNature from "./watch.jpg";
import imgSnow from "./watch1.jpg";
import img from "./watch2.jpg";
import imgMountains from "./watch3.jpg";
import bluewatch from './bluewatch.jpg'
import watch4 from './watch4.jpg'
import digiwatch from './digiwatch.jpg'
import digiwatch1 from './digiwatch1.jpg'
import bluetoothwatch from './bluetoothwatch.jpg'
import watch5 from './watch5.jpg'
import watch6 from './watch6.jpg'

const Slider = () => {
  const slides = [
    { src: bluewatch},
    { src: watch4},
    { src: imgSnow},
    { src: digiwatch},
    { src: imgMountains},
    { src: digiwatch1},
    { src: imgNature},
    { src: bluetoothwatch},
    { src: watch5},
    { src: watch6},
    { src: img},
  ];

  return (
    <>
    <div className="slider"><Link to='/shop'>
    <section className='carousel'>
      <ol className='carousel_viewport'>
        {slides.map((slide, index) => (
          <li className='carousel_slider' key={index}>
            <div
              className='carousel_snapper'
              style={{ backgroundImage: `url(${slide.src})` }}
            >
            </div>
          </li>
        ))}
      </ol>
    </section></Link>
    </div>
    
    </>
  );
};

export default Slider;
