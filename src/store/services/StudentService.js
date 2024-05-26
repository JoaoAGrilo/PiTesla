import AuthController from "../../controllers/AuthController"

const authController = new AuthController()

export const StudentStore = {
  state: {
    currentUser: null
  },

  async login(payload) {
    this.state.currentUser = await authController.login(payload)
  },

  async logout() {
    this.state.currentUser = await authController.logout()
  }
}