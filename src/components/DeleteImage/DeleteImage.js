import React from 'react'
import './DeleteImage.css'

export default class DeleteImage extends React.Component {
  render() {

    const {
      hideDeleteConfirmation,
      handleDeleteImage,
    } = this.props

    return(
      <div className='delete-area'>
        <div 
          className='delete-background'
          onClick={() => hideDeleteConfirmation()}
        />
        <p>For Real?</p>
        <button onClick={() => handleDeleteImage()}>DELETE</button>
        <button onClick={() => hideDeleteConfirmation()}>CANCEL</button>
      </div>
    )
  }
}