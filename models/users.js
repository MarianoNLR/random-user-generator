import { readJSON } from '../utils/utils.js'

const users = readJSON('../users.json')

export class UserModel {
  static async getRandomUser ({ quantity }) {
    let result = users

    if (!quantity) {
      result = users[Math.floor(Math.random() * users.length)]
      return result
    }

    if (quantity < 1 || quantity > 20) result = { error: 'Quantity must be number between 1 and 20' }
    else result = users.slice(0, quantity)

    return result
  }
}
