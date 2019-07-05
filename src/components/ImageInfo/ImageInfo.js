import React from 'react'
import './ImageInfo.css'

export default class ImageInfo extends React.Component {
  render() {
    const { image } = this.props
    return(
      <section className='image-info-wrapper'>
        <h2>{image.name}</h2>
      </section>
    )
  }
}