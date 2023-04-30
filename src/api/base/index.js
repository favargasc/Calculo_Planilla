import axios from 'axios'
import { Service } from 'axios-middleware'

// This is the middleware singleton for parsing data on response
class Register {
  constructor () {
    if (typeof Register.instance === 'object') return Register.instance
    Register.instance = this
  }

  onResponse (response) {
    return JSON.parse(response.data)
  }
}

class Request {
  constructor (
    url,
    baseURL = 'https://localhost:3000/',
    header = { 'Content-Type': 'application/json' }
  ) {
    this.url = url
    this.baseURL = baseURL
    this.header = header
    this.request = axios.create({ baseURL: this.baseURL, headers: this.header })
    const service = new Service(this.request)
    service.register(new Register())
  }

  async get (params = '') {
    return this.request({
      url: this.url + params,
      headers: this.header
    })
  }

  async post (value) {
    return this.request({
      url: this.url,
      data: value,
      method: 'post',
      headers: this.header
    })
  }
}

export default Request
