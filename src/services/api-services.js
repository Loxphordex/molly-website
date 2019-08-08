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
  },

  getImagesByCategory(category) {
    return fetch(`${config.API_ENDPOINT}/api/images?category=${category}`)
      .then(res => {
        return (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      })
  },

  addNewImage(newImage) {
    return fetch(`${config.API_ENDPOINT}/api/images`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${window.localStorage.getItem('mollylandToken')}`
      },
      body: JSON.stringify(newImage),
    })
    .then(res => {
      return (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    })
  },

  changeImageName(id, name) {
    return fetch(`${config.API_ENDPOINT}/api/images?id=${id}&name=${name}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${window.localStorage.getItem('mollylandToken')}`,
      },
    })
    .then(res => {
      return (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    })
  },

  deleteImage(id) {
    return fetch(`${config.API_ENDPOINT}/api/images?id=${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${window.localStorage.getItem('mollylandToken')}`,
      },
    })
    .then(res => {
      return (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    })
  }
}

export default ApiServices