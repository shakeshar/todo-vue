export default class ProfileCardModel {
  imageUrl: string = ''
  firstname: string = ''
  lastname: string = ''

  count: number = 26
  following: number = 94
  followers: number = 139
  /**
   *
   */
  constructor(imageUrl: string, firstname: string, lastname: string) {
    this.imageUrl = imageUrl
    this.firstname = firstname
    this.lastname = lastname
  }
}
