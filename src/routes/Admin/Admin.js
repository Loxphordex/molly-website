import React from 'react'
import AdminLoginForm from '../../components/AdminLoginForm/AdminLoginForm'
import ApiServices from '../../services/api-services'
import './Admin.css'

export default class Admin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      username: '',
      password: '',
    }
  }

  componentDidMount = () => {
    this.setState({
      error: null,
      username: '',
      password: '',
    })
  }

  handleError = (error) => {
    if (error.message) {
      this.setState({ error: error.message })
      return
    }

    if (error.error) {
      this.setState({ error: error.error })
      return
    }

    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  clearCreds = () => {
    this.setState({
      username: '',
      password: '',
    })
  }

  updateUsername = (username) => {
    this.setState({ username })
  }

  updatePassword = (password) => {
    this.setState({ password })
  }

  handleSubmitLogin = (event) => {
    event.preventDefault()

    const { username, password } = this.state
    const { history } = this.props

    if (!username) this.handleError('Username is required')
    if (!password) this.handleError('Password is required')

    ApiServices.userLogin(username, password)
      .then((res) => window.localStorage.setItem('mollylandToken', res.authToken))
      .then(() => this.clearCreds())
      .then(() => this.clearError())
      .then(() => history.push('/categories'))
      .catch(e => this.handleError(e))
  }

  render() {
    return(
      <section className='admin-area'>
        <h2>Login</h2>
        <AdminLoginForm
          error={this.state.error}
          updateUsername={this.updateUsername}
          updatePassword={this.updatePassword}
          handleSubmitLogin={this.handleSubmitLogin}
        />
      </section>
    )
  }
}