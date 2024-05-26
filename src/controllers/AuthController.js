import { BaseController } from './BaseController'

export class AuthController extends BaseController {
  constructor() {
    super()
  }
  
  async login(payload) {
    super.post('login', payload)
  }
}