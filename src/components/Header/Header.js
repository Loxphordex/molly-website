import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends React.Component {
  render() {
    return (
      <nav role='navigation' className='main-nav'>
        <h1> <Link to='/'>Art by Molly Reusser</Link> </h1>
        <ul>
          <li><a href='https://www.etsy.com/shop/GolgiGoods' 
            target='_blank' rel='noopener noreferrer'>Shop</a></li>
          <li><Link to='/gallery'>Gallery</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    )
  }
}