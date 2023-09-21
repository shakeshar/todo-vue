export class ProfileModel {
  items: Array<ProfileItemModel> = []

  load(): void {
  this.items.push(new ProfileItemModel(1, 'Lära mig programmera', "#ff0000"))
    this.items.push(new ProfileItemModel(2, 'Kunna resa', "#000099"))
    this.items.push(new ProfileItemModel(3, 'Äta god mat', "#009933"))
    
  }
  remove(todo: ProfileItemModel): void {
    this.items = this.items.filter((current) => current.id != todo.id)
  }
  add(text: string): void {
    const newId = this.items.length === 0 ? 1 : Math.max(...this.items.map((todo) => todo.id)) + 1

    this.items.push(new ProfileItemModel(newId, text, "#999966"))
  }
}
export class ProfileItemModel {
  id: number
  text: string
  color: string
  /**
   *
   */
  constructor(id: number, text: string, color: string) {
    this.id = id
    this.text = text
    this.color = color
  }
}
