import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react'
import images from '../../images/category-images'
import './Categories.css'

export default class Categories extends React.Component {

  // Pencil, Pen and Ink, Digital, Sculpture, Collections
  render() {
    return(
      <section className='categories-wrapper'>
        <div className='categories-area'>

          <CloudinaryContext cloudName='dghqlm5xb'>
            <div className='category c-pencil'>
              <Image publicId={images.pencil} type='fetch' name='pencil'>
                <Transformation quality="60" width="300" crop="scale" />
              </Image>
              <Link to='/gallery/pencil'>Pencil</Link>
            </div>


            <div className='category c-pendandink'>
              <Image publicId={images.penandink} type='fetch' name='penandink'>
                <Transformation quality="60" width="300" crop="scale" />
              </Image>
              <Link to='/gallery/penandink'>{'Pen & Ink'}</Link>
            </div>


            <div className='category c-sculpture'>
              <Image publicId={images.sculpture} type='fetch' name='sculpture'>
                <Transformation quality="60" width="300" crop="scale" />
              </Image>
              <Link to='/gallery/sculpture'>Sculpture</Link>
            </div>


            <div className='category c-digital'>
              <Image publicId={images.digital} type='fetch' name='digital'>
                <Transformation quality="60" width="300" crop="scale" />
              </Image>
              <Link to='/gallery/digital'>Digital</Link>
            </div>
          </CloudinaryContext>

        </div>
      </section>
    )
  }
}