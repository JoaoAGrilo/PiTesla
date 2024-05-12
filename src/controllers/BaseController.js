import { BASE_URL } from 'react-native-dotenv'

export class BaseController {
  constructor() {
    this.baseURL = BASE_URL
  }

  async get() {
    console.log(this.baseURL)
  }
}