import { ToDo } from "../Model/Todo";

export const LocalStorageService = () => {
}

export function  saveData(todoList: ToDo[]){
    if(todoList){
        localStorage.setItem("Ma Todo Liste",JSON.stringify(todoList));
    }   
}

export function getData(){
     
    let i =0;
    let myToDoList = []
    for (i; i<=localStorage.length;i++){
        if (localStorage.key(i)== "Ma Todo Liste"){
            myToDoList = JSON.parse(localStorage.getItem(localStorage.key(i)!)!)
        }
    }
    return myToDoList;
}

export function deleteLocalStorageData(todoRm: ToDo){
    for(let i=0; i<=localStorage.length;i++){
        const key = localStorage.key(i);
        if (localStorage.getItem(key!) == JSON.stringify(todoRm) ){
            localStorage.removeItem(key!);
        }
    }
}