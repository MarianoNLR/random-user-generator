export class UserController {
  constructor ({ userModel }) {
    this.userModel = userModel
  }

  getRandomUser = async (req, res) => {
    const { quantity } = req.query
    const result = await this.userModel.getRandomUser({ quantity })
    res.json(result)
  }
}
