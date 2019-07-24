import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react'
import images from '../../images/category-images'
import './Categories.css'

export default class Categories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      names: null,
    }
  }

  // Pencil, Pen and Ink, Digital, Sculpture, Fashion, Alt. Mediums

  componentDidMount = () => {
    this.setState({
      names: images
    })
  }

  category(cat) {
    return(
      <div className={`category c-${cat.name}`} key={cat.name}>
        <Image publicId={cat.url} type='fetch' name={cat.name}>
          <Transformation quality='60' width='300' crop='scale' />
        </Image>
        <Link to={`/gallery/${cat.name}`}>{cat.name.toUpperCase()}</Link>
      </div>
    )
  }

  render() {
    const names = this.state.names
    return(
      <section className='categories-wrapper'>
        <div className='categories-area'>

          <CloudinaryContext cloudName='dghqlm5xb' className='categories-cloud-area'>
            {names && names.map(cat => {
              return this.category(cat)
            })}
            {/* <div className='category c-pencil'>
              <Image publicId={images.pencil} type='fetch' name='pencil'>
                <Transformation quality="60" width="300" crop="scale" />
              </Image>
              <Link to='/gallery/pencil'>PENCIL</Link>
            </div>


            <div className='category c-pendandink'>
              <Image publicId={images.penandink} type='fetch' name='penandink'>
                <Transformation quality="60" width="300" crop="scale" />
              </Image>
              <Link to='/gallery/penandink'>{'PEN & INK'}</Link>
            </div>


            <div className='category c-sculpture'>
              <Image publicId={images.sculpture} type='fetch' name='sculpture'>
                <Transformation quality="60" width="300" crop="scale" />
              </Image>
              <Link to='/gallery/sculpture'>SCULPTURE</Link>
            </div>


            <div className='category c-digital'>
              <Image publicId={images.digital} type='fetch' name='digital'>
                <Transformation quality="60" width="300" crop="scale" />
              </Image>
              <Link to='/gallery/digital'>DIGITAL</Link>
            </div>

            <div className='category c-fashion'>
              <Image publicId={images.fashion} type='fetch' name='fashion'>
                <Transformation quality="60" width="300" crop="scale" />
              </Image>
              <Link to='/gallery/fashion'>FASHION</Link>
            </div> */}
          </CloudinaryContext>

        </div>
      </section>
    )
  }
}