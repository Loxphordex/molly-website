import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.css'

export default class Categories extends React.Component {

  // Pencil, Pen and Ink, Digital, Sculpture, Collections
  render() {
    return(
      <section className='categories-wrapper'>
        <div className='categories-area'>
          <div className='category c-pencil'><Link to='/gallery/pencil'>Pencil</Link></div>
          <div className='category c-pendandink'><Link to='/gallery/penandink'>{'Pen & Ink'}</Link></div>
          <div className='category c-sculpture'><Link to='/gallery/sculpture'>Sculpture</Link></div>
          <div className='category c-digital'><Link to='/gallery/digital'>Digital</Link></div>

        </div>
      </section>
    )
  }
}