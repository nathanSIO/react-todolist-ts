import { useState } from "react";
// import { getList } from "../Composant/ListTodos";

export const LocalStorageService = () => {
   
}
export function  saveData(key:string, value:string){
    // const [todoList, setTodoList]= useState<[]>([]);

    localStorage.setItem(key.toString(),value.toString());
    console.log("je suis la Ma valeur est : " + localStorage.getItem(key.toString()) + "/ Ma key est : " + key);
}