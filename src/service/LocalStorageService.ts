import { TodoLine } from "../model/TodoLine";

export const LIST_KEY = "todoListKey";

export default class LocalStorageService {
  getData(): TodoLine[] {
    const list = localStorage.getItem(LIST_KEY);
    return list != null ? (JSON.parse(list) as TodoLine[]) : ([] as TodoLine[]);
  }

  addData(todo: TodoLine) {
    const list = this.getData();
    const currentIndex = list.findIndex((l) => l.id === todo.id);
    console.log(JSON.stringify(list));
    if (currentIndex >= 0) {
      list[currentIndex] = todo;
    } else {
      list.push(todo);
    }
    localStorage.setItem(LIST_KEY, JSON.stringify(list));
  }

  removeData(todoId: string) {
    const newList: TodoLine[] = [];
    const list: TodoLine[] = this.getData();
    list.forEach((todo) => {
      if (todo.id !== todoId) {
        newList.push(todo);
      }
    });
    localStorage.setItem(LIST_KEY, JSON.stringify(newList));
  }
}
