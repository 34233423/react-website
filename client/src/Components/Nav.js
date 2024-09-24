import React from "react";
import './Nav.css';
import { Link } from "react-router-dom";

export default function Nav(){

    return(
        <>
    <div  className="nav-container" id="nav-container">
    {/* <div className="nav-left">
<img src="" alt="Company logo" className="logo" height="10px" />
    </div> */}
    <div  className="nav-center">
   <ul>
  <li><Link to='/home'><i class="fa fa-fw fa-home"></i>Home</Link></li>
  <li><Link to='/login'><i class="fa fa-sign-in"></i>
login</Link></li>
  <li><Link to='/contact'><i class="fa fa-fw fa-envelope"></i>Contact</Link></li>
  <li><Link to='/about'><i class="fa fa-info-circle"></i>
About</Link></li>
  <li><Link to='/shop'><i class="fa fa-shopping-cart"></i>
Shopping</Link></li>
<li><Link to="/cart"><i className="fa fa-cart-arrow-down"></i> Cart</Link></li>

</ul>
</div>
{/* <div className="nav-right">
    <input type="text" placeholder="Search..." className="search-bar"/>
    </div> */}
    </div>
    
    </>
        );

 }
