import React from 'react'
import { Link } from 'react-router-dom'

export default class Categories extends React.Component {
  render() {
    return(
      <section className='categories-wrapper'>
        <div><Link to='/gallery/demo'>Demo</Link></div>
        <div><Link to='/gallery/graphite'>Graphite</Link></div>
      </section>
    )
  }
}