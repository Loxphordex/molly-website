import React from 'react'
import './LogoutFooter.css'

export default class LogoutFooter extends React.Component {

  handleLogout(event) {
    event.preventDefault()
    const { history } = this.props
    window.localStorage.removeItem('mollylandToken')
    history.push('/')
  }

  render() {
    return(
      <footer className='logout-footer' role='contentinfo'>
        {window.localStorage.getItem('mollylandToken') && 
          <button onClick={(event) => this.handleLogout(event)}>LOGOUT</button>
        }
      </footer>
    )
  }
}