export class TodoListModel {
  items: Array<TodoListItemModel> = []

  load(): void {
    this.items.push(new TodoListItemModel(1, 'Lära mig programmera'))
    this.items.push(new TodoListItemModel(2, 'Kunna resa'))
    this.items.push(new TodoListItemModel(3, 'Äta god mat'))
  }
  remove(todo: TodoListItemModel): void {
    this.items = this.items.filter((current) => current.id != todo.id)
  }
  add(text: string): void {
    const newId = this.items.length === 0 ? 1 : Math.max(...this.items.map((todo) => todo.id)) + 1

    this.items.push(new TodoListItemModel(newId, text))
  }
}
export class TodoListItemModel {
  id: number
  text: string
  /**
   *
   */
  constructor(id: number, text: string) {
    this.id = id
    this.text = text
  }
}
