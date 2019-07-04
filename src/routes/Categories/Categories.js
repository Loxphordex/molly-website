import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.css'

export default class Categories extends React.Component {
  render() {
    return(
      <section className='categories-wrapper'>
        <div className='categories-area'>
          <div className='category c-demo'><Link to='/gallery/demo'>Demo</Link></div>
          <div className='category c-graphite'><Link to='/gallery/graphite'>Graphite</Link></div>
          <div className='category c-sculpture'><Link to='/gallery/sculpture'>Sculpture</Link></div>
          <div className='category c-pixel'><Link to='/gallery/pixel'>Pixel</Link></div>

        </div>
      </section>
    )
  }
}