import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react'
import images from '../../images/category-images'
import './Categories.css'

// To add additional categories, add a new object to category-images.js
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

  // basic template for category element
  category(cat) {
    return(
      <div className={`category c-${cat.name}`} key={cat.name}>
        <Image publicId={cat.url} type='fetch' name={cat.name}>
          <Transformation quality='90' width='900' crop='scale' />
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
          </CloudinaryContext>

        </div>
      </section>
    )
  }
}