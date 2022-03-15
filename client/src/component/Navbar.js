import React from 'react';
import './HeaderNav.css'
// import { Link } from 'react-router-dom'
import Home from '../pages/Home';
import MorePhotos from '../pages/MorePhotos';
const Navbar = () => {
  return (
    <div className="navbar">
        <ul className="navbar_links">
          
          {/* <Link to='/' eact component={Home}className="nav_link"> Home</Link>
          <Link to='/album' exact component={MorePhotos}className="nav_link">Pics</Link>
          <Link className="nav_link">Contact</Link> */}
        </ul>
    </div>
  )
}
export default Navbar;