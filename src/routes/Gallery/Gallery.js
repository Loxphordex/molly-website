import React from 'react'
import galleryImages from '../../images/gallery-images'
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react'
import './Gallery.css'

export default class Gallery extends React.Component {
  state = {
    index: 1,
    images: null,
    fullScreen: false,
    fullScreenImage: null,
    galleryDisabled: '',
    fadeOut: '',
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
        <div 
          className={`gallery-image ${image.name}`}
          key={image.name}>
          <div 
            className='gallery-image-wrapper'
            url={image.url}
            onClick={(event) => this.handleFullScreen(event.target.src)}>
            <Image publicId={image.url} type='fetch'>
              <Transformation quality="61" width="808" crop="scale" />
            </Image>
          </div>
        </div>
      )
    })
  }

  handleFullScreen = (url) => {
    console.log('URL: ', url)
    this.setState({ 
      fullScreen: true,
      fullScreenImage: url,
      galleryDisabled: 'gallery-disabled',
    })
  }

  handleDisableFullScreen = async() => {
    await this.setState({ 
      fadeOut: 'fadeOut',
      galleryDisabled: '',
    })

    setTimeout(() => {
      this.setState({
        fullScreen: false,
        fullScreenImage: null,
        galleryDisabled: '',
        fadeOut: '',
      })
    }, 450)
  }

  handleNext = async() => {
    const { index, images } = this.state
    if (!!images && images.length === 12) {
      await this.setState({ index: index+1 })
      this.setDisplayedImages()
    }
  }

  handlePrevious = async() => {
    const { index } = this.state
    if (index > 1) {
      await this.setState({ index: index-1 })
      this.setDisplayedImages()
    }
  }

  checkIfLastPage = () => {
    const { images } = this.state

    if (!images) return ''

    return (images.length === 12) ? '' : 'last-page'
  }

  checkIfFirstPage = () => {
    const { index } = this.state

    return (index <= 1) ? 'first-page' : ''
  }

  render() {
    const { images, fullScreen, fullScreenImage, galleryDisabled, fadeOut } = this.state
    const firstPage = this.checkIfFirstPage()
    const lastPage = this.checkIfLastPage()

    return(
      <section className='gallery-wrapper'>

        { !!fullScreen && 
        <div className={`fullscreen-background ${fadeOut}`} onClick={() => this.handleDisableFullScreen()}>
          <CloudinaryContext cloudName='dghqlm5xb'>
            <Image publicId={fullScreenImage} />
          </CloudinaryContext>
        </div> }

        <div className={`image-area ${galleryDisabled}`}>
          <CloudinaryContext cloudName='dghqlm5xb'>
            { !!images && this.createImageElements() }
          </CloudinaryContext>
        </div> 

        <div className={`prev-next-area ${galleryDisabled}`}>
          <button className={`gallery-prev ${firstPage}`} onClick={() => this.handlePrevious()}>{'<'}</button>
          <button className={`gallery-next ${lastPage}`} onClick={() => this.handleNext()}>{'>'}</button>
        </div> 
        
      </section>
    )
  }
}