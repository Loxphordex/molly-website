import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends React.Component {
  render() {
    return (
      <nav role='navigation' className='main-nav'>
        <h1> <Link to='/'>Art by Molly Reusser</Link> </h1>
        <ul>
          <li>
            <a href='https://www.etsy.com/shop/GolgiGoods' 
            target='_blank' rel='noopener noreferrer'>SHOP</a>
          </li>
          <li><Link to='/categories'>GALLERY</Link></li>
          <li><Link to='/about'>ABOUT</Link></li>
          <li><Link to='/contact'>CONTACT</Link></li>
        </ul>
      </nav>
    )
  }
}