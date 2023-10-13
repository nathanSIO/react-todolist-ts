import { useState } from "react";

export const ListToDos = () => {
}

export function getList(){
    
    
    // const [listTodos, setListTodos] = useState<ToDoLine[]>;

    let listToDo = [];
    console.log("je suis la apres le click" + localStorage.length);
    let k=1;
    let listSize = localStorage.length;
    for (k; k <= listSize; k=k+1){
        console .log("Mon object : " + localStorage.getItem(k.toString()) + " i : " + k);
        listToDo.push(
            
                <li>{localStorage.getItem(k.toString())}</li>
            
        )
    }
    return listToDo;

    
    
        
        // console.log(listTodo.)
    
    // return (<div> Liste Vide </div>)
}