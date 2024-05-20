import React from 'react'
import { Outlet, Link } from "react-router-dom";
import "./Nav.scss"

function Nav() {
  return (
    <div>
        <nav className='nav'>
            <div className="logo">
                <img src="https://preview.colorlib.com/theme/florist/img/logo.png" alt="" />
            </div>
        <ul className='items'>
          <li className="item-list">
            <Link to="/" className='item'>Home</Link>
          </li>
          <li className="item-list">
            <Link to="/add" className='item'>add</Link>
          </li>
          <li className="item-list">
            <Link to="/about" className='item'>about</Link>
          </li>
          <li className="item-list">
            <Link to="/ SERVICES" className='item'> SERVICES</Link>
          </li>
          <li className="item-list">
            <Link to="/SHOP " className='item'>SHOP</Link>
          </li>
          <li className="item-list">
            <Link to="/PAGES " className='item'>PAGES</Link>
          </li>
          <li className="item-list">
            <Link to="/BLOG " className='item'> BLOG</Link>
          </li>
          <li className="item-list">
            <Link to="/CONTACT" className='item'> CONTACT</Link>
          </li>
        </ul>
        <ul className=' items-icons items'>
        <li className="item-list">
            <Link to="/search" className='item'><i className="fa-solid fa-magnifying-glass"></i></Link>
          </li>
          <li className="item-list">
            <Link to="/wishlist" className='item'><i className="fa-regular fa-heart"></i></Link>
            <span> (05)</span>
          </li>
          <li className="item-list">
            <Link to="/bag" className='item'><i className="fa-solid fa-bag-shopping"></i></Link>
            <span> (05)</span>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
