import React from 'react'

export default class AdminLoginForm extends React.Component {
  render() {
    return(
      <form>
        <label htmlFor='admin-user'>Username</label>
        <input 
          type='text'
          id='admin-user'
          name='admin-user' />

        <label htmlFor='admin-password'>Password</label>
        <input 
          type='password'
          id='admin-password'
          name='admin-password' />

        <button type='submit'>Sign In</button>
      </form>
    )
  }
}