import React from 'react'
import images from '../../images/slideshow-images'
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react'
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
      setTimeout(() => {

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
      }, 500)

    }, 5000)
  }

  render() {

    const { transitionStatus, currentImage, index } = this.state
    return(
      <section className='slideshow-wrapper'>
        <div className={`slide-image-area ${transitionStatus}`}>
          <CloudinaryContext  cloudName='dghqlm5xb'>
            {images.map(image => {
                return(
                  <div className={`slide-image slide-image-${image.id}`}>
                    {index === image.id && <Image publicId={image.url} type='fetch'>
                      <Transformation quality='60' width='900' />
                    </Image>}
                  </div>
                )
              })
            }
          </CloudinaryContext>
        </div>
      </section>
    )
  }
}