import React from 'react'
import galleryImages from '../../images/gallery-images'
import { Image, CloudinaryContext } from 'cloudinary-react'
import './Gallery.css'

export default class Gallery extends React.Component {
  state = {
    index: 1,
    images: null,
  }

  componentDidMount() {
    this.setDisplayedImages()
  }

  setDisplayedImages = () => {
    // Each page diplays a maximium of 12 images
    // So we take the index and multiply it by 12 (1*12=12, 2*12=24, etc...)
    // We want the range of images to be between this new value (12)
    // and the new value minus 12, so we'll have a range of 1 to 12
    const { index } = this.state
    const imagesDisplayed = index * 12;
    const images = galleryImages.slice(imagesDisplayed - 12, imagesDisplayed)
    console.log('iMAGE LENGTH: ', images.length )
    
    this.setState({ images })
  }

  createImageElements = () => {
    const { images } = this.state

    return images.map(image => {
      return (
        <div className={`gallery-image ${image.name}`} key={image.name}>
          <Image publicId={image.url} />
          <h2>{image.name}</h2>
        </div>
      )
    })
  }

  render() {
    const { images } = this.state

    return(
      <section className='gallery-wrapper'>
        <div className='image-area'>
          <CloudinaryContext cloudName='dghqlm5xb'>
            { !!images && this.createImageElements() }
          </CloudinaryContext>
        </div>
      </section>
    )
  }
}