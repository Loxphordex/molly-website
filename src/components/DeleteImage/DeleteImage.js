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
        <div className='delete-message'>
          <p>For Real?</p>
          <button 
            className='delete-submit' 
            onClick={() => handleDeleteImage()}>DELETE</button>
          <button 
            className='delete-cancel' 
            onClick={() => hideDeleteConfirmation()}>CANCEL</button>
        </div>
      </div>
    )
  }
}