import { useEffect, useState } from "react";
import React from "react";
import vid from "./vid.mp4";
import "./Welpage.css"
import Nav from "./Nav";
//import Nav from "./Nav.js"
export default function Welpage(){

    const [navHeight, setNavHeight] = useState(0);

    useEffect(() => {
      
      const calculateNavHeight = () => {
        const windowHeight = window.innerHeight;
        const divHeight = document.getElementById('welcome').offsetHeight;
        const calculatedHeight = windowHeight - divHeight;
        setNavHeight(calculatedHeight);
        document.getElementById('nav-container').style.height = calculatedHeight + '%';
        window.addEventListener('resize', calculateNavHeight);
      };
  
      // Call the function initially and on window resize
      calculateNavHeight();
      
  
      // Cleanup the event listener on component unmount
      return () => {
       // window.removeEventListener('resize', calculateNavHeight);
      };
    }, []);

    return(
        <>
      
 <div  className="welcome" id="welcome">
<video  autoPlay muted loop id="myVideo" >
    
    <source src={vid} type="video/mp4" >
    </source></video>
    <div  className="text">
    <span>Introducing the  future of Time</span>
    <span >World's NO.1 Brand.</span>
    </div>
</div>


</>
    )
};

//<img src={img} alt="image" width="100%" height="565px" />