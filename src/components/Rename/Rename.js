import React from 'react'
import './Rename.css'

export default class Rename extends React.Component {
  render() {
    
    const { 
      name,
      setNewName,
      hideRenameBox,
      handleSubmitRename,
    } = this.props

    return(
      <section className='rename-area'>
        <div className='rename-background'
          onClick={(event) => hideRenameBox(event)}
        />
        <form className='rename-form'
          onSubmit={(event) => handleSubmitRename(event)}>
          <label htmlFor='rename-input'>{`RENAME "${name}"`}</label>
          <input 
            id='rename-input'
            name='rename-input'
            placeholder='New Name'
            onChange={(event) => setNewName(event.target.value)}
          />
          <button type='submit' className='submit-rename'>SUBMIT</button>
          <button className='cancel-rename' 
            onClick={(event) => hideRenameBox(event)}>CANCEL</button>
        </form>
      </section>
    )
  }
}