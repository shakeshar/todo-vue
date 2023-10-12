export default class LoginCardModel {
  username: string = ''
  password: string = ''

  /**
   *
   */
  constructor(username: string, password: string) {
    this.username = username
    this.password = password
  }
}
