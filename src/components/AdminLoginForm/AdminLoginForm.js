import React from 'react'

export default class AdminLoginForm extends React.Component {
  render() {

    const {
      error,
      updateUsername,
      updatePassword,
      handleSubmitLogin,
    } = this.props

    return(
      <form 
        className='admin-form' 
        autoComplete='off'
        onSubmit={(event) => handleSubmitLogin(event)}>


        <div className='login-error'>
          {error && error}
        </div>

        <input 
          type='text'
          id='admin-user'
          name='admin-user'
          placeholder='Username'
          autoComplete='off'
          onChange={(event) => updateUsername(event.target.value)} />

        <input 
          type='password'
          id='admin-password'
          name='admin-password'
          placeholder='Password'
          autoComplete='off'
          onChange={(event) => updatePassword(event.target.value)} />

        <button type='submit'>Sign In</button>
      </form>
    )
  }
}