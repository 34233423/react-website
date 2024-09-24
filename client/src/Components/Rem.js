import React from "react";
import "./Rem.css"
import { useNavigate } from "react-router-dom";
import bluetoothwatch from "./bluetoothwatch.jpg";
import bluewatch from "./bluewatch.jpg";
import watch5 from "./watch5.jpg";

export default function Rem(){
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/shop"); // This will navigate to the shopping page
  };
    return(
        <>
        <div className="cls">
<div className="container1" data-aos-delay="200" data-aos-duration="800" data-aos-easing="ease-in-sine"> 
  <div className="row" >
    <div className="column-66" data-aos="fade-left" data-aos-delay="200" data-aos-duration="800">
    <h1 className="xlarge-font"><b>Smartwatch Pro</b></h1>
            <h1><b>Why Buy It?</b></h1>
            <p><span>Stay connected and fit.</span> The Smartwatch Pro is designed to help you stay connected, monitor your health, and achieve your fitness goals. With advanced tracking features, long battery life, and seamless connectivity, it's the perfect companion for your active lifestyle.</p>
            <button className="buttonn" onClick={handleLearnMore}>Learn More</button>
    </div>
    <div className="column-33" data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
        <img src={bluetoothwatch} alt='image' width="100%" height="200px" className="im"/>
    </div>
  </div>
</div>

<div className="container2" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="800">
  <div className="row" >
    <div className="column-33" data-aos="fade-left" data-aos-delay="200" data-aos-duration="800">
      <img src={bluewatch} alt='image' className="im"/>
    </div>
    <div className="column-66" data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
    <h1 className="xlarge-font"><b>Stunning Display</b></h1>
            <h1 className="large-font"><b>Crisp and Clear</b></h1>
            <p><span>A revolution in resolution.</span> Experience the sharpest and most vibrant display with our Smartwatch Pro. The high-resolution screen ensures that your notifications, fitness data, and apps look stunning and are easy to read, even in bright sunlight.</p>
            <button className="buttonn" onClick={handleLearnMore}>Learn More</button>
    </div>
  </div>
</div>

<div className="container1" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="800" style={{paddingBottom:'80px'}}>
  <div className="row" >
    <div className="column-66" data-aos="fade-left" data-aos-delay="200" data-aos-duration="800">
    <h1 className="xlarge-font"><b>Advanced Features</b></h1>
            <h1 className="large-font"><b>Why Buy It?</b></h1>
            <p><span>All the tools you need.</span> The Smartwatch Pro comes packed with features like heart rate monitoring, GPS tracking, sleep analysis, and more. Whether you're an athlete or just looking to improve your wellness, this smartwatch provides comprehensive data and insights to help you achieve your goals.</p>
            <button className="buttonn" onClick={handleLearnMore}>Learn More</button>
    </div>
    <div className="column-33" data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
        <img src={watch5} alt='image' className="im"/>
    </div>
  </div>
</div>
</div>

</>
)
};