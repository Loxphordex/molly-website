import React from 'react'
import './AdminAddImage.css'

export default class AdminAddImage extends React.Component {
  render() {

    const { showAddImageForm } = this.props

    return(
      <button 
        onClick={() => showAddImageForm()}
        className='addimage-box'>ADD IMAGE
      </button>
    )
  }
}