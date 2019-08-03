import React from 'react'
import AdminLoginForm from '../../components/AdminLoginForm/AdminLoginForm'

export default class Admin extends React.Component {
  render() {
    return(
      <section className='admin-area'>
        <AdminLoginForm />
      </section>
    )
  }
}