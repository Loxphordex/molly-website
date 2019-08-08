import React from 'react'
import './AddImageForm.css'

export default class AddImageForm extends React.Component {
  render() {

    const {
      hideAddImageForm,
      handleAddImage
    } = this.props

    return(
      <div className='add-image-area'>
        <div 
          className='add-image-background'
          onClick={() => hideAddImageForm()}
        />
        <form className='add-image-form' onSubmit={(event) => handleAddImage(event)}>
          <h2>ADD NEW IMAGE</h2>
          <input
            id='addurl'
            name='addurl'
            placeholder='Image URL'
            required
          />
          <input
            id='addname'
            name='addname'
            placeholder='Name'
            required
          />
          <input
            id='addyear'
            name='addyear'
            placeholder='Year (Optional)'
          />
          <button type='submit' className='add-image-submit'>SUBMIT</button>
          <button className='add-image-cancel' onClick={() => hideAddImageForm()}>CANCEL</button>
        </form>
      </div>
    )
  }
}