export class BaseController {
  constructor() {
    this.baseURL = process.env.BASE_URL
  }

  async get() {
    console.log(this.baseURL)
  }
}