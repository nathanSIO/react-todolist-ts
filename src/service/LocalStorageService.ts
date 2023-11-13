import TodoLine from "../model/TodoLine";

export const LIST_KEY = "todoListKey"

export default class LocalStorageService {

    getData(): TodoLine[] {
        const list = localStorage.getItem(LIST_KEY)
        return list != null ? JSON.parse(list) as TodoLine[] : [] as TodoLine[]
    }

    addData(todo: TodoLine) {
        const list = this.getData()
        console.log(JSON.stringify(list))
        list.push(todo)
        localStorage.setItem(LIST_KEY, JSON.stringify(list))
    }

    removeData(todoId: string) {
        const newList: TodoLine[] = []
        const list: TodoLine[] = this.getData()
        list.forEach(todo => {
            if (todo.id !== todoId) {
                newList.push(todo)
            }
        })
        localStorage.setItem(LIST_KEY, JSON.stringify(newList))
    }

}
