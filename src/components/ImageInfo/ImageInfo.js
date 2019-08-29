import React from 'react'
import './ImageInfo.css'

export default class ImageInfo extends React.Component {
  render() {
    const { image, handleDisableFullScreen, moreInfoFadeOut } = this.props
    return(
      <section className='image-info-wrapper' onClick={() => handleDisableFullScreen()}>
        <div className={`image-info-area ${moreInfoFadeOut}`}>
          <h2>{image.name}</h2>
          { !!image.year && <p>{image.year}</p>}
        </div>
      </section>
    )
  }
}