import { Dispatch, SetStateAction, useState } from "react";
import { ToDo } from "../Model/Todo";
import {v4 as uuidv4} from 'uuid';
import toast from "react-hot-toast";
// import { getList } from "../Composant/ListTodos";

type LocalStorageServiceProps = {
    todoList: ToDo[], setTodoList: React.Dispatch<React.SetStateAction<ToDo[]>>
}

export const LocalStorageService = () => {
}

export function  saveData(todoList: ToDo[]){
    if(todoList){
        console.log(JSON.stringify(todoList))
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
        // let key
        // let myTask: ToDo
        // if(localStorage.key(i) != null){
        //     key = (localStorage.key(i)!);
        //     myTask = JSON.parse(localStorage.getItem(key)!);
        //     myToDoList.push(myTask)
        // }
    }
    return myToDoList;
}

export function deleteLocalStorageData(todoRm: ToDo){
    for(let i=0; i<=localStorage.length;i++){
        if (localStorage.key(i)== "Ma Todo Liste"){
           
        }
        const key = localStorage.key(i);
        if (localStorage.getItem(key!) == JSON.stringify(todoRm) ){
            localStorage.removeItem(key!);
        }
    }
}