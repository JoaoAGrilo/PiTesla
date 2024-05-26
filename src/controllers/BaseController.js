export class BaseController {
  constructor() {
    this.baseURL = 'http://pitesla.juliomanoel.com/api'
  }

  async get(endpoint, params = {}) {
    try {
      const response = await axios.get(`${this.baseURL}/${endpoint}`, { params })
      return response.data
    } catch (error) {
      console.error('Erro ao realizar requisição GET:', error)
      throw error
    }
  }

  async post(endpoint, data = {}) {
    try {
      const response = await axios.post(`${this.baseURL}/${endpoint}`, data)
      return response.data
    } catch (error) {
      console.error('Erro ao realizar requisição POST:', error)
      throw error
    }
  }

  async put(endpoint, data = {}) {
    try {
      const response = await axios.put(`${this.baseURL}/${endpoint}`, data)
      return response.data
    } catch (error) {
      console.error('Erro ao realizar requisição PUT:', error)
      throw error
    }
  }

  async delete(endpoint) {
    try {
      const response = await axios.delete(`${this.baseURL}/${endpoint}`)
      return response.data
    } catch (error) {
      console.error('Erro ao realizar requisição DELETE:', error)
      throw error
    }
  }
}