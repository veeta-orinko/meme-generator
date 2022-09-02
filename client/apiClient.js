import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

// *** EXAMPLE ***
export function getWelcome() {
  return request.get(`${serverURL}/welcome`).then((response) => response.body)
}

export function getSnack() {
  return request.get('/api/v1/snacks').then((response) => {
    //console.log('apiclient', response)
    return response.body
  })
}

export function getShiba() {
  return request.get('/api/v1/shibas').then((response) => {
    return response.body
  })
}

export function getDadJoke() {
  return request.get('/api/v1/dadjoke').then((response) => {
    return JSON.parse(response.body.text)
  })
}
