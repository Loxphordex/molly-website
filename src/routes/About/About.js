import React from 'react'
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react'

export default class About extends React.Component {
  render() {
    const portraitUrl = 'https://res.cloudinary.com/dghqlm5xb/image/upload/v1563916460/artiste_nef6r1.jpg'
    return(
      <section className='about-wrapper'>

        <div className='about-img-area'>
          <CloudinaryContext cloudName='dghqlm5xb'>
            <Image publicId={portraitUrl} type='fetch' name='portrait'>
              <Transformation quality="80" width="260" crop="scale" />
            </Image>
          </CloudinaryContext>
        </div>

      </section>
    )
  }
}