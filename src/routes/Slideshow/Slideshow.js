import React from 'react'
import images from '../../images/slideshow-images'
import { Image, CloudinaryContext } from 'cloudinary-react'
import './Slideshow.css'

export default class Slideshow extends React.Component {
  state = {
    index: 0,
    transitionStatus: '',
    currentImage: images[0]
  }

  componentDidMount() {
    this.cycleImages()
  }

  cycleImages = () => {
    setInterval(async() => {
      const { index } = this.state

      // First initiate the transition
      await this.setState({ transitionStatus: 'transitioning' })

      // Then set a timeout for when the transition stage is over,
      // then show the changed image
      await setTimeout(() => {

        if (index < images.length - 1) {
            this.setState({
            index: index + 1,
            currentImage: images[index + 1]
            })
        }

        // Reset the cycle
        else if (index === images.length - 1) {
            this.setState({
            index: 0,
            currentImage: images[0]
            })
        }

        setTimeout(() => {
          this.setState({ transitionStatus: '' })
        }, 1000);
      }, 100)

    }, 5000)
  }

  render() {

    const { transitionStatus, currentImage } = this.state
    return(
      <section className='slideshow-wrapper'>
        <div className={`slide-image-area ${transitionStatus}`}>
          <CloudinaryContext  cloudName='dghqlm5xb'>
            <Image publicId={currentImage.url} />
          </CloudinaryContext>
        </div>
      </section>
    )
  }
}