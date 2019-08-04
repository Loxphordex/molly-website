import config from '../config'

const ApiServices = {
  userLogin(username, password) {
    return fetch(`${config.API_ENDPOINT}/api/auth/login`,{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(res => {
      return (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    })
  }
}

export default ApiServices